import React from 'react'
import DummyFun from './Lists';
import Form from './Form';
const Combine = () => {
  return (
    <div className='flex md:flex-row  flex-col w-[23rem] md:w-full mb-28'>
    <DummyFun/>
   <Form />
    </div>
  )
}

export default Combine