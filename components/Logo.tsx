import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 160 56" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Johnson Technology Services Logo"
    >
      {/* Main Container Border & Background */}
      <rect x="1" y="1" width="158" height="54" rx="4" fill="white" stroke="#1E6BFF" strokeWidth="2" />
      
      {/* Left Blue Section Background */}
      <path d="M1 5C1 2.79086 2.79086 1 5 1H64V55H5C2.79086 55 1 53.2091 1 51V5Z" fill="#1E6BFF" />
      
      {/* Text JTS in Right Section */}
      <text 
        x="112" 
        y="39" 
        textAnchor="middle" 
        fill="#1E6BFF" 
        fontFamily="Inter, sans-serif" 
        fontWeight="700" 
        fontSize="34"
        letterSpacing="-1"
      >
        JTS
      </text>

      {/* Icon Group - White on Blue Background */}
      <g transform="translate(14, 13)">
         {/* Cloud Outline */}
         <path 
           d="M7 20C2 20 0 17 0 13C0 9.5 2.5 7 6 7C6.5 3 9.5 0 14 0C19 0 22.5 3.5 23 8C26 8.5 28 11 28 14C28 17.5 25.5 20 22 20" 
           stroke="white" 
           strokeWidth="2.5" 
           strokeLinecap="round" 
           strokeLinejoin="round"
           fill="none"
         />
         
         {/* Circuit Nodes/Lines inside */}
         <circle cx="14" cy="10" r="2" fill="white" />
         <path d="M14 10L19 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
         <circle cx="19" cy="14" r="2" fill="white" />
         
         <path d="M14 10L9 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
         <circle cx="9" cy="14" r="2" fill="white" />

         {/* Speed/Data lines at bottom left */}
         <path d="M0 25H18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
         <path d="M0 30H12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default Logo;