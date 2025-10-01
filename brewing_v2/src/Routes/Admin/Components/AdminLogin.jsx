import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setAdmin } from '../../../store/admin/admin.action'

const AdminLogin = () => {
    const dispatch = useDispatch()

    const handleLogin = useCallback((e) => {
            const psw = e.target.password.value
            if(psw === 'brewingforlife66') {
                dispatch(setAdmin(true))
            } else {
                e.preventDefault()
                e.target.reset()
            }
        }, []) 

  return (
    <div className='admin-login'>
        <form onSubmit={handleLogin} className='login-interface'>
            <p>Password:</p>
            <input type="password" id='password' name='password' />
            <button type='submit'>Sign in</button>
        </form>
    </div>
  )
}

export default AdminLogin