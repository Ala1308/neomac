"use client";

import { useState, useEffect } from 'react';
import styles from './HelpPopup.module.css';

export default function HelpPopup() {
  const [isVisible, setIsVisible] = useState(true);
  
  // Delay the button appearance by 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClick = () => {
    // Méthode plus directe pour déclencher le widget Elevenlabs Convai
    // Création dynamique du widget s'il n'existe pas déjà
    let convaiElement = document.querySelector('elevenlabs-convai');
    
    if (!convaiElement) {
      // Si l'élément n'existe pas, on le crée
      convaiElement = document.createElement('div');
      convaiElement.innerHTML = '<elevenlabs-convai agent-id="P57Zl7L61igBYakUxXMC"></elevenlabs-convai>';
      document.body.appendChild(convaiElement.firstChild as Node);
      
      // On s'assure que le script est chargé
      const scriptExists = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      if (!scriptExists) {
        const script = document.createElement('script');
        script.src = 'https://elevenlabs.io/convai-widget/index.js';
        script.async = true;
        document.body.appendChild(script);
      }
      
      // On laisse un peu de temps pour que le script se charge
      setTimeout(() => {
        // Après le chargement, on essaie de déclencher un événement de clic sur le widget
        const newConvaiElement = document.querySelector('elevenlabs-convai');
        if (newConvaiElement) {
          // On utilise un événement personnalisé que le widget pourrait écouter
          newConvaiElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
      }, 500);
    } else {
      // Si l'élément existe déjà, on essaie de le déclencher
      convaiElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div className={styles.helpButton} onClick={handleClick}>
      <span className={styles.helpIcon}>?</span>
      <span>BESOIN D'AIDE? PARLEZ À NOTRE RÉCEPTIONNISTE</span>
    </div>
  );
}
