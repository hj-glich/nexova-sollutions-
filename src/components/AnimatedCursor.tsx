
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const location = useLocation();

  // Determine if we're on the contact page
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    // Show custom cursor when mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      setHidden(false);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Hide cursor when mouse leaves window
    const handleMouseLeave = () => {
      setHidden(true);
    };

    // Show cursor when mouse enters window
    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (hidden) return null;

  return (
    <div 
      className={`fixed pointer-events-none z-[9999] transition-all duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${
        isContactPage ? 'mix-blend-difference' : ''
      }`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
      }}
    >
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        isContactPage ? 'bg-white' : 'bg-black'
      }`}>
        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
          isContactPage ? 'bg-black' : 'bg-white'
        }`}></div>
      </div>
    </div>
  );
};

export default AnimatedCursor;
