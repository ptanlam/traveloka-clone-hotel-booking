import Booking from '../models/Booking';

// [GET] /api/v1/bookings/hotels/:userId?
async function getBookingsOfUser(req, res) {
  try {
    const { hotelId: userId } = req.body;
    if (userId) {
      const bookings = await Booking.find({ guestContact: { userId } });
      return res.status(200).json({ bookings });
    }

    const bookings = await Booking.find();
    return res.status(200).json({ bookings });
  } catch (err) {
    return res.status(500).send(`Đã xảy ra lỗi: ${err.message}`);
  }
}

export default { getBookingsOfUser };
