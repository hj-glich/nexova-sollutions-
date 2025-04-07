
import { useEffect, useState, useRef } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.title = "NexOva | Creative Web Solutions";
    
    // Enhanced animation sequence for initial load
    const body = document.body;
    body.style.opacity = '0';
    
    setTimeout(() => {
      body.style.transition = 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      body.style.opacity = '1';
      setIsLoaded(true);
    }, 100);
    
    // Handle scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      body.style.opacity = '';
      body.style.transition = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll progress indicator
  const scrollProgress = Math.min(100, scrollY / (document.body.scrollHeight - window.innerHeight) * 100);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      
      {/* Fixed scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-purple-600" 
          style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }}
        ></div>
      </div>
      
      <main className="relative">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
      </main>
      
      <div ref={scrollRef} className="fixed bottom-8 right-8 z-30 flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
        <div className="text-xs font-medium">{Math.round(scrollProgress)}%</div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
