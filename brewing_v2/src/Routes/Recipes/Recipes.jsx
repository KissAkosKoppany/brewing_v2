import React from 'react'
import { Routes, Route } from 'react-router'
import './Recipes.style.css'
import RecipeList from './Recipe/RecipeList'
import Recipe from './Recipe/Recipe'

const Recipes = () => {

  return (
    <div className='recipes-container'>
      <Routes>
        <Route index element={<RecipeList />} />
        {/* {
          recipes.map(recipe => {
            return(
              <Route path={recipe.link} element={<Recipe recipe={recipe} />} />
            )
          })
        } */}
        hello
      </Routes>
    </div>
  )
}

export default Recipes