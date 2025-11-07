import React from 'react';
import { FaCode, FaGlobe, FaServer, FaTimes } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  type Service = {
    icon: React.ReactNode;
    title: string;
    summary: string;
    fullDescription: string;
  };

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [selectedServiceIndex, setSelectedServiceIndex] = React.useState<number | null>(null);
  const [isModalClosing, setIsModalClosing] = React.useState(false);

  const services: Service[] = [
    {
      icon: <FaCode size="40" />,
      title: "Static Development",
      summary:
        "Fast, secure, and visually polished static websites designed for speed, clarity, and effortless updates.",
      fullDescription:
        "We build lightweight static websites using modern technologies such as HTML, CSS, and JavaScript frameworks, " + 
        "optimized for performance, SEO, and mobile responsiveness. These sites are perfect for businesses and organizations " + 
        "that need an elegant, fast-loading online presence without complex back-end systems. Each project includes SEO setup, " + 
        "accessibility standards, and tailored design to match your brand identity."
    },
    {
      icon: <FaGlobe size="40" />,
      title: "Web & App Development",
      summary:
        "Dynamic and interactive web applications that connect design, performance, and functionality.",
      fullDescription:
        "We develop full-stack web applications and dynamic websites using technologies like React, Node.js, and AWS. Our approach " + 
        "combines scalability and user experience integrating features such as user authentication, e-commerce, dashboards, " + 
        "and interactive content. Each app is cloud-ready, built with clean code, and structured for long-term maintenance. " + 
        "Whether you need a business portal, membership platform, or custom tool, we create solutions that grow with your organization."
    },
    {
      icon: <FaServer size="40" />,
      title: "Domain & Hosting Setup",
      summary:
        "Complete setup and management of your domain, hosting, and cloud infrastructure.",
      fullDescription:
        "We handle everything from domain registration and SSL certification to cloud hosting and deployment. Using AWS " + 
        "(Lightsail, Amplify, S3, CloudFront, Route 53), we configure secure, scalable environments with automatic backups " + 
        "and performance optimization. This ensures your site or app remains reliable, fast, and protected. " + 
        "We also assist with DNS management, migration from existing hosts, and custom email configuration " + 
        "so your digital presence runs smoothly from day one."
    }
  ];

  const getOriginClass = (index: number) => {
    // 0 -> left, 1 -> center, 2 -> right
    return index === 0 ? 'origin-left' : index === 1 ? 'origin-center' : 'origin-right';
  };

  const handleOpenModal = (index: number) => {
    setIsModalClosing(false);
    setSelectedServiceIndex(index);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalClosing(true);
    // Re-enable body scroll
    document.body.style.overflow = '';
    setTimeout(() => {
      setSelectedServiceIndex(null);
      setIsModalClosing(false);
    }, 300); // Match animation duration
  };

  // Handle Escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedServiceIndex !== null) {
        setIsModalClosing(true);
        document.body.style.overflow = '';
        setTimeout(() => {
          setSelectedServiceIndex(null);
          setIsModalClosing(false);
        }, 300);
      }
    };

    if (selectedServiceIndex !== null) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedServiceIndex]);

  const selectedService = selectedServiceIndex !== null ? services[selectedServiceIndex] : null;

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-beige mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-orange">
            Comprehensive web solutions tailored to your needs
          </p>
        </div>

        {/* Mobile: Compact Cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleOpenModal(index)}
              className="bg-blue/50 backdrop-blur-sm rounded-2xl border border-beige/20 hover:border-orange/50 active:scale-95 transition-all duration-200 p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <div className="text-orange flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-beige">
                  {service.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Desktop: Interactive Hover Row */}
        <div className={`hidden md:flex md:flex-row ${hoveredIndex === null ? 'gap-8' : 'gap-0'} transition-all duration-700 ease-in-out`}>
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const hasHovered = hoveredIndex !== null;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={[
                  // Base visuals
                  'bg-blue/50 backdrop-blur-sm rounded-2xl border border-beige/20',
                  'hover:border-orange/50',
                  // Layout + animation
                  'transform transition-all duration-700 ease-in-out',
                  '[will-change:transform,opacity,flex-basis]',
                  // Fixed height to prevent vertical expansion
                  'h-[320px]',
                  // Overflow handling - allow scrolling in content area
                  'overflow-hidden',
                  // Directional expand origin
                  getOriginClass(index),
                  // Sizing logic
                  hasHovered
                    ? (isHovered
                      ? 'basis-full opacity-100 scale-100 z-10'
                      : 'basis-0 opacity-0 scale-95 pointer-events-none')
                    : 'basis-1/3 opacity-100 scale-100',
                  // Spacing
                  'p-8',
                  // Flex container for content
                  'flex flex-col'
                ].join(' ')}
              >
                <div className="text-center flex flex-col h-full">
                  <div className="text-orange mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-beige mb-4">
                    {service.title}
                  </h3>

                  {/* Summary (visible when collapsed) */}
                  <div className={`transition-all duration-700 ease-in-out overflow-hidden flex-shrink-0 ${isHovered ? 'max-h-0 opacity-0' : 'max-h-40 opacity-100'}`}>
                    <p className="text-beige/80 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Full Description (visible when expanded) */}
                  <div className={`transition-all duration-700 ease-in-out flex-1 overflow-y-auto ${isHovered ? 'opacity-100' : 'opacity-0 max-h-0'}`}>
                    <p className="text-beige/80 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Modal */}
      {selectedServiceIndex !== null && selectedService && (
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
            className={`relative bg-blue/98 backdrop-blur-md rounded-2xl border border-orange/50 shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden ${
              isModalClosing ? 'animate-scaleOut' : 'animate-scaleIn'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-beige/20">
              <div className="flex items-center gap-4">
                <div className="text-orange">
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-bold text-beige">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-beige hover:text-orange active:scale-95 transition-all duration-200 p-2 rounded-full hover:bg-beige/10"
                aria-label="Close modal"
              >
                <FaTimes size="24" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              <p className="text-beige/90 leading-relaxed text-base">
                {selectedService.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
