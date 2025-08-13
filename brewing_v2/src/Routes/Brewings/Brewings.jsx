import React from "react"
import "./Brewings.style.css"
import BrewingsNav from "./Components/BrewingsNav"
import { Route, Routes } from "react-router"
import BrewingsList from "./Components/BrewingsList"
import AddBrewing from "./Components/AddBrewing"
import { brewings } from "../../Brewings"

const Brewings = () => {

  return (
    <div className="brewings-container">
      <BrewingsNav />
      <Routes>
        <Route path="brewings-list/*" element={<BrewingsList brewings={brewings} />} />
        <Route path="add-brewing" element={<AddBrewing brewings={brewings} />} />
      </Routes>
    </div>
  )
}

export default Brewings