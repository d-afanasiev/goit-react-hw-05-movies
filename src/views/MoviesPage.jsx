import { useState } from "react";
import { searchBooks } from "../services/tmdb-api";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";
import Loader from "react-loader-spinner";
import css from "../styles/MoviesPage.module.css";

export default function MoviesPage() {
  const [searchFilms, setSearchFilms] = useState([]);
  const [nameFilm, setNameFilm] = useState("");
  const [status, setStatus] = useState("idle");

  const { url } = useRouteMatch();

  console.log(url);

  const handleChange = (e) => {
    setNameFilm(e.target.value);
  };

  const handleSubmitFilm = (e) => {
    e.preventDefault();

    setStatus("pending");

    searchBooks(nameFilm)
      .then((data) => {
        setSearchFilms(data.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setStatus("resolved"));
  };

  return (
    <>
      <form onSubmit={handleSubmitFilm} className={css.submitMovie}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          value={nameFilm}
          onChange={handleChange}
        />
        <button type="submit">Поиск</button>
      </form>
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
        <ul>
          {searchFilms.map((film) => (
            <li key={film.id}>
              <Link to={`${url}/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
