import styles from "./page.module.css";
import ButtonLink from '@/components/ButtonLink';

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

// SVG Icons for services
const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'bardeaux':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M8 16H56V24H8V16ZM12 28H52V36H12V28ZM16 40H48V48H16V40ZM20 52H44V60H20V52Z" fill="#000000"/>
        </svg>
      );
    case 'tuiles':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M8 16C8 14.9 8.9 14 10 14H22C23.1 14 24 14.9 24 16V28C24 29.1 23.1 30 22 30H10C8.9 30 8 29.1 8 28V16Z" fill="#FFA500"/>
          <path d="M30 16C30 14.9 30.9 14 32 14H44C45.1 14 46 14.9 46 16V28C46 29.1 45.1 30 44 30H32C30.9 30 30 29.1 30 28V16Z" fill="#FFA500"/>
          <path d="M8 36C8 34.9 8.9 34 10 34H22C23.1 34 24 34.9 24 36V48C24 49.1 23.1 50 22 50H10C8.9 50 8 49.1 8 48V36Z" fill="#FFA500"/>
          <path d="M30 36C30 34.9 30.9 34 32 34H44C45.1 34 46 34.9 46 36V48C46 49.1 45.1 50 44 50H32C30.9 50 30 49.1 30 48V36Z" fill="#FFA500"/>
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
    case 'membrane':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M12 16C12 14.9 12.9 14 14 14H50C51.1 14 52 14.9 52 16V48C52 49.1 51.1 50 50 50H14C12.9 50 12 49.1 12 48V16ZM46 22H18V42H46V22Z" fill="#000000"/>
          <path d="M18 22L46 42" stroke="#FFA500" strokeWidth="2"/>
          <path d="M18 42L46 22" stroke="#FFA500" strokeWidth="2"/>
        </svg>
      );
    case 'cedre':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M8 16H56V24H8V16ZM12 28H52V36H12V28ZM16 40H48V48H16V40Z" fill="#8B4513"/>
          <path d="M14 20L18 20M22 20L26 20M30 20L34 20M38 20L42 20M46 20L50 20" stroke="#FFA500" strokeWidth="1.5"/>
          <path d="M16 32L20 32M24 32L28 32M32 32L36 32M40 32L44 32M48 32L52 32" stroke="#FFA500" strokeWidth="1.5"/>
          <path d="M18 44L22 44M26 44L30 44M34 44L38 44M42 44L46 44" stroke="#FFA500" strokeWidth="1.5"/>
        </svg>
      );
    case 'ardoise':
      return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="serviceIcon">
          <path d="M8 16H24V32H8V16ZM28 16H44V32H28V16ZM8 36H24V52H8V36ZM28 36H44V52H28V36Z" fill="#2F4F4F"/>
          <path d="M12 20L20 28M12 28L20 20" stroke="#FFA500" strokeWidth="1"/>
          <path d="M32 20L40 28M32 28L40 20" stroke="#FFA500" strokeWidth="1"/>
          <path d="M12 40L20 48M12 48L20 40" stroke="#FFA500" strokeWidth="1"/>
          <path d="M32 40L40 48M32 48L40 40" stroke="#FFA500" strokeWidth="1"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function ResidentielPage() {
  return (
    <main>
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
                  <img src={service.image} alt={service.title} className={styles.cardImage} />
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
