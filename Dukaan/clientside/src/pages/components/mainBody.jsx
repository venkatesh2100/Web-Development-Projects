import React from 'react'
import Cardsection from './cardsection'
import { DataSection } from './dataSection'

export default function MainComponent() {

  return (
    <main>
      {/* Four Divisions which includes the Overview card, payout data */}
      <div className='flex justify-between items-center p-3 ml-4'>
        <div className='text-xl font-medium'>Overview</div>
        <div className='border border-gray-300 rounded-md px-3 py-2 flex mt-3 text-gray-600 gap-2 mr-4'>
          <button>This Month</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <Cardsection />
      <div className='p-4'>
        <div className='font-medium text-xl'>Transactions | This Month</div>
        <div className='flex mt-6 gap-4'>
          <div className='border bg-gray-300 text-md rounded-full px-4 py-2'>
            <ButtonWithCount name="Payouts" count="(32)" />
          </div>
          <div className='bg-blue-600 mr-4 text-md rounded-full border text-white px-4 py-2'>
            <ButtonWithCount name="Refunds" count="(6)" />
          </div>
        </div>
      </div>
      <DataSection />
      <Signature />
    </main>
  )
}

function ButtonWithCount({ name, count }) {
  return (
    count ? (
      <button>{name} {count}</button>
    ) : null
  )
}

function Signature() {
  return (
    <div className='text-gray-500 flex justify-center items-center content-center mt-1'>
      <p>{"Code with 👨‍💻💕 by"}<a href='https://x.com/venky_officials' target='_blank' className='text-sky-600 font-bold mx-2 underline text-lg'>{"𝓿𝓮𝓷𝓴𝔂"}</a></p>
    </div>
  )
}
