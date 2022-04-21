import { Route, Routes } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { Home } from "./home";
import { Launches } from "./launches";
import { Launch } from "./launch";
import { LaunchPads } from "./launch-pads";
import { LaunchPad } from "./launch-pad";
import { useEffect, useRef, useState } from "react";

export const App = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [pageHeight, setPageHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= pageHeight) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (ref.current) {
      setPageHeight(ref.current.clientHeight);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={ref}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches loadMore={loadMore} />} />
        <Route path="/launches/:launchId" element={<Launch />} />
        <Route path="/launch-pads" element={<LaunchPads />} />
        <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
      </Routes>
    </div>
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
