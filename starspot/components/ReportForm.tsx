 'use client'
import React, { useState } from 'react';

const ReportForm = () => {
    const [celebrityName, setCelebrityName] = useState('');
    const [location, setLocation] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            celebrityName,
            location,
        }

        try {
            const response = await fetch('/api/sightings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (response.ok) {
                setCelebrityName('');
                setLocation('');
                setPhoto(null);
            } else {
                const text = await response.text()
                console.error('Error submitting sighting', text);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    async function fillLocation() {
        if (!navigator.geolocation) return
        navigator.geolocation.getCurrentPosition((pos) => {
            setLocation(`${pos.coords.latitude}, ${pos.coords.longitude}`)
        }, (err) => {
            console.warn('Geolocation failed', err)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="celebrityName">Celebrity Name:</label>
                <input
                    type="text"
                    id="celebrityName"
                    value={celebrityName}
                    onChange={(e) => setCelebrityName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="photo">Upload Photo:</label>
                <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                />
            </div>
            <button type="submit">Report Sighting</button>
        </form>
    );
};

export default ReportForm;