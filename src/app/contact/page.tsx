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

      {/* Le footer principal est déjà inclus dans le layout */}
    </main>
  );
}
