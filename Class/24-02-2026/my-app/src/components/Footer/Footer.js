import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        © {currentYear} MyApp — учебный макет
      </div>
    </footer>
  );
};