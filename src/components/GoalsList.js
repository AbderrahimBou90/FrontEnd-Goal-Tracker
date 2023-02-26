import React, { useState, useEffect } from "react";
import SingleDay from "./SingleDay";
import { useGlobalContext } from "../context/appContext";
import Buttons from "./Buttons";
import Loading from "./Loading";

const GoalsList = () => {
  const { isLoading, page, days,fetchGoals } = useGlobalContext();

  
  useEffect(()=>{
    fetchGoals()
  },[])
  

  // function for check if the array of arrays are empty 
  const arrayOfArraysIsEmpty = days.every((subArr) => subArr.length === 0);

  if (arrayOfArraysIsEmpty) {
    return (
      <section className="bg-purple py-20 px-0">
        <div className="w-[85vw] h-[588px] my-0  mx-auto bg-metal max-w-[1170px] flex justify-center items-center text-center">
          <h1 className="text-center text-3xl"> There is no days to display</h1>
        </div>
      </section>
    );
  }

  if (days[page].length === 0) {
    return (
      <section className="bg-purple py-20 px-0">
        <div className="w-[85vw] h-[588px] my-0 mx-auto bg-metal max-w-[1170px] flex justify-center items-center text-center">
          <h1 className="text-center  text-3xl"> There is no days in this page </h1>
        </div>
        {arrayOfArraysIsEmpty === false &&  <Buttons /> }
      </section>
    );
  }
  
  if(isLoading){
    return (<section className="bg-purple py-20 px-0">
      {/* {console.log(days)} */}
      <div className="w-[85vw] h-[588px]  my-0 mx-auto bg-metal max-w-[1170px] flex justify-center items-center content-center">
        <Loading/>
      </div>
      {arrayOfArraysIsEmpty === false && <Buttons />}
    </section>)
  }
  

  return (
      <section className="bg-purple py-20 px-0">
      {/* {console.log(days)} */}
      <div className="w-[85vw] h-[588px]  my-0 mx-auto bg-metal max-w-[1170px] grid gap-4 grid-cols-4">
        {days[page].map((item) => {
          return <SingleDay key={item.id} {...item} />;
        })}
      </div>
      {arrayOfArraysIsEmpty === false && <Buttons />}
    </section>
  );
};

export default GoalsList;
