import React,{useState,useEffect} from 'react'
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context/appContext';
import Loading from '../components/Loading'


const CreateGoalModal = () => {
  const { isModalOpen, toggleCreateGoalModal, setID, createGoal, isLoading,fetchGoals } = useGlobalContext();
  const [values, setValues] = useState({goal:'',description:'',timeFrom:'',timeTo:''})
  const [addID, setAddID] = useState(0);



  const handleChange = (e) =>{
    setValues({...values,[e.target.name]:e.target.value})
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    const {goal,description,timeFrom,timeTo} = values
    if(goal && description && addID && timeFrom && timeTo ){
      // gother addID, goal, description in one object newObj
      const newObj = {
        goal,
        description,
        timeFrom,
        timeTo,
        caseNumber:addID
      }
      console.log(newObj)
      createGoal(newObj)
      setValues({ goal: "", description: "",timeFrom:"",timeTo:""});
      fetchGoals()
    }

  }

  useEffect(()=>{
    setAddID(setID)
  },[setID])


  return (
    <div className={` ${isModalOpen ? '[visibility:visible]':''} bg-black/50 fixed grid top-0 left-0 w-full h-full  place-items-center invisible `}>
      <div className="bg-white rounded w-[60vw] h-[60h] max-w-[1170px] relative flex flex-col justify-center content-center items-center">
        <button className="absolute top-4 right-4 text-[2rem] text-bubble-gum" onClick={()=>toggleCreateGoalModal('close')} >
         <FaTimes/>
        </button>
        {/* form */}
        <article className=" flex flex-col items-center justify-center content-center w-full h-full  rounded-xl p-12"  >

         <h1 className='text-center block  mb-12 text-2xl  text-black capitalize font-semibold'>day {setID} </h1> 
                
           <form className="p-2 w-[40vw]" onSubmit={handleSubmit}>
            {/* goal */}
            <h2 className='mb-1'><label htmlFor="goal-name">Goal Name</label></h2>
            <input type="text" name='goal' id="goal-name"
            value={values.goal}
            onChange={handleChange}
             className='w-full p-2 rounded-lg font-normal border border-green-400 mb-1'/>
            {/* description */}
            <h2 className='mb-1'><label htmlFor="description">Goal description</label></h2>
            <textarea type='text' rows={3} name='description'
            value={values.description}
            onChange={handleChange} 
            id='description'   className='w-full p-2 rounded-lg font-normal border	border-green-400 mb-1' />
              <h2 className='mb-1'> Duration</h2>
              {/* time */}
             <div className='flex'>
              <h2 className='capitalize mb-1 bg-white font-normal p-2 border border-r-0 rounded-l-lg'>From</h2>
              <input type="time" name='timeFrom' className='p-2 border-l-0 border-r-0 font-normal border outline-none border-green-400 mb-1'
              value={values.timeFrom} onChange={handleChange} /> 
              <h2 className='capitalize mb-1 bg-white font-normal p-2 border border-x-0'>To</h2>
              <input type="time" name='timeTo' className='p-2 border-l-0 rounded-r-lg font-normal border outline-none border-green-400 mb-1 ' 
              value={values.timeTo} onChange={handleChange}/>
             </div>
            {/* btn */}
            <button type='submit' className='mt-5 w-[13rem] text-xl bg-btn p-2 rounded-lg capitalize	border cursor-pointer text-white border-black' >
              {isLoading ? 'Adding New Goal':'Add Goal'}
              </button> 
          </form>
        </article>
        {/* end form */}
      </div>
    </div>
  );
}

export default CreateGoalModal