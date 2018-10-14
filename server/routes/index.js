import express from 'express';
import bodyParser from 'body-parser';
import productController from '../controllers/productController';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/products', productController.getAllProduct);

export default router;
