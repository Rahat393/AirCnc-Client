// save bookings in db
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

// get bookings for user
export const getBooking = async (email) => {
  const url = `http://localhost:5000/bookings?email=${email}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// get all bookings for admin
export const getAllBooking = async () => {
  const url = "http://localhost:5000/bookings";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
