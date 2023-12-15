import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchShowtimes } from '../utils/apis';

export const MovieShowtimes = () => {
  const { movieId } = useParams();
  const [showtimes, setShowtimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShowtimes(movieId).then(data => {
      setShowtimes(data);
      setLoading(false);
    });
  }, [movieId]);

  if (loading) {
    return <div>Loading showtimes...</div>;
  }

  return (
    <div>
      <h1>Showtimes for Movie {movieId}</h1>
      <ul>
        {showtimes.map((time, index) => (
          <li key={index}>
            <Link to={`/reserve/${movieId}-${time}`}>{time}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};