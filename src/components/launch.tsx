import { useParams, Link as RouterLink } from "react-router-dom";
import { format as timeAgo } from "timeago.js";
import { Watch, MapPin, Navigation, Layers } from "react-feather";
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
  Image,
  Link,
  Stack,
  AspectRatio,
  StatGroup,
} from "@chakra-ui/react";

import { useSpaceX } from "../utils/use-space-x";
import { formatDateTime } from "../utils/format-date";
import { Error } from "./error";
import { Breadcrumbs } from "./breadcrumbs";

export type Launch = {
  mission_name: string;
  flight_number: string;
  launch_success: string;
  details: string;
  launch_date_local: Date;
  launch_date_utc: Date;
  rocket: LaunchRocket;
  launch_site: LaunchSite;
  links: LaunchLinks;
};

type RocketCores = {
  core_serial: string;
  land_success: boolean;
};

type RocketPayload = {
  payload_type: string;
};

type LaunchRocket = {
  rocket_name: string;
  rocket_type: string;
  first_stage: {
    cores: RocketCores[];
  };
  second_stage: {
    block: number;
    payloads: RocketPayload[];
  };
};

type LaunchSite = {
  site_id: string;
  site_name: string;
  site_name_long: string;
};

type LaunchLinks = {
  flickr_images: string[];
  mission_patch_small: string;
  youtube_id: string;
};

type LaunchesResponse = {
  data?: Launch;
  error?: Error;
};

export const Launch = () => {
  const launchId = useParams();
  const { data: launch, error }: LaunchesResponse = useSpaceX(`/launches/${launchId}`, {});

  if (error) return <Error />;

  if (!launch) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="50vh">
        <Spinner size="lg" />
      </Flex>
    );
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Launches", to: ".." },
          { label: `#${launch.flight_number}` },
        ]}
      />
      <LaunchHeader launch={launch} />
      <Box m={[3, 6]}>
        <TimeAndLocation launch={launch} />
        <RocketInfo launch={launch} />
        <Text color="gray.700" fontSize={["md", null, "lg"]} my="8">
          {launch.details}
        </Text>
        <Video launch={launch} />
        <Gallery images={launch.links.flickr_images} />
      </Box>
    </>
  );
};

type LaunchHeaderProps = {
  launch: Launch;
};

const LaunchHeader = ({ launch }: LaunchHeaderProps) => {
  return (
    <Flex
      bgImage={`url(${launch.links.flickr_images[0]})`}
      bgPos="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      minHeight="30vh"
      position="relative"
      p={[2, 6]}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Image
        position="absolute"
        top="5"
        right="5"
        src={launch.links.mission_patch_small}
        height={["85px", "150px"]}
        objectFit="contain"
        objectPosition="bottom"
      />
      <Heading
        color="white"
        display="inline"
        backgroundColor="#718096b8"
        fontSize={["lg", "5xl"]}
        px="4"
        py="2"
        borderRadius="lg"
      >
        {launch.mission_name}
      </Heading>
      <Stack isInline spacing="3">
        <Badge colorScheme="purple" fontSize={["xs", "md"]}>
          #{launch.flight_number}
        </Badge>
        {launch.launch_success ? (
          <Badge colorScheme="green" fontSize={["xs", "md"]}>
            Successful
          </Badge>
        ) : (
          <Badge colorScheme="red" fontSize={["xs", "md"]}>
            Failed
          </Badge>
        )}
      </Stack>
    </Flex>
  );
};

type TimeAndLocationProps = {
  launch: Launch;
};

const TimeAndLocation = ({ launch }: TimeAndLocationProps) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} borderWidth="1px" p="4" borderRadius="md">
      <Stat>
        <StatLabel display="flex">
          <Box as={Watch} width="1em" />{" "}
          <Box ml="2" as="span">
            Launch Date
          </Box>
        </StatLabel>
        <StatNumber fontSize={["md", "xl"]}>
          {formatDateTime(launch.launch_date_local)}
        </StatNumber>
        <StatHelpText>{timeAgo(launch.launch_date_utc)}</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel display="flex">
          <Box as={MapPin} width="1em" />{" "}
          <Box ml="2" as="span">
            Launch Site
          </Box>
        </StatLabel>
        <StatNumber fontSize={["md", "xl"]}>
          <Link
            as={RouterLink}
            to={`/launch-pads/${launch.launch_site.site_id}`}
          >
            {launch.launch_site.site_name_long}
          </Link>
        </StatNumber>
        <StatHelpText>{launch.launch_site.site_name}</StatHelpText>
      </Stat>
    </SimpleGrid>
  );
};

type RocketInfoProps = {
  launch: Launch;
};

const RocketInfo = ({ launch }: RocketInfoProps) => {
  const cores = launch.rocket.first_stage.cores;

  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      borderWidth="1px"
      mt="4"
      p="4"
      borderRadius="md"
    >
      <Stat>
        <StatLabel display="flex">
          <Box as={Navigation} width="1em" />{" "}
          <Box ml="2" as="span">
            Rocket
          </Box>
        </StatLabel>
        <StatNumber fontSize={["md", "xl"]}>
          {launch.rocket.rocket_name}
        </StatNumber>
        <StatHelpText>{launch.rocket.rocket_type}</StatHelpText>
      </Stat>
      <StatGroup>
        <Stat>
          <StatLabel display="flex">
            <Box as={Layers} width="1em" />{" "}
            <Box ml="2" as="span">
              First Stage
            </Box>
          </StatLabel>
          <StatNumber fontSize={["md", "xl"]}>
            {cores.map((core: RocketCores) => core.core_serial).join(", ")}
          </StatNumber>
          <StatHelpText>
            {cores.every((core: RocketCores) => core.land_success)
              ? cores.length === 1
                ? "Recovered"
                : "All recovered"
              : "Lost"}
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel display="flex">
            <Box as={Layers} width="1em" />{" "}
            <Box ml="2" as="span">
              Second Stage
            </Box>
          </StatLabel>
          <StatNumber fontSize={["md", "xl"]}>
            Block {launch.rocket.second_stage.block}
          </StatNumber>
          <StatHelpText>
            Payload:{" "}
            {launch.rocket.second_stage.payloads
              .map((payload: RocketPayload) => payload.payload_type)
              .join(", ")}
          </StatHelpText>
        </Stat>
      </StatGroup>
    </SimpleGrid>
  );
};

type VideoProps = {
  launch: Launch;
};

const Video = ({ launch }: VideoProps) => {
  return (
    <AspectRatio maxH="400px" ratio={1.7}>
      <Box
        as="iframe"
        title={launch.mission_name}
        src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
        allowFullScreen
      />
    </AspectRatio>
  );
};

type GalleryProps = {
  images: LaunchLinks["flickr_images"];
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <SimpleGrid my="6" minChildWidth="350px" spacing="4">
      {images.map((image: string) => (
        <a href={image} key={image}>
          <Image src={image.replace("_o.jpg", "_z.jpg")} />
        </a>
      ))}
    </SimpleGrid>
  );
};
