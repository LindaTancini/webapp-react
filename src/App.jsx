//Importazioni
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>HomePage</div>} />
          <Route path="/movies" element={<div>Elenco dei film</div>} />
          <Route path="/movies/:id" element={<div>Dettaglio del film</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
