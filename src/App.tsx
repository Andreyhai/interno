import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AboutSection from './components/sections/about-section/AboutSection'
import AchievementsSection from './components/sections/achievements-section/AchievementsSection'
import BlogsSection from './components/sections/blogs-section/BlogsSection'
import EmployeesSection from './components/sections/employees-section/EmployeesSection'
import FeedbackSection from './components/sections/feedback-section/FeedbackSection'
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
      <BlogsSection />
      <FeedbackSection />
      <Footer />
    </>
  )
}

export default App
