import type { HTMLAttributes, Ref } from 'react'

export interface BlogTableColumn { key: string | null; header: string | null }
export interface BlogTableRow { [key: string]: string | number | null | undefined }
export interface BlogTableProps extends HTMLAttributes<HTMLDivElement> {
  caption?: string | null
  columns?: BlogTableColumn[] | null
  rows?: BlogTableRow[] | null
  ref?: Ref<HTMLDivElement>
}
