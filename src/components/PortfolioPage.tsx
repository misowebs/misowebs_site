import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaUser,
  FaFileAlt,
  FaTimes,
  FaExternalLinkAlt,
  FaCalendar
} from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import WebsitePreview from './WebsitePreview';

const PortfolioPage: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [showCalendlyModal, setShowCalendlyModal] = useState(false);
  const [isCalendlyModalClosing, setIsCalendlyModalClosing] = useState(false);
  
  // Entrance animation states
  const [hasEntered, setHasEntered] = useState(false);
  
  // Scroll animation refs
  const [mapRef, isMapVisible] = useScrollAnimation({ threshold: 0.3 });
  const [projectsRef, isProjectsVisible] = useScrollAnimation({ threshold: 0.15 });
  const [contactRef, isContactVisible] = useScrollAnimation({ threshold: 0.2 });
  const [footerRef, isFooterVisible] = useScrollAnimation({ threshold: 0.1 });
  
  // Trigger entrance animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const profileData = {
    name: "Yul Castro Barazarte",
    title: "Computer Scientist",
    bio: "Software developer skilled in AWS and web design, with hands-on experience deploying and maintaining scalable platforms.",
    image: "/Headshot.jpeg",
    resumeUrl: "/Documents/Yul Castro Barazarte.pdf",
    vcfUrl: "/Documents/Yul Castro Barazarte.vcf",
    email: "yul.castro@misowebs.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/yulcastro",
        icon: <FaLinkedin size="20" />,
        color: "bg-orange/20 hover:bg-orange/30 text-orange"
      },
      {
        label: "Contact",
        url: "contact",
        icon: <FaUser size="20" />,
        color: "bg-orange/20 hover:bg-orange/30 text-orange"
      },
      {
        label: "GitHub",
        url: "https://github.com/castroyul",
        icon: <FaGithub size="20" />,
        color: "bg-beige/10 hover:bg-beige/20"
      },
      {
        label: "Resume",
        url: "resume",
        icon: <FaFileAlt size="20" />,
        color: "bg-beige/10 hover:bg-beige/20"
      },
      {
        label: "Schedule a Meeting",
        url: "calendly",
        icon: <FaCalendar size="20" />,
        color: "bg-orange/20 hover:bg-orange/30 text-orange"
      }
    ],
    skills: ["AWS", "JavaScript", "HTML/CSS", "Python"]
  };

  const projects = [
    {
        title: "Misowebs Website",
        description: "A modern, responsive portfolio and business website showcasing web development services. Features include interactive project showcases and mobile-optimized navigation. Built with React and Tailwind CSS, deployed on AWS for optimal performance and scalability.",
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "React", "AWS", "SEO", "GitHub", "Cursor"],
        liveUrl: "/",
        githubUrl: "https://github.com/misowebs/misowebs_site",
        logo: "/Misowebs_Logo_Circle.png"
    },
    {
      title: "Venezuelan Association Website",
      description: "Built and deployed a scalable, SEO-optimized site on AWS (Amplify, S3, CloudFront). Increased membership 30% through improved UX, event visibility, and community engagement.",
      technologies: ["HTML/CSS", "JavaScript", "React", "AWS Amplify", "CloudFront", "Route 53", "S3", "SEO", "GitHub", "Cursor"],
      liveUrl: "http://vaou.org/",
      githubUrl: "https://github.com/misowebs/va_website",
      logo: "/SitesLogos/VA Logo.png"
    },
    {
      title: "Agencia de Festejos Aeropuerto",
      description: "Developed a modern, mobile-first WordPress site on AWS Lightsail. Boosted client inquiries 12% with fast performance, custom booking forms, and optimized SEO design.",
      technologies: ["HTML/CSS", "JavaScript", "AWS Lightsail", "Wordpress", "SEO"],
      liveUrl: "https://aeropuertoca.com/",
      githubUrl: "",
      logo: "/SitesLogos/AFACA Logo.png"
    }
  ];

  const handleOpenModal = (index: number) => {
    setIsModalClosing(false);
    setSelectedProjectIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalClosing(true);
    document.body.style.overflow = '';
    setTimeout(() => {
      setSelectedProjectIndex(null);
      setIsModalClosing(false);
    }, 300);
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProjectIndex !== null) {
          setIsModalClosing(true);
          document.body.style.overflow = '';
          setTimeout(() => {
            setSelectedProjectIndex(null);
            setIsModalClosing(false);
          }, 300);
        } else if (showCalendlyModal) {
          setIsCalendlyModalClosing(true);
          document.body.style.overflow = '';
          setTimeout(() => {
            setShowCalendlyModal(false);
            setIsCalendlyModalClosing(false);
          }, 300);
        }
      }
    };

    if (selectedProjectIndex !== null || showCalendlyModal) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProjectIndex, showCalendlyModal]);

  const handleOpenCalendlyModal = () => {
    setIsCalendlyModalClosing(false);
    setShowCalendlyModal(true);
    document.body.style.overflow = 'hidden';
    
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  };

  // Ensure Calendly widget initializes when modal opens
  React.useEffect(() => {
    if (showCalendlyModal && !isCalendlyModalClosing) {
      // Small delay to ensure DOM is ready and script is loaded
      const timer = setTimeout(() => {
        // Calendly script automatically initializes widgets, but we can trigger a refresh
        // by checking if window.Calendly exists
        if ((window as any).Calendly) {
          // Widget should auto-initialize, but we can force a refresh if needed
          const widget = document.querySelector('.calendly-inline-widget');
          if (widget && !widget.querySelector('iframe')) {
            // Widget hasn't initialized yet, trigger initialization
            (window as any).Calendly.initInlineWidget({
              url: 'https://calendly.com/castroyul/30min',
              parentElement: widget as HTMLElement
            });
          }
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [showCalendlyModal, isCalendlyModalClosing]);

  const handleCloseCalendlyModal = () => {
    setIsCalendlyModalClosing(true);
    document.body.style.overflow = '';
    setTimeout(() => {
      setShowCalendlyModal(false);
      setIsCalendlyModalClosing(false);
    }, 300);
  };

  const handleLinkClick = (url: string, label: string) => {
    // Handle calendly - open modal
    if (url === 'calendly' || label === 'Schedule') {
      handleOpenCalendlyModal();
      return;
    }
    
    // Handle resume - open in new tab
    if (url === 'resume' || label === 'Resume') {
      window.open(profileData.resumeUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Handle contact vcf file - download
    if (url === 'contact' || label === 'Contact') {
      const link = document.createElement('a');
      link.href = profileData.vcfUrl;
      link.download = 'Yul_Castro_Barazarte.vcf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    
    if (url.startsWith('#')) {
      // Navigate to main site root and scroll to section
      window.location.href = `/${url}`;
    } else {
      // Open external link
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-blue flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        {/* Profile Section */}
        <div className="text-center mb-8">
          {/* Profile Image */}
          <div 
            className={`mb-6 flex justify-center profile-image-float transition-all duration-700 ease-in-out ${
              hasEntered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <img 
              src={profileData.image} 
              alt={profileData.name}
              className="w-62 h-62 rounded-full border-4 border-orange object-cover shadow-lg profile-image-glow"
            />
          </div>
          
          {/* Name */}
          <h1 
            className={`text-4xl font-bold text-beige mb-2 transition-all duration-700 ease-in-out ${
              hasEntered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            {profileData.name}
          </h1>
          
          {/* Title */}
          <p 
            className={`text-lg text-orange mb-4 font-medium transition-all duration-700 ease-in-out ${
              hasEntered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {profileData.title}
          </p>
          
          {/* Bio */}
          <p 
            className={`text-sm text-beige/80 leading-relaxed mb-6 px-4 transition-all duration-700 ease-in-out ${
              hasEntered 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            {profileData.bio}
          </p>
          
          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 px-4">
            {profileData.skills.map((skill, index) => (
              <span 
                key={index}
                className={`px-3 py-1 bg-orange/20 text-orange rounded-full text-xs font-medium transition-all duration-600 ease-in-out ${
                  hasEntered 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-90'
                }`}
                style={{
                  transitionDelay: `${600 + index * 100}ms`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {profileData.links.map((link, index) => {
            const isLastLink = index === profileData.links.length - 1;
            return (
              <button
                key={index}
                onClick={() => handleLinkClick(link.url, link.label)}
                className={`
                  w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl
                  border border-beige/20 backdrop-blur-sm
                  transition-all duration-600 ease-in-out active:scale-95
                  ${link.color}
                  text-beige font-medium text-xl
                  ${isLastLink ? 'col-span-2' : ''}
                  ${hasEntered 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                  }
                `}
                style={{
                  transitionDelay: `${1000 + index * 100}ms`
                }}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Location Map Section */}
        <div 
          ref={mapRef}
          className={`mb-6 transition-all duration-700 ease-in-out ${
            isMapVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative rounded-xl overflow-hidden border border-beige/20 bg-blue/30 h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104267.89675557887!2d-97.44473577150065!3d35.24700570293117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b263b67f93eee7%3A0x445b233faba85cf8!2sNorman%2C%20OK!5e0!3m2!1sen!2sus!4v1762573370254!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Norman, Oklahoma Location"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div 
          ref={projectsRef}
          className={`mb-6 border-t border-beige/20 pt-6 transition-all duration-700 ease-in-out ${
            isProjectsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 
            className={`text-2xl font-bold text-beige mb-4 text-center transition-all duration-700 ease-in-out ${
              isProjectsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => handleOpenModal(index)}
                className={`project-card-animated bg-blue/50 backdrop-blur-sm rounded-xl border border-beige/20 hover:border-orange/50 active:scale-95 transition-all duration-600 ease-in-out p-4 flex flex-col items-center gap-2 ${
                  isProjectsVisible 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-4'
                }`}
                style={{
                  '--border-delay': `${index * 0.8}s`,
                  transitionDelay: `${400 + index * 100}ms`
                } as React.CSSProperties & { '--border-delay': string }}
              >
                {project.logo && (
                  <img 
                    src={project.logo} 
                    alt={`${project.title} logo`}
                    className="h-24 w-24 object-contain rounded-lg"
                  />
                )}
                <h3 className="text-sm font-bold text-beige text-center leading-tight">
                  {project.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div 
          ref={contactRef}
          className={`flex flex-col items-center gap-3 pt-6 border-t border-beige/20 transition-all duration-700 ease-in-out ${
            isContactVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          {profileData.email && (
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-2 text-beige/80 hover:text-orange transition-colors duration-200 text-lg"
            >
              <FaEnvelope size="16" />
              <span>{profileData.email}</span>
            </a>
          )}
        </div>

        {/* Footer */}
        <div 
          ref={footerRef}
          className={`text-center mt-8 pt-6 border-t border-beige/10 transition-all duration-700 ease-in-out ${
            isFooterVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs text-beige/60">
            Misowebs © {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProjectIndex !== null && projects[selectedProjectIndex] && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            isModalClosing ? 'animate-fadeOut' : 'animate-fadeIn'
          }`}
          onClick={handleCloseModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-blue/95 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div
            className={`relative bg-blue/98 backdrop-blur-md rounded-2xl border border-orange/50 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col ${
              isModalClosing ? 'animate-scaleOut' : 'animate-scaleIn'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-beige/20 flex-shrink-0">
              <h3 className="text-2xl font-bold text-beige pr-4">
                {projects[selectedProjectIndex].title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-beige hover:text-orange active:scale-95 transition-all duration-200 p-2 rounded-full hover:bg-beige/10 flex-shrink-0"
                aria-label="Close modal"
              >
                <FaTimes size="24" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Website Preview */}
              <div className="bg-beige/10 rounded-xl h-64 mx-6 mt-6 mb-6 overflow-hidden border border-beige/20 relative">
                <WebsitePreview url={projects[selectedProjectIndex].liveUrl} title={projects[selectedProjectIndex].title} />
                {/* Orange tint overlay */}
                <div className="absolute inset-0 bg-blue/30 pointer-events-none mix-blend-multiply" />
              </div>
              
              {/* Project Info */}
              <div className="px-6 mb-6">
                <p className="text-beige/90 leading-relaxed text-base">
                  {projects[selectedProjectIndex].description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="px-6 mb-6">
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProjectIndex].technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="px-6 pb-6 flex flex-col gap-3">
                <a 
                  href={projects[selectedProjectIndex].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-orange text-blue rounded-lg hover:bg-orange/80 active:scale-95 transition-all duration-200 font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt size="16" />
                  Visit Site
                </a>
                {projects[selectedProjectIndex].githubUrl && (
                  <a 
                    href={projects[selectedProjectIndex].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-beige/30 text-beige rounded-lg hover:bg-beige/10 active:scale-95 transition-all duration-200 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size="16" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calendly Modal */}
      {showCalendlyModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            isCalendlyModalClosing ? 'animate-fadeOut' : 'animate-fadeIn'
          }`}
          onClick={handleCloseCalendlyModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-blue/95 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <div
            className={`relative bg-blue/98 backdrop-blur-md rounded-2xl border border-orange/50 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col ${
              isCalendlyModalClosing ? 'animate-scaleOut' : 'animate-scaleIn'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-beige/20 flex-shrink-0">
              <h3 className="text-2xl font-bold text-beige pr-4">
                Schedule a Meeting
              </h3>
              <button
                onClick={handleCloseCalendlyModal}
                className="text-beige hover:text-orange active:scale-95 transition-all duration-200 p-2 rounded-full hover:bg-beige/10 flex-shrink-0"
                aria-label="Close modal"
              >
                <FaTimes size="24" />
              </button>
            </div>

            {/* Calendly Widget Container */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div 
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/castroyul/30min"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;

