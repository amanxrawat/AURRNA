import React from 'react'
import Title from '../shared/Title'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div className="absolute w-[100%]">
        <Title />
        <Navbar />

        <div className='bg-orange'>
          <WrappedComponent {...props} />
        </div>

        <Footer className={"bottom-0"} />
      </div>
    )
  }
}

export default Layout
