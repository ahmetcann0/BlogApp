import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AppButtonProps {
  text: string;
  to: string; 
  className?: string;
}

const AppButton: React.FC<AppButtonProps> = ({ text, to, className }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)} 
      className={`px-6 py-2 bg-purple-600 text-white rounded-3xl hover:bg-purple-700 ${className}`}
    >
      {text}
    </button>
  );
};

export default AppButton;
