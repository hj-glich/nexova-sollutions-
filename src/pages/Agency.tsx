
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import DoodleBackground from '@/components/DoodleBackground';

const Agency = () => {
  const [contentLoaded, setContentLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 600); // Delay content animation until after hero animation
    
    return () => clearTimeout(timer);
  }, []);
  
  const heroConfig = {
    title: "Agency",
    taglinePrefix: "Building brands with",
    taglineEmphasis: "purpose and precision",
    scrollText: "Discover Our Agency",
    rightText: "Expertise",
    scrollElementId: "agency-content"
  };

  return (
    <div className="min-h-screen">
      <DoodleBackground />
      <NavBar />
      <main>
        <HeroSection
          title={heroConfig.title}
          taglinePrefix={heroConfig.taglinePrefix}
          taglineEmphasis={heroConfig.taglineEmphasis}
          scrollText={heroConfig.scrollText}
          rightText={heroConfig.rightText}
          scrollElementId={heroConfig.scrollElementId}
        />
        
        <div className="pt-16 px-8 pb-16" id="agency-content">
          <div className="max-w-7xl mx-auto">
            <h1 className={`text-5xl md:text-6xl font-display font-bold mb-12 transition-all duration-1000 ease-out ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Agency
            </h1>
            <p className={`text-lg max-w-2xl transition-all duration-1000 ease-out ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
               style={{ transitionDelay: '200ms' }}>
              Coming soon. We're currently working on our agency page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agency;
