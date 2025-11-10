import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HomeSection: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Site Logo */}
        <div 
          className={`mb-8 transition-all duration-700 ease-in-out ${
            isVisible 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 translate-y-8'
          }`}
        >
          <img 
            src="/Misowebs_Logo_Animated.gif" 
            alt="Misowebs Logo"
            className="h-82 w-82 mx-auto rounded-2xl shadow-2xl bg-beige"
          />
        </div>
        
        {/* Subtitle */}
        <h2 
          className={`text-2xl text-orange mb-8 font-semibold transition-all duration-700 ease-in-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Professional Web Development & Digital Solutions
        </h2>
        
        {/* Paragraph */}
        <p 
          className={`text-xl text-beige leading-relaxed max-w-3xl mx-auto transition-all duration-700 ease-in-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          We specialize in creating modern, responsive websites and web applications that help businesses 
          establish a strong online presence. From static websites to complex web applications, 
          we deliver solutions that are both beautiful and functional.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
