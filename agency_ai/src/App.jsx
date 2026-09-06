import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';


const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'dark bg-black relative' : 'bg-white relative'}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
    </div>
  );
};

export default App;
