import styles from "./page.module.css";
import ButtonLink from '@/components/ButtonLink';

const commercialServices = [
  {
    icon: "tpo",
    title: "Membrane TPO",
    description: "Recommandée pour les toits plats de commerces souhaitant réduire les coûts de climatisation : surface blanche très réfléchissante, matériau recyclable et joints thermosoudés pour 20 à 30 ans de tranquillité.",
    image: "/TPO_commercial.png"
  },
  {
    icon: "epdm",
    title: "Membrane EPDM",
    description: "Caoutchouc monocouche ultra-flexible, idéal pour les grands bâtiments et les toits verts. Excellente résistance aux cycles gel-dégel et étanchéité remarquable, avec une durée de vie comparable à celle du TPO.",
    image: "/EPDM_commercial.png"
  },
  {
    icon: "elastomere",
    title: "Membrane élastomère",
    description: "Championne des toits plats industriels au Québec : double couche SBS soudée, résistance accrue aux fissures et entretien minimal, même sous les hivers les plus rudes.",
    image: "/Elastomere_commercial.png"
  },
  {
    icon: "metal",
    title: "Toiture métallique commerciale",
    description: "Profilés d'acier structurel pour entrepôts, centres agricoles ou commerces à faible pente. Offrent robustesse, esthétique moderne et économies à long terme grâce à une durée de vie dépassant souvent 50 ans.",
    image: "/metallique_commerciale.png"
  }
];

// SVG Icons for services
const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'tpo':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M12 16C12 14.9 12.9 14 14 14H50C51.1 14 52 14.9 52 16V48C52 49.1 51.1 50 50 50H14C12.9 50 12 49.1 12 48V16ZM46 22H18V42H46V22Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1"/>
          <path d="M18 22L46 42" stroke="#FFA500" strokeWidth="2"/>
          <path d="M18 42L46 22" stroke="#FFA500" strokeWidth="2"/>
          <path d="M24 28H40V36H24V28Z" fill="#FFA500"/>
        </svg>
      );
    case 'epdm':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M12 16C12 14.9 12.9 14 14 14H50C51.1 14 52 14.9 52 16V48C52 49.1 51.1 50 50 50H14C12.9 50 12 49.1 12 48V16ZM46 22H18V42H46V22Z" fill="#333333"/>
          <path d="M18 22L46 42" stroke="#FFA500" strokeWidth="2"/>
          <path d="M18 42L46 22" stroke="#FFA500" strokeWidth="2"/>
          <circle cx="32" cy="32" r="6" fill="#FFA500"/>
        </svg>
      );
    case 'elastomere':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M12 16C12 14.9 12.9 14 14 14H50C51.1 14 52 14.9 52 16V48C52 49.1 51.1 50 50 50H14C12.9 50 12 49.1 12 48V16Z" fill="#555555"/>
          <path d="M12 32C12 30.9 12.9 30 14 30H50C51.1 30 52 30.9 52 32V48C52 49.1 51.1 50 50 50H14C12.9 50 12 49.1 12 48V32Z" fill="#333333"/>
          <path d="M20 22L44 22" stroke="#FFA500" strokeWidth="2"/>
          <path d="M20 38L44 38" stroke="#FFA500" strokeWidth="2"/>
        </svg>
      );
    case 'metal':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M8 16H56V24H8V16ZM8 28H56V36H8V28ZM8 40H56V48H8V40Z" fill="#000000"/>
          <path d="M12 20L52 20" stroke="#FFA500" strokeWidth="2"/>
          <path d="M12 32L52 32" stroke="#FFA500" strokeWidth="2"/>
          <path d="M12 44L52 44" stroke="#FFA500" strokeWidth="2"/>
        </svg>
      );

    default:
      return null;
  }
};

export default function CommercialPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-slideInLeft`}>
            TOITURES<br />COMMERCIALES
          </h1>
          <p className={`${styles.heroSubtitle} animate-slideInLeft delay-200`}>
            Des solutions professionnelles pour vos bâtiments
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.servicesGrid}>
            {commercialServices.map((service, index) => (
              <div key={index} className={`${styles.serviceCard} animate-zoomIn`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={styles.cardImageContainer}>
                  <img src={service.image} alt={service.title} className={styles.cardImage} />
                </div>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                <div className={styles.cardOverlay}>
                  <p className={styles.cardDescription}>{service.description}</p>
                  <a href="/contact" className={styles.cardButton}>Demander un devis</a>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ctaContainer}>
            <ButtonLink href="/contact" className={`${styles.ctaButton} animate-slideInLeft delay-300 hover-lift`}>
              DEMANDEZ UN DEVIS GRATUIT
            </ButtonLink>
          </div>
        </div>
      </section>


    </main>
  );
}
