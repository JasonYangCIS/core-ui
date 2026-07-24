import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogDivider } from './BlogDivider.js'

export type BlogDividerBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogDividerConfig = freezeBuilderConfig({ component: BlogDivider, name: 'BlogDivider', inputs: [{ name: 'variant', type: 'string', enum: ['solid', 'dashed', 'ornamental'], defaultValue: 'solid' }] } satisfies RegisteredComponent)
export const blogDividerBuilderConfig = blogDividerConfig
export function createBlogDividerBuilderConfig(options?: BlogDividerBuilderConfigOptions) { return createBuilderConfig(blogDividerConfig, options) }
