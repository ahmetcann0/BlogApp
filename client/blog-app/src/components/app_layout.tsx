// src/components/AppLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import AppHomeNavbar from "./app_home_navbar";
import AppFooter from "./app_footer";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <AppHomeNavbar />
      <hr className="border-black" /> {/* Yatay çizgi */}
      <main className="flex-grow mt-24 bg-slate-100">
        {" "}
        {/* Main content area */}
        <Outlet /> {/* Dynamic content */}
      </main>
      <hr className="border-black" /> {/* Yatay çizgi */}
      <AppFooter></AppFooter>
    </div>
  );
};

export default AppLayout;
