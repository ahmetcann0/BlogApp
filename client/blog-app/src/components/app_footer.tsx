import React from "react";
import AppFooterLinks from "./app_footer_links";

const AppFooter: React.FC = () => {
  return (
    <footer className="bg-slate-100 py-5 text-center">
      <AppFooterLinks text="Help" to="/help" />
      <AppFooterLinks text="Status" to="/status" />
      <AppFooterLinks text="About" to="/about" />
      <AppFooterLinks text="Careers" to="/careers" />
      <AppFooterLinks text="Press" to="/press" />
      <AppFooterLinks text="Blog" to="/blog" />
      <AppFooterLinks text="Privacy" to="/privacy" />
      <AppFooterLinks text="Terms" to="/terms" />
      <AppFooterLinks text="Text to Speech" to="/text-to-speech" />
      <AppFooterLinks text="Teams" to="/teams" />
    </footer>
  );
};

export default AppFooter;
