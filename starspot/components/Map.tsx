 'use client'
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || process.env.MAPBOX_TOKEN || '';

const Map = ({ sightings }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // Initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-98.5795, 39.8283], // Initial map center [lng, lat]
            zoom: 3,
        });

        // Add navigation control (the +/- zoom buttons)
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Add markers for each sighting (support different field names)
        sightings.forEach(sighting => {
            const lng = sighting.lng ?? sighting.longitude ?? sighting.longitude_deg ?? 0
            const lat = sighting.lat ?? sighting.latitude ?? sighting.latitude_deg ?? 0
            const title = sighting?.celebrity?.name ?? sighting.celebrityName ?? 'Sighted'
            const desc = sighting?.location ?? ''

            if (typeof lng === 'number' && typeof lat === 'number') {
                new mapboxgl.Marker()
                    .setLngLat([lng, lat])
                    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${title}</h3><p>${desc}</p>`))
                    .addTo(map.current)
            }
        });

    }, [sightings]);

    return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;