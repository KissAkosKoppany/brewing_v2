import React from 'react'
import { Route, Routes } from 'react-router'
import BrewingsListComponent from './BrewingsListComponent'
import BrewingItem from './BrewingItem'

const BrewingsList = ({ brewings }) => {

  return (
    <div className='brewings-list'>
        <Routes>
            <Route index element={<BrewingsListComponent brewings={brewings} />} />
        {
            brewings.map(brewing => {
                return (
                    <Route key={brewing.info.id} path={`/brewings/brewings-list${brewing.info.id}`} element={<BrewingItem brewing={brewing} />} />
                )
            })
        }
        </Routes>
    </div>
  )
}

export default BrewingsList