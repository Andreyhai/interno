import Header from './components/header/Header'
import AboutSection from './components/sections/about-section/AboutSection'
import HeroSection from './components/sections/hello-section/HeroSection'
import RateSection from './components/sections/rate-section/RateSection'
import ServicesSection from './components/sections/services-section/ServicesSection'
import './styles/globals.scss'

const App = () => {
  

  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <RateSection />
    </>
  )
}

export default App
