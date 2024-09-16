import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHomeNavbar from './app_home_navbar';

const AppLayout: React.FC = () => {
  return (
    <div>
      <AppHomeNavbar /> {/* Static Navbar */}
      <main className="pt-4"> {/* Margin to avoid overlap with Navbar */}
        <Outlet /> {/* Dynamic content */}
      </main>
    </div>
  );
};

export default AppLayout;
