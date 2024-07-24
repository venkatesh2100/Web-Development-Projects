import React from 'react'
import { BarSection } from './barSection'
import { DATA } from './data'
import { BottomSection } from './bottomSection'
export default function SideBar() {


    return (
        <main className='bg-blue-900 max-w-52 text-white top-0 bottom-0 hidden md:block h-full   absolute'>
            <div className="flex flex-col justify-between h-full" >
                <topbar className='flex justify-between p-3'>
                    <icon className="flex h-14 w-15 " >
                        <img src="/phoneWall.png " className='rounded-2xl' a />
                        <div className='ml-3 '>
                            <p className='text-white font-semibold'>Nishyan</p>
                            <p className='underline text-gray-400 text-sm'>Vist store</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </icon>
                    <div >
                        
                    </div>
                </topbar>
                <bottom className="row-span-5">
                    <BottomSection />
                </bottom>




            </div >

        </main>
    )
}