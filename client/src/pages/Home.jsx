import React from 'react'
import Layout from '../components/layout/Layout'

import Carousel from '../components/specific/Carousel'
import Testimonials from '../components/specific/Testimonials'
import Hero from '../components/specific/Hero'
import Trending from '../components/specific/Trending.jsx'
import FeatureBanner from '../components/specific/FeatureBanner.jsx'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Carousel />
      <Trending />
      <FeatureBanner />
      <Testimonials />
    </div>
  )
}

export default Layout()(Home)
