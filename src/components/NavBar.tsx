
import { Home, Briefcase, FileText, Rocket } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TubelightNavBar } from './ui/tubelight-navbar';

const NavBar = () => {
  const location = useLocation();
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
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <>
      <TubelightNavBar items={navItems} className="sm:top-6" />
      <div className="fixed top-8 right-8 z-50">
        <Link 
          to="/contact" 
          className="rounded-full border border-black px-6 py-2 text-sm font-medium transition-all hover:bg-black hover:text-white backdrop-blur-md bg-background/5"
        >
          Let's Talk
        </Link>
      </div>
    </>;
};

export default NavBar;
