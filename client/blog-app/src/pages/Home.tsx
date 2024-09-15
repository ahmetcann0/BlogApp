// src/pages/Home.jsx
import React from 'react';
import Logo from '../components/Logo';

function Home() {
  return (
    <main>
      <nav className="bg-purple-100 px-20 py-2 flex items-center justify-between ">
        <div className="flex items-center">
          <Logo /> {}
          <span className="text-2xl text-purple-900 font-bold ">BlogApp</span>
        </div>
        <div className="flex space-x-6">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      </nav>
    </main>
  );
}

export default Home;
