import React,{useState,useEffect} from 'react' 
import { useGlobalContext } from '../context/appContext'

const Buttons = () => {
  const { page, setPage, data, totalDays, minus} =
  useGlobalContext();
  const [isFalse,setIsFalse] = useState(false)


  const prevPage = () =>{
   setPage((page)=>{
    let prevPage = page -1
    if(prevPage < 0){
     prevPage = data.length -1
    }
    return prevPage
   })
  }

  const nextPage = () =>{
   setPage((page)=>{
    let nextPage = page +1
    if (nextPage > data.length -1){
     nextPage = 0
    }
    return nextPage
   })
  }

 
  // this useEffect run every time days.length === 1 for disable buttons 
  // useEffect(()=>{
  //   setIsFalse(true)
  // },[days.length === 1])



  return (
    <div className='w-[90vw] max-w-[1120] mx-auto my-1 flex justify-center items-center bg-bermuda p-8 '>
    <button type='button' className={ `${isFalse === true ? 'cursor-not-allowed': ''	}   m-4 py-1 px-2 bg-bubble-gum capitalize font-semibold border-transparent rounded tracking-[0.1rem]
    cursor-pointer`}  onClick={prevPage}>prev</button>
    <p className='mb-0 font-semibold text-[1.2rem]'>{page +1} of {totalDays - minus}</p>
    <button type='button' className={`${isFalse === true ? 'cursor-not-allowed': ''	} m-4 py-1 px-2 bg-bubble-gum capitalize font-semibold border-transparent rounded tracking-[0.1rem]
    cursor-pointer`}  onClick={nextPage}>next</button>
    </div>
  )
}

export default Buttons