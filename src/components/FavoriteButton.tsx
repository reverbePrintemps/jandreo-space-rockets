import { Button, Icon, Text } from "@chakra-ui/react";
import { MouseEvent, useState } from "react";
import { Star } from "react-feather";

export enum FavoriteButtonKind {
  List,
  Detail,
}

type FavoriteButtonProps = {
  isFavorite: boolean;
  updateFavorites: () => void;
};

export const FavoriteButton = ({
  isFavorite,
  updateFavorites,
}: FavoriteButtonProps) => {
  const [revealText, setRevealText] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    updateFavorites();
  };

  return (
    <Button
      display="flex"
      justifyContent="flex-start"
      // TODO Achtung, magic number!
      width={revealText ? "100%" : "38px"}
      maxWidth="max-content"
      onClick={handleClick}
      onMouseEnter={() => setRevealText(true)}
      onMouseLeave={() => setRevealText(false)}
      transition="width 0.2s"
      zIndex="1"
      size="sm"
    >
      <Icon display="inline">
        <Star fill={isFavorite ? "gold" : "none"} />
      </Icon>
      <Text
        display="inline"
        verticalAlign="middle"
        fontSize="sm"
        opacity={revealText ? 1 : 0}
        transition="all 0.3s"
        paddingLeft="0.5em"
      >
        {revealText &&
          (isFavorite ? "Remove from favorites" : "Mark as favorite")}
      </Text>
    </Button>
  );
};
