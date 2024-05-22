import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register as registerRequest } from '../../services'
import toast from 'react-hot-toast'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const register = async (name, email, password, username) => {
    setIsLoading(true)

    const response = await registerRequest({
      name,
      email,
      password,
      username
    })
    setIsLoading(false)

    if (response.error) {
      console.log(response.error)
      console.log(response.e)
      console.log(response.e?.response)
      console.log(response.e?.response?.data)
      return toast.error(
        response.e?.response?.data ||
          'An error occurred while registering, please try again'
      )
    }

    navigate('/auth')
  }
  return {
    register,
    isLoading
  }
}
