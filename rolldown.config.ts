import { globSync } from 'node:fs'
import { defineConfig } from 'rolldown'

const builderEntries = globSync('src/components/*/*.builder.ts')

export default defineConfig({
  input: ['src/index.ts', ...builderEntries],
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
    entryFileNames: '[name].js',
  },
  external: [
    /^react($|\/)/,
    /^react-dom($|\/)/,
    /^@builder\.io\//,
    /^@radix-ui\//,
  ],
  jsx: 'react',
  platform: 'neutral',
})
