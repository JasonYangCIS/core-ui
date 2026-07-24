import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogRelatedPosts } from './BlogRelatedPosts.js'

export type BlogRelatedPostsBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogRelatedPostsConfig = freezeBuilderConfig({ component: BlogRelatedPosts, name: 'BlogRelatedPosts', inputs: [{ name: 'heading', type: 'string', defaultValue: 'Related posts' }, { name: 'posts', type: 'list', subFields: [{ name: 'title', type: 'string', required: true }, { name: 'href', type: 'url', required: true }, { name: 'excerpt', type: 'longText' }, { name: 'imageSrc', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] }, { name: 'imageAlt', type: 'string' }] }] } satisfies RegisteredComponent)
export const blogRelatedPostsBuilderConfig = blogRelatedPostsConfig
export function createBlogRelatedPostsBuilderConfig(options?: BlogRelatedPostsBuilderConfigOptions) { return createBuilderConfig(blogRelatedPostsConfig, options) }
