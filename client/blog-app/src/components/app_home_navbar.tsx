import React from 'react';
import Logo from './Logo';
import AppButton from './app_button';
import AppTextButton from './app_text_button';

const AppHomeNavbar: React.FC = () => {
  return (
    <nav className="bg-purple-100 px-20 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <Logo />
        <span className="text-2xl text-purple-900 font-bold">BlogApp</span>
      </div>
      <div className="flex space-x-6">
        <AppTextButton text="Our Journey" to="/about" />
        <AppTextButton text="Membership" to="/membership" />
        <AppTextButton text="Publish" to="/publish" />
        <AppTextButton text="Sign In" to="/login" />
        <AppButton text="Join Us" to="/signup" />
      </div>
    </nav>
  );
};

export default AppHomeNavbar;
