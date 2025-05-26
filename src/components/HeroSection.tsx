
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

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const lastFrameTime = useRef<number>(0);
  
  useEffect(() => {
    const handleScrollEffect = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScrollEffect, { passive: true });
    
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScrollEffect);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Reduced particle count for better performance
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000)); // Adaptive count
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.2 + 0.05
        });
      }
    };

    initParticles();

    const animate = (currentTime: number) => {
      // Throttle to 60fps max
      if (currentTime - lastFrameTime.current < 16) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with reduced complexity
      particlesRef.current.forEach((particle) => {
        // Simplified mouse interaction
        const dx = mousePosition.x * canvas.width - particle.x;
        const dy = mousePosition.y * canvas.height - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) {
          const force = (80 - distance) / 80 * 0.005;
          particle.x += dx * force;
          particle.y += dy * force;
        }

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`;
        ctx.fill();
      });

      // Simplified connection drawing - only draw a few connections
      for (let i = 0; i < particlesRef.current.length; i += 3) {
        const particle = particlesRef.current[i];
        for (let j = i + 1; j < Math.min(i + 4, particlesRef.current.length); j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.05 * (1 - distance / 60)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);
  
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
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Smooth Surface Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* Subtle animated surface overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(0,0,0,0.02) 0%, transparent 50%),
            linear-gradient(45deg, transparent 25%, rgba(0,0,0,0.01) 25%, rgba(0,0,0,0.01) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.01) 75%)
          `,
          backgroundSize: '60px 60px',
          transition: 'background-position 0.3s ease-out',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      />

      {/* Optimized Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: elementsOpacity * 0.4 }}
      />

      {/* Floating geometric shapes - reduced and optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-50/30 to-purple-50/30 blur-3xl will-change-transform"
          style={{
            top: '15%',
            right: '15%',
            transform: `translate3d(${mousePosition.x * 15}px, ${mousePosition.y * 15}px, 0)`,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-50/20 to-orange-50/20 blur-3xl will-change-transform"
          style={{
            bottom: '20%',
            left: '20%',
            transform: `translate3d(${mousePosition.x * -10}px, ${mousePosition.y * -10}px, 0)`,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </div>
      
      <div 
        className={`flex w-full max-w-7xl mx-auto justify-between items-start px-8 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ opacity: elementsOpacity, transitionDelay: '200ms' }}
      >
        <div className="text-xs font-medium tracking-wider uppercase text-gray-400">Welcome</div>
        <div className="text-xs font-medium tracking-wider uppercase text-gray-400">Est. 2025</div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto my-4 flex flex-col justify-center px-8 relative z-10">
        <h1 
          className={`text-[12vw] md:text-[10vw] lg:text-[8vw] font-light text-center leading-none tracking-tight transition-all duration-1500 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{
            color: '#1a1a1a',
            transitionDelay: '400ms',
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          {title}
        </h1>
        
        <div 
          className={`w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent mx-auto mt-8 transition-all duration-1000 ${loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          style={{ transitionDelay: '800ms' }}
        />
      </div>

      <div className="absolute bottom-32 left-0 right-0">
        <div className="max-w-2xl mx-auto text-center px-8">
          <h2 
            className={`text-lg md:text-xl font-normal text-gray-600 mb-2 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            {taglinePrefix}
          </h2>
          <p 
            className={`text-lg md:text-xl font-light italic text-gray-800 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            {taglineEmphasis}
          </p>
        </div>
      </div>

      <div 
        className={`absolute bottom-8 left-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ opacity: elementsOpacity, transitionDelay: '1000ms' }}
      >
        <button 
          onClick={scrollToElement} 
          className="flex items-center space-x-3 group hover:bg-black/5 px-4 py-2 rounded-full transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-sm font-medium text-gray-600">{scrollText}</span>
        </button>
      </div>

      <div 
        className={`absolute bottom-8 right-8 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ opacity: elementsOpacity, transitionDelay: '1000ms' }}
      >
        <div className="text-right">
          <span className="text-sm font-medium text-gray-600">{rightText}</span>
          <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-transparent mt-2 ml-auto" />
        </div>
      </div>

      {/* Optimized cursor follower */}
      <div 
        className="absolute w-3 h-3 rounded-full bg-black/15 pointer-events-none transition-all duration-500 ease-out will-change-transform"
        style={{
          left: mousePosition.x * window.innerWidth - 6,
          top: mousePosition.y * window.innerHeight - 6,
          opacity: elementsOpacity * 0.4
        }}
      />
    </section>
  );
};

export default HeroSection;
