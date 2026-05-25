import DragonCard from "./DragonCard";

export default function DragonList({ dragons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {dragons.map((dragon) => (
        <DragonCard key={dragon.name} dragon={dragon} />
      ))}
    </div>
  );
}