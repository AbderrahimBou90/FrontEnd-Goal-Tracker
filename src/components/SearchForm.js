import React,{useState,useEffect} from 'react'
import paginate from './utils'
import { useGlobalContext } from '../context/appContext'

const SearchForm = () => {
  const {  setData, setCall,setPage, oldDays,getTotalOfDays} = useGlobalContext();
  const [numInput, setNumInput] = useState("");

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    let number = parseInt(numInput)
    setPage(0)
    if(!number){
      console.log('display alert')
    } else if (number){
      getTotalOfDays(number)
      setCall(number)
      setData(paginate(number))
      setNumInput('')
    } 
  }

  // useEffect(()=>{
  //   getTotalOfDays(oldDays);
  //   setCall(oldDays);
  //   setData(paginate(oldDays));
  //   setNumInput("");
  // },[oldDays])
  

  return (
    <section className=' bg-primary flex py-20 px-0 items-center justify-center pb-0'>
     <form onSubmit={handleSubmit} className='rounded-lg border w-[85vw] flex items-end bg-forth justify-center my-0 mx-auto max-w-[40rem] py-8 px-10 capitalize'>
      <div className=' w-9/12 p-1'>
      <h2 className='block mb-5 font-bold tracking-[0.2rem] text-black'><label htmlFor="goal">Choose Number of days </label></h2>
      <input value={numInput} onChange={(e)=>setNumInput(e.target.value)} type='text' id='goal' className='w-full border bg-mainBg rounded p-2 text-[1.2rem]'/>
      </div>
      <button type='submit' className='border-none p-2 text-[1.2rem] my-1 mx-2 text-center rounded-lg text-black capitalize font-mono bg-btn cursor-pointer'>Submit</button>
     </form>
    </section>
  )
}

export default SearchForm