// save bookings in db
export const saveBooking = async (bookingData) => {
  const url = "http://localhost:5000/bookings";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify(bookingData),
  });
  const data = await response.json();
  return data;
};

// get bookings for user
export const getBooking = async (email) => {
  const url = `http://localhost:5000/bookings?email=${email}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const data = await response.json();
  return data;
};

// get all bookings for admin
export const getAllBookings = async () => {
  const response = await fetch(`http://localhost:5000/bookings`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const bookings = await response.json();
  return bookings;
};

// Delete booking
export const deleteBooking = async (id) => {
  const response = await fetch(`http://localhost:5000/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });

  const data = await response.json();
  return data;
};

// Create Payment Intent

export const getPaymentIntent = async (price) => {
  const response = await fetch(`http://localhost:5000/create-payment-intent`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
    body: JSON.stringify({ price }),
  });

  const data = await response.json();
  return data;
};
