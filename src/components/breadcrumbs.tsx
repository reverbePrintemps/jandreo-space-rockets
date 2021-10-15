import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronsRight } from "react-feather";

type BreadcrumbProps = {
  items: {
    label: string,
    to?: string
  }[]
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Breadcrumb
      m="6"
      spacing="1"
      separator={<Box boxSize="1em" as={ChevronsRight} color="gray.300" />}
    >
      {items.map((item, index) => {
        const isCurrentPage = items.length === index + 1;
        return (
          <BreadcrumbItem isCurrentPage={isCurrentPage} key={item.label}>
            <BreadcrumbLink
              as={Link}
              to={item.to || ""}
            >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
