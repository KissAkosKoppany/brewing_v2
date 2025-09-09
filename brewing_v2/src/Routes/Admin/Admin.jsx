import React from 'react'
import { useSetAdminTrue } from '../../hooks/useSetAdmin'

const Admin = () => {

    useSetAdminTrue()

  return (
    <div>Admin</div>
  )
}

export default Admin