import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import ServicesSection from './components/ServicesSection'
import SitesAppsSection from './components/SitesAppsSection'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import { SITE_CONFIG } from './constants/siteConfig'

function App() {
  const [count, setCount] = useState(0)

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
          <div>
            <p>{SITE_CONFIG.title} by Miso Solutions LLC © {new Date().getFullYear()} Developed by Yul Castro</p><br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
