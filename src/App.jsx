//Importazioni
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import MoviesPage from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import DefaultLayout from "./layouts/DefaultLayout";
import AddMovies from "./pages/AddMovies";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <GlobalContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/add" element={<AddMovies />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
