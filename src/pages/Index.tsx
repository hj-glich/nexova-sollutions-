
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  
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

        {/* Contact Information */}
        <div className={`space-y-8 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-display font-medium mb-8">Get in Touch</h3>
          
          <div className="grid gap-6 md:grid-cols-3">
            <a 
              href="mailto:nexovadesigns@gmail.com" 
              className="flex flex-col items-center p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <Mail className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">Email</span>
              <span className="text-black/70 text-sm mt-1">nexovadesigns@gmail.com</span>
            </a>
            
            <a 
              href="tel:+94701058606" 
              className="flex flex-col items-center p-6 bg-white/50 rounded-lg hover:bg-white/70 transition-colors group"
            >
              <Phone className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm">Phone</span>
              <span className="text-black/70 text-sm mt-1">+94 70 105 8606</span>
            </a>
            
            <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg">
              <MapPin className="w-8 h-8 mb-3" />
              <span className="font-medium text-sm">Location</span>
              <span className="text-black/70 text-sm mt-1">Makola, Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-black/20 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-black/60 text-sm">
            &copy; 2014 NexOva Creative Studio. Est. 2014
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
