import { AiOutlineWarning } from "react-icons/ai";

export default function ErrorMessage({ message }) {
  return (
    <div className="flex flex-col items-center mt-32 gap-4">
      <AiOutlineWarning className="text-6xl text-red-500" />
      <p className="text-gray-300 text-lg font-semibold">Algo salió mal</p>
      <p className="text-gray-500 text-sm">{message}</p>
    </div>
  );
}