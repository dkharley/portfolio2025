'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Education', path: '/education' },
  { name: 'Blog', path: '/blog' },
  { name: 'Personal', path: '/personal' },
];

import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Portfolio
        </Link>

        {/* Desktop Nav */}
        <div className={`${styles.navLinks} ${styles.desktopOnly}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`${styles.mobileToggle} ${styles.mobileOnly}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`${styles.mobileMenu} ${styles.mobileOnly}`}>
          <div className="container">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.mobileNavItem} ${pathname === item.path ? styles.active : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              className={`${styles.mobileNavItem} ${styles.themeToggleMobile}`}
            >
              {mounted && (theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
