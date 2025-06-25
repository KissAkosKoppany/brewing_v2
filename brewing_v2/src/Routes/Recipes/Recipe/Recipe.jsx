import React from "react"

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">
        {recipe.name}
      </h1>
      <div className="recipe-info-container">
        <h2>Hozzávalók:</h2>
        <h3>Maláta:</h3>
        <ul>
          {recipe.ingredients.malts.map(malt => <li key={malt}>{malt}</li>)}
        </ul>
        <h3>Komló:</h3>
        <ul>
          {recipe.ingredients.hops.map(hop => <li key={hop}>{hop}</li>)}
        </ul>
        <h3>Ízesítők:</h3>
        <ul>
          {recipe.ingredients.spieces.map(spiece => <li key={spiece}>{spiece}</li>)}
        </ul>
        <h3>Élesztő:</h3>
        <ul>
          <li>{recipe.ingredients.yeast}</li>
        </ul>
      </div>
      <div className="recipe-info-container">
        <h2>Hőlépcsők:</h2>
        <ul>
          {recipe.thermal_steps.map(thermal_step => <li key={thermal_step}>{thermal_step}</li>)}
        </ul>
      </div>
      <div className="recipe-info-container">
        <h2>Komlóforralás:</h2>
        <ul>
          {recipe.boiling.map(hop => <li key={hop}>{hop}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Recipe