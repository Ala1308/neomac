"use client";

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import ButtonLink from './ButtonLink';
import Image from 'next/image';

// Données pour les mega-menus
const commercialMenuItems = [
  { title: 'Membrane TPO', icon: '/icons/tpo-icon.svg', href: '/commercial#tpo', description: 'Membrane blanche réfléchissante' },
  { title: 'Membrane EPDM', icon: '/icons/epdm-icon.svg', href: '/commercial#epdm', description: 'Caoutchouc monocouche flexible' },
  { title: 'Membrane élastomère', icon: '/icons/elastomere-icon.svg', href: '/commercial#elastomere', description: 'Double couche SBS soudée' },
  { title: 'Toiture métallique', icon: '/icons/metal-icon.svg', href: '/commercial#metal', description: 'Profilés d\'acier structurel' },
];

const residentialMenuItems = [
  { title: 'Bardeaux d\'asphalte', icon: '/icons/asphalt-icon.svg', href: '/residentiel#bardeaux', description: 'Solution économique et durable' },
  { title: 'Toiture métallique', icon: '/icons/metal-icon.svg', href: '/residentiel#metal', description: 'Résistante et sans entretien' },
  { title: 'Bardeaux de cèdre', icon: '/icons/cedar-icon.svg', href: '/residentiel#cedre', description: 'Charme naturel et écologique' },
  { title: 'Membrane élastomère', icon: '/icons/elastomere-icon.svg', href: '/residentiel#membrane', description: 'Idéale pour toits plats' },
];

export default function Header() {
  const pathname = usePathname();
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
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
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  const isParentActive = (basePath: string) => {
    return pathname.startsWith(basePath);
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
            
            {/* Menu Commercial avec mega-menu */}
            <li 
              className={`${styles.navItem} ${styles.megaMenuContainer}`}
              onMouseEnter={() => !isMobile && setCommercialOpen(true)}
              onMouseLeave={() => !isMobile && setCommercialOpen(false)}
            >
              <div 
                className={`${styles.navLink} ${isParentActive('/commercial') ? styles.active : ''}`}
                onClick={() => setCommercialOpen(!commercialOpen)}
              >
                Commercial
                <span className={styles.menuArrow}>{commercialOpen && !isMobile ? '▲' : '▼'}</span>
              </div>
              
              {/* Mega-menu pour Commercial */}
              <div className={`${styles.megaMenu} ${commercialOpen ? styles.megaMenuOpen : ''}`}>
                <div className={styles.megaMenuHeader}>
                  <h3>Solutions pour toitures commerciales</h3>
                  <ButtonLink href="/commercial" className={styles.megaMenuViewAll}>Voir toutes les solutions</ButtonLink>
                </div>
                <div className={styles.megaMenuGrid}>
                  {commercialMenuItems.map((item, index) => (
                    <ButtonLink key={index} href={item.href} className={styles.megaMenuItem}>
                      <div className={styles.megaMenuIconContainer}>
                        <div className={styles.megaMenuIcon}>
                          <Image 
                            src={item.icon} 
                            alt={item.title} 
                            width={24} 
                            height={24} 
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.megaMenuItemContent}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </ButtonLink>
                  ))}
                </div>
              </div>
            </li>
            
            {/* Menu Résidentiel avec mega-menu */}
            <li 
              className={`${styles.navItem} ${styles.megaMenuContainer}`}
              onMouseEnter={() => !isMobile && setResidentialOpen(true)}
              onMouseLeave={() => !isMobile && setResidentialOpen(false)}
            >
              <div 
                className={`${styles.navLink} ${isParentActive('/residentiel') ? styles.active : ''}`}
                onClick={() => setResidentialOpen(!residentialOpen)}
              >
                Résidentiel
                <span className={styles.menuArrow}>{residentialOpen && !isMobile ? '▲' : '▼'}</span>
              </div>
              
              {/* Mega-menu pour Résidentiel */}
              <div className={`${styles.megaMenu} ${residentialOpen ? styles.megaMenuOpen : ''}`}>
                <div className={styles.megaMenuHeader}>
                  <h3>Solutions pour toitures résidentielles</h3>
                  <ButtonLink href="/residentiel" className={styles.megaMenuViewAll}>Voir toutes les solutions</ButtonLink>
                </div>
                <div className={styles.megaMenuGrid}>
                  {residentialMenuItems.map((item, index) => (
                    <ButtonLink key={index} href={item.href} className={styles.megaMenuItem}>
                      <div className={styles.megaMenuIconContainer}>
                        <div className={styles.megaMenuIcon}>
                          <Image 
                            src={item.icon} 
                            alt={item.title} 
                            width={24} 
                            height={24} 
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className={styles.megaMenuItemContent}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </ButtonLink>
                  ))}
                </div>
              </div>
            </li>
            
            <li className={styles.navItem}>
              <ButtonLink 
                href="/contact" 
                className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
              >
                Contactez-nous
              </ButtonLink>
            </li>
            
            {/* CTA ajouté dans la barre de navigation */}
            <li className={styles.navCTAContainer}>
              <ButtonLink 
                href="/contact" 
                className={styles.navCTA}
              >
                DEVIS GRATUIT
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
