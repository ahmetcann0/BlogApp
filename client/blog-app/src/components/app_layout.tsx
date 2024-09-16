// src/components/AppLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHomeNavbar from './app_home_navbar';
import AppFooter from './app_footer';

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHomeNavbar /> {/* Static Navbar */}
      <main className="flex-grow"> {/* Main content area */}
        <Outlet /> {/* Dynamic content */}
      </main>
      <AppFooter /> {/* Static Footer */}
    </div>
  );
};

export default AppLayout;
