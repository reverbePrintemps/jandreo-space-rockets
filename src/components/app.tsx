import { Route, Routes } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { Home } from "./home";
import { Launches } from "./launches";
import { Launch } from "./launch";
import { LaunchPads } from "./launch-pads";
import { LaunchPad } from "./launch-pad";


export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:launchId" element={<Launch />} />
        <Route path="/launch-pads" element={<LaunchPads />} />
        <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
      </Routes>
    </>
  );
};

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="gray.800"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>
    </Flex>
  );
};
