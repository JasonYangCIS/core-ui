import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogReferences } from './BlogReferences.js'

describe('BlogReferences', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogReferences, {}))).not.toThrow()
  })
})
