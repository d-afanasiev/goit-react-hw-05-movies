import { useState, useEffect } from "react";
import { fetchMovies } from "../services/tmdb-api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     fetchMovies()
  //       .then((data) => setMovies(data.results))
  //       .finally(console.log(movies));
  //   }, []);

  return <h1>Trending today</h1>;
}
