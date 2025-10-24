 'use client'
import React, { useEffect, useState } from 'react'
import Map from '../components/Map'
import ReportForm from '../components/ReportForm'
import SightingCard from '../components/SightingCard'

export default function HomePage() {
    const [sightings, setSightings] = useState([])

    useEffect(() => {
        let mounted = true
        async function load() {
            try {
                const res = await fetch('/api/sightings')
                if (!res.ok) return
                const data = await res.json()
                if (mounted) setSightings(data)
            } catch (e) {
                console.error(e)
            }
        }
        load()
        return () => { mounted = false }
    }, [])

    return (
        <div className="container">
            <h1>Welcome to StarSpot!</h1>
            <p>Your go-to platform for reporting and verifying celebrity sightings.</p>

            <section style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20, marginTop: 20 }}>
                <div>
                    <Map sightings={sightings} />

                    <h2 style={{ marginTop: 16 }}>Recent sightings</h2>
                    {sightings.length === 0 ? (
                        <p>No sightings reported yet.</p>
                    ) : (
                        sightings.map((s) => <SightingCard key={s.id} sighting={s} />)
                    )}
                </div>

                <aside>
                    <div className="card">
                        <h3>Report a sighting</h3>
                        <ReportForm />
                    </div>
                </aside>
            </section>
        </div>
    )
}