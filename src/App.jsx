import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import ServicesSection from './components/ServicesSection'
import SitesAppsSection from './components/SitesAppsSection'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import PortfolioPage from './components/PortfolioPage'
import { SITE_CONFIG } from './constants/siteConfig'

function App() {
  const [count, setCount] = useState(0)
  const [showPortfolio, setShowPortfolio] = useState(false)

  useEffect(() => {
    // Check if URL has /portfolio or ?page=portfolio or hash #portfolio
    const path = window.location.pathname
    const params = new URLSearchParams(window.location.search)
    const hash = window.location.hash
    
    if (path.includes('/portfolio') || params.get('page') === 'portfolio' || hash === '#portfolio') {
      setShowPortfolio(true)
    }
  }, [])

  // Show portfolio page if requested
  if (showPortfolio) {
    return <PortfolioPage />
  }

  return (
    <>
      <div>
        <Navbar/>
        <div className="pb-16 md:pb-0 md:ml-12">
          {/* Section 1: Home */}
          <HomeSection />

          {/* Section 2: Services */}
          <ServicesSection />
          
          {/* Section 3: Sites & Apps */}
          <SitesAppsSection />
          
          {/* Section 4: Contact */}
          <ContactSection />
          
          {/* Section 5: About */}
          <AboutSection />

          {/* Footer */}
          <div className="text-xs md:text-base">
            <p>{SITE_CONFIG.title} by Miso Solutions LLC © {new Date().getFullYear()} Developed by Yul Castro</p><br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
