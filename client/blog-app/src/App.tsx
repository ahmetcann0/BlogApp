// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/app_layout';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Publish from './pages/Publish';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="membership" element={<Membership />} />
          <Route path="publish" element={<Publish />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
