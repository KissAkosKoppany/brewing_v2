import React, { useEffect, useState } from "react"
import "./Brewings.style.css"
import BrewingsNav from "./Components/BrewingsNav"
import { Route, Routes } from "react-router"
import BrewingsList from "./Components/BrewingsList"
import AddBrewing from "./Components/AddBrewing"
import { useSelector } from "react-redux"

const Brewings = () => {

  const brewingsList = useSelector(state => state.rootReducer.brewing.brewingsList)

  return (
    <div className="brewings-container">
      <BrewingsNav />
      <Routes>
        <Route path="brewings-list/*" element={<BrewingsList brewings={brewingsList} />} />
        <Route path="add-brewing" element={<AddBrewing brewings={brewingsList} />} />
      </Routes>
    </div>
  )
}

export default Brewings