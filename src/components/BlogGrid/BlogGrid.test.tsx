import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogGrid } from './BlogGrid.js'

describe('BlogGrid', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogGrid, {}))).not.toThrow()
  })
})
