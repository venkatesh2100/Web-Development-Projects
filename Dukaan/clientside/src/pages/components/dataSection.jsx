import React from 'react'
import { Table } from './Table'
import { InputBox } from './inputBox'


export const DataSection = () => {


  return (
    <>
      {/* This is for inputbox and  Table*/}
      <div className="bg-white p-4 rounded">
        <div className='flex justify-between items-center gap-3 mb-4'>
          <div>
          <InputBox placeHolder={"Order ID or transactions ID"} />
          </div>
          <div className='flex items-center gap-3'>
            <div className='flex p-3 gap-2 border border-gray-300 rounded-md'><button>Sort</button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </div>
        </div>
        <div>
        <Table />
        </div>
      </div>
      </>
  )
}