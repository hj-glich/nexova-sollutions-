
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  title?: string;
  taglinePrefix?: string;
  taglineEmphasis?: string;
  scrollText?: string;
  rightText?: string;
  scrollElementId?: string;
}

const HeroSection = ({
  title = "NexOva",
  taglinePrefix = "Bringing brands to life through",
  taglineEmphasis = "creative web solutions",
  scrollText = "Scroll to Explore",
  rightText = "Featured Projects",
  scrollElementId = "services-section"
}: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const handleScrollEffect = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScrollEffect);
    
    // Set loaded to true after component mounts to trigger animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScrollEffect);
      clearTimeout(timer);
    };
  }, []);
  
  const scrollToElement = () => {
    const targetElement = document.getElementById(scrollElementId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const scrollPercentage = Math.min(1, scrollY / window.innerHeight);
  const elementsOpacity = Math.max(0, 1 - scrollPercentage * 2.5);
  
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-[#e5e5e5] overflow-hidden">
      <div 
        className={`flex w-full max-w-7xl mx-auto justify-between items-start px-8 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ opacity: elementsOpacity, transitionDelay: '200ms' }}
      >
        <span className="text-sm">Welcome</span>
        <span className="text-sm">Est. 2025</span>
      </div>
      
      <div className="w-full max-w-7xl mx-auto my-4 flex flex-col justify-center px-8">
        <h1 
          className={`text-[15vw] md:text-[15vw] lg:text-[15vw] font-display font-bold text-center leading-none tracking-tighter transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            letterSpacing: '-0.05em',
            color: 'black',
            transitionDelay: '400ms'
          }}
        >
          {title}
        </h1>
      </div>

      <div className="absolute bottom-32 left-0 right-0">
        <div className="max-w-3xl mx-auto text-center px-8">
          <h2 
            className={`text-xl md:text-2xl font-medium transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            {taglinePrefix}
          </h2>
          <p 
            className={`text-xl md:text-2xl font-display italic transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            {taglineEmphasis}
          </p>
        </div>
      </div>

      <div 
        className={`absolute bottom-10 left-10 flex items-center space-x-2 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ opacity: elementsOpacity, transitionDelay: '1000ms' }}
      >
        <button onClick={scrollToElement} className="flex items-center space-x-2 group">
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          <span className="text-sm font-medium">{scrollText}</span>
        </button>
      </div>

      <div 
        className={`absolute bottom-10 right-10 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ opacity: elementsOpacity, transitionDelay: '1000ms' }}
      >
        <span className="text-sm font-medium">{rightText}</span>
      </div>
    </section>
  );
};

export default HeroSection;
