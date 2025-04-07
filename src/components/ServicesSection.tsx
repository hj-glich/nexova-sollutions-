
import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services-section" ref={sectionRef} className="min-h-screen bg-[#e5e5e5] flex flex-col justify-center relative px-6 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-none">
            We're<br />
            NexOva -<br />
            <span className="font-normal">a digital</span><br />
            agency
          </h2>
        </div>
        
        <div className={`flex flex-col space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="rounded-2xl overflow-hidden aspect-video bg-black">
            <img alt="Digital creative work" className="w-full h-full object-cover opacity-80" src="https://i.postimg.cc/4yXNCbrL/main-logo.png" />
          </div>
          
          <div>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Crafting exceptional websites tailored to your vision, we blend creativity with functionality to deliver stunning digital experiences.
            </p>
            
            <div className="flex items-center">
              <a href="#" className="text-md font-medium relative group">
                Read More
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <div className="ml-3 w-6 h-6 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
