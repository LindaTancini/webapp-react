//Importazioni
import axios from "axios";
import { useState } from "react";

function AddReview({ movieId, refreshMovie }) {
  //Variabile che contiene i dati da inserire
  const initialValues = {
    name: "",
    text: "",
    vote: 1,
  };

  const [formData, setFormData] = useState(initialValues);

  function handleFormData(e) {
    const { name, value } = e.target;
    let currentValue = value;
    if (name === "vote") {
      currentValue = parseInt(value);
    }
    setFormData((formData) => ({
      ...formData,
      [name]: currentValue,
    }));
  }

  //Axios
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Recensione inviata");
    const url = `http://localhost:3000/api/movies/${movieId}/reviews`;
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data.message);
        refreshMovie();
        setFormData(initialValues);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 bg-pink-100 p-6  rounded-2xl shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-pink-800">
        Aggiungi una recensione
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-700 mb-1">
          Nome
        </label>
        <input
          name="name"
          type="text"
          placeholder="Nome"
          id="reviews-name"
          value={formData.name}
          onChange={handleFormData}
          className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-700 mb-1">
          Recensione
        </label>
        <textarea
          name="text"
          placeholder="Cosa pensi del film? Scrivilo!"
          id="reviews-text"
          value={formData.text}
          onChange={handleFormData}
          className="w-full border border-pink-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="vote"
          className="block text-sm font-medium text-pink-700 mb-1"
        >
          Voto
        </label>
        <input
          name="vote"
          type="number"
          id="reviews-vote"
          value={formData.vote}
          onChange={handleFormData}
          min={1}
          max={5}
          placeholder="Inserisci un voto"
          className="w-full px-4 py-2 border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300"
      >
        Invia recensione
      </button>
    </form>
  );
}

export default AddReview;
