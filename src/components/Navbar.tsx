import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Navbar: FC = ({ children }) => {
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
      {children}
    </Flex>
  );
};
