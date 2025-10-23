import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [sightings, setSightings] = useState([]);

    useEffect(() => {
        const fetchSightings = async () => {
            try {
                const response = await fetch('/api/sightings');
                const data = await response.json();
                setSightings(data);
            } catch (error) {
                console.error('Error fetching sightings:', error);
            }
        };

        fetchSightings();
    }, []);

    return (
        <div>
            <h1>Welcome to StarSpot!</h1>
            <p>Your platform for reporting and verifying celebrity sightings.</p>
            <h2>Recent Sightings</h2>
            <ul>
                {sightings.map(sighting => (
                    <li key={sighting.id}>
                        <strong>{sighting.celebrity}</strong> spotted at {sighting.location} on {new Date(sighting.timestamp).toLocaleString()}.
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;