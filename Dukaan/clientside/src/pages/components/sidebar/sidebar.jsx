import React from 'react'
import { BarSection } from './barSection'
import { DATA } from './data'
import { BottomSection } from './bottomSection'
export default function SideBar() {


    return (
        <main className='bg-blue-800 max-w-52 fixed text-white top-0 bottom-0  hidden md:block '>
            <topbar className='flex flex-col justify-between h-full'>
                <div className=''>
                <icon className="flex justify-between p-3 items-center " >
                    <div className='flex m-2'>
                        <img src="/phoneWall.png " className='rounded-xl w-10 h-15 bg-gray-300' a />
                        <div className='ml-3 h-9 '>
                            <p className='text-white text-xl font-medium'>𝓿𝓮𝓷𝓴𝔂</p>
                            <p className='underline text-gray-400 text-szzm'>Vist store</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </icon>
                <div>
                    {DATA.map((b, i) => <>
                        <BarSection key={i} title={b.title} svg={b.svg} />
                    </>)}
                </div>
                </div>
                <BottomSection />
            </topbar>

        </main>
    )
}