
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
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

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 100; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Mouse interaction
        const dx = mousePosition.x * canvas.width - particle.x;
        const dy = mousePosition.y * canvas.height - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.x += dx * force * 0.01;
          particle.y += dy * force * 0.01;
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

        // Draw connections
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

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
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: elementsOpacity * 0.6 }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl"
          style={{
            top: '10%',
            right: '10%',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-100/15 to-orange-100/15 blur-3xl"
          style={{
            bottom: '15%',
            left: '15%',
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }}
      />
      
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
        
        {/* Subtle underline animation */}
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

      {/* Interactive cursor follower */}
      <div 
        className="absolute w-4 h-4 rounded-full bg-black/20 pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x * window.innerWidth - 8,
          top: mousePosition.y * window.innerHeight - 8,
          opacity: elementsOpacity * 0.6
        }}
      />
    </section>
  );
};

export default HeroSection;
