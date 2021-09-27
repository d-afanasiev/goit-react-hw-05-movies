import { useState, useEffect } from "react";
import { searchBooks } from "../services/tmdb-api";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import { useRouteMatch, useHistory, useLocation } from "react-router";
import css from "../styles/MoviesPage.module.css";

export default function MoviesPage() {
  const [searchFilms, setSearchFilms] = useState([]);
  const [nameFilm, setNameFilm] = useState("");
  const history = useHistory();
  const location = useLocation();

  const { url } = useRouteMatch();

  const handleChange = (e) => {
    setNameFilm(e.target.value);
  };

  const sortOrder = new URLSearchParams(location.search).get("query");

  const handleSubmitFilm = (e) => {
    e.preventDefault();

    if (!nameFilm) {
      Notify.warning("Input field is empty");
      return;
    }

    history.push({
      ...location,
      search: `query=${nameFilm}`,
    });
  };

  useEffect(() => {
    if (!location.search) {
      return;
    }

    searchBooks(sortOrder)
      .then((data) => {
        setSearchFilms(data.results);
      })
      .catch((error) => console.log(error));
  }, [location.search, sortOrder]);

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
      <ul>
        {searchFilms.map((film) => (
          <li key={film.id}>
            <Link
              to={{
                pathname: `${url}/${film.id}`,
                state: { from: `${url}${history.location.search}` },
              }}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
