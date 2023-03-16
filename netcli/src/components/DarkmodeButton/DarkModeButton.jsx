import React, { useState } from 'react';
import './index.css';
export const DarkModeButton = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };
  return (
    <button
      className={
        isDarkMode ? 'dark-mode-button button' : 'light-mode-button button'
      }
      onClick={handleToggleDarkMode}
    >
      {isDarkMode ? 'Change to Dark Mode' : 'Change to Light Mode'}
    </button>
  );
};
