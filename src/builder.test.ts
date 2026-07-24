import { describe, expect, it } from 'vitest'
import {
  createBlogEditorialBuilderConfigs,
  createBlogRichTextBuilderConfig,
} from './builder.js'

describe('editorial Builder config factories', () => {
  it('returns fresh configs without mutating immutable bases', () => {
    const first = createBlogRichTextBuilderConfig({
      models: ['article'],
      inputOverrides: { html: { helperText: 'Body copy' } },
      additionalInputs: [{ name: 'anchor', type: 'string' }],
    })
    const second = createBlogRichTextBuilderConfig()
    expect(first).not.toBe(second)
    expect(first.inputs?.map(input => input.name)).toEqual(['html', 'anchor'])
    expect(second.inputs?.map(input => input.name)).toEqual(['html'])
  })

  it('rejects unknown overrides and duplicate additions', () => {
    expect(() => createBlogRichTextBuilderConfig({ inputOverrides: { missing: {} } })).toThrow('Unknown Builder input override')
    expect(() => createBlogRichTextBuilderConfig({ additionalInputs: [{ name: 'html', type: 'string' }] })).toThrow('Duplicate Builder input')
  })

  it('applies shared and per-component aggregate overrides', () => {
    const configs = createBlogEditorialBuilderConfigs({
      all: { models: ['article'], meta: { group: 'Editorial' } },
      blogRichText: { name: 'ArticleRichText' },
    })
    expect(configs).toHaveLength(11)
    expect(configs[0]).toMatchObject({ name: 'ArticleRichText', models: ['article'], meta: { group: 'Editorial' } })
    expect(configs[1]).toMatchObject({ models: ['article'], meta: { group: 'Editorial' } })
  })
})
