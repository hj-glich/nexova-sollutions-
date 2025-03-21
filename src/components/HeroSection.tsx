
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScrollEffect = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScrollEffect);
    return () => window.removeEventListener('scroll', handleScrollEffect);
  }, []);
  
  const scrollToExplore = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const scrollPercentage = Math.min(1, scrollY / window.innerHeight);
  const elementsOpacity = Math.max(0, 1 - scrollPercentage * 2.5);
  
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-[#e5e5e5] overflow-hidden">
      <div 
        className="flex w-full max-w-7xl mx-auto justify-between items-start px-8" 
        style={{ opacity: elementsOpacity }}
      >
        <span className="text-sm">Welcome</span>
        <span className="text-sm">Est. 2025</span>
      </div>
      
      <div className="w-full max-w-7xl mx-auto my-4 flex flex-col justify-center px-8">
        <h1 
          className="text-[15vw] md:text-[15vw] lg:text-[15vw] font-display font-bold text-center leading-none tracking-tighter"
          style={{
            letterSpacing: '-0.05em',
            color: 'black',
          }}
        >
          NexOva
        </h1>
      </div>

      <div className="absolute bottom-32 left-0 right-0">
        <div className="max-w-3xl mx-auto text-center px-8">
          <h2 className="text-xl md:text-2xl font-medium">
            Bringing brands to life through
          </h2>
          <p className="text-xl md:text-2xl font-display italic">
            creative web solutions
          </p>
        </div>
      </div>

      <div 
        className="absolute bottom-10 left-10 flex items-center space-x-2"
        style={{ opacity: elementsOpacity }}
      >
        <button onClick={scrollToExplore} className="flex items-center space-x-2 group">
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          <span className="text-sm font-medium">Scroll to Explore</span>
        </button>
      </div>

      <div 
        className="absolute bottom-10 right-10"
        style={{ opacity: elementsOpacity }}
      >
        <span className="text-sm font-medium">Featured Projects</span>
      </div>
    </section>
  );
};

export default HeroSection;
