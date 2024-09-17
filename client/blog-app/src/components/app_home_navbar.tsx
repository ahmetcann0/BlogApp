import React, { useState } from 'react';
import Logo from './Logo';
import AppButton from './app_button';
import AppTextButton from './app_text_button';
import AppModal from './app_modal';

const AppHomeNavbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <nav className="bg-black px-40 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <span className="text-2xl text-purple-200 font-bold">BlogApp</span>
        </div>
        <div className="flex space-x-6">
          <AppTextButton text="Our Journey" to="/about" />
          <AppTextButton text="Membership" to="/membership" />
          <AppTextButton text="Publish" to="/publish" />
          <button onClick={openModal} className="text-white">Sign In</button>
          <AppButton text="Join Us" to="/signup" />
        </div>
      </nav>

      <AppModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default AppHomeNavbar;
