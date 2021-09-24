import { Route, Switch, useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../services/tmdb-api";
import { getYear, parseISO } from "date-fns";
// import { Notify, Block } from "notiflix";
import { Link, useRouteMatch } from "react-router-dom";
import Loader from "react-loader-spinner";
import Reviews from "./Reviews";
import Cast from "./Cast";
import css from "../styles/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState("");
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState("idle");
  let { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    setStatus("pending");
    fetchMovieById(movieId)
      .then((data) => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch((error) => console.log(error))
      .finally(() => setStatus("resolved"));
  }, [movieId]);

  const renderImage = () => {
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    } else {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png";
    }
  };

  // console.log(movie.release_date);

  return (
    <>
      {status === "pending" && (
        <Loader
          type="Circles"
          color="rgb(56, 56, 56)"
          height={100}
          width={100}
          timeout={1000} //3 secs
        />
      )}
      {status === "resolved" && (
        <>
          <div className={css.wrapperMovie}>
            <div className={css.imageMovie}>
              <img src={renderImage()} alt={movie.title} />
            </div>
            <div>
              <h1>
                {movie.title}
                {movie.release_date &&
                  `(${getYear(parseISO(movie.release_date))})`}
              </h1>
              <p>User Popularity: {Math.round(movie.popularity)}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{genres.map((genre) => `${genre.name} `)}</p>
            </div>
          </div>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={`${url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${url}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <div className={css.information}>
              <Switch>
                <Route path={`${url}/cast`}>
                  <Cast movieId={movieId}></Cast>
                </Route>
                <Route path={`${url}/reviews`}>
                  <Reviews movieId={movieId}></Reviews>
                </Route>
              </Switch>
            </div>
          </div>
        </>
      )}
    </>
  );
}
