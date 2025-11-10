import React, { useState } from 'react';
import { FaRocket, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [valueClicked, setValueClicked] = useState<{ [key: number]: boolean }>({});
  const [valueHovering, setValueHovering] = useState<{ [key: number]: boolean }>({});

  const handleClick = () => {
    setIsClicked(true);
    // Brief shrink animation, then bounce back to hover state
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  const handleValueClick = (index: number) => {
    setValueClicked(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setValueClicked(prev => ({ ...prev, [index]: false }));
    }, 200);
  };

  const companyValues = [
    {
      icon: <FaRocket size="32" />,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
    },
    {
      icon: <FaUsers size="32" />,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision becomes reality."
    },
    {
      icon: <FaAward size="32" />,
      title: "Quality",
      description: "Every project is crafted with attention to detail and excellence in mind."
    },
    {
      icon: <FaLightbulb size="32" />,
      title: "Creativity",
      description: "We bring unique and innovative ideas to every project we undertake."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            className={`text-5xl font-bold text-beige mb-4 transition-all duration-700 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
          >
            About
          </h2>
          <p 
            className={`text-xl text-orange transition-all duration-700 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Your trusted partner in digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">        
          {/* Personal/Team Info */}
          <div 
            className={`transition-all duration-700 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-3xl font-bold text-beige mb-6">
              Meet the Team
            </h3>
            <div className="space-y-6">
              <a 
                href="/YulCastro" 
                className={`
                  block bg-blue/50 backdrop-blur-sm rounded-2xl p-6 border border-beige/20
                  cursor-pointer select-none no-underline
                  transform transition-all ease-in-out
                  ${isClicked ? 'duration-200 scale-100' : isHovering ? 'duration-300 scale-102 shadow-lg shadow-orange/20' : 'duration-300 scale-100'}
                `}
                onClick={handleClick}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/Headshot.jpeg" 
                    alt="Yul Castro" 
                    className="rounded-xl border-2 border-orange object-cover w-130"
                  />
                </div>
                <h4 className="text-xl font-bold text-beige mb-3">
                  Yul Castro
                </h4>
                <h4 className="text-xl font-bold text-beige mb-3">
                  Founder & Lead Developer
                </h4>
                <p className="text-xs md:text-base text-beige/80 leading-relaxed mb-4">
                Full-stack developer with hands-on experience designing, deploying, and maintaining web platforms on AWS. 
                Computer Science graduate from the University of Oklahoma.

                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium">
                    AWS
                  </span>
                  <span className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium">
                    HTML/CSS
                  </span>
                  <span className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm font-medium">
                    GitHub
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Company Story */}
          <div 
            className={`transition-all duration-700 ease-in-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-6'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <h3 className="text-3xl font-bold text-beige mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-beige/80 leading-relaxed text-left">
              <p>
              Misowebs was created from a passion for building meaningful digital experiences that connect design, 
              technology, and business impact. From community organizations to local enterprises, we help clients 
              establish a strong online presence that’s fast, reliable, and results-driven.
              </p>
              <p>
              Our mission is to craft modern, user-friendly websites and web applications that combine 
              functionality with thoughtful design. Using proven technologies and cloud infrastructure, we deliver 
              scalable solutions that empower businesses to grow confidently in the digital world.
              </p>
              <p>
              We specialize in WordPress, React, and AWS-based deployments, offering complete development, optimization, 
              and maintenance services tailored to each client’s goals.
              </p>
            </div>

            {/* Company Values */}
            <div>
              <h3 className="text-3xl font-bold text-beige mb-8 text-center">
                <br/>Our Values
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {companyValues.map((value, index) => (
                  <div 
                    key={index}
                    className={`
                      bg-blue/50 backdrop-blur-sm rounded-2xl p-6 border border-beige/20 text-center
                      cursor-pointer select-none
                      transform transition-all ease-in-out
                      ${valueClicked[index] ? 'duration-200 scale-100' : valueHovering[index] ? 'duration-300 scale-102 shadow-lg shadow-orange/20' : 'duration-300 scale-100'}
                      ${isVisible 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-90 translate-y-4'
                      }
                    `}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                    onClick={() => handleValueClick(index)}
                    onMouseEnter={() => setValueHovering(prev => ({ ...prev, [index]: true }))}
                    onMouseLeave={() => setValueHovering(prev => ({ ...prev, [index]: false }))}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleValueClick(index);
                      }
                    }}
                  >
                    <div className="text-orange mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold text-beige mb-3">
                      {value.title}
                    </h4>
                    <p className="text-xs md:text-base text-beige/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
