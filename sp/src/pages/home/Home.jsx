import React from 'react'
import Banner from '../../components/Banner'
import Categories from '../../components/Categories'
import Services from '../../components/Services'
import Crousal from '../../components/Crousal'
// import Banner from '../../components/Banner'
// import Categories from './Categories'
// import VideoSection from './VideoSection'
// import SpeicalCategories from './SpeicalCategories'

function Home() {
  return (
    <div>

      <Banner/>
      <Categories/>
      <Services/>
      <Crousal/>
    </div>
  )
}

export default Home