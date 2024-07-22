import React from 'react'

export const TableElements = (props) => {


  return (
      <tr className='bg-white 1 border-b hover:bg-gray-50' >
        <td scope='row' className='pl-3 py-3 text-sky-600'>
          {props.orderId}
        </td>
    
        <td className='flex items-center pl-3 py-3'>
          {props.status==="Successful"?<GreenDot/>:<GrayDot/>}
          {props.status}
        </td>



        <td className=' pl-3 py-3'>
          {props.transactionId}
        </td>


        <td className='pl-3 py-3'>
          {props.refundDate}
        </td>


        <td className='pl-3 py-3 '>
          {props.orderAmount}
        </td>
      </tr>
  )
}


const GreenDot = () => {
  return <span className='bg-green-600  rounded w-3 h-3 mr-1'></span>
}


const GrayDot = () => {
  return <span  className='bg-gray-600  rounded w-3 h-3 mr-1'></span>
}