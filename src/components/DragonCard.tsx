import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorites } from "../context/FavoritesContext";

const typeColors = {
  fire: "bg-orange-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  poison: "bg-purple-500",
  flying: "bg-sky-400",
  electric: "bg-yellow-400",
  ice: "bg-cyan-400",
  ground: "bg-yellow-700",
  rock: "bg-stone-500",
  bug: "bg-lime-500",
  normal: "bg-gray-400",
  ghost: "bg-indigo-600",
  dragon: "bg-violet-600",
  dark: "bg-gray-700",
  steel: "bg-slate-400",
  fairy: "bg-pink-400",
  psychic: "bg-pink-600",
  fighting: "bg-red-700",
};

export default function DragonCard({ dragon }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  function handleFavorite() {
    if (isFavorite(dragon.name)) {
      removeFavorite(dragon.name);
    } else {
      addFavorite(dragon);
    }
  }

  const image = dragon.sprites?.other?.["official-artwork"]?.front_default;
  const types = dragon.types?.map((t) => t.type.name) || [];

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="bg-gray-700 flex justify-center items-center py-6">
        {image && <img src={image} alt={dragon.name} className="w-28 h-28 object-contain drop-shadow-lg" />}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <Link to={`/dragon/${dragon.name}`} className="text-white font-bold text-lg capitalize hover:text-yellow-400 transition-colors">
          {dragon.name}
        </Link>
        <div className="flex gap-2 flex-wrap">
          {types.map((type) => (
            <span key={type} className={`${typeColors[type] || "bg-gray-500"} text-white text-xs font-semibold px-2 py-1 rounded-full capitalize`}>
              {type}
            </span>
          ))}
        </div>
        <button onClick={handleFavorite} className="mt-auto self-end text-xl pt-2">
          {isFavorite(dragon.name) ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart className="text-gray-400 hover:text-red-400 transition-colors" />}
        </button>
      </div>
    </div>
  );
}