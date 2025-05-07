"use client";

import LeafletMap from './LeafletMap';

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
  return (
    <LeafletMap 
      center={center} 
      zoom={zoom} 
      height={height} 
      markerText={markerText} 
    />
  );
};

export default MapContainer;
