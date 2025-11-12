import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import ServicesSection from './components/ServicesSection'
import SitesAppsSection from './components/SitesAppsSection'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import PortfolioPage from './components/PortfolioPage'
import { SITE_CONFIG } from './constants/siteConfig'

// Footer component
function FooterSection() {
  return (
    <div className="text-xs md:text-base text-center">
      <p>{SITE_CONFIG.title} by Miso Solutions LLC © {new Date().getFullYear()} Developed by Yul Castro</p><br/>
    </div>
  );
}

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [navbarEntered, setNavbarEntered] = useState(false)

  const checkRoute = () => {
    const path = window.location.pathname
    const params = new URLSearchParams(window.location.search)
    const hash = window.location.hash
    
    if (path.includes('/yul') || path.includes('/Yul') || path.includes('/yulcastro') || path.includes('/YulCastro') || path.includes('/portfolio') || params.get('page') === 'portfolio' || hash === '#portfolio') {
      setShowPortfolio(true)
    } else {
      setShowPortfolio(false)
    }
  }

  useEffect(() => {
    // Check route on mount
    checkRoute()
    
    // Listen for browser navigation (back/forward buttons)
    window.addEventListener('popstate', checkRoute)
    
    // Trigger navbar animation immediately
    const timer = setTimeout(() => {
      setNavbarEntered(true)
    }, 100)
    
    return () => {
      window.removeEventListener('popstate', checkRoute)
      clearTimeout(timer)
    }
  }, [])

  // Show portfolio page if requested
  if (showPortfolio) {
    return <PortfolioPage />
  }

  return (
    <>
      <div>
        <Navbar hasEntered={navbarEntered} />
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
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default App
