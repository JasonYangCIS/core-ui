import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogAuthorBio } from './BlogAuthorBio.js'

export type BlogAuthorBioBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogAuthorBioConfig = freezeBuilderConfig({ component: BlogAuthorBio, name: 'BlogAuthorBio', inputs: [{ name: 'name', type: 'string', required: true }, { name: 'bio', type: 'longText' }, { name: 'avatarSrc', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] }, { name: 'avatarAlt', type: 'string' }, { name: 'profileHref', type: 'url' }, { name: 'profileLabel', type: 'string' }] } satisfies RegisteredComponent)
export const blogAuthorBioBuilderConfig = blogAuthorBioConfig
export function createBlogAuthorBioBuilderConfig(options?: BlogAuthorBioBuilderConfigOptions) { return createBuilderConfig(blogAuthorBioConfig, options) }
