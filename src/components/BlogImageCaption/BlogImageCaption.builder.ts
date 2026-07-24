import type { RegisteredComponent } from '@builder.io/sdk-react'
import { createBuilderConfig, freezeBuilderConfig } from '../../builder-config.js'
import type { BuilderConfigFactoryOptions } from '../../builder-config.js'
import { BlogImageCaption } from './BlogImageCaption.js'

export type BlogImageCaptionBuilderConfigOptions = BuilderConfigFactoryOptions
export const blogImageCaptionConfig = freezeBuilderConfig({ component: BlogImageCaption, name: 'BlogImageCaption', inputs: [{ name: 'src', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp', 'avif'] }, { name: 'alt', type: 'string' }, { name: 'caption', type: 'longText' }, { name: 'credit', type: 'string' }, { name: 'align', type: 'string', enum: ['start', 'center', 'end'], defaultValue: 'center' }, { name: 'width', type: 'number' }, { name: 'height', type: 'number' }] } satisfies RegisteredComponent)
export const blogImageCaptionBuilderConfig = blogImageCaptionConfig
export function createBlogImageCaptionBuilderConfig(options?: BlogImageCaptionBuilderConfigOptions) { return createBuilderConfig(blogImageCaptionConfig, options) }
