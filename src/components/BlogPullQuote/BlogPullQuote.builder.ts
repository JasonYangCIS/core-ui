import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogPullQuote } from './BlogPullQuote.js'

export type BlogPullQuoteBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogPullQuoteConfig = freezeBuilderConfig({ component: BlogPullQuote, name: 'BlogPullQuote', inputs: [{ name: 'quote', type: 'longText', required: true }, { name: 'attribution', type: 'string' }, { name: 'cite', type: 'url' }] } satisfies RegisteredComponent)
export const blogPullQuoteBuilderConfig = blogPullQuoteConfig
export function createBlogPullQuoteBuilderConfig(options?: BlogPullQuoteBuilderConfigOptions) { return createBuilderConfig(blogPullQuoteConfig, options) }
