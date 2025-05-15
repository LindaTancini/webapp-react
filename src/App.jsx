//Importazioni
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import MoviesPage from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import DefaultLayout from "./layouts/DefaultLayout";
import AddMovies from "./pages/AddMovies";
import GlobalContext from "./contexts/GlobalContext";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <GlobalContext.Provider
        value={{
          isLoading,
          setIsLoading,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/add" element={<AddMovies />} />
              <Route path="/movies/:slug" element={<MovieDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
