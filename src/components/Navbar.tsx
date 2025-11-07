import React from 'react';
import { FaHome, FaGlobe, FaCode, FaPhone, FaInfo } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 w-full h-16 bg-blue/95 backdrop-blur-sm border-t border-orange/50 shadow-lg z-50 md:hidden">
        <div className="flex flex-row justify-around items-center h-full px-2">
          {/* Home */}
          <MobileNavItem 
            icon={<img src="/Misowebs_Logo_Circle.png" alt="Misowebs Logo" className="h-5 w-5 rounded-full" />}
            text="Home"
            onClick={() => scrollToSection('home')}
          />

          {/* Services */}
          <MobileNavItem 
            icon={<FaCode size="18"/>}
            text="Services"
            onClick={() => scrollToSection('services')}
          />

          {/* Sites & Apps */}
          <MobileNavItem 
            icon={<FaGlobe size="18"/>}
            text="Sites"
            onClick={() => scrollToSection('webs')}
          />

          {/* Contact */}
          <MobileNavItem 
            icon={<FaPhone size="18"/>}
            text="Contact"
            onClick={() => scrollToSection('contact')}
          />

          {/* About */}
          <MobileNavItem 
            icon={<FaInfo size="18"/>}
            text="About"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </nav>

      {/* Desktop Left Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-12 flex-col shadow-lg border-r-1 border-orange/50 z-50">
        {/* Navigation icons */}
        <div className="flex flex-col justify-center space-y-6 flex-1">
          {/* Home Icon */}
          <SideBarIcon 
            icon={ <img 
                    src="/Head.PNG" 
                    alt="Misowebs Logo" 
                    className="h-10 w-10 rounded-full"
                   /> }
            text='Home' 
            onClick={() => scrollToSection('home')}
          />

          {/* Services Icon */}
          <SideBarIcon 
            icon={<FaCode size="20"/>} 
            text='Services' 
            onClick={() => scrollToSection('services')}
          />

          {/* Sites & Apps Icon */}
          <SideBarIcon 
            icon={<FaGlobe size="20"/>} 
            text='Sites & Apps' 
            onClick={() => scrollToSection('webs')}
          />

          {/* Contact Icon */}
          <SideBarIcon 
            icon={<FaPhone size="20"/>} 
            text='Contact' 
            onClick={() => scrollToSection('contact')}
          />

          {/* About Icon */}
          <SideBarIcon 
            icon={<FaInfo size="20"/>} 
            text='About' 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </>
  );
};

const SideBarIcon = ({ icon, text = '', onClick }: { icon: React.ReactNode, text?: string, onClick?: () => void }) => (
  <div className='sidebar-icon group cursor-pointer' onClick={onClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const MobileNavItem = ({ icon, text, onClick }: { icon: React.ReactNode, text: string, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center flex-1 h-full min-w-0 px-1 py-1 text-beige hover:text-orange transition-colors duration-200 active:scale-95"
    aria-label={text}
  >
    <div className="flex items-center justify-center mb-1">
      {icon}
    </div>
    <span className="text-[10px] font-medium leading-tight text-center truncate w-full">
      {text}
    </span>
  </button>
);

export default Navbar;
