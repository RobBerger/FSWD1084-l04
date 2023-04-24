import { Router } from 'express';
import { allCoffee, oneCoffee } from '../controllers/coffeeController';

const router = Router();

// GET /coffee - renders a list of coffee items
router.get('/', allCoffee);

// GET /coffee/:name - render the coffee item requested
router.get('/:name', oneCoffee);

export default router;