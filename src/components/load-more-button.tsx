import React from "react";
import { Spinner, Flex, Button } from "@chakra-ui/react";
import { LaunchPad } from "./launch-pad";
import { Launch } from "./launch";

type LoadMoreButtonProps = {
  loadMore: () => any,
  data?: Launch[][] | LaunchPad[][],
  pageSize: number,
  isLoadingMore: boolean;
};

export const LoadMoreButton = ({
  loadMore,
  data,
  pageSize,
  isLoadingMore,
}: LoadMoreButtonProps) => {
  const isReachingEnd = data && (data.length === 0 || data[data.length - 1].length < pageSize);

  return (
    <Flex justifyContent="center" my="100px">
      <Button onClick={loadMore} disabled={isReachingEnd || isLoadingMore}>
        {isLoadingMore ? (
          <Spinner />
        ) : isReachingEnd ? (
          "That's all!"
        ) : (
          "Show more..."
        )}
      </Button>
    </Flex>
  );
};
