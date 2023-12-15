import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { MovieShowtimes } from "./components/MovieShowtimes";
import { SeatReservation } from "./components/SeatReservation";
import { PageNotFound } from "./components/PageNotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MovieList />} />
        <Route path="/showtimes/:movieId" element={<MovieShowtimes />} />
        <Route path="/reserve/:showtimeId" element={<SeatReservation />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
