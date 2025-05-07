"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [residentielOpen, setResidentielOpen] = useState(false);
  const pathname = usePathname();

  const Logo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 0L48 12V36L24 48L0 36V12L24 0Z" fill="#FFA500"/>
      <text x="50%" y="50%" dy=".3em" textAnchor="middle" fill="white" fontSize="16" fontFamily="Ubuntu, sans-serif" fontWeight="bold">N</text>
    </svg>
  );

  const isActive = (href: string) => pathname === href;
  const isParentActive = (basePath: string) => pathname.startsWith(basePath);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoContainer}>
          <Logo />
          <span className={styles.logoTitle}>NEOMAC</span>
        </Link>

        <ul className={styles.navMenu}>
          <li>
            <Link href="/"
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
              Home
            </Link>
          </li>
          <li
            onMouseEnter={() => setCommercialOpen(true)}
            onMouseLeave={() => setCommercialOpen(false)}
            className={styles.navItemRelative}
          >
            <button 
              className={`${styles.navLink} ${isParentActive('/commercial') ? styles.active : ''}`}
            >
              Commercial
            </button>
            {commercialOpen && (
              <div className={styles.dropdown}>
                <Link href="/commercial" className={`${styles.dropdownLink} ${isActive('/commercial') ? styles.activeSub : ''}`}>
                  Aperçu Commercial
                </Link>
                <Link href="/commercial#service-asphalte" className={styles.dropdownLink}>Bardeaux d’asphalte</Link>
                <Link href="/commercial#service-epdm-tpo" className={styles.dropdownLink}>Membrane EPDM / TPO</Link>
                <Link href="/commercial#service-metallique" className={styles.dropdownLink}>Toiture métallique</Link>
                <Link href="/commercial#service-blanche" className={styles.dropdownLink}>Toiture blanche</Link>
                <Link href="/commercial#service-vegetalisee" className={styles.dropdownLink}>Toiture végétalisée</Link>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => setResidentielOpen(true)}
            onMouseLeave={() => setResidentielOpen(false)}
            className={styles.navItemRelative}
          >
            <button 
              className={`${styles.navLink} ${isParentActive('/residentiel') ? styles.active : ''}`}
            >
              Résidentiel
            </button>
            {residentielOpen && (
              <div className={styles.dropdown}>
                <Link href="/residentiel" className={`${styles.dropdownLink} ${isActive('/residentiel') ? styles.activeSub : ''}`}>
                  Aperçu Résidentiel
                </Link>
                <Link href="/residentiel#service-asphalte" className={styles.dropdownLink}>Bardeaux d’asphalte</Link>
                <Link href="/residentiel#service-tuiles" className={styles.dropdownLink}>Tuiles</Link>
                <Link href="/residentiel#service-metallique" className={styles.dropdownLink}>Métallique</Link>
                <Link href="/residentiel#service-membrane" className={styles.dropdownLink}>Membrane bitumineuse</Link>
              </div>
            )}
          </li>
          <li>
            <Link href="/contact" 
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>
              Contactez-nous
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
