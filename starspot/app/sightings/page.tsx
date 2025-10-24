import React, { useEffect, useState } from 'react';
import SightingCard from '../../components/SightingCard';

const SightingsPage = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    const fetchSightings = async () => {
      const response = await fetch('/api/sightings');
      const data = await response.json();
      setSightings(data);
    };

    fetchSightings();
  }, []);

  return (
    <div>
      <h1>Celebrity Sightings</h1>
      <div>
        {sightings.length === 0 ? (
          <p>No sightings reported yet.</p>
        ) : (
            sightings.map((sighting) => (
              <SightingCard key={sighting.id} sighting={sighting} />
            ))
          )}
      </div>
    </div>
  );
};

export default SightingsPage;