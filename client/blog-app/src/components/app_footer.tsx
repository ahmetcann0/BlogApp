// src/components/AppFooter.tsx
import React from 'react';

const AppFooter: React.FC = () => {
  return (
    <footer className="bg-purple-100 py-3 text-center">
      <p className="text-gray-700">&copy; {new Date().getFullYear()} BlogApp. All rights reserved.</p>
    </footer>
  );
};

export default AppFooter;
