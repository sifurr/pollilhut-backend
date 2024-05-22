import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();
router.post('/api/products', ProductControllers.createProduct);
router.get('/api/products', ProductControllers.getProducts);
router.get('/api/products/:productId', ProductControllers.getProduct);

export const ProductRoutes = router;
