import Booking from '../models/Booking';

// [GET] /api/v1/bookings/hotels/:hotelId?
async function getBookingsOfHotel(req, res) {
  try {
    const { hotelId } = req.body;
    if (hotelId) {
      const bookings = await Booking.find({ hotelInformation: { hotelId } });
      return res.status(200).json({ bookings });
    }

    const bookings = await Booking.find();
    return res.status(200).json({ bookings });
  } catch (err) {
    return res.status(500).send(`Đã xảy ra lỗi: ${err.message}`);
  }
}

export default { getBookingsOfHotel };
