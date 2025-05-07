"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import styles from './ChatWidget.module.css';

export default function ChatWidget() {
  useEffect(() => {
    // Cette fonction sera exu00e9cutu00e9e cotu00e9 client apru00e8s le rendu initial
    const loadConvaiWidget = () => {
      if (typeof window !== 'undefined') {
        // Cru00e9ation de l'u00e9lu00e9ment Elevenlabs Convai s'il n'existe pas du00e9ju00e0
        if (!document.querySelector('elevenlabs-convai')) {
          const convaiElement = document.createElement('elevenlabs-convai');
          convaiElement.setAttribute('agent-id', 'P57Zl7L61igBYakUxXMC');
          document.body.appendChild(convaiElement);
        }
      }
    };
    
    loadConvaiWidget();
    
    // Nettoyage lors du du00e9montage du composant
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
      {/* Le widget Elevenlabs Convai est injectu00e9 directement dans le DOM */}
    </>
  );
}
