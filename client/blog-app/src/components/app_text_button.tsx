import React from "react";
import { useNavigate } from "react-router-dom";

interface AppTextButtonProps {
  text: string;
  to?: string;
  className?: string;
  onClick?: () => void;
}

const AppTextButton: React.FC<AppTextButtonProps> = ({
  text,
  to,
  className,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Trigger custom onClick if provided
    } else if (to) {
      navigate(to); // Navigate if 'to' is provided and no custom 'onClick' exists
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`md:text-sm to-black ${className}`}
    >
      {text}
    </button>
  );
};

export default AppTextButton;
