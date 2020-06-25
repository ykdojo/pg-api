import { Tables } from '../lib/interfaces'

export const coalesceRowsToArray = (source: string, joinQuery: string) => {
  return `
COALESCE(
  (
    SELECT
      array_to_json(array_agg(row_to_json(${source})))
    FROM
      ( ${joinQuery} ) ${source}
  ),
  '[]'
) AS ${source}`
}

export const formatColumns = ({
  columns,
  primary_keys,
}: {
  columns: Tables.Column[]
  primary_keys: Tables.PrimaryKey[]
}) => {
  const pkey_columns = primary_keys.map((primary_key) => primary_key.name)
  return columns
    .map((column) => {
      const {
        name,
        default_value,
        is_identity = false,
        is_nullable = true,
        data_type,
      } = column as {
        name: string
        default_value?: string
        is_identity?: boolean
        is_nullable?: boolean
        data_type: string
      }
      return `
${name} ${data_type}
${default_value === undefined ? '' : `DEFAULT ${default_value}`}
${is_identity ? 'GENERATED BY DEFAULT AS IDENTITY' : ''}
${is_nullable ? '' : 'NOT NULL'}
${pkey_columns.includes(name) ? 'PRIMARY KEY' : ''}`
    })
    .join(',')
}