//Importazioni
import { useEffect, useState } from "react";
import axios from "axios";

function Carousel() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const url = "http://localhost:3000/api/movies";
    axios
      .get(url)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  //Funzione film successivo
  function nextMovie() {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  }
  //Funzione film precedente
  function prevMovie() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  }

  if (movies.length === 0)
    return <p className="text-center mt-10">Nessun film disponibile</p>;

  //Nella variabile metto il currentIndex
  const movie = movies[currentIndex];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-pink-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-pink-800 mb-4">
        Film in evidenza 🎬
      </h2>
      {/* Immagine  */}
      <div className="relative">
        <img
          src={movie.imgPath}
          alt={movie.title}
          className="w-full max-w-md h-auto mx-auto rounded-lg shadow-md mb-4"
        />
        {/* Descrizione del film */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-pink-700">{movie.title}</h3>
          <p className="text-gray-600">
            {movie.director} • {movie.genre}
          </p>
          <p className="text-sm text-gray-500 italic mt-1">
            {movie.release_year}
          </p>
          <p className="text-sm mt-2">{movie.abstract}</p>
        </div>
        {/* Bottoni avanti e indietro */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevMovie}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 cursor-pointer"
          >
            Indietro
          </button>
          <button
            onClick={nextMovie}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 cursor-pointer"
          >
            Avanti
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
