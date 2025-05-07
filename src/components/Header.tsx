"use client";

import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import ButtonLink from './ButtonLink';

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ButtonLink href="/" className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0L0 10.3923V25.6077L18 36L36 25.6077V10.3923L18 0Z" fill="white"/>
              <text x="18" y="22" textAnchor="middle" fill="black" fontSize="16" fontFamily="Ubuntu, sans-serif" fontWeight="bold">N</text>
            </svg>
          </div>
          <span className={styles.logoText}>NEOMAC</span>
        </ButtonLink>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <ButtonLink 
                href="/" 
                className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              >
                Accueil
              </ButtonLink>
            </li>
            <li className={styles.navItem}>
              <ButtonLink 
                href="/commercial" 
                className={`${styles.navLink} ${isActive('/commercial') ? styles.active : ''}`}
              >
                Commercial
              </ButtonLink>
            </li>
            <li className={styles.navItem}>
              <ButtonLink 
                href="/residentiel" 
                className={`${styles.navLink} ${isActive('/residentiel') ? styles.active : ''}`}
              >
                Résidentiel
              </ButtonLink>
            </li>
            <li className={styles.navItem}>
              <ButtonLink 
                href="/contact" 
                className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
              >
                Contactez-nous
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
