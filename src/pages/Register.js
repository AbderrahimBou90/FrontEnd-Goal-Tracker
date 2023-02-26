import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/GreenGoalTracker.png";
import hero from "../assets/HeroRegister.svg";
import { Link, useNavigate,Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { register, user, isLoading, showAlert } = useGlobalContext();
  console.log(user);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    register({ name, email, password });
    
  };

  return (
    <>
      {user && <Navigate to='/dashboard'/>}
      <nav className="w-11/12 max-w-[1120px] mt-2 pr-12  my-0 mx-auto	h-24 flex items-center ">
        <img src={logo} alt="goal logo" className="h-14 " />
      </nav>

      <main className="flex justify-between items-center mt-16 text-slate-700	 my-0 mx-auto w-11/12">
        <img
          src={hero}
          alt="goal hero"y
          className="w-1/2 block object-cover ml-32	"
        />
        <div className=" font-sans font-light mr-12">
          <form className="p-2" onSubmit={handleSubmit}>
            <h1 className="text-4xl">
              Start Tracking Your Goals <FaSearch className="inline text-btn" />
            </h1>
            <h2 className="my-3 ">
              Make your goals easy to track with goal tracker
            </h2>
            {/* name */}
            <h2 className="mb-1">
              <label htmlFor="name">Name</label>
            </h2>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 rounded-lg font-normal border border-green-400 mb-1"
            />
            {/* email */}
            <h2 className="mb-1">
              <label htmlFor="email">Email</label>
            </h2>
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 rounded-lg font-normal border border-green-400 mb-1"
            />
            {/* password */}
            <h2 className="mb-1">
              <label htmlFor="password">Password</label>
            </h2>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              placeholder="•••••"
              className="w-full p-2 rounded-lg font-normal border	border-green-400 mb-1 "
            />
            {/* btn */}
            <button
              type="submit"
              className="mt-5 text-center w-full bg-btn p-2 rounded-lg 	border cursor-pointer text-white border-black"
              disabled={isLoading}
            >
              <span className={`w-[150px] inline-block capitalize ${showAlert? 'animate-slide text-red': ''}`}>
                {isLoading ? 'Please wait...': 'register'}
              </span>
            </button>
            <p className="text-center mt-2">
              Already have an account?
              <Link to="/">
                <span className="text-primary"> Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
