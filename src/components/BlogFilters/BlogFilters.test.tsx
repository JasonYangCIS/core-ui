import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogFilters } from './BlogFilters.js'

describe('BlogFilters', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogFilters, {}))).not.toThrow()
  })
})
