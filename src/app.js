import express from 'express';
import routes from './routes';
import connectToDatabase from './configs/database';

const app = express();
const PORT = process.env.PORT || 30012;

connectToDatabase();

app.use('/api/v1/bookings', routes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hotel booking service is running on ${PORT}`);
});
