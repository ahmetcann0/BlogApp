// src/components/Logo.jsx
import React from 'react';
import logo from '../assets/scheduler_icon.png'; // Görselin doğru yolu

const Logo = () => {
  return (
    <img src={logo} alt="Scheduler Logo" className="w-16 h-16" />
  );
}

export default Logo;
