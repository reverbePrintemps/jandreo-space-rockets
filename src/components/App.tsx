import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Home } from "./Home";
import { Launches } from "./Launches";
import { Launch } from "./Launch";
import { LaunchPads } from "./LaunchPads";
import { LaunchPad } from "./LaunchPad";
import { FavoritesDrawer } from "./FavoritesDrawer";
import { Navbar } from "./Navbar";
import { useSpaceXPaginated } from "../utils/use-space-x";
import { FavoritesContext } from "../utils/favorites-context";
import { useEffect, useRef, useState } from "react";
import {
  Favorites,
  getFromLocalStorage,
  FAVORITES,
  ContentKind,
  updateLocalStorage,
} from "../utils/local-storage";
import { SWRInfiniteResponseInterface } from "swr";

export const PAGE_SIZE = 12;

export const App = () => {
  const [favorites, setFavorites] = useState<Favorites>(
    getFromLocalStorage(FAVORITES)
  );
  const [loadMore, setLoadMore] = useState(false);
  const mainContainer = useRef<HTMLDivElement>(null);

  const launches: SWRInfiniteResponseInterface<Launch[], Error> =
    useSpaceXPaginated("/launches/past", {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    });

  const launchPads: SWRInfiniteResponseInterface<LaunchPad[], Error> =
    useSpaceXPaginated("/launchpads", {
      limit: PAGE_SIZE,
    });

  const handleScroll = () => {
    if (mainContainer.current) {
      const windowHeight = window.innerHeight;
      const bottomOfWindow = windowHeight + window.scrollY;
      const bottomOfContent = mainContainer.current.offsetHeight;

      const isReachingBottom = bottomOfWindow >= bottomOfContent - windowHeight;

      if (isReachingBottom) {
        setLoadMore(true);
      } else {
        setLoadMore(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box ref={mainContainer}>
      <FavoritesContext.Provider
        value={{
          favoritesContext: favorites,
          updateFavorites: (category: ContentKind, item: string) => {
            updateLocalStorage(category, item);
            setFavorites(getFromLocalStorage(FAVORITES));
          },
        }}
      >
        <Navbar>{favorites && <FavoritesDrawer />}</Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/launches"
            element={
              launches && (
                <Launches
                  launches={launches}
                  isValidating={launches.isValidating}
                  loadMore={loadMore}
                />
              )
            }
          />
          <Route path="/launches/:launchId" element={<Launch />} />
          <Route
            path="/launch-pads"
            element={
              launchPads && (
                <LaunchPads
                  launchPads={launchPads}
                  isValidating={launchPads.isValidating}
                  loadMore={loadMore}
                />
              )
            }
          />
          <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
        </Routes>
      </FavoritesContext.Provider>
    </Box>
  );
};
