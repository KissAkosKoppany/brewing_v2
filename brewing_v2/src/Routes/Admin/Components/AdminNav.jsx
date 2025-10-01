import React from 'react'
import { Link } from 'react-router'

const AdminNav = () => {
  return (
    <div className='admin-nav'>
        <Link to='/admin-dashboard/add-beer'><p>Add Beer</p></Link>
        <Link to='/admin-dashboard/modify-stock'><p>Modify stock</p></Link>
        <Link to='/admin-dashboard/add-brewing'><p>Add Brewing</p></Link>
    </div>
  )
}

export default AdminNav