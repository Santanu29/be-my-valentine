import React, { useRef } from "react";
import useRipple from "../useRipple";

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({ children, className, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Apply the ripple effect
  useRipple(buttonRef);

  return (
    <button ref={buttonRef} className={`ripple ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default RippleButton;
