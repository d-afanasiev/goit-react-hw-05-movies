import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchReviewsById } from "../../services/tmdb-api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsById(movieId)
      .then((reviews) => setReviews(reviews.results))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any rewiews for this movie</p>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};
