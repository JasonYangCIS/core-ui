import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogRichText } from './BlogRichText.js'

describe('BlogRichText', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogRichText, {}))).not.toThrow()
  })
})
