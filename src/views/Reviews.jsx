import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { fetchReviewsById } from "../services/tmdb-api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("idle");

  console.log(reviews);

  useEffect(() => {
    setStatus("pending");
    fetchReviewsById(movieId)
      .then((reviews) => setReviews(reviews.results))
      .catch((error) => console.log(error))
      .finally(() => setStatus("resolved"));
  }, [movieId]);

  //   console.log(actors);
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
      {status === "resolved" && reviews.length === 0 ? (
        <p>We don't have any rewiews for this movie</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h5>{review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
