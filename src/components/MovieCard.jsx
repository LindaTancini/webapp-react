function MovieCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        immagine
        <div className="font-bold text-xl mb-2">Titolo</div>
        <p className="text-gray-700 text-base mb-2">
          <span className="font-semibold">Regista</span>
        </p>
        <p className="text-gray-600 text-base">Descrizione</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Più Info
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
