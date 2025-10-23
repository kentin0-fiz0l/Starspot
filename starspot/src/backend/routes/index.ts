import { Router } from 'express';
import SightingController from '../controllers/sightings';

const router = Router();
const sightingController = new SightingController();

// Define routes for sightings
router.post('/sightings', sightingController.submitSighting.bind(sightingController));
router.get('/sightings', sightingController.getSightings.bind(sightingController));

export default router;