import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  window.onpopstate = (event) => {
    navigate("/")
  }

  // const dispatch = useDispatch();
  // const handleLoginEvent = (e) => {
  //   e.preventDefaut();
  //   let userCredentials = {
  //     email, password
  //   }
  // }
  return (
    <div>

    </div>
  )
}

export default Login
