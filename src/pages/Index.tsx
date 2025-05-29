
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "NexOva Creative Studio | Coming Soon";
    
    // Animation sequence for initial load
    const body = document.body;
    body.style.opacity = '0';
    
    setTimeout(() => {
      body.style.transition = 'opacity 1s ease-out';
      body.style.opacity = '1';
      setLoaded(true);
    }, 100);
    
    return () => {
      body.style.opacity = '';
      body.style.transition = '';
    };
  }, []);

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className={`mb-12 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4">
            NexOva
          </h1>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Coming Soon Message */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-lg mx-auto leading-relaxed">
            We're crafting something extraordinary. Our creative studio is preparing to bring brands to life through innovative web solutions.
          </p>
        </div>

        {/* Get in Touch Button */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            onClick={handleGetInTouch}
            className="bg-black text-white hover:bg-black/80 px-8 py-3 text-lg font-medium"
          >
            Get in Touch
          </Button>
        </div>

        {/* Footer */}
        <div className={`pt-8 border-t border-black/20 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-black/60 text-sm">
            &copy; 2014 NexOva Creative Studio. Est. 2014
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
