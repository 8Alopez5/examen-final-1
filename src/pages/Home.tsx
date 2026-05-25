import { useState, useEffect } from "react";
import { fetchDragons } from "../services/DragonService";
import SearchBar from "../components/SearchBar";
import DragonList from "../components/DragonList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";

export default function Home() {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  async function loadDragons() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchDragons();
      setDragons(data);
    } catch (e) {
      setError("No se pudieron cargar los dragones");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDragons();
  }, []);

  const filtered = dragons.filter((dragon) =>
    dragon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="bg-gradient-to-b from-purple-900 to-gray-950 py-16 px-8 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-3">🐉 DragonDex</h1>
        <p className="text-gray-300 text-lg mb-2">Explora el catálogo de criaturas míticas</p>
        <p className="text-gray-500 text-sm mb-8">{dragons.length} dragones encontrados</p>
        <div className="max-w-xl mx-auto">
          <SearchBar onSearch={setSearch} />
        </div>
      </div>
      <div className="px-8 py-10 max-w-7xl mx-auto">
        {filtered.length === 0 ? <EmptyState /> : <DragonList dragons={filtered} />}
      </div>
    </div>
  );
}