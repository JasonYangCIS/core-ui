import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogRichText } from './BlogRichText.js'

export type BlogRichTextBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogRichTextConfig = freezeBuilderConfig({ component: BlogRichText, name: 'BlogRichText', inputs: [{ name: 'html', type: 'richText' }] } satisfies RegisteredComponent)
export const blogRichTextBuilderConfig = blogRichTextConfig
export function createBlogRichTextBuilderConfig(options?: BlogRichTextBuilderConfigOptions) { return createBuilderConfig(blogRichTextConfig, options) }
