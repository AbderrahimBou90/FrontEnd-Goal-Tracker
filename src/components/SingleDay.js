import React,{useState} from 'react'
import {TiDelete} from 'react-icons/ti'
import { useGlobalContext } from '../context/appContext'

const SingleDay = ({ id, data }) => {
  const { removeSingleDay, toggleCreateGoalModal, goals } = useGlobalContext();
  const [isHovering ,setIsHovering] = useState(false)

  const newArr = goals.filter((item)=>{
    return item.caseNumber === id;
  })

  
  return (
    <article className="mb-8 bg-tahiti h-[245px] border rounded-xl p-4 shadow-3xl" onMouseEnter={()=>setIsHovering(true)}
    onMouseLeave={()=>setIsHovering(false)}>
          <div className='flex justify-end items-end'><button className='h-8' onClick={()=>removeSingleDay(id)}
           ><TiDelete className={`text-3xl text-green ${isHovering ? 'visible': 'hidden'}`} /></button></div>
          <h1 className='text-center block  mb-5 text-2xl  text-black capitalize font-semibold'>day {id} </h1>

            <p className='py-2 font-mono font-bold'><span className='text-green'>{newArr.length}
              </span> Goals</p>
            <button type="button" className='border-none p-2 my-1 w-full text-center rounded-lg text-black capitalize font-mono bg-btn cursor-pointer' onClick={()=>toggleCreateGoalModal('open',id)}>Create Goal</button>
            <button type="button" className='border-none p-2 my-1 w-full text-center rounded-lg text-black capitalize font-mono cursor-pointer bg-hand'>Show All Goals</button>
        </article>
  )
}

export default SingleDay