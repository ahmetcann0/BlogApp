import React from "react";
import { useNavigate } from 'react-router-dom';


interface AppTextButtonProps{
    text: string;
    to: string; 
    className?: string;

}

const AppTextButton: React.FC<AppTextButtonProps> = ({ text, to, className }) => {

    const navigate = useNavigate();

    return (
        <button
          onClick={() => navigate(to)} 
          className={`px-6 py-2 ${className}`}
        >
          {text}
        </button>
      );
    };
    
    export default AppTextButton;