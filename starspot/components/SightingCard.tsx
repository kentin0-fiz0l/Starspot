import React from 'react';

interface SightingCardProps {
    celebrityName: string;
    location: string;
    timestamp: string;
}

const SightingCard: React.FC<SightingCardProps> = ({ celebrityName, location, timestamp }) => {
    return (
        <div className="sighting-card">
            <h3>{celebrityName}</h3>
            <p>Location: {location}</p>
            <p>Timestamp: {timestamp}</p>
        </div>
    );
};

export default SightingCard;