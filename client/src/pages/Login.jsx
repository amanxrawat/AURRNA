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
    <>
      <div className='bg-orange'>
        <form className='flex flex-col gap-5 '>
          <label>Put email</label>
          <input type='email' />
          <label>Put password</label>
          <input type='password' />
        </form>
      </div>
    </>
  )
}

export default Login
