
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
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.03] overflow-hidden"
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
            width="100"
            height="100"
            patternTransform="scale(2) rotate(0)"
          >
            <g fill="none" stroke={isContactPage ? '#ffffff' : '#000000'} strokeWidth="1">
              <path d="M20,20 Q30,5 40,20 T60,20" />
              <circle cx="40" cy="50" r="10" />
              <line x1="70" y1="30" x2="90" y2="50" />
              <rect x="10" y="60" width="15" height="15" />
              <path d="M60,70 L65,80 L70,70 Z" />
              <path d="M80,80 C85,85 90,85 90,80" />
              <path d="M15,40 C20,35 25,35 30,40" />
              <path d="M85,15 Q90,10 95,15" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
      </svg>
    </div>
  );
};

export default DoodleBackground;
