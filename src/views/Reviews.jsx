import { useEffect, useState } from "react";
import { fetchReviewsById } from "../services/tmdb-api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  console.log(reviews === true);

  useEffect(() => {
    fetchReviewsById(movieId).then((reviews) => setReviews(reviews.results));
  }, [movieId]);

  //   console.log(actors);
  return (
    <ul>
      {!reviews && (
        <li>
          <p>We don't have any rewiews for this movie</p>
        </li>
      )}
      {reviews.map((review) => (
        <li key={review.id}>
          <h5>{review.author}</h5>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
