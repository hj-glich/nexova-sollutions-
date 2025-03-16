
import { Home, Briefcase, FileText, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TubelightNavBar } from './ui/tubelight-navbar';

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [{
    name: 'Index',
    url: '/',
    icon: Home
  }, {
    name: 'Projects',
    url: '/projects',
    icon: Briefcase
  }, {
    name: 'Agency',
    url: '/agency',
    icon: Rocket
  }, {
    name: 'Resources',
    url: '/resources',
    icon: FileText
  }];
  
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
    <TubelightNavBar items={navItems} className={`sm:top-6 transition-all duration-500 ${scrolled ? 'sm:-translate-y-2' : ''}`} />
  );
};

export default NavBar;
