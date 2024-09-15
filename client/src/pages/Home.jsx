import React from 'react'
import Layout from '../components/layout/Layout'

import Carousel from '../components/specific/Carousel'
import Testimonials from '../components/specific/Testimonials'
import Hero from '../components/specific/Hero'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Carousel />
      <Testimonials />
    </div>
  )
}

export default Layout()(Home)
