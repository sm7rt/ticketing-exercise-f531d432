import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSeats, reserveSeats } from "../utils/apis";

export const SeatReservation = () => {
  const { showtimeId } = useParams();
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSeats(showtimeId).then((data) => {
      setSeats(data);
      setLoading(false);
    });
  }, [showtimeId]);

  const toggleSeatSelection = (seatId) => {
    const updatedSeats = seats.map((seat) =>
      seat.id === seatId ? { ...seat, isSelected: !seat.isSelected } : seat
    );
    setSeats(updatedSeats);
  };

  const handleReserveSeats = () => {
    const selectedSeats = seats
      .filter((seat) => seat.isSelected)
      .map((seat) => seat.id);
    reserveSeats(showtimeId, selectedSeats)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  if (loading) {
    return <div>Loading seats...</div>;
  }

  return (
    <div>
      <h1>Reserve your seats for Showtime {showtimeId}</h1>
      <div>
        {seats.map((seat) => (
          <button
            key={seat.id}
            style={{ background: seat.isSelected ? "green" : "grey" }}
            onClick={() => toggleSeatSelection(seat.id)}
          >
            Seat {seat.id}
          </button>
        ))}
      </div>
      <button onClick={handleReserveSeats}>Reserve</button>
    </div>
  );
};
