import styles from "./page.module.css";
import MapContainer from '@/components/MapContainer';
import ContactForm from '@/components/ContactForm';
import ButtonLink from '@/components/ButtonLink';

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-slideInLeft`}>
            CONTACTEZ-<br />NOUS
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.mapColumn}>
            {/* Carte interactive de Montréal */}
            <div className={`${styles.mapContainer} animate-fadeIn`}>
              <div className={styles.mapWrapper}>
                <div className={styles.mapOverlay}>
                  <span className="animate-pulse">Montréal</span>
                </div>
                <div className={styles.actualMap}>
                  <MapContainer 
                    center={[45.5017, -73.5673]} 
                    zoom={13} 
                    height="100%" 
                    markerText="Experts en toiture à Montréal" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.formColumn}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Coordonnées Section */}
      <section className={styles.coordSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.coordGrid}>
            <div className={styles.coordColumn}>
              <h3 className={styles.coordTitle}>Coordonnées</h3>
              <p className={styles.coordText}>123 Rue de l'Exemple</p>
              <p className={styles.coordText}>Montreal, QC H1A 2B3</p>
              <p className={styles.coordText}>555-123-4567</p>
              <p className={styles.coordText}>info@neomac.ca</p>
            </div>
            <div className={styles.coordColumn}>
              <h3 className={styles.coordTitle}>Liens rapides</h3>
              <div className={styles.linksGrid}>
                <ButtonLink href="/" className={styles.coordLink}>Home</ButtonLink>
                <ButtonLink href="/contact" className={styles.coordLink}>Contact</ButtonLink>
                <ButtonLink href="/commercial" className={styles.coordLink}>Commercial</ButtonLink>
                <ButtonLink href="/residentiel" className={styles.coordLink}>Résidentiel</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
