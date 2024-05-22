import { useState } from 'react'

import { Login } from '../../components/Login'
import { Navbar } from '../../components/navbars/Navbar'
import { Footer } from '../../components/footer/Footer.jsx'
import { Register } from '../../components/Register'

import './authPage.css'

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev)
  }

  const handleLogin = () => {
    setIsLogin(true)
  }

  return (
    <div className='auth-container'>
      <Navbar redirectHome />
      {isLogin
        ? (
          <Login switchAuthHandler={handleAuthPageToggle} />
          )
        : (
          <Register
            switchAuthHandler={handleAuthPageToggle}
            onRegister={handleLogin}
          />
          )}
      <Footer />
    </div>
  )
}
