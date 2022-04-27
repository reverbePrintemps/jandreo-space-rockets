import { createContext, useContext } from "react";
import {
  Favorites,
  getFromLocalStorage,
  FAVORITES,
  ContentKind,
  updateLocalStorage,
} from "./local-storage";

export type FavoritesContextType = {
  favoritesContext: Favorites;
  updateFavorites: (category: ContentKind, item: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favoritesContext: getFromLocalStorage(FAVORITES),
  updateFavorites: (category, item) => {
    updateLocalStorage(category, item);
    // TODO Verify if necessary
    getFromLocalStorage(FAVORITES);
  },
});

// // Custom hook to get the favorites context
export const useFavoritesContext = () => useContext(FavoritesContext);
