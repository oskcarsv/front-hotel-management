import { useState } from 'react'

import { Login } from '../../components/Login'
import { Navbar } from '../../components/navbars/Navbar'

import './authPage.css'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev)
  }

  return (
    <div className='auth-container'>
      <Navbar />
      {isLogin
        ? (
          <Login switchAuthHandler={handleAuthPageToggle} />
          )
        : (
          <Register switchAuthHandler={handleAuthPageToggle} />
          )}
    </div>
  )
}
