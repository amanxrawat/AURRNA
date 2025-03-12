import React from 'react'

const NotFound = () => {
  return (
    <div className='bg-dark text-white flex items-center h-screen justify-center flex-col'>
        <div className='text-7xl p-10'>404 Page Not Found</div>
        <a href='/' className='uppercase text-blue-100 hover:text-blue-500 '>GO TO HOME</a>
    </div>
  )
}

export default NotFound