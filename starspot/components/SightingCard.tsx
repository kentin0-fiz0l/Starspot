import React from 'react'

type Sighting = any

const SightingCard: React.FC<{ sighting: Sighting }> = ({ sighting }) => {
    const celebName = sighting?.celebrity?.name ?? sighting.celebrityName ?? 'Unknown'
    const location = sighting?.location ?? `${sighting.lat ?? ''}, ${sighting.lng ?? ''}`
    const timestamp = sighting?.createdAt ?? sighting?.timestamp ?? ''

    return (
        <div className="sighting-card">
            <h3>{celebName}</h3>
            <p>Location: {location}</p>
            <p>When: {timestamp ? new Date(timestamp).toLocaleString() : '—'}</p>
        </div>
    )
}

export default SightingCard