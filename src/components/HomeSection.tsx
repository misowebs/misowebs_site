import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Site Logo */}
        <div className="mb-8">
          <img 
            src="/Misowebs_Logo_Animated.gif" 
            alt="Misowebs Logo"
            className="h-82 w-82 mx-auto rounded-2xl shadow-2xl bg-beige"
          />
        </div>
        
        {/* Subtitle */}
        <h2 className="text-2xl text-orange mb-8 font-semibold">
          Professional Web Development & Digital Solutions
        </h2>
        
        {/* Paragraph */}
        <p className="text-xl text-beige leading-relaxed max-w-3xl mx-auto">
          We specialize in creating modern, responsive websites and web applications that help businesses 
          establish a strong online presence. From static websites to complex web applications, 
          we deliver solutions that are both beautiful and functional.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
