import React from 'react'
import { BlueRevenueCard } from './bluerevenueCard'
import { RevenueCard } from './revenueCard'




export default function () {
  return (
    <main className="lg:flex gap-4">
      <div className="md:flex lg:w-2/3 gap-4" >
      <div className="md:w-1/2 mb-3">
        <BlueRevenueCard
          title={"Next Payout"}
          amount={"2,303.20"}
          orderCount={23}
          Day={"Today"}
          Time={"4:00pm"}
        /></div>

      <div className='md:w-1/2 mb-3'>
        <RevenueCard
          title={"Amount pending"}
          amount={"82,374.20"}
          orderCount={13}
        /></div> 
      </div>
<div className="lg:w-1/3">
        <RevenueCard
          title={"Amount Processed"}
          amount={"23,374,929.20"}
          orderCount={13}
        />
     </div>
    </main>
  )
}