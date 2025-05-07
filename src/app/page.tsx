import styles from "./page.module.css";
import ButtonLink from '@/components/ButtonLink';

// Icon components for services
const CommercialIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H16V20H8V12ZM20 12H28V20H20V12ZM32 12H40V20H32V12ZM8 24H16V32H8V24ZM20 24H28V32H20V24ZM32 24H40V32H32V24ZM8 36H16V44H8V36ZM20 36H28V44H20V36ZM32 36H40V44H32V36Z" fill="#000000"/>
  </svg>
);

const ResidentialIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L4 24H10V44H20V32H28V44H38V24H44L24 4Z" fill="#000000"/>
  </svg>
);

const RepairIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 4L26 14L34 22L44 12L36 4ZM22 18L4 36V44H12L30 26L22 18Z" fill="#000000"/>
  </svg>
);


const servicesData = [
  {
    icon: "commercial",
    title: "Toitures commerciales",
    link: "/commercial",
    description: "Solutions durables pour bâtiments commerciaux, incluant membranes TPO, EPDM et toitures multicouches pour une protection optimale de vos investissements.",
    image: "/TPO_commercial.png"
  },
  {
    icon: "residential",
    title: "Toitures résidentielles",
    link: "/residentiel",
    description: "Toitures en bardeaux d'asphalte, métal ou ardoise pour votre maison. Nos solutions résidentielles allient esthétique, durabilité et protection contre les intempéries.",
    image: "/asphalt_residentiel.png"
  },
  {
    icon: "repair",
    title: "Réparations & entretien",
    link: "/contact",
    description: "Services d'inspection, réparation de fuites, entretien préventif et interventions d'urgence pour prolonger la durée de vie de votre toiture et prévenir les dommages coûteux.",
    image: "/metallique_commerciale.png"
  }
];

const whyUsData = [
  {
    icon: "Qualité",
    title: "Qualité Supérieure",
    text: "Nous utilisons uniquement des matériaux de première qualité et des techniques éprouvées."
  },
  {
    icon: "Expertise",
    title: "10 Ans d'Expertise",
    text: "Notre expérience garantit un travail impeccable et conforme aux normes les plus strictes."
  },
  {
    icon: "Service",
    title: "Service Client Dédié",
    text: "Une communication transparente et un accompagnement personnalisé à chaque étape."
  },
  {
    icon: "Garantie",
    title: "Garantie Complète",
    text: "Profitez d'une tranquillité d'esprit avec nos garanties sur les matériaux et la main-d'œuvre."
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-slideInLeft`}>
            10 ANS D'EXPERTISE<br />EN TOITURES<br />COMMERCIALES ET<br />RÉSIDENTIELLES<br />AU QUÉBEC
          </h1>
          <p className={`${styles.heroSubtitle} animate-slideInLeft delay-200`}>
            Qualité, durabilité et service sur mesure,<br />quel que soit votre projet.
          </p>
          <ButtonLink href="/contact" className={`${styles.heroCta} animate-slideInLeft delay-300 hover-lift`}>
            DEMANDEZ UN DEVIS GRATUIT
          </ButtonLink>
        </div>
      </section>

      {/* Nos services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Nos Services</h2>
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <div key={index} className={`${styles.serviceCard} animate-zoomIn`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={styles.cardImageContainer}>
                  <img src={service.image} alt={service.title} className={styles.cardImage} />
                </div>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                <div className={styles.cardOverlay}>
                  <p className={styles.cardDescription}>{service.description}</p>
                  <a href={service.link} className={styles.cardButton}>En savoir plus</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
