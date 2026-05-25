import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DragonDetail from "./pages/DragonDetail";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 px-8 py-4 flex items-center justify-between shadow-lg">
        <span className="text-yellow-400 font-extrabold text-xl tracking-widest">🐉 DragonDex</span>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200">Inicio</Link>
          <Link to="/favorites" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200">Favoritos</Link>
        </div>
      </nav>
      <div className="min-h-screen bg-gray-950">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragon/:name" element={<DragonDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}