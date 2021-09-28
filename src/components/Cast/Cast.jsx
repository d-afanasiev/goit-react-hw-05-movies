import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import { useEffect, useState } from "react";
import { fetchActorsById } from "../../services/tmdb-api";

export default function Cast({ movieId, state, changeState }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    changeState("pending");
    fetchActorsById(movieId)
      .then((actors) => setActors(actors.cast))
      .catch((error) => console.log(error))
      .finally(() => {
        changeState("resolve");
      });
  }, [movieId]);

  const renderImage = (actor) => {
    if (actor.profile_path) {
      return `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    } else {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png";
    }
  };

  return (
    <>
      {state === "pending" && (
        <Loader
          type="Circles"
          color="rgb(56, 56, 56)"
          height={100}
          width={100}
          timeout={2000}
        />
      )}
      {state === "resolve" && (
        <ul>
          {actors && actors.length > 0 ? (
            actors.map((actor) => (
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
            ))
          ) : (
            <p>We don't have any cast for this movie</p>
          )}
        </ul>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
