import Header from './components/header/Header'
import AboutSection from './components/sections/about-section/AboutSection'
import AchievementsSection from './components/sections/achievements-section/AchievementsSection'
import EmployeesSection from './components/sections/employees-section/EmployeesSection'
import HeroSection from './components/sections/hello-section/HeroSection'
import ProjectsSection from './components/sections/projects-section/ProjectsSection'
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
      <EmployeesSection />
      <ProjectsSection />
      <AchievementsSection />
    </>
  )
}

export default App
