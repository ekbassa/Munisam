import React from 'react'
import { Outlet } from 'react-router-dom'
import MainCategory from '../../components/MainCategory/MainCategory'
import { categories } from '../../Data/categories'



 const Home = () => {
  return (
   <>
   <MainCategory categories = {categories} />
   <Outlet/>
   </>
  )
}

export default Home;