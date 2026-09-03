import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const App = () => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  // Persist theme changes to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'dark bg-black relative' : 'bg-white relative'}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
    </div>
  );
};

export default App;
