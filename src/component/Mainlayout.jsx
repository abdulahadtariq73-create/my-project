import React from 'react'
import Navbar from '../component/Navbar'

const mainlayout = ({children , cart}) => {
  return (
  <div className='bg-gray-200'>
   <Navbar cart={cart}/>
   {children}
   </div>
  )
}

export default mainlayout
