//Importazioni
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMovies() {
  //Variabile che contiene i dati da inserire
  const initialValues = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();

  function handleFormData(e) {
    const { name, value, files } = e.target;
    let currentValue = value;
    if (name === "image") {
      currentValue = files[0];
    } else {
      currentValue = value;
    }

    setFormData((formData) => ({
      ...formData,
      [name]: currentValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("FIlm creato");
    console.log(formData);

    const url = `http://localhost:3000/api/movies`;

    axios
      .post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        navigate("/");
        setFormData(initialValues);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 p-6 bg-pink-100 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center">
        Aggiungi un nuovo film 🎬
      </h2>

      {/* Titolo */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-pink-700 mb-1"
        >
          Titolo
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleFormData}
          placeholder="Inserisci il titolo"
          className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Regista */}
      <div className="mb-4">
        <label
          htmlFor="director"
          className="block text-sm font-medium text-pink-700 mb-1"
        >
          Regista
        </label>
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleFormData}
          placeholder="Inserisci il regista"
          className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Genere */}
      <div className="mb-4">
        <label
          htmlFor="genre"
          className="block text-sm font-medium text-pink-700 mb-1"
        >
          Genere
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleFormData}
          placeholder="Es. Drammatico, Commedia, Fantasy..."
          className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Anno di produzione */}
      <div className="mb-4">
        <label
          htmlFor="release_year"
          className="block text-sm font-medium text-pink-700 mb-1"
        >
          Anno di produzione
        </label>
        <input
          type="number"
          id="release_year"
          name="release_year"
          placeholder="Es. 2024"
          value={formData.release_year}
          onChange={handleFormData}
          min={1900}
          max={2099}
          className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Descrizione */}
      <div className="mb-4">
        <label
          htmlFor="abstract"
          className="block text-sm font-medium text-pink-700 mb-1"
        >
          Descrizione
        </label>
        <textarea
          id="abstract"
          name="abstract"
          value={formData.abstract}
          onChange={handleFormData}
          placeholder="Inserisci una descrizione del film"
          className="w-full px-4 py-2 border border-pink-300 rounded-lg resize-none h-28 focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>
      </div>

      {/* Immagine  */}
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-pink-700 mb-1"
        >
          Carica un'immagine
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFormData}
          accept="image/*"
          className="w-full text-sm text-pink-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg
                 file:border-0 file:text-sm file:font-semibold file:bg-pink-500 file:text-white
                 hover:file:bg-pink-600 transition duration-300"
        />
      </div>

      {/* Bottone per invio film */}
      <button
        type="submit"
        className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
      >
        Aggiungi Film
      </button>
    </form>
  );
}

export default AddMovies;
