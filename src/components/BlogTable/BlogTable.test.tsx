import { render } from '@testing-library/react'

import { createElement } from 'react'
import { describe, expect, it } from 'vitest'
import { BlogTable } from './BlogTable.js'

describe('BlogTable', () => {
  it('accepts null-safe Builder props without throwing', () => {
    expect(() => render(createElement(BlogTable, {}))).not.toThrow()
  })
})
