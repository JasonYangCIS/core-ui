/**
 * Asserts the consumer bundle includes what was imported and excludes
 * what was not. Add a sentinel string to each new component and list it
 * in EXPECTED_ABSENT so this fixture catches treeshaking regressions.
 */
import { readdir, readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const ASSETS_DIR = join(here, '..', 'dist', 'assets')

// Strings that MUST appear in the bundle (proves the import worked).
const EXPECTED_PRESENT = ['data-variant']

// Strings that MUST NOT appear in the bundle (proves treeshaking dropped them).
// As you add components that the fixture does NOT import, add a sentinel
// string from each one here.
const EXPECTED_ABSENT = []

const files = await readdir(ASSETS_DIR)
const jsFiles = files.filter((f) => f.endsWith('.js'))
if (jsFiles.length === 0) {
  console.error(`No JS files found in ${ASSETS_DIR}`)
  process.exit(1)
}

let bundle = ''
for (const f of jsFiles) {
  bundle += await readFile(join(ASSETS_DIR, f), 'utf8')
}

const failures = []
for (const needle of EXPECTED_PRESENT) {
  if (!bundle.includes(needle)) {
    failures.push(`expected "${needle}" in bundle but it was missing`)
  }
}
for (const needle of EXPECTED_ABSENT) {
  if (bundle.includes(needle)) {
    failures.push(`"${needle}" should have been treeshaken but was found in bundle`)
  }
}

if (failures.length > 0) {
  console.error('Treeshake check FAILED:')
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}

console.log(
  `Treeshake check passed. Scanned ${jsFiles.length} file(s), ${bundle.length} bytes.`,
)
