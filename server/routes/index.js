import express from 'express';
import bodyParser from 'body-parser';
import ProductController from '../controllers/ProductController';
import SaleOrdersController from '../controllers/SaleOrdersController';
import AuthController from '../controllers/AuthController';
import Check from '../middleware/Check';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/products', ProductController.getAllProduct);
router.get('/products/:id', ProductController.getSingleProduct);
router.get('/sales', Check.isAdmin, SaleOrdersController.getAllSales);
router.post('/users/login', AuthController.login);
export default router;
