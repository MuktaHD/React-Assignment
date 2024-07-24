import { useState } from 'react';
import './ThemeSwitcher.css'; // Assume you have CSS classes for dark and light themes

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
