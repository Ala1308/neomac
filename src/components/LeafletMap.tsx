"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface LeafletMapProps {
  center: [number, number];
  zoom?: number;
  height?: string;
  markerText?: string;
}

const LeafletMap = ({
  center = [45.5017, -73.5673], // Montréal par défaut
  zoom = 13,
  height = '400px',
  markerText = 'NEOMAC - Experts en toiture à Montréal'
}: LeafletMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Fix pour l'icône de marqueur dans Next.js
    const fixMarkerIcon = () => {
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl;
      
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });
    };

    fixMarkerIcon();

    // Initialiser la carte si elle n'existe pas déjà
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView(center, zoom);

      // Ajouter la couche de tuiles OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapInstanceRef.current);

      // Ajouter un marqueur pour NEOMAC
      const marker = L.marker(center).addTo(mapInstanceRef.current);
      
      // Ajouter une popup au marqueur
      marker.bindPopup(`<div style="font-family: 'Ubuntu', sans-serif; padding: 5px;"><strong>NEOMAC</strong><br>${markerText}</div>`).openPopup();
    } else {
      // Mettre à jour la vue si la carte existe déjà
      mapInstanceRef.current.setView(center, zoom);
    }

    // Nettoyer la carte lors du démontage du composant
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, markerText]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height, 
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    />
  );
};

export default LeafletMap;
