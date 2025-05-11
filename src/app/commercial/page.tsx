import styles from "./page.module.css";
import ButtonLink from '@/components/ButtonLink';
import Script from 'next/script';

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




export default function CommercialPage() {
  return (
    <main>
      {/* Schema.org JSON-LD */}
      <Script id="commercial-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Services de toiture commerciale NEOMAC",
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
        "serviceType": "Installation et réparation de toitures commerciales",
        "description": "Solutions professionnelles pour vos bâtiments commerciaux incluant membranes TPO, EPDM, élastomère et toitures métalliques.",
        "offers": {
          "@type": "Offer",
          "description": "Devis gratuit pour toitures commerciales"
        },
        "areaServed": {
          "@type": "City",
          "name": "Quu00e9bec et environs"
        }
      })}} />

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
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className={styles.cardImage} 
                    loading="lazy" 
                    width="400" 
                    height="300" 
                  />
                </div>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
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
          <h2 className={styles.midCTATitle}>Besoin d'une solution sur mesure?</h2>
          <p className={styles.midCTAText}>Notre équipe d'experts est prête à vous conseiller pour votre projet commercial.</p>
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
            <ButtonLink href="/contact" className={`${styles.ctaButton} animate-slideInLeft delay-300 hover-lift`}>
              DEMANDEZ UN DEVIS GRATUIT
            </ButtonLink>
          </div>
        </div>
      </section>


    </main>
  );
}
