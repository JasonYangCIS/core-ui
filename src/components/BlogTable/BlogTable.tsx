import type { BlogTableProps } from './BlogTable.types.js'

export function BlogTable({ caption, columns, rows, className, ref, ...rest }: BlogTableProps) {
  const valid = columns?.filter(column => column.key && column.header) ?? []
  if (!valid.length || !rows?.length) return null
  return <div ref={ref} className={className} data-slot="blog-table-wrapper" tabIndex={0} {...rest}><table data-slot="blog-table">{caption && <caption data-slot="blog-table-caption">{caption}</caption>}<thead><tr>{valid.map(column => <th data-slot="blog-table-header" scope="col" key={column.key!}>{column.header}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr data-slot="blog-table-row" key={index}>{valid.map(column => <td data-slot="blog-table-cell" key={column.key!}>{row[column.key!] ?? ''}</td>)}</tr>)}</tbody></table></div>
}
export type { BlogTableColumn, BlogTableProps, BlogTableRow } from './BlogTable.types.js'
