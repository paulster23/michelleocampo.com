import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 40, height = 40, color = 'currentColor' }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 32V8L20 24L34 8V32"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
