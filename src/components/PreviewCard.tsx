import { Box, Flex, Badge, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/format-date";
import { FavoriteButton } from "./FavoriteButton";
import { format as timeAgo } from "timeago.js";
import { Launch } from "./Launch";
import { ContentKind } from "../utils/local-storage";
import { LaunchPad } from "./LaunchPad";
import { randomColor } from "../utils/random-color";
import { useMemo } from "react";
import { useFavoritesContext } from "../utils/favorites-context";

type ItemKind =
  | { kind: ContentKind.Launches; launch: Launch }
  | { kind: ContentKind.LaunchPads; launchPad: LaunchPad };

type PreviewCardProps = {
  item: ItemKind;
  updateFavorites: (category: ContentKind, item: Launch | LaunchPad) => void;
};

// TODO: Create JSDoc for this component
export const PreviewCard = ({ item, updateFavorites }: PreviewCardProps) => {
  const { favoritesContext } = useFavoritesContext();

  const context =
    item.kind === ContentKind.Launches
      ? favoritesContext?.launches
      : favoritesContext?.launch_pads;
  // Avoid recalculating the color at every render
  const randomGradient = useMemo(
    () => `linear-gradient(${randomColor()}, ${randomColor()})`,
    []
  );

  const bgImage =
    item.kind === ContentKind.Launches
      ? item.launch.links.flickr_images[0]?.replace("_o.jpg", "_z.jpg") ??
        item.launch.links.mission_patch_small
      : null;

  const background = bgImage ?? randomGradient;

  return (
    <Box
      as={Link}
      to={
        item.kind === ContentKind.Launches
          ? `/launches/${item.launch.flight_number}`
          : `/launch-pads/${item.launchPad.site_id}`
      }
      boxShadow="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex
        position="relative"
        p={[2, 6]}
        height={
          item.kind === ContentKind.Launches ? ["200px", null, "300px"] : "80px"
        }
        bgImage={background}
        title={
          item.kind === ContentKind.Launches
            ? `${item.launch.mission_name} launch`
            : `${item.launchPad.name} launch pad`
        }
        bgPos="bottom"
        bgSize="cover"
        backgroundRepeat="no-repeat"
        justifyContent="space-between"
        direction="column"
        boxSizing="border-box"
      >
        <FavoriteButton
          isFavorite={
            context?.includes(
              JSON.stringify(
                item.kind === ContentKind.Launches
                  ? item.launch
                  : item.launchPad
              )
            ) ?? false
          }
          updateFavorites={() =>
            item.kind === ContentKind.Launches
              ? updateFavorites(ContentKind.Launches, item.launch)
              : updateFavorites(ContentKind.LaunchPads, item.launchPad)
          }
        />
        {item.kind === ContentKind.Launches &&
          item.launch.links.mission_patch_small && (
            <Image
              position="absolute"
              top="5"
              right="5"
              src={item.launch.links.mission_patch_small}
              height="75px"
              objectFit="contain"
              objectPosition="bottom"
            />
          )}
        {item.kind === ContentKind.Launches && !bgImage && (
          <Text margin="auto">Preview unavailable</Text>
        )}
      </Flex>
      <Box p="6">
        <Box d="flex" flexWrap="wrap" alignItems="baseline">
          {item.kind === ContentKind.Launches ? (
            <Badge
              px="2"
              variant="solid"
              colorScheme={item.launch.launch_success ? "green" : "red"}
              mr="2"
            >
              {item.launch.launch_success ? "Successful" : "Failed"}
            </Badge>
          ) : (
            <Badge
              px="2"
              variant="solid"
              colorScheme={item.launchPad.status === "active" ? "green" : "red"}
              mr="2"
            >
              {item.launchPad.status === "active" ? "Active" : "Retired"}
            </Badge>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {item.kind === ContentKind.Launches
              ? `${item.launch.rocket.rocket_name} • ${item.launch.launch_site.site_name}`
              : `${item.launchPad.attempted_launches} attempted • ${item.launchPad.successful_launches} succeeded`}
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {item.kind === ContentKind.Launches
            ? item.launch.mission_name
            : item.launchPad.name}
        </Box>
        <Flex flexWrap="wrap">
          {item.kind === ContentKind.Launches ? (
            <>
              <Text fontSize="sm" mr="2">
                {formatDate(item.launch.launch_date_utc)}{" "}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {timeAgo(item.launch.launch_date_utc)}
              </Text>
            </>
          ) : (
            <Text color="gray.500" fontSize="sm">
              {item.launchPad.vehicles_launched.join(", ")}
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
};
