import express from 'express';
import routes from './server/routes';

const app = express();

app.use('/api/v1', routes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('app running on port ', port));

export default app;
