import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogCodeBlock } from './BlogCodeBlock.js'

export type BlogCodeBlockBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogCodeBlockConfig = freezeBuilderConfig({ component: BlogCodeBlock, name: 'BlogCodeBlock', inputs: [{ name: 'code', type: 'longText', required: true }, { name: 'language', type: 'string' }, { name: 'label', type: 'string' }] } satisfies RegisteredComponent)
export const blogCodeBlockBuilderConfig = blogCodeBlockConfig
export function createBlogCodeBlockBuilderConfig(options?: BlogCodeBlockBuilderConfigOptions) { return createBuilderConfig(blogCodeBlockConfig, options) }
