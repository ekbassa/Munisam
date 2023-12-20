import React from 'react'
import { Outlet } from 'react-router-dom'
import MainCategory from '../../components/MainCategory/MainCategory'



 const Home = () => {
  return (
   <>
   <MainCategory />
   <Outlet/>
   </>
  )
}

export default Home;