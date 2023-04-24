import { Router } from 'express';

const router = Router();

// GET /coffee - renders a list of coffee items
router.get('/');

// GET /coffee/:name - render the coffee item requested
router.get('/:name');

export default router;