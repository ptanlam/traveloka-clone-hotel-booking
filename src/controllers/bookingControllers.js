import Booking from '../models/Booking';
import populateBookingInformation from '../helpers/populateBookingInformation';

// [POST] /api/v1/bookings/hotels
async function postBooking(req, res) {
  const bookingInformation = populateBookingInformation(req.body);
  const booking = new Booking({ ...bookingInformation });

  try {
    await booking.save();
    res
      .status(201)
      .send(
        'Đã đặt phòng thành công! Khách sạn sẽ liên hệ quý khách để xác nhận!',
      );
  } catch (err) {
    res.status(500).send(`Có lỗi xảy ra: ${err.message}`);
  }
}

export default { postBooking };
