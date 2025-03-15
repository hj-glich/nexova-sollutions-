
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-6 px-8 transition-all duration-300 ease-in-out",
        scrolled ? "bg-nexova-light/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="text-xl font-display font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            NexOva™
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "navbar-item text-sm font-medium transition-all",
              activeSection === 'home' ? 'active' : ''
            )}
          >
            Index
          </Link>
          <Link 
            to="/projects" 
            className={cn(
              "navbar-item text-sm font-medium transition-all",
              activeSection === 'projects' ? 'active' : ''
            )}
          >
            Projects
          </Link>
          <Link 
            to="/agency" 
            className={cn(
              "navbar-item text-sm font-medium transition-all",
              activeSection === 'agency' ? 'active' : ''
            )}
          >
            Agency
          </Link>
          <Link 
            to="/resources" 
            className={cn(
              "navbar-item text-sm font-medium transition-all",
              activeSection === 'resources' ? 'active' : ''
            )}
          >
            Resources
          </Link>
        </nav>

        <Link 
          to="/contact" 
          className="rounded-full border border-black px-6 py-2 text-sm font-medium transition-all hover:bg-black hover:text-white"
        >
          Let's Talk
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
