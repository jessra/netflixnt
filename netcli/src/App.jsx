import Router from './router/router.jsx';
import './fontawesome';
import React, { useState } from 'react';
import { ThemeContext, themes } from './context/ThemeContex';
import { DarkModeButton } from './components/DarkmodeButton/DarkModeButton.jsx';
export default function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        {/* ESto se debe estilizar mejo */}
        <DarkModeButton toggleTheme={toggleTheme} />
        <Router />
      </ThemeContext.Provider>
      ;
    </>
  );
}
