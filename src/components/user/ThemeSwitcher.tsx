"use client"
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Sun and Moon icons from react-icons

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      <div className="flex items-center space-x-2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full w-14 h-8">
        <div className={`w-6 h-6 flex justify-center items-center rounded-full bg-white transition-all duration-300 ${isDarkMode ? 'transform translate-x-6' : ''}`}>
          {isDarkMode ? <FaMoon size={20} className="text-gray-800" /> : <FaSun size={20} className="text-yellow-500" />}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
