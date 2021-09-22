import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../services/tmdb-api";
import css from "../styles/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState("");
  const [genres, setGenres] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId)
      .then((data) => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch((error) => console.log(error));
  }, [movieId]);
  console.log(movie);

  console.log(genres);
  return (
    <>
      {movie && (
        <div className={css.wrapperMovie}>
          <div className={css.imageMovie}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <p>User Popularity: {Math.round(movie.popularity)}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{genres.map((genre) => `${genre.name} `)}</p>
          </div>
        </div>
      )}
    </>
  );
}
