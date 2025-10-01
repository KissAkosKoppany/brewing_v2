import React from 'react'
import "./Admin.style.css"
import { useSelector } from 'react-redux'
import AdminLogin from './Components/AdminLogin'
import Dashboard from './Components/Dashboard'

const Admin = () => {

    const isAdmin = useSelector(state => state.rootReducer.admin.admin)

  return (
    <div>
      {
        isAdmin ?
          <Dashboard />
          :
          <AdminLogin />
      }
    </div>
  )
}

export default Admin