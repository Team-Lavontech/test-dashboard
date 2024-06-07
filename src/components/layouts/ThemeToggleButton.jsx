import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeToggleButton() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light' // Default to light theme
  );

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Your button component with logic based on theme context */}
    </ThemeContext.Provider>
  );
}

export { ThemeToggleButton, ThemeContext };
