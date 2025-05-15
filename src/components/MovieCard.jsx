// Importazioni
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function MovieCard({ data }) {
  const { imgPath, title, director, abstract, reviews_vote, slug } = data;
  return (
    <div className="flex flex-col max-w-xs h-full rounded-2xl overflow-hidden shadow-lg bg-pink-100 transition transform hover:scale-105">
      {/* Immagine */}
      <div className="w-full aspect-[2/3] overflow-hidden bg-gray-200">
        <img
          src={imgPath}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      {/* Contenuto della card */}
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h2 className="text-xl font-bold text-pink-800 mb-2">{title}</h2>
          <p className="text-pink-700 font-semibold mb-1">{director}</p>
          <div className="mb-2">
            <span className="font-semibold text-pink-700">
              Recensioni del film:
            </span>
            <StarRating vote={reviews_vote} />
          </div>
          <p className="text-gray-700 text-sm">{abstract}</p>
        </div>
        {/* Bottone */}
        <div className="mt-4">
          <Link
            to={`/movies/${slug}`}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg text-center block transition duration-300 ease-in-out"
          >
            Scheda del film
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
