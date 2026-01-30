"use client";

import { useState } from "react";

const LOCATIONS = [
  "Delhi (DEL)",
  "Mumbai (BOM)",
  "Bangalore (BLR)",
  "Hyderabad (HYD)",
  "Kolkata (CCU)",
];

const MOCK_FLIGHTS = (from: string, to: string) =>
  Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    airline: "Dream Sky Airways",
    from,
    to,
    depart: `${6 + i}:00 AM`,
    arrive: `${8 + i}:30 AM`,
    duration: "2h 30m",
    baggage: "15kg",
    price: 4500 + i * 350,
  }));

export default function FlightForm() {
  const today = new Date().toISOString().split("T")[0];

  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(today);
  const [returnDate, setReturnDate] = useState(today);
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const searchFlights = () => {
    if (!from || !to) return alert("Please select From & To");
    setResults(MOCK_FLIGHTS(from, to));
  };

  return (
    <div className="relative z-30 space-y-6">
      {/* Trip Type */}
      <div className="flex gap-6 text-sm">
        {["oneway", "round"].map((t) => (
          <label key={t} className="radio-label">
            <input
              type="radio"
              checked={tripType === t}
              onChange={() => setTripType(t as any)}
              className="accent-[#0D6269]"
            />
            {t === "oneway" ? "One Way" : "Round Trip"}
          </label>
        ))}
      </div>

      {/* INPUT GRID */}
      <div
        className={`grid gap-4 ${
          tripType === "round" ? "md:grid-cols-5" : "md:grid-cols-4"
        }`}
      >
        {/* FROM */}
        <div className="input-glass relative">
          <span>From</span>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onFocus={() => setShowFrom(true)}
            className="glass-input"
            placeholder="Enter city"
          />
          {showFrom && (
            <div className="absolute top-full left-0 w-full bg-[#0f172a] border border-white/20 rounded-xl mt-1 z-40">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc}
                  onClick={() => {
                    setFrom(loc);
                    setShowFrom(false);
                  }}
                  className="px-4 py-2 text-sm text-white hover:bg-white/10 cursor-pointer"
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TO */}
        <div className="input-glass relative">
          <span>To</span>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onFocus={() => setShowTo(true)}
            className="glass-input"
            placeholder="Enter city"
          />
          {showTo && (
            <div className="absolute top-full left-0 w-full bg-[#0f172a] border border-white/20 rounded-xl mt-1 z-40">
              {LOCATIONS.map((loc) => (
                <div
                  key={loc}
                  onClick={() => {
                    setTo(loc);
                    setShowTo(false);
                  }}
                  className="px-4 py-2 text-sm text-white hover:bg-white/10 cursor-pointer"
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DATES */}
        <div className="input-glass">
          <span>Departure</span>
          <input
            type="date"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
            className="glass-input"
          />
        </div>

        {tripType === "round" && (
          <div className="input-glass">
            <span>Return</span>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="glass-input"
            />
          </div>
        )}

        <button onClick={searchFlights} className="search-btn">
          Search Flights
        </button>
      </div>

      {/* ===== RESULTS ===== */}
      {results.length > 0 && (
        <div className="space-y-3 mt-6">
          {results.map((f) => (
            <div
              key={f.id}
              className="flex justify-between items-center bg-[#0f172a] border border-white/20 rounded-xl px-4 py-3 text-white"
            >
              <div>
                <p className="font-semibold">{f.airline}</p>
                <p className="text-xs text-gray-400">
                  {f.from} → {f.to}
                </p>
                <p className="text-xs text-gray-400">
                  {f.depart} – {f.arrive} • {f.duration}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-300">Baggage: {f.baggage}</p>
                <p className="text-lg font-bold text-[#0D6269]">
                  ₹{f.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
