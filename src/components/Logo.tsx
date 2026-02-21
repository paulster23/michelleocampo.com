import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-current"
    >
      {/* Simple M monogram */}
      <path
        d="M10 10L18 18L26 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M26 10V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Thin circular border */}
      <circle
        cx="18"
        cy="18"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};

export default Logo;
