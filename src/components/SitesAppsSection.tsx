import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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

  const handleProjectClick = (index: number) => {
    setProjectClicked(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setProjectClicked(prev => ({ ...prev, [index]: false }));
    }, 200);
  };

  const projects = [
    {
      title: "Venezuelan Association at OU",
      description: "Built and deployed a scalable, SEO-optimized site on AWS (Amplify, S3, CloudFront). Increased membership 30% through improved UX, event visibility, and community engagement.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "AWS", "SEO", "GitHub"],
      liveUrl: "http://vaou.org/",
      githubUrl: "https://github.com/misowebs/va_website"
    },
    {
      title: "Agencia de Festejos Aeropuerto",
      description: "Developed a modern, mobile-first WordPress site on AWS Lightsail. Boosted client inquiries 12% with fast performance, custom booking forms, and optimized SEO design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "AWS Lightsail", "Wordpress", "SEO"],
      liveUrl: "https://aeropuertoca.com/",
      githubUrl: ""
    }
  ];

  return (
    <section id="webs" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-beige mb-4">
            Sites & Apps
          </h2>
          <p className="text-xl text-orange">
            Showcasing our latest projects and creations
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
              {/* Website Preview */}
              <div className="bg-beige/10 rounded-xl h-96 mb-6 overflow-hidden border border-beige/20 relative">
                <WebsitePreview url={project.liveUrl} title={project.title} />
                {/* Orange tint overlay */}
                <div className="absolute inset-0 bg-blue/30 pointer-events-none mix-blend-multiply" />
              </div>
              
              {/* Project Info */}
              <h3 className="text-2xl font-bold text-beige mb-3">
                {project.title}
              </h3>
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
    </section>
  );
};

export default SitesAppsSection;
