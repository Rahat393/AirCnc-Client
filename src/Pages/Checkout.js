import React, { Fragment, useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import toast from "react-hot-toast";

import { AuthContext } from "../contexts/AuthProvider";
import WhosComing from "../Components/WhosComing";
import ReviewHouse from "../Components/ReviewHouse";
import { saveBooking } from "../api/Bookings";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutCart from "../Components/CheckoutCart";

import ConfirmBook from "./ConfirmBook";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { state: checkoutData } = useLocation();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [bookingData, setBookingData] = useState({
    home: {
      id: checkoutData?.homeData?._id,
      image: checkoutData?.homeData?.image,
      title: checkoutData?.homeData?.title,
      location: checkoutData?.homeData?.location,
      from: checkoutData?.homeData?.from,
      to: checkoutData?.homeData?.to,
    },
    hostEmail: checkoutData?.homeData?.host?.email,
    comment: "",
    price: parseFloat(checkoutData?.totalPrice),
    guestEmail: user?.email,
  });

  const handleBooking = () => {
    console.log(bookingData);

    saveBooking(bookingData)
      .then((data) => {
        console.log(data);
        toast.success("Booking Successful!");
        navigate("/Dashboard/my-bookings");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  return (
    <div className="md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-4">
      {/* Details */}
      <div className="flex-1">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          defaultIndex={1}
        >
          <Tab.List>
            <div className="container flex flex-wrap items-center py-4 mx-auto overflow-y-auto whitespace-nowrap">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? "text-blue-600" : "text-gray-600"}
                  >
                    1. Reviews house rules
                  </button>
                )}
              </Tab>

              <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? "text-blue-600" : "text-gray-600"}
                  >
                    2. Who's coming?
                  </button>
                )}
              </Tab>

              <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={selected ? "text-blue-600" : "text-gray-600"}
                  >
                    3. Confirm Booking
                  </button>
                )}
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <ReviewHouse
                setSelectedIndex={setSelectedIndex}
                homeData={{
                  ...checkoutData?.homeData,
                  totalNights: checkoutData?.totalNights,
                }}
              />
            </Tab.Panel>
            <Tab.Panel>
              <WhosComing
                setSelectedIndex={setSelectedIndex}
                bookingData={bookingData}
                setBookingData={setBookingData}
                host={checkoutData?.homeData?.host}
              />
            </Tab.Panel>
            <Tab.Panel>
              <ConfirmBook handleBooking={handleBooking}></ConfirmBook>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Cart */}
      <CheckoutCart
        homeData={{
          ...checkoutData?.homeData,
          totalNights: checkoutData?.totalNights,
        }}
      />
    </div>
  );
};

export default Checkout;
