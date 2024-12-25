import React, { useState } from 'react';
import './ThemeSwitcher.css'; // Importing the CSS file for styling

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
    <button
      onClick={toggleTheme}
      className={`theme-button ${theme === 'light' ? 'light-button' : 'dark-button'}`}
    >
      {theme === 'light' ? (
        <i className="fa-solid fa-sun"></i> // Sun icon for light mode
      ) : (
        <i className="fa-solid fa-moon"></i> // Moon icon for dark mode
      )}
    </button>
  );
};

export default ThemeSwitcher;
