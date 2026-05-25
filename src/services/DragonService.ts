const API_URL = "https://pokeapi.co/api/v2";

export async function fetchDragons() {
  const response = await fetch(`${API_URL}/pokemon?limit=20`);
  if (!response.ok) {
    throw new Error("Error al cargar los dragones");
  }
  const data = await response.json();
  const dragons = await Promise.all(
    data.results.map((item: { name: string; url: string }) =>
      fetch(item.url).then((res) => res.json())
    )
  );
  return dragons;
}

export async function fetchDragonDetail(name: string) {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  if (!response.ok) {
    throw new Error("Error al cargar el dragón");
  }
  return response.json();
}