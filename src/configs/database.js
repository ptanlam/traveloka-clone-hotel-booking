import mongoose from 'mongoose';

export default async function connectToDatabase() {
  try {
    await mongoose.connect(
      'mongodb://localhost/traveloka_clone_hotel_booking_service',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    );
    // eslint-disable-next-line no-console
    console.log('Hotel booking service connected to database successfully!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(
      `Hotel booking service failed to connect to database: ${err.message}`,
    );
  }
}
