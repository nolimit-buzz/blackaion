import React from "react";

export const SeeMoreArrowIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg 
    viewBox="0 0 31 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="0.5" width="30" height="30" rx="15" fill="#02162B"/>
    <path d="M10 10L20 10M20 10L20 20M20 10L10 20" stroke="white" strokeWidth="0.995281" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 