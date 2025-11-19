import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Theme State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') return true;
      if (savedTheme === 'light') return false;
    }
    return false;
  });

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Apply Theme Side Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 font-mono transition-colors duration-500 selection:bg-accent-light dark:selection:bg-accent-dark">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;