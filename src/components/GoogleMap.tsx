"use client";

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  zoom?: number;
  height?: string;
}

declare global {
  interface Window {
    initMap: () => void;
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

const GoogleMap = ({ address, zoom = 15, height = '400px' }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Fonction pour initialiser la carte
    window.initMap = () => {
      if (!mapRef.current) return;
      
      // Coordonnées de Montréal (centre-ville)
      const montrealCoordinates = { lat: 45.5017, lng: -73.5673 };
      
      // @ts-ignore - Utilisation de l'API Google Maps
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: zoom,
        center: montrealCoordinates,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#000000" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
          }
        ]
      });
      
      // Ajouter un marqueur pour NEOMAC
      // @ts-ignore - Utilisation de l'API Google Maps
      const marker = new window.google.maps.Marker({
        position: montrealCoordinates,
        map: map,
        title: 'NEOMAC',
        // @ts-ignore - Utilisation de l'API Google Maps
        animation: window.google.maps.Animation.DROP
      });
      
      // Ajouter une info-bulle
      // @ts-ignore - Utilisation de l'API Google Maps
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div style="font-family: 'Ubuntu', sans-serif; padding: 10px;"><strong>NEOMAC</strong><br>Experts en toiture à Montréal</div>`
      });
      
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };
    
    // Charger le script Google Maps si ce n'est pas déjà fait
    const script = document.createElement('script');
    // Pour le développement, on peut utiliser la carte sans clé API (avec restrictions)
    // Pour la production, utilisez process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    script.src = `https://maps.googleapis.com/maps/api/js?callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    return () => {
      // Nettoyer le script lors du démontage du composant
      document.head.removeChild(script);
      // @ts-ignore - Nous savons que c'est une fonction mais nous voulons la supprimer
      window.initMap = null;
    };
  }, [zoom]);
  
  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: height, 
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
    ></div>
  );
};

export default GoogleMap;
