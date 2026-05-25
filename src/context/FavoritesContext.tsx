import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  function addFavorite(dragon) {
    if (!isFavorite(dragon.name)) {
      setFavorites([...favorites, dragon])
    }
  }

  function removeFavorite(dragonName) {
    setFavorites(favorites.filter((d) => d.name !== dragonName))
  }

  function isFavorite(dragonName) {
    return favorites.some((d) => d.name === dragonName)
  }

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider')
  }
  return context
}