//Importazioni
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";
import StarRating from "../components/StarRating";
import AddReview from "../components/AddReviews";
import GlobalContext from "../contexts/GlobalContext";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const { setIsLoading } = useContext(GlobalContext);

  //Axios
  function getMovie() {
    setIsLoading(true);
    const url = `http://localhost:3000/api/movies/${id}`;
    console.log(id);
    axios
      .get(url)
      .then((res) => {
        setMovie(res.data);
        setReviews(res.data.reviews);
      })
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }

  useEffect(getMovie, [id]);

  return (
    <>
      <article
        id="movie"
        className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8"
      >
        {/* Info film */}
        <header className="text-center mb-6">
          <img
            src={movie.imgPath}
            alt={movie.title}
            className="w-full max-w-md h-auto mx-auto rounded-lg shadow-md mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {movie?.title}
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            Director: {movie?.director}
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {movie?.abstract}
          </p>
          <div>
            {movie.id && (
              <div className="flex justify-center gap-4 my-4">
                <button
                  onClick={() => navigate(`/movies/${movie.id - 1}`)}
                  className="bg-pink-200 px-4 py-2 rounded-lg hover:bg-pink-300 cursor-pointer transition"
                >
                  Torna al film precedente! ❤️
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="bg-pink-200  px-4 py-2 rounded-lg hover:bg-pink-300 cursor-pointer transition"
                >
                  Torna alla HomePage! ❤️
                </button>
                <button
                  onClick={() => navigate(`/movies/${movie.id + 1}`)}
                  className="bg-pink-200  px-4 py-2 rounded-lg hover:bg-pink-300 cursor-pointer transition"
                >
                  Vai al film successivo! ❤️
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Recensioni */}
        <section id="reviews" className="mt-10">
          <header className="flex justify-between items-center border-b pb-2 mb-4">
            <h3 className="text-2xl font-semibold text-pink-800">
              Le recensioni dei nostri utenti:
            </h3>
            <div className="text-pink-600 font-medium">
              Average: {movie.reviews_vote}
              <StarRating vote={movie.reviews_vote} />
            </div>
          </header>
          {reviews.length ? (
            reviews.map((review) => (
              <ReviewCard data={review} key={review.id} />
            ))
          ) : (
            <p className="text-pink-700 italic">Nessuna recensione trovata</p>
          )}
        </section>
        <section className="mt-10">
          <AddReview movieId={id} refreshMovie={getMovie} />
        </section>
      </article>
    </>
  );
}

export default MovieDetails;
