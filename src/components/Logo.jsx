import React from 'react';

const Logo = ({ width = 180, height = 50, className = '' }) => {
  return (
    <div className={`logo ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 200 60" 
        xmlns="http://www.w3.org/2000/svg"
        alt="Tartupharma Medical Equipments Logo"
      >
        {/* Background */}
        <rect width="200" height="60" fill="#2c5aa0" rx="8"/>
        
        {/* Medical Cross Icon */}
        <g transform="translate(15, 15)">
          {/* Cross vertical bar */}
          <rect x="12" y="5" width="6" height="20" fill="white"/>
          {/* Cross horizontal bar */}
          <rect x="5" y="12" width="20" height="6" fill="white"/>
          {/* Circle background */}
          <circle cx="15" cy="15" r="14" fill="none" stroke="white" strokeWidth="2"/>
        </g>
        
        {/* Company Name */}
        <text x="50" y="25" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">
          TARTUPHARMA
        </text>
        <text x="50" y="40" fontFamily="Arial, sans-serif" fontSize="10" fill="#e8f4fd">
          Medical Equipments
        </text>
        <text x="50" y="52" fontFamily="Arial, sans-serif" fontSize="8" fill="#b8d4f0">
          Kenya
        </text>
      </svg>
    </div>
  );
};

export default Logo;
