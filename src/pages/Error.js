import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/not-found.svg'

const Error = () => {
  return (
    <main className='min-h-screen w-[90vh] max-w-[1120px] my-0 mx-auto items-center justify-items-center '>
    <div className='flex m-auto min-h-screen text-center  flex-col justify-center items-center'>
      <img src={img} alt="not found"  className='max-w-[600px] block mb-8'/>
      <p className='text-4xl mb-2'> page not found</p>
      <p className='mt-0 mb-2 text-xl'>The page that looking for is not found</p>
      <Link to="/login" className='underline text-btn text-xl'>Back to home</Link>
    </div>
    </main>
  );
}

export default Error