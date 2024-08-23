import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Equipments from './components/Equipments/Equipments'
import BgImage from './assets/bg.png'
import Banner from './components/Banner/Banner'

import Img1 from './assets/2.png'
import Img2 from './assets/3.png'
import TabComponent from './components/Tab/TabComponent'
import Testimonial from './components/Testimonial/Testimonial'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'

const BannerData1 = {
  image:Img1,
  title:'The importance of yoga in modern life',
  subTitle: 'Yoga is not just about physical exercise, it is a holistic practice that promotes mental and emotional well-being. Regular practice of yoga can help reduce stress, improve flexibility, and enhance overall health. Discover the transformative power of yoga and unlock your true potential.',
  link:'Learn More'
  
}
const BannerData2 = {
  image: Img2,
  title: 'The importance of yoga in modern life',
  subTitle: 'Yoga is not just about physical exercise, it is a holistic practice that promotes mental and emotional well-being. Regular practice of yoga can help reduce stress, improve flexibility, and enhance overall health. Discover the transformative power of yoga and unlock your true potential.',
  link: 'Learn More'
}


const bgstyle = {
  backgroundImage:`url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
 backgroundAttachment:'fixed',
};
const App = () => {
  return (
    <div className='overflow-x-hiddenhidden'>
      <Navbar />
      <div style={bgstyle} >
      <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData1} />
      <TabComponent />
      <Banner {...BannerData2} />
      <Testimonial />
      <Banner2 />
      <Footer/>
    </div>
  )
}

export default App