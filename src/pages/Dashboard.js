import React from 'react'
import SearchForm from '../components/SearchForm'
import GoalsList from '../components/GoalsList'
import Navbar from '../components/Navbar'
import Buttons from '../components/Buttons'
import CreateGoalModal from './CreateGoalModal'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <SearchForm/>
    <GoalsList/>
    {/* <Buttons/> */}
    <CreateGoalModal/>
    </>
  )
}

export default Dashboard