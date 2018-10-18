import express from 'express';
import bodyParser from 'body-parser';
import ProductController from '../controllers/ProductController';
import SaleOrdersController from '../controllers/SaleOrdersController';
import AuthController from '../controllers/AuthController';
import CreateProductClass from '../controllers/CreateProductController';
import Check from '../middleware/Check';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/products', ProductController.getAllProduct);
router.get('/products/:id', ProductController.getSingleProduct);
router.get('/sales', Check.isAdmin, SaleOrdersController.getAllSales);
router.get('/sales/:id', SaleOrdersController.getSingleSale);
router.post('/products', Check.isAdmin, CreateProductClass.createProduct);
router.post('/users/login', AuthController.login);
export default router;
