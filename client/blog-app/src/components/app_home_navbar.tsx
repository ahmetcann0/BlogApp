import React, { useState } from "react";
import AppButton from "./app_button";
import AppTextButton from "./app_text_button";
import AppModal from "./app_modal";

const AppHomeNavbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <nav className="px-36 bg-slate-100 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-3xl text-black font-bold">BlogApp</span>
        </div>
        <div className="flex space-x-6">
          <AppTextButton text="Our Journey" to="/about" />
          <AppTextButton text="Membership" to="/membership" />
          <AppTextButton text="Publish" to="/publish" />

          <AppTextButton text="Sign In" onClick={openModal} />

          <AppButton text="Get Started" to="/signup" />
        </div>
      </nav>

      <AppModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default AppHomeNavbar;
