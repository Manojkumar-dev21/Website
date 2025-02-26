import { useEffect } from 'react';

export default function DigitalMap() {
  useEffect(() => {
    // Load Google Maps JavaScript API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    
    window.initMap = function() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 13.0827, lng: 80.2707 }, // Chennai coordinates
        zoom: 4,
        styles: [
          // Dark theme with blue highlights
          {
            "elementType": "geometry",
            "stylers": [{ "color": "#242f3e" }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#746855" }]
          },
          // ... more styles
        ]
      });

      // Add marker for Chennai
      new google.maps.Marker({
        position: { lat: 13.0827, lng: 80.2707 },
        map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#3b82f6",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#60a5fa",
        }
      });
    };

    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" className="w-full h-full rounded-xl" />;
} 