import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogCta } from './BlogCta.js'

export type BlogCtaBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogCtaConfig = freezeBuilderConfig({ component: BlogCta, name: 'BlogCta', inputs: [{ name: 'heading', type: 'string' }, { name: 'body', type: 'longText' }, { name: 'actionLabel', type: 'string' }, { name: 'actionHref', type: 'url' }, { name: 'secondaryLabel', type: 'string' }, { name: 'secondaryHref', type: 'url' }, { name: 'variant', type: 'string', enum: ['default', 'emphasis'], defaultValue: 'default' }] } satisfies RegisteredComponent)
export const blogCtaBuilderConfig = blogCtaConfig
export function createBlogCtaBuilderConfig(options?: BlogCtaBuilderConfigOptions) { return createBuilderConfig(blogCtaConfig, options) }
