function AddReview() {
  return (
    <form className="mt-8 bg-pink-100 p-6  rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-pink-800">
        Aggiungi una recensione
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-700 mb-1">
          Nome
        </label>
        <input
          type="text"
          placeholder="Nome"
          className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-700 mb-1">
          Recensione
        </label>
        <textarea
          placeholder="Cosa pensi del film? Scrivilo!"
          className="w-full border border-pink-300 rounded-lg px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-700 mb-1">
          Voto
        </label>
        <select className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400">
          <option value="" disabled>
            Seleziona un voto
          </option>
          <option value="1">1 </option>
          <option value="2">2 </option>
          <option value="3">3 </option>
          <option value="4">4 </option>
          <option value="5">5 </option>
        </select>
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
