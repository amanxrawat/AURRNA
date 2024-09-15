import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  window.onpopstate = (event) => {
    navigate("/")
  }
  return (
    <div>

    </div>
  )
}

export default Login
