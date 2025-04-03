
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { name: 'Index', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'About', url: '/about' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${
      scrolled ? 'bg-nexova-light/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <Link to="/" className="text-black flex items-center">
        <span className="font-display text-xl font-medium">NexOva™</span>
      </Link>
      
      <div className="flex items-center space-x-10 font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.url}
            className={`relative px-2 py-1 text-sm transition-colors ${
              location.pathname === item.url ? 'text-black bg-black/10 rounded-md' : 'text-black/70 hover:text-black'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      
      <Link 
        to="/contact" 
        className="border border-black rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
      >
        Let's Talk
      </Link>
    </nav>
  );
};

export default NavBar;
