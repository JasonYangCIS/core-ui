import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogPullQuote } from './BlogPullQuote.js'

describe('BlogPullQuote', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogPullQuote, {}))).not.toThrow()
  })
})
