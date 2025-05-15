function Loader() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[200px] space-y-3">
      <div className="w-12 h-12 border-4 border-pink-400 border-t-pink-800 rounded-full animate-spin"></div>
      <span className="text-pink-700 font-medium">Caricamento in corso...</span>
    </div>
  );
}

export default Loader;
