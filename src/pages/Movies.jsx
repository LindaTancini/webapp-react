//Importazioni
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  //Axios
  function getMovies() {
    const url = "http://localhost:3000/api/movies";
    axios
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  getMovies();

  return (
    <>
      <h1>Film</h1>
      <section>
        <h2>Lista dei film:</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {movies.length ? (
            movies.map((movie) => (
              <div>
                <MovieCard />
              </div>
            ))
          ) : (
            <div>Nessun Film trovato</div>
          )}
        </div>
      </section>
    </>
  );
}

export default MoviesPage;
