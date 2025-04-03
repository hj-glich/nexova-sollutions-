
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
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
  
  // Check if current page is Contact page
  const isContactPage = location.pathname === '/contact';
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${
      scrolled ? 'bg-nexova-light/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <Link to="/" className={`${isContactPage ? 'text-white' : 'text-black'} flex items-center`}>
        <span className="font-display text-xl font-medium">NexOva™</span>
      </Link>
      
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`${isContactPage ? 'text-white hover:bg-white/20' : 'text-black hover:bg-black/20'}`}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[240px] sm:w-[300px]">
            <div className="py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`px-2 py-2 text-foreground text-lg font-medium ${
                    location.pathname === item.url 
                      ? 'bg-accent rounded-md'
                      : 'hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className={`border rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  isContactPage 
                    ? 'border-foreground text-foreground hover:bg-foreground hover:text-background' 
                    : 'border-foreground text-foreground hover:bg-foreground hover:text-background'
                } mt-4 flex items-center justify-center`}
              >
                Let's Talk
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <>
          <div className="flex items-center space-x-10 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                className={`relative px-2 py-1 text-sm transition-colors ${
                  location.pathname === item.url 
                    ? isContactPage
                      ? 'text-white bg-white/20 rounded-md'
                      : 'text-black bg-black/10 rounded-md'
                    : isContactPage
                      ? 'text-white/70 hover:text-white'
                      : 'text-black/70 hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Link 
            to="/contact" 
            className={`border rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              isContactPage 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Let's Talk
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
