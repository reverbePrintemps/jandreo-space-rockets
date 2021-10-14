import React from "react";
import { Spinner, Flex, Button } from "@chakra-ui/core";

type LoadMoreButtonProps = {
  loadMore: () => any,
  data: any[] | undefined,
  pageSize: any,
  isLoadingMore: any
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  loadMore,
  data,
  pageSize,
  isLoadingMore,
}) => {
  const isReachingEnd =
    data?.[0]?.length === 0 ||
    (data && data[data.length - 1]?.length < pageSize);

  return (
    <Flex justifyContent="center" my="100px">
      <Button onClick={loadMore} _disabled={isReachingEnd || isLoadingMore}>
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
}
