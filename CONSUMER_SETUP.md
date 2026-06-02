# Installing `@jasonyangcis/core-ui`

This package is published to GitHub Packages from a private repo. There is no public mirror — installing it always requires a GitHub credential.

## TL;DR

```bash
# 1. Create a PAT with `repo` + `read:packages` scopes at
#    https://github.com/settings/tokens/new (Classic).
# 2. Export it in your shell:
export GITHUB_TOKEN=ghp_yourToken
# 3. In the consumer repo, copy .npmrc.example to .npmrc, then:
npm install @jasonyangcis/core-ui
```

## 1. Get a token

The credential needs **two scopes**:

- `read:packages` — to download from `npm.pkg.github.com`.
- `repo` — required *additionally* because the package inherits access from a private repo. Without `repo`, GitHub returns 403 even when `read:packages` is set.

**Option A — Classic PAT (simplest).** Go to https://github.com/settings/tokens/new, check `repo` and `read:packages`, set an expiration, copy the `ghp_…` value. You can't see it again after the first view.

**Option B — Fine-grained PAT (better security).** Go to https://github.com/settings/personal-access-tokens/new. Resource owner: `JasonYangCIS`. Repository access: select `JasonYangCIS/core-ui`. Permissions: **Contents: Read** + **Packages: Read**.

Each developer should create their own PAT. Sharing one across humans makes revocation painful when someone leaves.

## 2. Configure npm

Copy `.npmrc.example` from this repo to `.npmrc` at the root of the consumer repo:

```
@jasonyangcis:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Commit it. The token isn't in the file — `${GITHUB_TOKEN}` is resolved from the environment at install time.

The scope line is mandatory. Without `@jasonyangcis:registry=…`, npm falls through to `registry.npmjs.org`, gets a 404, and the error message won't tell you why.

## 3. Provide the token in each environment

### Local dev

Export in your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
export GITHUB_TOKEN=ghp_yourPAT
```

### GitHub Actions in another repo

Store the PAT as a repo secret (Settings → Secrets and variables → Actions → New repository secret). Then:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '24'
    registry-url: 'https://npm.pkg.github.com'
    scope: '@jasonyangcis'

- run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{ secrets.CORE_UI_READ_TOKEN }}
```

The built-in `secrets.GITHUB_TOKEN` is scoped to its own workflow's repo. Reading packages from a different repo usually fails with 403 unless you've gone to the package settings page and granted the consumer repo explicit access. A PAT skips that step.

### Vercel / Netlify / Render / CircleCI

Add `GITHUB_TOKEN` as a build-time environment variable in the host's dashboard. Same PAT works — the host injects it before `npm install` runs.

### Docker

Mount the credential as a build secret so it doesn't bake into a layer:

```dockerfile
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci
```

```bash
docker build --secret id=npmrc,src=$HOME/.npmrc .
```

For this to work, `~/.npmrc` (on the build host) must contain both the registry config and the literal token — not `${GITHUB_TOKEN}` — since the secret mount is read directly.

## Verifying

A fresh probe to confirm a token works:

```bash
mkdir /tmp/probe && cd /tmp/probe && npm init -y
cp /path/to/.npmrc.example .npmrc
export GITHUB_TOKEN=ghp_yourPAT
npm install @jasonyangcis/core-ui
```

If `node_modules/@jasonyangcis/core-ui/dist/index.js` exists, the wiring is correct.

## Troubleshooting

| Symptom | Cause |
|---|---|
| `404 Not Found` on install | `.npmrc` missing the scope line — npm hit npmjs.org |
| `401 Unauthorized` | Token expired, missing, or lacks `read:packages` |
| `403 Forbidden` despite a valid token | Token has `read:packages` but not `repo` (required for private-repo packages) |
| Works locally, fails in CI | The env var name in CI doesn't match `${...}` in `.npmrc` |
| Works for you, fails for teammates | Each person needs their own PAT — yours isn't transitively shared |
