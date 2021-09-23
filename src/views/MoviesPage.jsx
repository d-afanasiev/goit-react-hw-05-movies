import { useState } from "react";
import { searchBooks } from "../services/tmdb-api";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const [searchFilms, setSearchFilms] = useState([]);
  const [nameFilm, setNameFilm] = useState("");

  const handleChange = (e) => {
    setNameFilm(e.target.value);
  };

  const handleSubmitFilm = (e) => {
    e.preventDefault();
    searchBooks(nameFilm).then((data) => {
      setSearchFilms(data.results);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmitFilm}>
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
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
