
import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      setMousePosition({ x, y });
    };
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Parallax effect calculations
  const moveX = mousePosition.x * 15; // Max 15px movement
  const moveY = mousePosition.y * 15; // Max 15px movement

  return (
    <section id="services-section" ref={sectionRef} className="min-h-screen bg-[#e5e5e5] flex flex-col justify-center relative px-6 py-24 bg-grain overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-purple-50/20 to-transparent opacity-70 rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-50/20 to-transparent opacity-50 rounded-tr-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <h2 
            className="text-6xl md:text-8xl font-display font-bold mb-8 leading-none"
            style={{
              transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`,
              transition: 'transform 0.3s ease'
            }}
          >
            We're<br />
            <span className="gradient-text">NexOva</span> -<br />
            <span className="font-normal">a digital</span><br />
            agency
          </h2>
        </div>
        
        <div className={`flex flex-col space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div 
            className="rounded-2xl overflow-hidden aspect-video bg-black glow relative"
            style={{
              transform: `translate(${-moveX * 1.2}px, ${-moveY * 1.2}px)`,
              transition: 'transform 0.3s ease'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
            <img alt="Digital creative work" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" src="https://i.postimg.cc/4yXNCbrL/main-logo.png" />
          </div>
          
          <div
            style={{
              transform: `translate(${-moveX * 0.8}px, ${-moveY * 0.8}px)`,
              transition: 'transform 0.3s ease'
            }}
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Crafting exceptional websites tailored to your vision, we blend creativity with functionality to deliver stunning digital experiences.
            </p>
            
            <div className="flex items-center">
              <a href="#" className="text-md font-medium relative group gradient-border">
                Read More
              </a>
              <div className="ml-3 w-6 h-6 rounded-full bg-black floating"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-black/10 opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-md rotate-45 border border-black/10 opacity-20"></div>
    </section>
  );
};

export default ServicesSection;
