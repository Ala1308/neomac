"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [residentielOpen, setResidentielOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Détecter si l'écran est de taille mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier initialement
    checkIfMobile();
    
    // Ajouter un écouteur pour les changements de taille d'écran
    window.addEventListener('resize', checkIfMobile);
    
    // Nettoyer l'écouteur
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const Logo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 0L48 12V36L24 48L0 36V12L24 0Z" fill="#FFA500"/>
      <text x="50%" y="50%" dy=".3em" textAnchor="middle" fill="white" fontSize="16" fontFamily="Ubuntu, sans-serif" fontWeight="bold">N</text>
    </svg>
  );

  // Icône de menu hamburger pour mobile
  const HamburgerIcon = () => (
    <button className={styles.hamburgerButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
    </button>
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

        {/* Afficher le bouton hamburger sur mobile */}
        {isMobile && <HamburgerIcon />}

        {/* Menu de navigation - affiché différemment selon la taille d'écran */}
        <ul className={`${styles.navMenu} ${isMobile ? styles.mobileMenu : ''} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li>
            <Link href="/"
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}>
              Accueil
            </Link>
          </li>
          
          {/* Dropdown Commercial */}
          <li className={styles.navItemRelative}
            onMouseEnter={() => !isMobile && setCommercialOpen(true)}
            onMouseLeave={() => !isMobile && setCommercialOpen(false)}
          >
            {isMobile ? (
              <>
                <button 
                  className={`${styles.navLink} ${isParentActive('/commercial') ? styles.active : ''}`}
                  onClick={() => setCommercialOpen(!commercialOpen)}
                >
                  Commercial {commercialOpen ? '−' : '+'}
                </button>
                {commercialOpen && (
                  <div className={styles.mobileDropdown}>
                    <Link href="/commercial" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>
                      Aperçu Commercial
                    </Link>
                    <Link href="/commercial#service-asphalte" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Bardeaux d'asphalte</Link>
                    <Link href="/commercial#service-epdm-tpo" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Membrane EPDM / TPO</Link>
                    <Link href="/commercial#service-metallique" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Toiture métallique</Link>
                    <Link href="/commercial#service-blanche" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Toiture blanche</Link>
                    <Link href="/commercial#service-vegetalisee" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Toiture végétalisée</Link>
                  </div>
                )}
              </>
            ) : (
              <>
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
                    <Link href="/commercial#service-asphalte" className={styles.dropdownLink}>Bardeaux d'asphalte</Link>
                    <Link href="/commercial#service-epdm-tpo" className={styles.dropdownLink}>Membrane EPDM / TPO</Link>
                    <Link href="/commercial#service-metallique" className={styles.dropdownLink}>Toiture métallique</Link>
                    <Link href="/commercial#service-blanche" className={styles.dropdownLink}>Toiture blanche</Link>
                    <Link href="/commercial#service-vegetalisee" className={styles.dropdownLink}>Toiture végétalisée</Link>
                  </div>
                )}
              </>
            )}
          </li>
          
          {/* Menu Résidentiel - comportement différent sur mobile */}
          <li className={styles.navItemRelative}
            onMouseEnter={() => !isMobile && setResidentielOpen(true)}
            onMouseLeave={() => !isMobile && setResidentielOpen(false)}
          >
            {isMobile ? (
              <>
                <button 
                  className={`${styles.navLink} ${isParentActive('/residentiel') ? styles.active : ''}`}
                  onClick={() => setResidentielOpen(!residentielOpen)}
                >
                  Résidentiel {residentielOpen ? '−' : '+'}
                </button>
                {residentielOpen && (
                  <div className={styles.mobileDropdown}>
                    <Link href="/residentiel" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>
                      Aperçu Résidentiel
                    </Link>
                    <Link href="/residentiel#service-asphalte" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Bardeaux d'asphalte</Link>
                    <Link href="/residentiel#service-tuiles" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Tuiles</Link>
                    <Link href="/residentiel#service-metallique" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Métallique</Link>
                    <Link href="/residentiel#service-membrane" className={styles.dropdownLink} onClick={() => setMobileMenuOpen(false)}>Membrane bitumineuse</Link>
                  </div>
                )}
              </>
            ) : (
              <>
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
                    <Link href="/residentiel#service-asphalte" className={styles.dropdownLink}>Bardeaux d'asphalte</Link>
                    <Link href="/residentiel#service-tuiles" className={styles.dropdownLink}>Tuiles</Link>
                    <Link href="/residentiel#service-metallique" className={styles.dropdownLink}>Métallique</Link>
                    <Link href="/residentiel#service-membrane" className={styles.dropdownLink}>Membrane bitumineuse</Link>
                  </div>
                )}
              </>
            )}
          </li>
          
          <li>
            <Link href="/contact" 
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
              onClick={() => setMobileMenuOpen(false)}>
              Contactez-nous
            </Link>
          </li>
          
          {/* CTA fixe dans la barre de navigation */}
          <li className={styles.navCTAContainer}>
            <Link href="/contact" 
              className={styles.navCTA}
              onClick={() => setMobileMenuOpen(false)}>
              DEVIS GRATUIT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
