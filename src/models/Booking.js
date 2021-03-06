import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookingSchema = new Schema({
  guestContact: {
    type: {
      userId: { type: String },
      fullName: {
        type: {
          firstName: { type: String, maxLength: 50, required: true },
          middleName: { type: String, maxLength: 50 },
          lastName: { type: String, maxLength: 50, required: true },
        },
        required: true,
      },
      phoneNumber: { type: String, maxLength: 15, required: true },
      email: {
        type: String,
        maxLength: 320,
        unique: true,
        required: true,
      },
    },
    required: true,
  },
  isSelfBooking: { type: Boolean, required: true },

  guestInformation: {
    type: {
      fullName: {
        type: {
          firstName: { type: String, maxLength: 50, required: true },
          middleName: { type: String, maxLength: 50 },
          lastName: { type: String, maxLength: 50, required: true },
        },
        required: true,
      },
    },
    required: true,
  },

  hotelInformation: {
    hotelId: { type: String, required: true },
    hotelName: { type: String, required: true },
    rooms: {
      type: {
        roomId: { type: String, required: true },
        roomName: { type: String, required: true },
        quantityOfGuests: { type: Number, required: true },
        basedPricePerNight: { type: Number, required: true },
      },
    },
  },

  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  numberOfNights: { type: Number, required: true },
});

const Booking = mongoose.model('booking', bookingSchema);

export default Booking;
