import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogTable } from './BlogTable.js'

export type BlogTableBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogTableConfig = freezeBuilderConfig({ component: BlogTable, name: 'BlogTable', inputs: [{ name: 'caption', type: 'string' }, { name: 'columns', type: 'list', subFields: [{ name: 'key', type: 'string', required: true }, { name: 'header', type: 'string', required: true }] }, { name: 'rows', type: 'list', subFields: [{ name: 'values', type: 'object' }] }] } satisfies RegisteredComponent)
export const blogTableBuilderConfig = blogTableConfig
export function createBlogTableBuilderConfig(options?: BlogTableBuilderConfigOptions) { return createBuilderConfig(blogTableConfig, options) }
