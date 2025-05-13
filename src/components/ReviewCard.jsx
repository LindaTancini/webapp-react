//Importazioni
import StarRating from "./StarRating";

function ReviewCard({ data }) {
  const { name, text, vote } = data;

  return (
    <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 shadow-sm mb-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-semibold text-pink-800">{name}</h4>
        <p className="bg-pink-200 text-pink-900 text-sm font-semibold px-3 py-1 rounded-full">
          {text}
        </p>
        <div className="text-pink-700">
          Vote: {vote} <StarRating vote={vote} />
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
