export const fetchMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movies = [
        { id: 1, title: "Movie A" },
        { id: 2, title: "Movie B" },
        // ... more movies
      ];
      resolve(movies);
    }, 1000);
  });
};

export const fetchShowtimes = (movieId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const showtimes = {
        1: ["12:00", "15:00", "18:00"],
        2: ["11:00", "14:00", "17:00"],
        // ... showtimes for other movies
      };
      resolve(showtimes[movieId]);
    }, 1000);
  });
};

export const fetchSeats = (showtimeId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const seats = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        isSelected: false,
        isReserved: false,
      }));
      resolve(seats);
    }, 1000);
  });
};

export const reserveSeats = (showtimeId, seatIds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful reservation
      resolve(
        `Reserved seats ${seatIds.join(", ")} for showtime ${showtimeId}`
      );
    }, 1000);
  });
};
