import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogCard } from './BlogCard.js'

describe('BlogCard', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogCard, {}))).not.toThrow()
  })
})
