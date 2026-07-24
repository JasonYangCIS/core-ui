import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogCallout } from './BlogCallout.js'

export type BlogCalloutBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogCalloutConfig = freezeBuilderConfig({ component: BlogCallout, name: 'BlogCallout', inputs: [{ name: 'title', type: 'string' }, { name: 'body', type: 'longText' }, { name: 'variant', type: 'string', enum: ['note', 'tip', 'warning'], defaultValue: 'note' }] } satisfies RegisteredComponent)
export const blogCalloutBuilderConfig = blogCalloutConfig
export function createBlogCalloutBuilderConfig(options?: BlogCalloutBuilderConfigOptions) { return createBuilderConfig(blogCalloutConfig, options) }
