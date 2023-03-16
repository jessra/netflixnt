import React from 'react';

export const themes = {
  light: {
    background: '#FFFFFF',
    color: '#000000',
  },
  dark: {
    background: '#1A1A1A',
    color: '#FFFFFF',
  },
};

export const ThemeContext = React.createContext(themes.light);
