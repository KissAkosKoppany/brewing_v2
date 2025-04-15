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
          {recipe.hozzavalok.malata.map(malata => <li key={malata}>{malata}</li>)}
        </ul>
        <h3>Komló:</h3>
        <ul>
          {recipe.hozzavalok.komlo.map(komlo => <li key={komlo}>{komlo}</li>)}
        </ul>
        <h3>Ízesítők:</h3>
        <ul>
          {recipe.hozzavalok.izesitok.map(izesitok => <li key={izesitok}>{izesitok}</li>)}
        </ul>
        <h3>Élesztő:</h3>
        <ul>
          <li>{recipe.hozzavalok.eleszto}</li>
        </ul>
      </div>
      <div className="recipe-info-container">
        <h2>Hőlépcsők:</h2>
        <ul>
          {recipe.holepcsok.map(holepcso => <li key={holepcso}>{holepcso}</li>)}
        </ul>
      </div>
      <div className="recipe-info-container">
        <h2>Komlóforralás:</h2>
        <ul>
          {recipe.komloforralas.map(komlo => <li key={komlo}>{komlo}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Recipe