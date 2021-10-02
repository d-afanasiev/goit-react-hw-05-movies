import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/tmdb-api";

export default function Reviews({ movieId, state, changeState }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    changeState("pending");
    fetchReviewsById(movieId)
      .then((reviews) => setReviews(reviews.results))
      .catch((error) => console.log(error))
      .finally(() => {
        changeState("resolve");
      });
  }, [changeState, movieId]);

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
          {reviews && reviews.length > 0 ? (
            reviews.map((review) => (
              <li key={review.id}>
                <h5>{review.author}</h5>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <p>We don't have any rewiews for this movie</p>
          )}
        </ul>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};
