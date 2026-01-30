"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const trips = [
  { id: 1, name: "Goa Beach Trip", pricePerMember: 2000 },
  { id: 2, name: "Manali Hill Trip", pricePerMember: 2500 },
  { id: 3, name: "Dubai Tour", pricePerMember: 8000 },
  { id: 4, name: "Thailand Package", pricePerMember: 7000 },
  { id: 5, name: "Kashmir Paradise", pricePerMember: 3000 },
  { id: 6, name: "Andaman Islands", pricePerMember: 4500 },
];

export default function TripBookingPage() {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [selectedTrip, setSelectedTrip] = useState(trips[0]);
  const [members, setMembers] = useState(1);

  const totalPrice = selectedTrip.pricePerMember * members;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const bookingData = {
      customerDetails: customer,
      tripDetails: selectedTrip,
      members,
      totalPrice,
    };

   
    console.log("TRIP BOOKING DATA ");
    console.log(bookingData);

    Swal.fire({
      icon: "success",
      title: "Booking Successful ",
      text: "Your trip has been booked successfully!",
      confirmButtonColor: "#0D6269",
    });

    // future me yahin API call lagegi 
    // fetch("/api/book-trip", { method: "POST", body: JSON.stringify(bookingData) })
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 mt-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Trip Booking
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 space-y-5"
      >
        {/* Customer Details */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Customer Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border rounded-lg px-4 py-2 mb-3"
            value={customer.name}
            onChange={(e) =>
              setCustomer({ ...customer, name: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            required
            className="w-full border rounded-lg px-4 py-2 mb-3"
            value={customer.phone}
            onChange={(e) =>
              setCustomer({ ...customer, phone: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-lg px-4 py-2"
            value={customer.email}
            onChange={(e) =>
              setCustomer({ ...customer, email: e.target.value })
            }
          />
        </div>

     
        <div>
          <h2 className="font-semibold text-lg mb-3">Select Trip</h2>

          <select
            className="w-full border rounded-lg px-4 py-2"
            value={selectedTrip.id}
            onChange={(e) =>
              setSelectedTrip(
                trips.find((t) => t.id === Number(e.target.value))!
              )
            }
          >
            {trips.map((trip) => (
              <option key={trip.id} value={trip.id}>
                {trip.name} (₹{trip.pricePerMember}/member)
              </option>
            ))}
          </select>
        </div>

        {/* Members */}
        <div>
          <h2 className="font-semibold text-lg mb-3">
            Number of Members
          </h2>

          <input
            type="number"
            min={1}
            className="w-full border rounded-lg px-4 py-2"
            value={members}
            onChange={(e) => setMembers(Number(e.target.value))}
          />
        </div>

        {/* Price */}
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            Price per member: ₹{selectedTrip.pricePerMember}
          </p>
          <p className="text-lg font-bold mt-1">
            Total Price: ₹{totalPrice}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#0D6269] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Book Now
        </button>
      </form>
    </section>
  );
}
