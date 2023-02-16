import { Table } from '../../atoms'

export type TDataRow = {
  [key: number]: string | number
  [key: string]: string | number
}

export interface IDataTable {
  data: Array<TDataRow>
}

const DataTable = ({ data }: IDataTable) => {
  return (
    <Table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((cell: keyof TDataRow, idx: number) => (
            <th key={`${cell}-${idx}`}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={`${row}-${index}`}>
            {Object.values(row).map((cell: string | number, idx: number) => (
              <td key={`${cell}-${idx}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export { DataTable }
