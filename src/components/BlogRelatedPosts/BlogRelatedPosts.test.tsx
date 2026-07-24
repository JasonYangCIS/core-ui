import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogRelatedPosts } from './BlogRelatedPosts.js'

describe('BlogRelatedPosts', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogRelatedPosts, {}))).not.toThrow()
  })
})
