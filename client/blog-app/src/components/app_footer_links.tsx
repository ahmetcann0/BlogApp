import React from "react";
import { useNavigate } from "react-router-dom";

interface AppFooterLinksProps {
  text: string;
  to: string;
  className?: string;
}

const AppFooterLinks: React.FC<AppFooterLinksProps> = ({
  text,
  to,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`text-center mr-4 text-gray-500 md:text-sm ${className}`}
    >
      {text}
    </button>
  );
};

export default AppFooterLinks;
