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
