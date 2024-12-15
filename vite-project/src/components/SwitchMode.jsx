import React, { useState } from 'react';
import './ThemeSwitcher.css';  // Importing the CSS file for styling

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Apply the new theme to the body element
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`theme-button ${theme === 'light' ? 'light-button' : 'dark-button'}`}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
