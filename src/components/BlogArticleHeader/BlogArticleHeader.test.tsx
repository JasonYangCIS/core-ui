import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogArticleHeader } from './BlogArticleHeader.js'

describe('BlogArticleHeader', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogArticleHeader, {}))).not.toThrow()
  })
})
