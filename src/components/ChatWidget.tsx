"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export default function ChatWidget() {
  useEffect(() => {
    // Cette fonction sera exécutée côté client après le rendu initial
    const loadConvaiWidget = () => {
      if (typeof window !== 'undefined') {
        // Création de l'élément Elevenlabs Convai s'il n'existe pas déjà
        if (!document.querySelector('elevenlabs-convai')) {
          const convaiElement = document.createElement('elevenlabs-convai');
          convaiElement.setAttribute('agent-id', 'P57Zl7L61igBYakUxXMC');
          document.body.appendChild(convaiElement);
        }
      }
    };
    
    loadConvaiWidget();
    
    // Nettoyage lors du démontage du composant
    return () => {
      const convaiElement = document.querySelector('elevenlabs-convai');
      if (convaiElement) {
        convaiElement.remove();
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://elevenlabs.io/convai-widget/index.js"
        strategy="afterInteractive"
      />
      {/* Le widget Elevenlabs Convai est injecté directement dans le DOM */}
    </>
  );
}
