import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogAuthorBio } from './BlogAuthorBio.js'

describe('BlogAuthorBio', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogAuthorBio, {}))).not.toThrow()
  })
})
