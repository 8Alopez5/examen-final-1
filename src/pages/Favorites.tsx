import { useFavorites } from "../context/FavoritesContext";
import DragonList from "../components/DragonList";
import EmptyState from "../components/EmptyState";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="px-8 py-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-1">Mis Favoritos</h1>
        <p className="text-gray-400 text-sm">Dragones que has guardado</p>
      </div>
      {favorites.length === 0 ? (
        <EmptyState />
      ) : (
        <DragonList dragons={favorites} />
      )}
    </div>
  );
}