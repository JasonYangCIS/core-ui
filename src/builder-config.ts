import type { RegisteredComponent } from '@builder.io/sdk-react'

type BuilderInput = NonNullable<RegisteredComponent['inputs']>[number]
export type BuilderInputOverride = Partial<Omit<BuilderInput, 'name'>> & Pick<BuilderInput, 'name'>
export type BuilderInputOverrides = Readonly<Record<string, Partial<Omit<BuilderInput, 'name'>>>> | readonly BuilderInputOverride[]
type BuilderMetadata = Pick<
  RegisteredComponent,
  'description' | 'docsLink' | 'friendlyName' | 'image' | 'canHaveChildren' | 'noWrap'
>

export interface BuilderConfigFactoryOptions {
  name?: string
  component?: RegisteredComponent['component']
  models?: readonly string[]
  metadata?: Partial<BuilderMetadata>
  meta?: Readonly<Record<string, unknown>>
  additionalInputs?: readonly BuilderInput[]
  inputOverrides?: BuilderInputOverrides
}

function cloneInput(input: BuilderInput): BuilderInput {
  return {
    ...input,
    enum: input.enum
      ? input.enum.map(option => typeof option === 'string' ? option : { ...option }) as BuilderInput['enum']
      : undefined,
    subFields: input.subFields?.map(cloneInput),
    meta: input.meta ? { ...input.meta } : input.meta,
  }
}

export function freezeBuilderConfig(config: RegisteredComponent): Readonly<RegisteredComponent> {
  config.inputs?.forEach(input => {
    input.subFields?.forEach(Object.freeze)
    if (input.subFields) Object.freeze(input.subFields)
    Object.freeze(input)
  })
  if (config.inputs) Object.freeze(config.inputs)
  if (config.models) Object.freeze(config.models)
  if (config.meta) Object.freeze(config.meta)
  return Object.freeze(config)
}

export function createBuilderConfig(
  base: Readonly<RegisteredComponent>,
  options: BuilderConfigFactoryOptions = {},
): RegisteredComponent {
  const baseInputs = base.inputs?.map(cloneInput) ?? []
  const knownNames = new Set(baseInputs.map(input => input.name))
  const overrides = Array.isArray(options.inputOverrides)
    ? Object.fromEntries(options.inputOverrides.map(({ name, ...override }) => [name, override]))
    : options.inputOverrides ?? {}
  for (const name of Object.keys(overrides)) {
    if (!knownNames.has(name)) throw new Error(`Unknown Builder input override: ${name}`)
  }
  const additions = options.additionalInputs?.map(cloneInput) ?? []
  for (const input of additions) {
    if (knownNames.has(input.name)) throw new Error(`Duplicate Builder input: ${input.name}`)
    knownNames.add(input.name)
  }
  const inputs = baseInputs.map(input => ({
    ...input,
    ...overrides[input.name],
    name: input.name,
  }))
  inputs.push(...additions)
  return {
    ...base,
    ...options.metadata,
    name: options.name ?? base.name,
    component: options.component ?? base.component,
    models: options.models ? [...options.models] : base.models ? [...base.models] : undefined,
    meta: options.meta ? { ...(base.meta ?? {}), ...options.meta } : base.meta ? { ...base.meta } : undefined,
    inputs,
  }
}
