import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import './MainCategory.scss'

const MainCategory = ({categories}) => {
   console.log(categories)

    return (
      <div className="categories-container">
        {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    );
}

export default MainCategory;