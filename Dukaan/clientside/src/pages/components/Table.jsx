import React from 'react'
import { TableElements } from './tableElements'
import { VALUES } from './element'


export const Table = () => {

  const elements = VALUES;
  return (
    <main className="rounded  overflow-x-auto">
      <table className="text-md w-full text-left rtl:text-right text-gray-600">
        <thead className="bg-gray-200">
          <tr >
            <th className="pl-3 py-3" scope='col'>
              Order ID
            </th>
            <th className="pl-3 py-3" scope='col'>
              Status
            </th>
            <th className="pl-3 py-3" scope='col'>
              Transaction ID
            </th>
            <th className="pl-3 py-3" scope='col'>
              Refund</th>

            <th className="pr-3  py-3 " scope='col'>
              Order Amount
            </th>
          </tr>
        </thead>
        <tbody className='whitespace-nowrap'>

          {elements.map((t, i) => <TableElements {...t} key={i} />)}

        </tbody>
      </table>
    </main>
  )
}