import type { Preview } from '@storybook/react-vite'
import './preview.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    // The library ships zero CSS, so a11y is the meaningful signal here.
    a11y: { test: 'error' },
  },
}

export default preview
