"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Chargement dynamique de LeafletMap avec ssr désactivé
const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

interface MapContainerProps {
  center: [number, number];
  zoom?: number;
  height?: string;
  markerText?: string;
}

const MapContainer = ({
  center,
  zoom = 13,
  height = '400px',
  markerText = 'NEOMAC'
}: MapContainerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <LeafletMap 
      center={center} 
      zoom={zoom} 
      height={height} 
      markerText={markerText} 
    />
  ) : (
    <div style={{ height, width: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p>Chargement de la carte...</p>
    </div>
  );
};

export default MapContainer;
