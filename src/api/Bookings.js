export const saveBooking = async (bookingData) => {
  const url = "http://localhost:5000/bookings";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const data = await response.json();
  return data;
};
