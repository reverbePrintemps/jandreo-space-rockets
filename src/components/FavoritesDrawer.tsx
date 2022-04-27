import { useContext, useRef, useState } from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Icon,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Star } from "react-feather";
import { FavoritesContext } from "../utils/favorites-context";
import { ContentKind } from "../utils/local-storage";
import { PreviewCard } from "./PreviewCard";

export const FavoritesDrawer = () => {
  const { favoritesContext, updateFavorites } = useContext(FavoritesContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [revealText, setRevealText] = useState(false);
  const [input, setInput] = useState("");
  const btnRef = useRef(null);

  const favoriteLaunches = favoritesContext?.launches
    ?.filter(
      (item: string) => item.toLowerCase().search(input.toLowerCase()) !== -1
    )
    // Show latest favorite at the top
    .reverse();
  const favoriteLaunchpads = favoritesContext?.launch_pads
    ?.filter(
      (item: string) => item.toLowerCase().search(input.toLowerCase()) !== -1
    )
    // Show latest favorite at the top
    .reverse();

  if (!favoriteLaunches && !favoriteLaunchpads) {
    return null;
  }

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="gray"
        onClick={onOpen}
        color="black"
        display="flex"
        justifyContent="flex-start"
        // TODO Achtung, magic number!
        width={revealText ? "100%" : "38px"}
        maxWidth="max-content"
        onMouseEnter={() => setRevealText(true)}
        onMouseLeave={() => setRevealText(false)}
        transition="width 0.2s"
        size="sm"
      >
        <Icon display="inline">
          <Star fill="gold" />
        </Icon>
        <Text paddingLeft="0.5em">{revealText && "Open Favorites"}</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="2xl">Favorites</DrawerHeader>
          <DrawerBody>
            <Input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Start typing to filter..."
            />
            {favoriteLaunches && (
              <Text
                fontSize="xl"
                fontWeight="bold"
                m="1em 0"
              >{`Launches (${favoriteLaunches.length})`}</Text>
            )}
            <SimpleGrid spacing="4">
              {favoriteLaunches?.map((launch) => {
                const flightNumber = JSON.parse(launch).flight_number;
                return (
                  <PreviewCard
                    key={flightNumber}
                    item={{
                      kind: ContentKind.Launches,
                      launch: JSON.parse(launch),
                    }}
                    updateFavorites={() =>
                      updateFavorites(ContentKind.Launches, launch)
                    }
                  ></PreviewCard>
                );
              })}
            </SimpleGrid>
            {favoriteLaunchpads && (
              <Text
                fontSize="xl"
                fontWeight="bold"
                m="1em 0"
              >{`Launch Pads (${favoriteLaunchpads.length})`}</Text>
            )}
            <SimpleGrid spacing="4">
              {favoriteLaunchpads?.map((launchPad) => {
                const siteId = JSON.parse(launchPad).site_id;
                return (
                  <PreviewCard
                    key={siteId}
                    item={{
                      kind: ContentKind.LaunchPads,
                      launchPad: JSON.parse(launchPad),
                    }}
                    updateFavorites={() =>
                      updateFavorites(ContentKind.LaunchPads, launchPad)
                    }
                  ></PreviewCard>
                );
              })}
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
