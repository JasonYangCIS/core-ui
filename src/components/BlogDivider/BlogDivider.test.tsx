import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogDivider } from './BlogDivider.js'

describe('BlogDivider', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogDivider, {}))).not.toThrow()
  })
})
