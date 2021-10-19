import React from "react";
import { Badge, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Error } from "./error";
import { Breadcrumbs } from "./breadcrumbs";
import { LoadMoreButton } from "./load-more-button";
import { useSpaceXPaginated } from "../utils/use-space-x";
import { LaunchPad } from "./launch-pad";

const PAGE_SIZE = 12;

type LaunchPadsResponse = {
  data?: LaunchPad[][];
  error?: Error;
  isValidating?: boolean;
  size?: number;
  setSize?: (size: number | ((size: number) => number)) => Promise<any[] | undefined>;
};

export const LaunchPads = () => {
  const { data: launchPads, error, isValidating, size, setSize }: LaunchPadsResponse = useSpaceXPaginated(
    "/launchpads",
    {
      limit: PAGE_SIZE,
    }
  );

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launch Pads" }]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {launchPads && launchPads.flat().map((launchPad) => (
          <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
        ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={launchPads}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  );
};

type LaunchPadItemProps = {
  launchPad: LaunchPad;
};

const LaunchPadItem = ({ launchPad }: LaunchPadItemProps) => {
  return (
    <Box
      as={Link}
      to={`/launch-pads/${launchPad.site_id}`}
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {launchPad.status === "active" ? (
            <Badge px="2" variant="solid" colorScheme="green">
              Active
            </Badge>
          ) : (
            <Badge px="2" variant="solid" colorScheme="red">
              Retired
            </Badge>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {launchPad.attempted_launches} attempted &bull;{" "}
            {launchPad.successful_launches} succeeded
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {launchPad.name}
        </Box>
        <Text color="gray.500" fontSize="sm">
          {launchPad.vehicles_launched.join(", ")}
        </Text>
      </Box>
    </Box>
  );
};
