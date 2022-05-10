import { SimpleGrid } from "@chakra-ui/react";
import { Error } from "./Error";
import { Breadcrumbs } from "./Breadcrumbs";
import { LoadMoreButton } from "./LoadMoreButton";
import { useFavoritesContext } from "../utils/favorites-context";
import { ContentKind } from "../utils/local-storage";
import { Launch } from "./Launch";
import { PAGE_SIZE } from "./App";
import { PreviewCard } from "./PreviewCard";
import { SWRInfiniteResponseInterface } from "swr";
import { useEffect } from "react";

type LaunchesProps = {
  launches: SWRInfiniteResponseInterface<Launch[], Error>;
  isValidating: boolean;
  loadMore: boolean;
};

export const Launches = ({
  launches,
  isValidating,
  loadMore,
}: LaunchesProps) => {
  const { updateFavorites } = useFavoritesContext();

  useEffect(() => {
    if (!isValidating) {
      launches.setSize(launches.size + 1);
    }
  }, [loadMore]);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launches" }]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {launches.error && <Error />}
        {launches.data &&
          launches?.data.flat().map((launch: Launch) => (
            <PreviewCard
              key={launch.flight_number}
              item={{ kind: ContentKind.Launches, launch }}
              updateFavorites={() => {
                updateFavorites(ContentKind.Launches, JSON.stringify(launch));
              }}
            />
          ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => launches.setSize(launches.size + 1)}
        data={launches.data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </>
  );
};
