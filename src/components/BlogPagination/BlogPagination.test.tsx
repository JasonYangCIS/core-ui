import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogPagination } from './BlogPagination.js'

describe('BlogPagination', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogPagination, {}))).not.toThrow()
  })
})
