export const FAVORITES = "favorites";

export enum ContentKind {
  Launches = "launches",
  LaunchPads = "launch_pads",
}

// Shape of Favorites
// {
//   launches: ["123", "456"],
//   launch_pads: ["789", "012"]
// }
export type Favorites = { [key in ContentKind]: string[] } | null;
/**
 * Gets item from localStorage and returns JSON parsed value
 * @param {string} item
 * @returns {Favorites}
 */
export const getFromLocalStorage = (item: string): Favorites => {
  const favoritesString = window.localStorage.getItem(item);
  return favoritesString ? JSON.parse(favoritesString) : null;
};

// TODO Refactor to improve legibility
/**
 * Updates the favorites in local storage by adding an item to a category or removing an item if it's already there.
 * If a category has no items, removes category.
 * If no item is favorited, favorites is removed from localStorage entirely.
 * @param {ContentKind} category
 * @param {string} item
 * @returns {void}
 */
export const updateLocalStorage = (
  category: ContentKind,
  item: string
): void => {
  let updatedFavorites;
  // Get the existing data
  const favorites = getFromLocalStorage(FAVORITES);
  if (favorites) {
    const itemsOfCategory = favorites[category];
    if (itemsOfCategory) {
      // Only push if item not already there
      if (itemsOfCategory.indexOf(item.toString()) === -1) {
        itemsOfCategory.push(item.toString());
        favorites[category] = itemsOfCategory;
        updatedFavorites = favorites;
        window.localStorage.setItem(
          FAVORITES,
          JSON.stringify(updatedFavorites)
        );
      } else {
        // If item already present, remove it
        const index = itemsOfCategory.indexOf(item.toString());
        itemsOfCategory.splice(index, 1);
        favorites[category] = itemsOfCategory;
        // If category has no items, remove category
        if (itemsOfCategory.length == 0) {
          delete favorites[category];
        }
        updatedFavorites = favorites;
        window.localStorage.setItem(
          FAVORITES,
          JSON.stringify(updatedFavorites)
        );
        // If favorites is empty, delete from localStorage
        if (Object.keys(favorites).length <= 0) {
          window.localStorage.removeItem(FAVORITES);
        }
      }
    } else {
      // If category doesn't exist, create it
      favorites[category] = [item.toString()];
      updatedFavorites = favorites;
      window.localStorage.setItem(FAVORITES, JSON.stringify(updatedFavorites));
    }
  } else {
    // If no favorites, create favorites object
    updatedFavorites = { [category]: [item.toString()] };
    window.localStorage.setItem(FAVORITES, JSON.stringify(updatedFavorites));
  }
};
