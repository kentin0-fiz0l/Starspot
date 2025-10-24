import React, { useState } from 'react';

const ReportForm = () => {
    const [celebrityName, setCelebrityName] = useState('');
    const [location, setLocation] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('celebrityName', celebrityName);
        formData.append('location', location);
        if (photo) {
            formData.append('photo', photo);
        }

        try {
            const response = await fetch('/api/sightings', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                // Handle successful submission (e.g., reset form, show success message)
                setCelebrityName('');
                setLocation('');
                setPhoto(null);
            } else {
                // Handle error (e.g., show error message)
                console.error('Error submitting sighting');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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