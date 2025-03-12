import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useSelector } from 'react-redux';


const AdminLogin = () => {

    const navigate = useNavigate();
    // const { user } = useSelector((state) => state.auth);

    // const isAdmin = user?.isAdmin;
    const isAdmin = true;

    const submitHandler = (e) => {
        e.preventDefault();

        if (isAdmin && password === import.meta.env.VITE_ADMIN_SECRET_KEY) {
            localStorage.setItem('isAdmin', true)
            navigate('/admin/dashboard')
        }
    }

    const [password, setPassword] = useState('')

    return (
        <div className='bg-dark flex item-center justify-center h-screen'>
            <div className='bg-white text-black p-20 rounded-lg m-auto flex flex-col'>
                <h2 className='text-center uppercase'>admin login</h2>

                <form className='item-center justify-center flex flex-col '>

                    <input
                        type="text"
                        id="username"
                        name="username"
                        autoComplete="username"
                        placeholder="Enter your username"
                        className="w-full border hidden border-gray-300 p-2 my-2 rounded"
                    />

                    <input type='password' autoComplete='new-password' placeholder='Admin Password here' className='border-2 border-black p-2 my-2 rounded-none' onChange={(e) => { setPassword(e.target.value); }} />
                    <button className='bg-black text-white p-2 my-2 hover:bg-slate-800' onClick={(e) => submitHandler(e)} >Login</button>
                </form>
                <p className='pt-8 uppercase'>If you are not an admin you should leave this page.</p>
                <Link to="/" className='text-blue-400 text-center hover:text-dark'>GO TO HOME</Link>

            </div>
        </div>
    )
}

export default AdminLogin