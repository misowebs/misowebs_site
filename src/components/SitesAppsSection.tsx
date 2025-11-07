import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const WebsitePreview: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  const [loadError, setLoadError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Set a timeout to detect if iframe is blocked
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loadError) {
    return (
      <div className="flex items-center justify-center h-full text-beige/60">
        <div className="text-center">
          <div className="text-4xl mb-2">🌐</div>
          <p className="mb-2">Preview unavailable</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-orange hover:underline inline-flex items-center gap-1"
          >
            Visit Site <FaExternalLinkAlt size="12" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-beige/10 z-10">
          <div className="text-beige/60">Loading preview...</div>
        </div>
      )}
      <div 
        className="w-full h-full overflow-hidden" 
        style={{ 
          transform: 'scale(0.4)', 
          transformOrigin: 'top left', 
          width: '250%', 
          height: '250%' 
        }}
      >
        <iframe
          src={url}
          className="w-full h-full border-0"
          title={`${title} Preview`}
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setLoadError(true);
            setIsLoading(false);
          }}
        />
      </div>
    </>
  );
};

const SitesAppsSection: React.FC = () => {
  const [projectClicked, setProjectClicked] = useState<{ [key: number]: boolean }>({});
  const [projectHovering, setProjectHovering] = useState<{ [key: number]: boolean }>({});
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const handleProjectClick = (index: number) => {
    setProjectClicked(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setProjectClicked(prev => ({ ...prev, [index]: false }));
    }, 200);
  };

  const handleOpenModal = (index: number) => {
    setIsModalClosing(false);
    setSelectedProjectIndex(index);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalClosing(true);
    // Re-enable body scroll
    document.body.style.overflow = '';
    setTimeout(() => {
      setSelectedProjectIndex(null);
      setIsModalClosing(false);
    }, 300); // Match animation duration
  };

  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProjectIndex !== null) {
        setIsModalClosing(true);
        document.body.style.overflow = '';
        setTimeout(() => {
          setSelectedProjectIndex(null);
          setIsModalClosing(false);
        }, 300);
      }
    };

    if (selectedProjectIndex !== null) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProjectIndex]);

  const projects = [
    {
      title: "Venezuelan Association at OU",
      description: "Built and deployed a scalable, SEO-optimized site on AWS (Amplify, S3, CloudFront). Increased membership 30% through improved UX, event visibility, and community engagement.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "AWS", "SEO", "GitHub"],
      liveUrl: "http://vaou.org/",
      githubUrl: "https://github.com/misowebs/va_website",
      logo: "/SitesLogos/VA Logo.png"
    },
    {
      title: "Agencia de Festejos Aeropuerto",
      description: "Developed a modern, mobile-first WordPress site on AWS Lightsail. Boosted client inquiries 12% with fast performance, custom booking forms, and optimized SEO design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "AWS Lightsail", "Wordpress", "SEO"],
      liveUrl: "https://aeropuertoca.com/",
      githubUrl: "",
      logo: "/SitesLogos/AFACA Logo.png"
    }
  ];

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  return (
    <section id="webs" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-beige mb-4">
            Sites & Apps
          </h2>
          <p className="text-lg md:text-xl text-orange">
            Showcasing our latest projects and creations
          </p>
        </div>
        
        {/* Mobile: Compact Cards (Title Only) */}
        <div className="flex flex-col gap-4 md:hidden">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => handleOpenModal(index)}
              className="bg-blue/50 backdrop-blur-sm rounded-2xl border border-beige/20 hover:border-orange/50 active:scale-95 transition-all duration-200 p-6 text-left"
            >
              <div className="flex items-center gap-4">
                {project.logo && (
                  <img 
                    src={project.logo} 
                    alt={`${project.title} logo`}
                    className="h-12 w-12 object-contain flex-shrink-0 rounded-lg"
                  />
                )}
                <h3 className="text-xl font-bold text-beige">
                  {project.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Desktop: Full Project Cards with Hover */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                block bg-blue/50 backdrop-blur-sm rounded-2xl p-6 border border-beige/20
                cursor-pointer select-none no-underline
                transform transition-all ease-in-out
                ${projectClicked[index] ? 'duration-200 scale-100' : projectHovering[index] ? 'duration-300 scale-102 shadow-lg shadow-orange/20' : 'duration-300 scale-100'}
              `}
              onClick={(e) => {
                handleProjectClick(index);
                // Don't prevent default - let the link work
              }}
              onMouseEnter={() => setProjectHovering(prev => ({ ...prev, [index]: true }))}
              onMouseLeave={() => setProjectHovering(prev => ({ ...prev, [index]: false }))}
            >
              <h3 className="text-2xl font-bold text-beige mb-3">
                {project.title}
              </h3>
              
              {/* Website Preview */}
              <div className="bg-beige/10 rounded-xl h-96 mb-6 overflow-hidden border border-beige/20 relative">
                <WebsitePreview url={project.liveUrl} title={project.title} />
                {/* Orange tint overlay */}
                <div className="absolute inset-0 bg-blue/30 pointer-events-none mix-blend-multiply" />
              </div>
              
              {/* Project Info */}
              <p className="text-beige/80 leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Links */}
              <div className="flex gap-4">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-orange text-blue rounded-lg hover:bg-orange/80 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt size="16" />
                  Visit Site
                </a>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-beige/30 text-beige rounded-lg hover:bg-beige/10 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size="16" />
                    Code
                  </a>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Modal */}
      {selectedProjectIndex !== null && selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden ${
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
                {selectedProject.title}
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
                <WebsitePreview url={selectedProject.liveUrl} title={selectedProject.title} />
                {/* Orange tint overlay */}
                <div className="absolute inset-0 bg-blue/30 pointer-events-none mix-blend-multiply" />
              </div>
              
              {/* Project Info */}
              <div className="px-6 mb-6">
                <p className="text-beige/90 leading-relaxed text-base">
                  {selectedProject.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="px-6 mb-6">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, techIndex) => (
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
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-orange text-blue rounded-lg hover:bg-orange/80 active:scale-95 transition-all duration-200 font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt size="16" />
                  Visit Site
                </a>
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl}
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
    </section>
  );
};

export default SitesAppsSection;
