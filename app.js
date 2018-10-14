import express from 'express';
import routes from './server/routes';

// Get all products
const app = express();
app.use('/api/v1', routes);
app.use('/api/v1/products', routes);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log('app running on port ', port));

export default app;
