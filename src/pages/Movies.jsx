//Importazioni
import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import GlobalContext from "../contexts/GlobalContext";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const { setIsLoading } = useContext(GlobalContext);

  //Axios
  function getMovies() {
    setIsLoading(true);
    const url = "http://localhost:3000/api/movies";
    axios
      .get(url, {
        params: { search },
      })
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }

  //Ricerca di un film
  function searchMovies(event) {
    event.preventDefault();

    getMovies();
  }

  useEffect(getMovies, []);

  return (
    <>
      {/* Titolo */}
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Lista dei film:
      </h1>
      <section className="p-6">
        {/* Form */}
        <form
          onSubmit={searchMovies}
          className="flex justify-end items-center space-x-2 mb-6"
        >
          <input
            type="text"
            placeholder="Cerca un film"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 w-64"
          />
          {/* Bottone */}
          <button
            type="submit"
            className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Cerca
          </button>
        </form>

        <div className="flex flex-wrap gap-4 justify-center">
          {movies.length ? (
            movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
          ) : (
            <div>Nessun Film trovato</div>
          )}
        </div>
      </section>
    </>
  );
}

export default MoviesPage;
