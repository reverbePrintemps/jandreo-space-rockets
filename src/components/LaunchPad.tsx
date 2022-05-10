import { useParams } from "react-router-dom";
import { MapPin, Navigation } from "react-feather";
import {
  Flex,
  Heading,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Text,
  Spinner,
  Stack,
  AspectRatio,
} from "@chakra-ui/react";
import { useSpaceX } from "../utils/use-space-x";
import { Error } from "./Error";
import { Breadcrumbs } from "./Breadcrumbs";
import { Launch } from "./Launch";
import { FavoriteButton } from "./FavoriteButton";
import { useFavoritesContext } from "../utils/favorites-context";
import { Fragment, useEffect, useMemo, useState } from "react";
import { ContentKind } from "../utils/local-storage";
import { randomColor } from "../utils/random-color";
import { PreviewCard } from "./PreviewCard";

type Location = {
  name: string;
  region: string;
  latitude: number;
  longitude: number;
};

export type LaunchPad = {
  kind: "launchpad";
  name: string;
  status: string;
  location: Location;
  site_name_long: string;
  vehicles_launched: string[];
  attempted_launches: number;
  successful_launches: number;
  details: string;
  site_id: string;
};

type LaunchPadsResponse = {
  data?: LaunchPad;
  error?: Error;
};

export const LaunchPad = () => {
  const { launchPadId } = useParams();
  const { data: launchPad, error: launchPadError }: LaunchPadsResponse =
    useSpaceX(`/launchpads/${launchPadId}`, {});
  const { data: pastLaunches, error: pastLaunchesError } = useSpaceX(
    launchPad ? "/launches/past" : null,
    {
      limit: 3,
      order: "desc",
      sort: "launch_date_utc",
      site_id: launchPad?.site_id,
    }
  );

  if (launchPadError || pastLaunchesError) return <Error />;
  if (!launchPad) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="50vh">
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <Box>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Launch Pads", to: "/launch-pads" },
          { label: launchPad.name },
        ]}
      />
      <LaunchPadHeader launchPad={launchPad} />
      <Box m={[3, 6]}>
        <LocationAndVehicles launchPad={launchPad} />
        <Text color="gray.700" fontSize={["md", null, "lg"]} my="8">
          {launchPad.details}
        </Text>
        <Map location={launchPad.location} />
        {pastLaunches && <RecentLaunches launches={pastLaunches} />}
      </Box>
    </Box>
  );
};

type LaunchPadHeaderProps = {
  launchPad: LaunchPad;
};

export const LaunchPadHeader = ({ launchPad }: LaunchPadHeaderProps) => {
  const { favoritesContext, updateFavorites } = useFavoritesContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const randomGradient = useMemo(
    () => `linear-gradient(${randomColor()}, ${randomColor()})`,
    []
  );

  // TODO Silly, refactor
  useEffect(() => {
    if (favoritesContext?.launch_pads) {
      setIsFavorite(
        favoritesContext.launch_pads.includes(JSON.stringify(launchPad))
      );
    } else {
      setIsFavorite(false);
    }
  }, [favoritesContext]);
  return (
    <Flex
      background={randomGradient}
      bgPos="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      minHeight="15vh"
      position="relative"
      p={[2, 6]}
      justifyContent="space-between"
      direction="column"
    >
      <FavoriteButton
        isFavorite={isFavorite}
        updateFavorites={() => {
          updateFavorites(ContentKind.LaunchPads, JSON.stringify(launchPad));
        }}
      />
      <Flex
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Heading
          color="gray.900"
          display="inline"
          px="4"
          py="2"
          fontSize={["md", "3xl"]}
          borderRadius="lg"
        >
          {launchPad.site_name_long}
        </Heading>
        <Stack isInline spacing="3">
          <Badge colorScheme="purple" fontSize={["sm", "md"]}>
            {launchPad.successful_launches}/{launchPad.attempted_launches}{" "}
            successful
          </Badge>
          {launchPad.status === "active" ? (
            <Badge colorScheme="green" fontSize={["sm", "md"]}>
              Active
            </Badge>
          ) : (
            <Badge colorScheme="red" fontSize={["sm", "md"]}>
              Retired
            </Badge>
          )}
        </Stack>
      </Flex>
    </Flex>
  );
};

type LocationAndVehiclesProps = {
  launchPad: LaunchPad;
};

const LocationAndVehicles = ({ launchPad }: LocationAndVehiclesProps) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex">
          <Box as={MapPin} width="1em" />{" "}
          <Box ml="2" as="span">
            Location
          </Box>
        </StatLabel>
        <StatNumber fontSize="xl">{launchPad.location.name}</StatNumber>
        <StatHelpText>{launchPad.location.region}</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel display="flex">
          <Box as={Navigation} width="1em" />{" "}
          <Box ml="2" as="span">
            Vehicles launched
          </Box>
        </StatLabel>
        <StatNumber fontSize="xl">
          {launchPad.vehicles_launched.map((vehicle) => (
            <Fragment>
              {vehicle}
              <br />
            </Fragment>
          ))}
        </StatNumber>
      </Stat>
    </SimpleGrid>
  );
};

type MapProps = {
  location: Location;
};

const Map = ({ location }: MapProps) => {
  return (
    <AspectRatio ratio={16 / 5}>
      <Box
        as="iframe"
        src={`https://maps.google.com/maps?q=${location.latitude}, ${location.longitude}&z=15&output=embed`}
      />
    </AspectRatio>
  );
};

type RecentLaunchesProps = {
  launches: Launch[][];
};

const RecentLaunches = ({ launches }: RecentLaunchesProps) => {
  if (!launches?.length) {
    return null;
  }
  return (
    <Stack my="8" spacing="3">
      <Text fontSize="xl" fontWeight="bold">
        Last launches
      </Text>
      <SimpleGrid minChildWidth="350px" spacing="4">
        {launches.flat().map((launch: Launch) => (
          <PreviewCard
            key={launch.flight_number}
            item={{ kind: ContentKind.Launches, launch }}
            updateFavorites={() => null}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
