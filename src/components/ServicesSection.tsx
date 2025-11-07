import React from 'react';
import { FaCode, FaGlobe, FaServer } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  type Service = {
    icon: React.ReactNode;
    title: string;
    summary: string;
    fullDescription: string;
  };

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

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

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-beige mb-4">
            Our Services
          </h2>
          <p className="text-xl text-orange">
            Comprehensive web solutions tailored to your needs
          </p>
        </div>

        {/* Services Interactive Row */}
        <div className={`flex flex-col md:flex-row ${hoveredIndex === null ? 'gap-8' : 'gap-0'} transition-all duration-700 ease-in-out`}>
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
                      ? 'basis-full md:basis-full opacity-100 scale-100 z-10'
                      : 'basis-0 md:basis-0 opacity-0 scale-95 pointer-events-none')
                    : 'basis-full md:basis-1/3 opacity-100 scale-100',
                  // Spacing
                  'p-8',
                  // Flex container for content
                  'flex flex-col'
                ].join(' ')}
              >
                <div className="text-center md:text-center flex flex-col h-full">
                  <div className="text-orange mb-4 flex justify-center md:justify-center">
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
    </section>
  );
};

export default ServicesSection;
