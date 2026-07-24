import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogReferences } from './BlogReferences.js'

export type BlogReferencesBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogReferencesConfig = freezeBuilderConfig({ component: BlogReferences, name: 'BlogReferences', inputs: [{ name: 'heading', type: 'string', defaultValue: 'References' }, { name: 'items', type: 'list', subFields: [{ name: 'title', type: 'string', required: true }, { name: 'href', type: 'url' }, { name: 'description', type: 'longText' }] }] } satisfies RegisteredComponent)
export const blogReferencesBuilderConfig = blogReferencesConfig
export function createBlogReferencesBuilderConfig(options?: BlogReferencesBuilderConfigOptions) { return createBuilderConfig(blogReferencesConfig, options) }
