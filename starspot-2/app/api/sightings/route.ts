import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return await getSightings(req, res);
        case 'POST':
            return await createSighting(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

async function getSightings(req: NextApiRequest, res: NextApiResponse) {
    try {
        const sightings = await prisma.sighting.findMany({
            include: {
                celebrity: true,
                user: true,
            },
        });
        res.status(200).json(sightings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sightings' });
    }
}

async function createSighting(req: NextApiRequest, res: NextApiResponse) {
    const { location, celebrityId, userId, photo } = req.body;

    if (!location || !celebrityId || !userId) {
        return res.status(400).json({ error: 'Location, celebrityId, and userId are required' });
    }

    try {
        const newSighting = await prisma.sighting.create({
            data: {
                location,
                celebrityId,
                userId,
                photo,
            },
        });
        res.status(201).json(newSighting);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create sighting' });
    }
}