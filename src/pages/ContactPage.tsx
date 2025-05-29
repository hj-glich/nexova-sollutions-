
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Contact - NexOva Creative Studio";
    
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

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Back Button */}
        <div className={`mb-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            onClick={handleGoBack}
            variant="ghost"
            className="text-black hover:bg-black/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Logo/Brand */}
        <div className={`mb-12 transition-all duration-1000 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Contact Information */}
        <div className={`space-y-8 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-black/70 mb-12">
            Ready to bring your vision to life? We'd love to hear from you.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <a 
                href="mailto:nexovacreativestudio@gmail.com" 
                className="flex flex-col items-center h-full"
              >
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-black/10 transition-colors">
                  <Mail className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-semibold text-lg mb-2">Email</span>
                <span className="text-black/70 text-sm leading-relaxed text-center">nexovacreativestudio@gmail.com</span>
              </a>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="flex flex-col items-center h-full">
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-black/10 transition-colors">
                  <Phone className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-semibold text-lg mb-2">Phone</span>
                <div className="space-y-1 text-center">
                  <a 
                    href="tel:+941058606" 
                    className="block text-black/70 text-sm hover:text-black transition-colors"
                  >
                    +94 10 58 606
                  </a>
                  <a 
                    href="tel:+94776617828" 
                    className="block text-black/70 text-sm hover:text-black transition-colors"
                  >
                    +94 77 661 7828
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="flex flex-col items-center h-full">
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-black/10 transition-colors">
                  <MapPin className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-semibold text-lg mb-2">Location</span>
                <span className="text-black/70 text-sm">Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-black/20 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-black/60 text-sm">
            &copy; 2014 NexOva Creative Studio. Est. 2014
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
