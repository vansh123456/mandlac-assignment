import express from 'express';
import { getIncidents,resolveIncident,getCameras } from '../controllers/incidentController';

const router = express.Router();

router.get('/incidents', getIncidents);
router.patch('/incidents/:id/resolve', resolveIncident);
router.get('/cameras', getCameras);

export default router;