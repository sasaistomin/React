import React, { useState } from 'react';
import Header from './components/header/header'; 
import Main from './components/main/main';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app-container ${isDark ? 'dark' : 'light'}`}>
      <Header toggleTheme={toggleTheme} isDark={isDark} />
      <Main />
    </div>
  );
}

export default App;