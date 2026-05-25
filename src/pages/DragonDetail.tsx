import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchDragonDetail } from "../services/DragonService";
import { useFavorites } from "../context/FavoritesContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function DragonDetail() {
  const { name } = useParams();
  const [dragon, setDragon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    async function loadDragon() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDragonDetail(name);
        setDragon(data);
      } catch (e) {
        setError("No se pudo cargar el dragón");
      } finally {
        setLoading(false);
      }
    }
    loadDragon();
  }, [name]);

  function handleFavorite() {
    if (isFavorite(dragon.name)) {
      removeFavorite(dragon.name);
    } else {
      addFavorite(dragon);
    }
  }

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!dragon) return null;

  const image = dragon.sprites?.other?.["official-artwork"]?.front_default;
  const types = dragon.types?.map((t) => t.type.name).join(", ");
  const hp = dragon.stats?.find((s) => s.stat.name === "hp")?.base_stat;
  const attack = dragon.stats?.find((s) => s.stat.name === "attack")?.base_stat;
  const defense = dragon.stats?.find((s) => s.stat.name === "defense")?.base_stat;

  return (
    <div className="px-8 py-10 max-w-2xl mx-auto">
      <Link to="/" className="text-purple-400 hover:text-yellow-400 text-sm font-medium mb-6 block">
        ← Volver al catálogo
      </Link>
      <div className="bg-gray-900 border border-purple-800 rounded-2xl p-8">
        {image && <img src={image} alt={dragon.name} className="w-40 h-40 mx-auto mb-4" />}
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center capitalize mb-2">{dragon.name}</h1>
        <p className="text-purple-400 text-center text-sm uppercase tracking-wider mb-6">{types}</p>
        <div className="flex flex-col gap-3">
          <div className="bg-gray-800 rounded-xl px-5 py-4 flex justify-between">
            <span className="text-purple-400 font-semibold">HP</span>
            <span className="text-gray-200">{hp}</span>
          </div>
          <div className="bg-gray-800 rounded-xl px-5 py-4 flex justify-between">
            <span className="text-purple-400 font-semibold">Ataque</span>
            <span className="text-gray-200">{attack}</span>
          </div>
          <div className="bg-gray-800 rounded-xl px-5 py-4 flex justify-between">
            <span className="text-purple-400 font-semibold">Defensa</span>
            <span className="text-gray-200">{defense}</span>
          </div>
        </div>
        <button onClick={handleFavorite} className="mt-8 flex items-center gap-2 text-sm font-semibold">
          {isFavorite(dragon.name)
            ? <><AiFillHeart className="text-red-500 text-2xl" /><span className="text-red-400">Quitar de favoritos</span></>
            : <><AiOutlineHeart className="text-gray-400 text-2xl" /><span className="text-gray-400">Agregar a favoritos</span></>
          }
        </button>
      </div>
    </div>
  );
}