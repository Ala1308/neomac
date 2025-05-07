import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css'; 

// Placeholder SVG icons for social media
const FacebookIcon = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm1 14.94H11v-6H9.5V9.04h1.5V7.82c0-1.48 1.19-2.78 2.63-2.78h1.62v1.96h-1.26c-.38 0-.63.25-.63.63v1.41h1.88l-.25 1.94H13v6z"/></svg>;
const InstagramIcon = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>;
const LinkedInIcon = () => <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4s1.39.63 1.39 1.4v4.93h2.8zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68zm-1.39 9.94h2.79V9.62H5.49v8.88z"/></svg>;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Coordonnées</h3>
          <p><a href="tel:555-129-4567" className={styles.footerLink}>555-129-4567</a></p>
          <p><a href="mailto:info@neomac.ca" className={styles.footerLink}>info@neomac.ca</a></p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Liens rapides</h3>
          <ul className={styles.footerLinksList}>
            <li><Link href="/" className={styles.footerLink}>Accueil</Link></li>
            <li><Link href="/commercial" className={styles.footerLink}>Commercial</Link></li>
            <li><Link href="/residentiel" className={styles.footerLink}>Résidentiel</Link></li>
            <li><Link href="/contact" className={styles.footerLink}>Contactez-nous</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Réseaux sociaux</h3>
          <div className={styles.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink} aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} NEOMAC. Tous droits réservés.</p>
        {/* Optional: Link to privacy policy or terms of service */}
      </div>
    </footer>
  );
};

export default Footer;
