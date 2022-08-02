import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { LinkProps } from "..";

interface BigLinkProps extends LinkProps {}

export const BigLink = ({ href, children }: BigLinkProps) => {
  const linkColor = useColorModeValue("green.400", "green.300");

  return (
    <NextLink href={href} passHref>
      <Link
        color={linkColor}
        fontSize="2xl"
        fontWeight="semibold"
        alignItems="center"
        display="flex"
        w="fit-content"
      >
        {children}
      </Link>
    </NextLink>
  );
};
