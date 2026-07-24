import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogImageCaption } from './BlogImageCaption.js'

describe('BlogImageCaption', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogImageCaption, {}))).not.toThrow()
  })
})
