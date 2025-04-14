import React from "react"
import { Link } from "react-router"

const RecipeList = ({ recipes }) => {
  return (
    <div className='items-container'>
          <div className='recipe'>
            <div className='flex'>
              <p>Nr.</p>
              <p>Recipe name</p>
            </div>
            <p>Brewed</p>
          </div>
          {
            recipes.map((recipe, i) => {
              return(
                <div key={i} className='recipe'>
                  <div className='flex'>
                    <p>{i+1}.</p>
                    <p>
                        <Link className="link" to={recipe.link}>{recipe.name}</Link>
                    </p>
                  </div>
                  <p>{recipe.brewed} {recipe.brewed == 1 ? "time" : "times"}</p>
                </div>
              )
            } )
          }
        </div>
  )
}

export default RecipeList