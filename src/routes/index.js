import express from 'express';
import bookingControllers from '../controllers/bookingControllers';
import hotelBookingControllers from '../controllers/hotelBookingControllers';
import userBookingControllers from '../controllers/userBookingControllers';

const router = express.Router();

router.route('/').post(bookingControllers.postBooking);

router
  .route('/hotels/:hotelId?')
  .get(hotelBookingControllers.getBookingsOfHotel);

router.route('/users/:userId?').get(userBookingControllers.getBookingsOfUser);

export default router;
