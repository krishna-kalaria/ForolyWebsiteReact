import Banner from '../components/Banner'
import Intro from '../components/Intro'
import Product from '../components/Product'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import SocialLinks from '../components/SocialLinks'

function Home() {
  return (
    <>
      <SocialLinks />
      <Banner />
      <Intro />
      <Product />
      <AboutUs />
      <Services />
    </>
  )
}

export default Home
