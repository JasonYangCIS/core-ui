import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogCodeBlock } from './BlogCodeBlock.js'

describe('BlogCodeBlock', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogCodeBlock, {}))).not.toThrow()
  })
})
