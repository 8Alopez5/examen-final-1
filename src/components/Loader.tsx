import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center mt-32 gap-4">
      <AiOutlineLoading3Quarters className="animate-spin text-5xl text-purple-500" />
      <p className="text-gray-400 text-sm tracking-widest uppercase">Cargando dragones...</p>
    </div>
  );
}