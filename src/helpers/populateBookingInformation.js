export default function populateBookingInformation(data) {
  const {
    guestContact,
    isSelfBooking,
    guestInformation,
    hotelInformation,
    checkInDate,
    checkOutDate,
  } = data;

  return {
    guestContact,
    isSelfBooking,
    guestInformation,
    hotelInformation,
    checkInDate,
    checkOutDate,
  };
}
