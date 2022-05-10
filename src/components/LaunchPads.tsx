import { Box, SimpleGrid } from "@chakra-ui/react";
import { Error } from "./Error";
import { Breadcrumbs } from "./Breadcrumbs";
import { LoadMoreButton } from "./LoadMoreButton";
import { ContentKind } from "../utils/local-storage";
import { useFavoritesContext } from "../utils/favorites-context";
import { PAGE_SIZE } from "./App";
import { LaunchPad } from "./LaunchPad";
import { PreviewCard } from "./PreviewCard";
import { SWRInfiniteResponseInterface } from "swr";
import { useEffect } from "react";

type LaunchPadsProps = {
  launchPads: SWRInfiniteResponseInterface<LaunchPad[], Error>;
  isValidating: boolean;
  loadMore: boolean;
};

export const LaunchPads = ({
  launchPads,
  loadMore,
  isValidating,
}: LaunchPadsProps) => {
  const { updateFavorites } = useFavoritesContext();

  useEffect(() => {
    if (!isValidating) {
      launchPads.setSize(launchPads.size + 1);
    }
  }, [loadMore]);

  return (
    <Box>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launch Pads" }]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {launchPads.error && <Error />}
        {launchPads.data &&
          launchPads?.data.flat().map((launchPad: LaunchPad) => (
            <PreviewCard
              key={launchPad.site_id}
              item={{ kind: ContentKind.LaunchPads, launchPad }}
              updateFavorites={() => {
                updateFavorites(
                  ContentKind.LaunchPads,
                  JSON.stringify(launchPad)
                );
              }}
            />
          ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => launchPads.setSize(launchPads.size + 1)}
        data={launchPads.data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </Box>
  );
};
