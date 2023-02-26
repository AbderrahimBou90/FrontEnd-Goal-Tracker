import React,{useState} from 'react'
import logo from '../assets/GreenGoalTracker.png'
import {FaUserCircle, FaCaretDown} from 'react-icons/fa'
import { useGlobalContext } from '../context/appContext'

const Navbar = () => {
 const [visible,setVisible] = useState(false)
 const {user,logOut} = useGlobalContext()

 
  return (
    <nav className="w-11/12 max-w-[1120px] mt-2   my-0 mx-auto	h-24 flex items-center bg-hand ">
      <img src={logo} alt="goal tracker" className="h-14 " />
      {user && <div className="bg-bubble-gum flex justify-between items-center w-full px-4">
        <form >
          <input type="text" placeholder='Search...' className='w-full border bg-mainBg rounded-lg p-2 text-[1.2rem]' />
        </form>
        <div className="bg-metal relative rounded">
          <button className= 'flex items-center justify-center gap-x-2 gap-y-0 border-transparent capitalize py-[0.375rem] px-3 text-mainBg tracking-[1px]' onClick={()=>setVisible(!visible)}>
            <FaUserCircle /> {user} <FaCaretDown />
          </button>
          <div className={` ${visible ? '[visibility:visible]' : '' } bg-green absolute top-10 left-0 w-full text-center p-2 rounded invisible`}>
            <button className='bg-transparent border-transparent capitalize cursor-pointer tracking-[1px]' onClick={()=>logOut()}>logout</button>
          </div>
        </div>
      </div>}
    </nav>
  );
}

export default Navbar