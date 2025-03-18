
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Calendar, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

const ProjectCard = ({ title, description, category, image, delay = 0 }) => (
  <motion.div 
    className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
  >
    <div className="aspect-video w-full overflow-hidden bg-muted">
      {image ? (
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-neutral-200 to-neutral-300 object-cover" />
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{category}</span>
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          2025
        </span>
      </div>
      <h3 className="mt-3 text-xl font-display font-semibold">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>3 months</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>Team of 4</span>
          </div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Velocity Commerce Platform",
      description: "A modern e-commerce solution with integrated analytics and customer behavior tracking for improved conversion rates.",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "MindfulTech Dashboard",
      description: "A wellness application dashboard featuring meditation tracking, mood journaling, and personalized recommendations.",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "EcoTrack Mobile App",
      description: "A sustainability platform that helps users track and reduce their carbon footprint with gamification elements.",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "MetroGo Transit Portal",
      description: "A public transportation solution that integrates real-time scheduling, route planning, and community feedback.",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "ArtisanLink Marketplace",
      description: "A peer-to-peer marketplace connecting artisans with customers, featuring secure transactions and creator stories.",
      category: "Marketplace",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "FinVision Analytics Suite",
      description: "A financial analytics platform with personalized insights, investment tracking, and goal setting features.",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <ProjectHero />
        <div className="px-6 md:px-8 py-16" id="projects-grid">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Featured Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Browse our latest work showcasing our expertise in design and development.
              </p>
            </motion.div>

            <div className="flex items-center justify-between mb-8">
              <motion.div
                className="flex gap-2 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <button className="rounded-full bg-primary text-primary-foreground px-4 py-1 text-sm">All</button>
                <button className="rounded-full bg-muted text-muted-foreground px-4 py-1 text-sm">Web</button>
                <button className="rounded-full bg-muted text-muted-foreground px-4 py-1 text-sm">Mobile</button>
                <button className="rounded-full bg-muted text-muted-foreground px-4 py-1 text-sm">Design</button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  title={project.title} 
                  description={project.description} 
                  category={project.category}
                  image={project.image}
                  delay={index * 0.1 + 0.3}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
