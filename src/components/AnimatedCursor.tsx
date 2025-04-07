
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
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
    // If on mobile, don't show custom cursor and keep default
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }

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

    // Mouse down effect
    const handleMouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 150);
    };

    // Check if hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'input' || 
        target.tagName.toLowerCase() === 'textarea' || 
        target.tagName.toLowerCase() === 'select' || 
        target.hasAttribute('role') && target.getAttribute('role') === 'button';
      
      setIsHovering(isInteractive);
    };

    // Start animation
    requestRef.current = requestAnimationFrame(animateCursor);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      
      // Clean up animation frame
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isMobile]);

  // If on mobile or cursor is hidden, don't render anything
  if (isMobile || hidden) return null;

  // Calculate cursor scale based on state
  const cursorScale = isClicking ? 'scale-75' : isHovering ? 'scale-150' : 'scale-100';
  const cursorOpacity = isHovering ? 'opacity-70' : 'opacity-100';

  return (
    <div 
      className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 ${
        isContactPage ? 'mix-blend-difference' : ''
      }`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Main cursor */}
      <div 
        className={`relative ${cursorScale} ${cursorOpacity} transition-all duration-200`}
      >
        {/* Outer ring */}
        <div 
          className={`absolute -inset-1 rounded-full opacity-30 blur-sm ${
            isContactPage ? 'bg-white' : 'bg-black'
          }`}
          style={{
            filter: isHovering ? 'blur(4px)' : 'blur(2px)',
            animation: isClicking ? 'pulse 0.5s ease-out' : 'none'
          }}
        ></div>
        
        {/* Main cursor circle */}
        <div 
          className={`relative w-6 h-6 rounded-full flex items-center justify-center border-2 ${
            isContactPage 
              ? 'bg-transparent border-white' 
              : 'bg-transparent border-black'
          } transition-all duration-300`}
        >
          {/* Inner dot pulse */}
          <div 
            className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              isContactPage ? 'bg-white' : 'bg-black'
            }`}
          ></div>
        </div>
        
        {/* Decorative dots */}
        <div 
          className={`absolute w-1 h-1 rounded-full -top-1 -right-1 ${
            isContactPage ? 'bg-white' : 'bg-black'
          }`}
        ></div>
        <div 
          className={`absolute w-1 h-1 rounded-full -bottom-1 -left-1 ${
            isContactPage ? 'bg-white' : 'bg-black'
          }`}
        ></div>
        
        {/* New trailing particle effects */}
        <div 
          className={`absolute w-1 h-1 rounded-full top-1 left-3 opacity-70 ${
            isContactPage ? 'bg-white' : 'bg-black'
          }`}
          style={{ transform: 'translateX(-6px) scale(0.8)', opacity: '0.5' }}
        ></div>
        <div 
          className={`absolute w-1 h-1 rounded-full top-3 left-1 opacity-50 ${
            isContactPage ? 'bg-white' : 'bg-black'
          }`}
          style={{ transform: 'translateX(-12px) scale(0.6)', opacity: '0.3' }}
        ></div>
      </div>
      
      {/* Click ripple effect */}
      {isClicking && (
        <div 
          className={`absolute inset-0 rounded-full animate-ping ${
            isContactPage ? 'bg-white' : 'bg-black'
          } opacity-30`}
          style={{ animation: 'ping 0.5s cubic-bezier(0, 0, 0.2, 1)' }}
        ></div>
      )}
    </div>
  );
};

export default AnimatedCursor;
