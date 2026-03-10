import React from 'react';

const Header = ({ toggleTheme, isDark }) => {
  return (
    <header className="header">
      <button className="theme-button" onClick={toggleTheme}>
        {isDark ? '☀️ ' : '🌙 '}
      </button>
    </header>
  );
};

export default Header;