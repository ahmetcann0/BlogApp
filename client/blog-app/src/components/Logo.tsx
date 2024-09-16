import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/scheduler_icon.png'; // Ensure the path to your image is correct

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="Scheduler Logo" className="w-16 h-16" />
    </Link>
  );
}

export default Logo;
