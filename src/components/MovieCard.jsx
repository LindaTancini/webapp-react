//Importazioni
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  const { id, imgPath, title, director, abstract } = data;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <img src={imgPath} alt={title} />
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">{director}</span>
        </p>
        <p className="text-gray-600 text-base">{abstract}</p>
      </div>
      <div className="px-6 py-4">
        <Link
          to={`/movies/${id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Scheda del film
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
