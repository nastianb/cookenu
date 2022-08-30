import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import {  goToRecipesList } from '../routes/cordinator'

const useUnProtectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToRecipesList(navigate)
    }
  }, [navigate])
}

export default useUnProtectedPage