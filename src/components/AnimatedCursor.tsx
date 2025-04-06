
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const location = useLocation();
  
  // Actual cursor position
  const cursorRef = useRef({ x: 0, y: 0 });
  // Target position (where the mouse is)
  const targetRef = useRef({ x: 0, y: 0 });
  // For animation frame
  const requestRef = useRef<number>();

  // Determine if we're on the contact page
  const isContactPage = location.pathname === '/contact';

  // Animation interpolation function
  const animateCursor = () => {
    // Calculate distance between current and target positions
    const dx = targetRef.current.x - cursorRef.current.x;
    const dy = targetRef.current.y - cursorRef.current.y;
    
    // Interpolation factor (0.1 = smooth, 0.5 = faster, less smooth)
    const speed = 0.1;
    
    // Update current position
    cursorRef.current.x += dx * speed;
    cursorRef.current.y += dy * speed;
    
    // Update state to trigger render
    setPosition({
      x: cursorRef.current.x,
      y: cursorRef.current.y
    });
    
    // Continue animation
    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    // Show custom cursor when mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      setHidden(false);
      // Update target position
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    // Hide cursor when mouse leaves window
    const handleMouseLeave = () => {
      setHidden(true);
    };

    // Show cursor when mouse enters window
    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Start animation
    requestRef.current = requestAnimationFrame(animateCursor);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      
      // Clean up animation frame
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
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
        transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
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
