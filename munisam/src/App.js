import React from 'react'
import MainCategory from './components/MainCategory/MainCategory'
import { categories } from './Data/categories'

 const App = () => {
  console.log(categories)
  return (
      <MainCategory categories = {categories} />
    )
}

export default App;

