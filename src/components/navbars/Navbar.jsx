import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import '../styles/Navbar.css'
import '../styles/Variables.css'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom'

export const Navbar = ({ redirectHome }) => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const addHotelClicked = queryParams.get('addHotelClicked')

  let saved = localStorage.getItem('user')

  saved = JSON.parse(saved)

  const handleLogout = () => {
    localStorage.removeItem('user')
    saved = null
    window.location.href = './'
  }

  const isLoginPage = window.location.pathname === '/auth'

  const allowedRoles = ['SUPER_ROLE', 'ADMIN_BOSS_ROLE', 'ADMIN_EMPLOYEE_ROLE']

  return (
    <nav className='navbar'>
      <div className='tittle-container'>
        <h1 className='text-title-main'>YouHotel</h1>
      </div>

      <div className='buttons-container'>
        {redirectHome
          ? (
            <a className='button' href='./'>
              Home
            </a>
            )
          : saved == null
            ? (
              <a className='button' href='/auth'>
                Login
              </a>
              )
            : allowedRoles.includes(saved.user.role)
              ? (
                <div className='lineal'>
                  {addHotelClicked
                    ? (
                      <a className='button' href='./hotel'>
                        List Hotels
                      </a>
                      )
                    : (
                      <a className='button' href='./hotel?addHotelClicked=true'>
                        Add Hotel
                      </a>
                      )}
                  <a className='button' href='./'>
                    User
                  </a>
                  <a className='button' href='#' onClick={handleLogout}>
                    Exit
                  </a>
                </div>
                )
              : (
                <a className='button' href='#' onClick={handleLogout}>
                  <>
                    <div className='lineal'>
                      <a className='button' href='./' onClick={handleLogout}>
                        User
                      </a>
                      <a className='button' href='#' onClick={handleLogout}>
                        Exit
                      </a>
                    </div>
                  </>
                </a>
                )}
      </div>
    </nav>
  )
}
