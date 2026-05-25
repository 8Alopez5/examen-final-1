import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar({ onSearch }) {
  return (
    <div className="flex items-center bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 mb-8">
      <AiOutlineSearch className="text-gray-400 text-xl mr-3 shrink-0" />
      <input
        type="text"
        placeholder="Buscar dragón por nombre..."
        onChange={(e) => onSearch(e.target.value)}
        className="outline-none w-full bg-gray-800 text-white placeholder-gray-500 text-sm"
      />
    </div>
  );
}