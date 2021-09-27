import { useEffect, useState } from "react";
import { fetchActorsById } from "../services/tmdb-api";

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchActorsById(movieId)
      .then((actors) => setActors(actors.cast))
      .catch((error) => console.log(error));
  }, [movieId]);

  const renderImage = (actor) => {
    if (actor.profile_path) {
      return `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    } else {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png";
    }
  };

  return (
    <ul>
      {actors.map((actor) => (
        <li key={actor.id}>
          <img
            src={renderImage(actor)}
            alt={actor.name}
            width="200"
            height="250"
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
