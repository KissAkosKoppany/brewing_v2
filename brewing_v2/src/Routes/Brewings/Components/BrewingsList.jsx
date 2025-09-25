import React from 'react'
import { Route, Routes } from 'react-router'
import BrewingsListComponent from './BrewingsListComponent'
import BrewingItem from './BrewingItem'
import Spinner from '../../../GeneralComponents/Spinner'

const BrewingsList = ({ brewings }) => {

  return (
    <div className='brewings-list'>
        {
            brewings ?
                <Routes>
                    <Route index element={<BrewingsListComponent brewings={brewings} />} />
                {
                    brewings.map(brewing => {
                        return (
                            <Route key={brewing.id} path={`${brewing.id}`} element={<BrewingItem brewing={brewing} />} />
                        )
                    })
                }
                </Routes>
            :
                <Spinner />
        }
    </div>
  )
}

export default BrewingsList