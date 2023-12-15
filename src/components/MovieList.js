import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../utils/apis";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/showtimes/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
