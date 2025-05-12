//Importazioni
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  //Axios
  function getMovies() {
    const url = "http://localhost:3000/api/movies";
    axios
      .get(url, {
        params: { search },
      })
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.log(err));
  }

  //Ricerca di un film
  function searchMovies(event) {
    event.preventDefault();

    getMovies();
  }

  useEffect(getMovies, []);

  return (
    <>
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
        Film
      </h1>
      <section className="p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Lista dei film:
        </h2>

        <form
          onSubmit={searchMovies}
          className="flex justify-end items-center space-x-2  mb-6"
        >
          <input
            type="text"
            placeholder="Cerca un film"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
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
