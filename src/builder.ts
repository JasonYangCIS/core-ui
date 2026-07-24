import type { RegisteredComponent } from '@builder.io/sdk-react'
import type { BuilderConfigFactoryOptions, BuilderInputOverrides } from './builder-config.js'
import { createBlogAuthorBioBuilderConfig } from './components/BlogAuthorBio/BlogAuthorBio.builder.js'
import { createBlogCalloutBuilderConfig } from './components/BlogCallout/BlogCallout.builder.js'
import { createBlogCodeBlockBuilderConfig } from './components/BlogCodeBlock/BlogCodeBlock.builder.js'
import { createBlogCtaBuilderConfig } from './components/BlogCta/BlogCta.builder.js'
import { createBlogDividerBuilderConfig } from './components/BlogDivider/BlogDivider.builder.js'
import { createBlogImageCaptionBuilderConfig } from './components/BlogImageCaption/BlogImageCaption.builder.js'
import { createBlogPullQuoteBuilderConfig } from './components/BlogPullQuote/BlogPullQuote.builder.js'
import { createBlogReferencesBuilderConfig } from './components/BlogReferences/BlogReferences.builder.js'
import { createBlogRelatedPostsBuilderConfig } from './components/BlogRelatedPosts/BlogRelatedPosts.builder.js'
import { createBlogRichTextBuilderConfig } from './components/BlogRichText/BlogRichText.builder.js'
import { createBlogTableBuilderConfig } from './components/BlogTable/BlogTable.builder.js'

export { createBlogAuthorBioBuilderConfig, createBlogCalloutBuilderConfig, createBlogCodeBlockBuilderConfig, createBlogCtaBuilderConfig, createBlogDividerBuilderConfig, createBlogImageCaptionBuilderConfig, createBlogPullQuoteBuilderConfig, createBlogReferencesBuilderConfig, createBlogRelatedPostsBuilderConfig, createBlogRichTextBuilderConfig, createBlogTableBuilderConfig }
export type { BuilderConfigFactoryOptions, BuilderInputOverride, BuilderInputOverrides } from './builder-config.js'
export type { BlogAuthorBioBuilderConfigOptions } from './components/BlogAuthorBio/BlogAuthorBio.builder.js'
export type { BlogCalloutBuilderConfigOptions } from './components/BlogCallout/BlogCallout.builder.js'
export type { BlogCodeBlockBuilderConfigOptions } from './components/BlogCodeBlock/BlogCodeBlock.builder.js'
export type { BlogCtaBuilderConfigOptions } from './components/BlogCta/BlogCta.builder.js'
export type { BlogDividerBuilderConfigOptions } from './components/BlogDivider/BlogDivider.builder.js'
export type { BlogImageCaptionBuilderConfigOptions } from './components/BlogImageCaption/BlogImageCaption.builder.js'
export type { BlogPullQuoteBuilderConfigOptions } from './components/BlogPullQuote/BlogPullQuote.builder.js'
export type { BlogReferencesBuilderConfigOptions } from './components/BlogReferences/BlogReferences.builder.js'
export type { BlogRelatedPostsBuilderConfigOptions } from './components/BlogRelatedPosts/BlogRelatedPosts.builder.js'
export type { BlogRichTextBuilderConfigOptions } from './components/BlogRichText/BlogRichText.builder.js'
export type { BlogTableBuilderConfigOptions } from './components/BlogTable/BlogTable.builder.js'

export interface BlogEditorialBuilderConfigsOptions {
  all?: BuilderConfigFactoryOptions
  blogRichText?: BuilderConfigFactoryOptions
  blogImageCaption?: BuilderConfigFactoryOptions
  blogPullQuote?: BuilderConfigFactoryOptions
  blogCallout?: BuilderConfigFactoryOptions
  blogCodeBlock?: BuilderConfigFactoryOptions
  blogTable?: BuilderConfigFactoryOptions
  blogDivider?: BuilderConfigFactoryOptions
  blogAuthorBio?: BuilderConfigFactoryOptions
  blogReferences?: BuilderConfigFactoryOptions
  blogRelatedPosts?: BuilderConfigFactoryOptions
  blogCta?: BuilderConfigFactoryOptions
}

function normalizeOverrides(overrides: BuilderInputOverrides | undefined) {
  return Array.isArray(overrides)
    ? Object.fromEntries(overrides.map(({ name, ...override }) => [name, override]))
    : overrides ?? {}
}

function mergeOptions(all: BuilderConfigFactoryOptions | undefined, own: BuilderConfigFactoryOptions | undefined): BuilderConfigFactoryOptions {
  return {
    ...all,
    ...own,
    metadata: { ...all?.metadata, ...own?.metadata },
    meta: { ...all?.meta, ...own?.meta },
    inputOverrides: { ...normalizeOverrides(all?.inputOverrides), ...normalizeOverrides(own?.inputOverrides) },
    additionalInputs: [...(all?.additionalInputs ?? []), ...(own?.additionalInputs ?? [])],
  }
}

export function createBlogEditorialBuilderConfigs(options: BlogEditorialBuilderConfigsOptions = {}): RegisteredComponent[] {
  const { all } = options
  return [
    createBlogRichTextBuilderConfig(mergeOptions(all, options.blogRichText)),
    createBlogImageCaptionBuilderConfig(mergeOptions(all, options.blogImageCaption)),
    createBlogPullQuoteBuilderConfig(mergeOptions(all, options.blogPullQuote)),
    createBlogCalloutBuilderConfig(mergeOptions(all, options.blogCallout)),
    createBlogCodeBlockBuilderConfig(mergeOptions(all, options.blogCodeBlock)),
    createBlogTableBuilderConfig(mergeOptions(all, options.blogTable)),
    createBlogDividerBuilderConfig(mergeOptions(all, options.blogDivider)),
    createBlogAuthorBioBuilderConfig(mergeOptions(all, options.blogAuthorBio)),
    createBlogReferencesBuilderConfig(mergeOptions(all, options.blogReferences)),
    createBlogRelatedPostsBuilderConfig(mergeOptions(all, options.blogRelatedPosts)),
    createBlogCtaBuilderConfig(mergeOptions(all, options.blogCta)),
  ]
}
