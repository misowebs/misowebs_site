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

  // Update document title and meta description for SEO
  useEffect(() => {
    const baseTitle = 'Misowebs | Modern, Responsive Websites for Your Business'
    const portfolioTitle = 'Yul Castro Portfolio | Misowebs'
    const baseDescription =
      'Misowebs creates modern, responsive websites and web apps to help businesses build a strong online presence with custom, performance-focused designs.'
    const portfolioDescription =
      'Explore the portfolio of Yul Castro, showcasing modern websites and applications crafted under Misowebs and Miso Solutions LLC.'

    document.title = showPortfolio ? portfolioTitle : baseTitle

    // Update meta description
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute(
        'content',
        showPortfolio ? portfolioDescription : baseDescription
      )
    }

    // Update Open Graph tags dynamically
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    
    if (ogTitle) {
      ogTitle.setAttribute('content', showPortfolio ? portfolioTitle : baseTitle)
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', showPortfolio ? portfolioDescription : baseDescription)
    }
    if (ogUrl) {
      const currentUrl = window.location.origin + window.location.pathname + window.location.search
      ogUrl.setAttribute('content', currentUrl)
    }
  }, [showPortfolio])

  // Show portfolio page if requested
  if (showPortfolio) {
    return <PortfolioPage />
  }

  return (
    <>
      <header>
        <Navbar hasEntered={navbarEntered} />
      </header>
      <main>
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
        </div>
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  )
}

export default App
