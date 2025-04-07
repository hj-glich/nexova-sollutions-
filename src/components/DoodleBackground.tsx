
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DoodleBackground = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.1] overflow-hidden"
      style={{ position: 'fixed' }}
      aria-hidden="true"
    >
      <svg 
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="doodle-pattern"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
            patternTransform="scale(1.5) rotate(0)"
          >
            <g fill="none" stroke={isContactPage ? '#ffffff' : '#000000'} strokeWidth="1.5">
              {/* Dots */}
              <circle cx="10" cy="10" r="2" fill={isContactPage ? '#ffffff' : '#000000'} />
              <circle cx="40" cy="10" r="2" fill={isContactPage ? '#ffffff' : '#000000'} />
              <circle cx="10" cy="40" r="2" fill={isContactPage ? '#ffffff' : '#000000'} />
              <circle cx="40" cy="40" r="2" fill={isContactPage ? '#ffffff' : '#000000'} />
              
              {/* Squares */}
              <rect x="22" y="22" width="6" height="6" fill={isContactPage ? '#ffffff' : '#000000'} />
              <rect x="5" y="22" width="4" height="4" fill={isContactPage ? '#ffffff' : '#000000'} />
              <rect x="40" y="22" width="4" height="4" fill={isContactPage ? '#ffffff' : '#000000'} />
              
              {/* Lines */}
              <line x1="15" y1="25" x2="20" y2="25" />
              <line x1="30" y1="25" x2="35" y2="25" />
              <line x1="25" y1="15" x2="25" y2="20" />
              <line x1="25" y1="30" x2="25" y2="35" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
      </svg>
    </div>
  );
};

export default DoodleBackground;
