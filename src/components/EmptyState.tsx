import { AiOutlineInbox } from "react-icons/ai";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center mt-32 gap-4">
      <AiOutlineInbox className="text-6xl text-gray-600" />
      <p className="text-gray-300 text-lg font-semibold">Nada por aquí</p>
      <p className="text-gray-500 text-sm">No se encontraron dragones</p>
    </div>
  );
}