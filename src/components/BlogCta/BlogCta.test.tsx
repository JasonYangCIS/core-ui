import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogCta } from './BlogCta.js'

describe('BlogCta', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogCta, {}))).not.toThrow()
  })
})
