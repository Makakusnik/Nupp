import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { LinkProps } from "..";

export const DataTableLink = ({ href, children }: LinkProps) => {
  const color = useColorModeValue("blackAlpha.700", "whiteAlpha.600");

  return (
    <NextLink href={href} passHref>
      <Link
        color={color}
        fontSize="12px"
        alignItems="center"
        display="flex"
        w="fit-content"
      >
        {children}
      </Link>
    </NextLink>
  );
};
