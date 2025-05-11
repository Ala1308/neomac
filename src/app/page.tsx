import styles from "./page.module.css";
import ButtonLink from '@/components/ButtonLink';
import Image from 'next/image';
import Script from 'next/script';

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
    description: "Toitures en bardeaux d&apos;asphalte, métal ou ardoise pour votre maison. Nos solutions résidentielles allient esthétique, durabilité et protection contre les intempéries.",
    image: "/asphalt_residentiel.png"
  },
  {
    icon: "repair",
    title: "Réparations & entretien",
    link: "/contact",
    description: "Services d&apos;inspection, réparation de fuites, entretien préventif et interventions d&apos;urgence pour prolonger la durée de vie de votre toiture et prévenir les dommages coûteux.",
    image: "/metallique_commerciale.png"
  }
];



export default function HomePage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <Script id="homepage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NEOMAC",
        "description": "Entreprise spécialisée en toitures commerciales et résidentielles au Québec avec 10 ans d'expertise",
        "url": "https://www.neomac.ca",
        "logo": "https://www.neomac.ca/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Québec",
          "addressRegion": "QC",
          "addressCountry": "CA"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+14185551234",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/neomac",
          "https://www.instagram.com/neomac_toitures"
        ],
        "offers": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Toitures commerciales",
              "url": "https://www.neomac.ca/commercial"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Toitures résidentielles",
              "url": "https://www.neomac.ca/residentiel"
            }
          }
        ]
      })}} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-slideInLeft`}>
            10 ANS D&apos;EXPERTISE<br />EN TOITURES<br />COMMERCIALES ET<br />RÉSIDENTIELLES<br />AU QUÉBEC
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
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    className={styles.cardImage} 
                    loading="lazy" 
                    width={400} 
                    height={300} 
                  />
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
