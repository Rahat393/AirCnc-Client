import React from "react";

const ConfirmBook = ({ handleBooking }) => {
  return (
    <>
      <h1 className="text-2xl font-bold">Confirm Your Booking</h1>

      <button
        className="py-2 mt-5 px-4 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white"
        onClick={handleBooking}
      >
        Confirm
      </button>
    </>
  );
};

export default ConfirmBook;
