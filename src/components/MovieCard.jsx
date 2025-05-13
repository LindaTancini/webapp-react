//Importazioni
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  const { id, imgPath, title, director, abstract, reviews_vote } = data;
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={imgPath} alt={title} className="rounded-t-lg" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base mb-2">
          <span className="font-semibold">{director}</span>
        </p>
        <p className="font-semibold"> Recensioni del film: {reviews_vote} </p>
        <p className="text-gray-500 text-sm">{abstract}</p>
      </div>
      <div className="px-6 py-4">
        <Link
          to={`/movies/${id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Scheda del film
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
