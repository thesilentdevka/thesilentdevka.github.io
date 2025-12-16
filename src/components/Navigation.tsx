import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    if (initialTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.nav} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.signature}>Devakrishna Prasobh</span>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? styles.open : ''}></span>
          <span className={isOpen ? styles.open : ''}></span>
          <span className={isOpen ? styles.open : ''}></span>
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          <a onClick={() => scrollToSection('hero')} className={styles.link}>
            Home
          </a>
          <a onClick={() => scrollToSection('work')} className={styles.link}>
            Work
          </a>
          <a onClick={() => scrollToSection('about')} className={styles.link}>
            About
          </a>
          <a onClick={() => scrollToSection('contact')} className={styles.link}>
            Contact
          </a>
        </div>

        <button
          className={styles.themeToggle}
          onClick={toggleDarkMode}
          aria-label="Toggle theme"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};
