import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogCallout } from './BlogCallout.js'

describe('BlogCallout', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogCallout, {}))).not.toThrow()
  })
})
