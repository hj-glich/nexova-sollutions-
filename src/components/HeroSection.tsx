
import { ArrowDown } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScrollEffect = () => {
      setScrollY(window.scrollY);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('scroll', handleScrollEffect);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set loaded to true after component mounts to trigger animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScrollEffect);
      window.removeEventListener('mousemove', handleMouseMove);
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
  
  // Parallax effect calculations
  const moveX = mousePosition.x * 20; // Max 20px movement
  const moveY = mousePosition.y * 20; // Max 20px movement
  
  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col justify-center items-center bg-[#e5e5e5] overflow-hidden bg-grain">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute rounded-full w-[300px] h-[300px] bg-gradient-to-r from-purple-100/20 to-purple-200/20 blur-3xl"
          style={{ 
            top: '20%', 
            left: '15%', 
            transform: `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        ></div>
        <div 
          className="absolute rounded-full w-[250px] h-[250px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 blur-3xl"
          style={{ 
            top: '60%', 
            right: '10%', 
            transform: `translate(${moveX * 2}px, ${moveY * 2}px)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div 
        className={`flex w-full max-w-7xl mx-auto justify-between items-start px-8 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'} z-10`}
        style={{ opacity: elementsOpacity, transitionDelay: '200ms' }}
      >
        <span className="text-sm">Welcome</span>
        <span className="text-sm">Est. 2025</span>
      </div>
      
      <div className="w-full max-w-7xl mx-auto my-4 flex flex-col justify-center px-8 z-10">
        <h1 
          className={`text-[15vw] md:text-[15vw] lg:text-[15vw] font-display font-bold text-center leading-none tracking-tighter transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            letterSpacing: '-0.05em',
            transform: `translate(${moveX * 5}px, ${moveY * 5}px)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s, translate 1s',
            transitionDelay: '400ms'
          }}
        >
          {title}
        </h1>
      </div>

      <div className="absolute bottom-32 left-0 right-0 z-10">
        <div className="max-w-3xl mx-auto text-center px-8">
          <h2 
            className={`text-xl md:text-2xl font-medium transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            {taglinePrefix}
          </h2>
          <p 
            className={`text-xl md:text-2xl font-display italic gradient-text transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            {taglineEmphasis}
          </p>
        </div>
      </div>

      <div 
        className={`absolute bottom-10 left-10 flex items-center space-x-2 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} z-10`}
        style={{ opacity: elementsOpacity, transitionDelay: '1000ms' }}
      >
        <button onClick={scrollToElement} className="flex items-center space-x-2 group">
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform scroll-indicator" />
          <span className="text-sm font-medium">{scrollText}</span>
        </button>
      </div>

      <div 
        className={`absolute bottom-10 right-10 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} z-10`}
        style={{ opacity: elementsOpacity, transitionDelay: '1000ms' }}
      >
        <span className="text-sm font-medium gradient-border">{rightText}</span>
      </div>
      
      {/* Decorative dots */}
      <div className="absolute inset-0 bg-dots opacity-5 z-0"></div>
      
      {/* Decorative floating shapes */}
      <div 
        className="absolute w-8 h-8 rounded-full border border-black/20 z-[1]"
        style={{ 
          top: '20%', 
          right: '20%',
          transform: `translate(${-moveX * 3}px, ${-moveY * 3}px)`,
          transition: 'transform 0.3s ease'
        }}
      ></div>
      <div 
        className="absolute w-12 h-12 rounded-md border border-black/10 z-[1] rotate-45"
        style={{ 
          bottom: '30%', 
          left: '15%',
          transform: `translate(${moveX * 4}px, ${moveY * 4}px)`,
          transition: 'transform 0.3s ease'
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
