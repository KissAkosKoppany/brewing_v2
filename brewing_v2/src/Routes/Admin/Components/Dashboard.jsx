import React from 'react'
import AdminNav from './AdminNav'
import { Routes, Route } from 'react-router'
import AddBeer from './AddBeer'
import ModifyStock from './ModifyStock'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <AdminNav />
      <Routes>
        <Route path='add-beer' element={<AddBeer />} />
        <Route path='modify-stock' element={<ModifyStock />} />
      </Routes>
    </div>
  )
}

export default Dashboard