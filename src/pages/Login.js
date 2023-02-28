import React,{useState} from 'react'
import { MdWavingHand } from "react-icons/md";
import logo from "../assets/GreenGoalTracker.png";
import hero from "../assets/HeroLogin.svg";
import { Link, Navigate} from 'react-router-dom';
import { useGlobalContext } from '../context/appContext';

const Login = () => {
  const [values,setValues]= useState({email:'',password:''})
  const {login,user, isLoading} = useGlobalContext()

  const handleChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  
  const handleSubmit = (e)=>{
  e.preventDefault()
  const {email,password} = values
  console.log(email,password)
  login({email,password})
  }

  return (
    <>
      {user && <Navigate to='/dashboard'/>}
    <nav className="w-11/12 max-w-[1120px] mt-2 pr-12  my-0 mx-auto	h-24 flex items-center ">
        <img src={logo} alt="goal logo" className='h-14 ' />
      </nav>

      <main className="flex justify-between items-center mt-16 text-slate-700	 my-0 mx-auto w-11/12">
        <img src={hero} alt="goal hero" className="w-2/5 block object-cover ml-32	" />
        <div className=" font-sans font-light mr-12">
          <form className="p-2" onSubmit={handleSubmit}>
            <h1 className="text-4xl">Welcome To Goal Tracker! <MdWavingHand className='inline text-btn'/> </h1>
            <h2 className='my-3 '>Please sign-in to your account and start tracking <br></br> your goals</h2>
            {/* email */}
            <h2 className='mb-1'><label htmlFor="email">Email</label></h2>
            <input type="text" name='email' id='email' placeholder='Email'
             value={values.email} onChange={handleChange} className='w-full p-2 rounded-lg font-normal border border-green-400 mb-1'/>
            {/* password */}
            <h2 className='mb-1'><label htmlFor="password">Password</label></h2>
            <input type="password" name='password' id='password' placeholder='•••••' value={values.password} onChange={handleChange} className='w-full p-2 rounded-lg font-normal border	border-green-400 mb-1 '/>
            {/* btn */}
            <button type='submit' className='mt-5 text-center w-full bg-btn p-2 rounded-lg 	border cursor-pointer text-black border-black capitalize' >
              {isLoading ? 'Fetching User...' : 'Sign In'}</button> 
            <p className="text-center mt-2">Don't have an account? <Link to="/register"> <span className="text-primary">Register</span></Link></p>
          </form>
        </div>
      </main>
    </>
  )
}

export default Login