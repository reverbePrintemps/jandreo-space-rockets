import { Link as BrowserLink } from "react-router-dom";
import { Flex, Box, Text, Stack, Link } from "@chakra-ui/react";
import { ArrowRight } from "react-feather";


export const Home = () => {
  return (
    <Stack m="6" spacing="6">
      <PageLink url="/launches" title="Browse SpaceX Launches" />
      <PageLink url="/launch-pads" title="Browse SpaceX Launch Pads" />
    </Stack>
  );
};

type PageLinkProps = {
  url: string;
  title: string,
};

const PageLink = ({ url, title }: PageLinkProps) => {
  return (
    <Link as={BrowserLink} to={url}>
      <Flex
        justifyContent="space-between"
        p="6"
        boxShadow="md"
        borderWidth="1px"
        rounded="lg"
      >
        <Text fontSize="lg">{title}</Text>
        <Box as={ArrowRight} />
      </Flex>
    </Link>
  );
};
