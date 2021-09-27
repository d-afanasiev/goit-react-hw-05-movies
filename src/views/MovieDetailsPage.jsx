import {
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from "react-router";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../services/tmdb-api";
import { getYear, parseISO } from "date-fns";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
// import { Notify, Block } from "notiflix";
import { Link, useRouteMatch } from "react-router-dom";
import css from "../styles/MovieDetailsPage.module.css";

const Reviews = lazy(() => import("./Reviews"));
const Cast = lazy(() => import("./Cast"));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [goBack, setGoBack] = useState("");
  const history = useHistory();
  const location = useLocation();
  let { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (location.state) {
      setGoBack(location.state.from);
    }

    fetchMovieById(movieId)
      .then((data) => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch((error) => console.log(error));
  }, [location.state, movieId]);

  const handleGoBack = () => {
    history.push(location.state?.from ? location.state.from : "/");
  };

  const renderImage = () => {
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    } else {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png";
    }
  };

  return (
    <>
      {movie && (
        <>
          <button className={css.goBack} onClick={handleGoBack}>
            ← Go back
          </button>
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
                <Link
                  to={{
                    pathname: `${url}/cast`,
                    state: { from: `${goBack}` },
                  }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `${url}/reviews`,
                    state: { from: `${goBack}` },
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <div className={css.information}>
              <Suspense
                fallback={
                  <Loader
                    type="Circles"
                    color="rgb(56, 56, 56)"
                    height={100}
                    width={100}
                    timeout={1000}
                  />
                }
              >
                <Switch>
                  <Route path={`${url}/cast`}>
                    <Cast movieId={movieId}></Cast>
                  </Route>
                  <Route path={`${url}/reviews`}>
                    <Reviews movieId={movieId}></Reviews>
                  </Route>
                </Switch>
              </Suspense>
            </div>
          </div>
        </>
      )}
    </>
  );
}
