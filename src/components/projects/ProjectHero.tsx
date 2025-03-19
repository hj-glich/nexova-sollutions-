
import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const ProjectHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveContainerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScrollEffect = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScrollEffect);
    return () => window.removeEventListener('scroll', handleScrollEffect);
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current || !waveContainerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = waveContainerRef.current.offsetWidth;
    let height = waveContainerRef.current.offsetHeight;
    let mouseX = width / 2;
    let mouseY = height / 2;
    
    const resizeCanvas = () => {
      if (!waveContainerRef.current) return;
      width = waveContainerRef.current.offsetWidth;
      height = waveContainerRef.current.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Wave {
      x: number;
      y: number;
      radius: number;
      color: string;
      originalRadius: number;
      originalX: number;
      originalY: number;
      angle: number;
      
      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.originalRadius = radius;
        this.originalX = x;
        this.originalY = y;
        this.angle = Math.random() * Math.PI * 2;
      }
      
      draw() {
        if (!ctx) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        const dx = mouseX - this.originalX;
        const dy = mouseY - this.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        this.angle += 0.02;
        this.x = this.originalX + Math.sin(this.angle) * 20;
        this.y = this.originalY + Math.cos(this.angle) * 20;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          this.x -= dx * force * 0.05;
          this.y -= dy * force * 0.05;
          this.radius = this.originalRadius * (1 + force * 0.3);
        } else {
          this.radius = this.originalRadius;
        }
        
        this.draw();
      }
    }
    
    const waves: Wave[] = [];
    const colors = ['rgba(155, 135, 245, 0.2)', 'rgba(126, 105, 171, 0.15)', 'rgba(214, 188, 250, 0.1)'];
    
    const createWaves = () => {
      waves.length = 0;
      const spacing = 70;
      
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const radius = Math.random() * 2 + 2;
          const colorIndex = Math.floor(Math.random() * colors.length);
          waves.push(new Wave(x, y, radius, colors[colorIndex]));
        }
      }
    };
    
    createWaves();
    window.addEventListener('resize', createWaves);
    
    const trackMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    document.addEventListener('mousemove', trackMouse);
    
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      waves.forEach(wave => wave.update());
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', createWaves);
      document.removeEventListener('mousemove', trackMouse);
    };
  }, []);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-grid');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const scrollPercentage = Math.min(1, scrollY / window.innerHeight);
  
  const titleOpacity = Math.max(0.3, 1 - scrollPercentage * 1.5);
  const elementsOpacity = Math.max(0, 1 - scrollPercentage * 2.5);
  const taglineOpacity = Math.max(0, 1 - scrollPercentage * 2);
  
  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div ref={waveContainerRef} className="absolute inset-0 -z-10 bg-nexova-light">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>
      
      <div 
        className="flex w-full max-w-7xl mx-auto justify-between items-start animate-fade-in" 
        style={{ 
          opacity: elementsOpacity,
          transition: 'opacity 0.5s ease',
        }}>
        <span className="text-sm">Featured</span>
        <span className="text-sm">Since 2025</span>
      </div>
      
      <div 
        className="w-full max-w-7xl mx-auto my-8 flex flex-col justify-center transition-all duration-700 ease-out z-10" 
        style={{ 
          opacity: titleOpacity,
          transition: 'opacity 0.5s ease',
        }}
      >
        <h1 
          className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-bold text-center leading-none tracking-tighter animate-fade-up"
          style={{
            animationDelay: '0.3s',
            letterSpacing: '-0.03em',
            color: 'black',
          }}
        >
          Projects
        </h1>
      </div>

      <div 
        className="absolute bottom-20 left-0 right-0 transition-all duration-500" 
        style={{ 
          opacity: taglineOpacity,
          transition: 'opacity 0.5s ease',
        }}
      >
        <div 
          className="max-w-3xl mx-auto text-center animate-fade-up" 
          style={{
            animationDelay: '0.6s'
          }}
        >
          <h2 className="text-xl md:text-2xl font-medium mb-2">
            Transforming ideas into
          </h2>
          <p className="text-xl md:text-2xl font-display italic">
            exceptional digital experiences
          </p>
        </div>
      </div>

      <div 
        className="absolute bottom-10 left-10 flex items-center space-x-2 animate-fade-in" 
        style={{ 
          opacity: elementsOpacity,
          transition: 'opacity 0.5s ease',
          animationDelay: '0.9s',
        }}
      >
        <button onClick={scrollToProjects} className="flex items-center space-x-2 group">
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform scroll-indicator" />
          <span className="text-sm font-medium">Explore Our Work</span>
        </button>
      </div>

      <div 
        className="absolute bottom-10 right-10 animate-fade-in" 
        style={{ 
          opacity: elementsOpacity,
          transition: 'opacity 0.5s ease',
          animationDelay: '0.9s',
        }}
      >
        <div className="flex items-center space-x-6">
          <div>
            <span className="text-sm font-medium"></span>
            <p className="text-xs text-muted-foreground"></p>
          </div>
          <span className="text-sm font-medium">Browse Categories</span>
        </div>
      </div>

      <div
        className="absolute bottom-24 right-24 w-6 h-6 rounded-full bg-black fade-to-bg"
        style={{
          opacity: elementsOpacity,
        }}
      />
    </section>
  );
};

export default ProjectHero;
