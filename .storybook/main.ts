import { fileURLToPath, URL } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url))

const config: StorybookConfig = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  async viteFinal(viteConfig) {
    const { mergeConfig } = await import('vite')
    // Stories import the library by its public name; resolve that to source so
    // edits under src/ hot-reload, and dedupe React so the Radix-backed
    // components share one React instance with Storybook itself.
    return mergeConfig(viteConfig, {
      resolve: {
        alias: { '@jasonyangcis/core-ui': r('../src/index.ts') },
        dedupe: ['react', 'react-dom'],
      },
    })
  },
}

export default config
