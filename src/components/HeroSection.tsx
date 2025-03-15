
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-nexova-light"></div>
      
      <div className="flex w-full max-w-7xl mx-auto justify-between items-start">
        <span className="text-sm text-muted-foreground animate-fade-in">Welcome</span>
        <span className="text-sm text-muted-foreground animate-fade-in">Est. 2025</span>
      </div>
      
      <div className="w-full max-w-7xl mx-auto my-8 flex flex-col justify-center">
        <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-bold text-center leading-none tracking-tighter animate-fade-up" style={{ animationDelay: '0.3s' }}>
          NexOva
        </h1>
      </div>

      <div className="absolute bottom-20 left-0 right-0">
        <div className="max-w-3xl mx-auto text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-xl md:text-2xl font-medium mb-2">
            Bringing brands to life through
          </h2>
          <p className="text-xl md:text-2xl font-display italic">
            creative web solutions
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.9s' }}>
        <button 
          onClick={scrollToExplore}
          className="flex items-center space-x-2 group"
        >
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform scroll-indicator" />
          <span className="text-sm font-medium">Scroll to Explore</span>
        </button>
      </div>

      <div className="absolute bottom-10 right-10 animate-fade-in" style={{ animationDelay: '0.9s' }}>
        <div className="flex items-center space-x-6">
          <div>
            <span className="text-sm font-medium">Activate Windows</span>
            <p className="text-xs text-muted-foreground">Go to Settings</p>
          </div>
          <span className="text-sm font-medium">Featured Projects</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
