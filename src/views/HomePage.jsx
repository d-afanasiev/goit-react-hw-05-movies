import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../services/tmdb-api";
import { Notify } from "notiflix";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => Notify.failure(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
