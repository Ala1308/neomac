import styles from "./page.module.css";
import ButtonLink from '@/components/ButtonLink';
import Image from 'next/image';
import Script from 'next/script';

const residentialServices = [
  {
    icon: "bardeaux",
    title: "Bardeaux d'asphalte",
    description: "Le choix nº 1 des propriétaires québécois : installation rapide, coût abordable et vaste palette de couleurs. Notre équipe de couvreurs à Québec installe et répare vos bardeaux d'asphalte en respectant les normes RBQ et offre une soumission gratuite le jour même – idéal pour une toiture durable de 15 à 25 ans.",
    image: "/asphalt_residentiel.png"
  },
  {
    icon: "metal",
    title: "Toiture métallique",
    description: "Parfaite pour le climat rigoureux : résistante aux vents, à la neige et pratiquement sans entretien. Optez pour une toiture métallique résidentielle à Québec et profitez d'une durée de vie de 40 à 70 ans, d'un fini moderne et d'une garantie anticorrosion supérieure.",
    image: "/bardeaux_metal_residentiel.png"
  },
  {
    icon: "cedre",
    title: "Bardeaux de cèdre",
    description: "Charme naturel et performance écologique. Les bardeaux de cèdre faits au Québec apportent une isolation supplémentaire, respirent bien sous les variations de température et peuvent durer jusqu'à 50 ans avec un entretien minimal; l'option idéale pour les maisons patrimoniales ou de style champêtre.",
    image: "/bardeaux_cedre_residentiel.png"
  },
  {
    icon: "membrane",
    title: "Membrane élastomère",
    description: "Solution haut de gamme soudée au chalumeau qui assure une étanchéité monolithique. Parfaite pour les résidences modernes à toit plat ou faible pente, elle résiste aux chocs thermiques et aux UV tout en nécessitant peu d'entretien.",
    image: "/elasto_residentiel.png"
  },
  {
    icon: "ardoise",
    title: "Ardoise ou tuile",
    description: "Investissement de prestige pour une toiture à la longévité centenaire. L'ardoise naturelle, taillée dans les Cantons-de-l'Est ou le Vermont, confère une allure intemporelle et une résistance sans égale aux intempéries québécoises.",
    image: "/ardoise.png"
  }
];




export default function ResidentielPage() {
  return (
    <main>
      {/* Schema.org JSON-LD */}
      <Script id="residentiel-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Services de toiture résidentielle NEOMAC",
        "provider": {
          "@type": "Organization",
          "name": "NEOMAC",
          "description": "Entreprise spécialisée en toitures commerciales et résidentielles au Québec",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Québec",
            "addressRegion": "QC",
            "addressCountry": "CA"
          }
        },
        "serviceType": "Installation et réparation de toitures résidentielles",
        "description": "Solutions durables et esthétiques pour votre maison incluant bardeaux d'asphalte, toitures métalliques, bardeaux de cèdre et membranes élastomères.",
        "offers": {
          "@type": "Offer",
          "description": "Devis gratuit pour toitures résidentielles"
        },
        "areaServed": {
          "@type": "City",
          "name": "Québec et environs"
        }
      })}} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-slideInLeft`}>
            TOITURES<br />RÉSIDENTIELLES
          </h1>
          <p className={`${styles.heroSubtitle} animate-slideInLeft delay-200`}>
            Des solutions durables et esthétiques pour votre maison
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.servicesGrid}>
            {residentialServices.map((service, index) => (
              <div key={index} className={`${styles.serviceCard} animate-slideInRight`} style={{ animationDelay: `${index * 150}ms` }}>
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
                <div className={styles.serviceCardContent}>
                  <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                </div>
                <div className={styles.cardOverlay}>
                  <p className={styles.cardDescription}>{service.description}</p>
                  <a href="/contact" className={styles.cardButton}>Demander un devis</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA Section */}
      <section className={styles.midCTASection}>
        <div className={styles.midCTAOverlay}></div>
        <div className={styles.midCTAContent}>
          <h2 className={styles.midCTATitle}>Un projet de toiture pour votre maison?</h2>
          <p className={styles.midCTAText}>Contactez nos experts pour obtenir des conseils personnalisés et un devis gratuit sans engagement.</p>
          <div className={styles.midCTAButtons}>
            <ButtonLink href="/contact" className={`${styles.midCTAPrimary} animate-pulse`}>
              OBTENIR UN DEVIS GRATUIT
            </ButtonLink>
            <ButtonLink href="tel:+14185551234" className={styles.midCTASecondary}>
              APPELEZ-NOUS
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className={styles.bottomCTASection}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContainer}>
            <ButtonLink href="/contact" className={`${styles.ctaButton} animate-slideInRight delay-300 hover-lift`}>
              DEMANDEZ UN DEVIS GRATUIT
            </ButtonLink>
          </div>
        </div>
      </section>


    </main>
  );
}
