import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { IconType } from "react-icons";

interface LinkProps {
  href: string;
  children: string;
}

export const NavigationLink = ({ href, children }: LinkProps) => (
  <NextLink href={href} passHref={true}>
    <LinkWrap>
      <Link _hover={{}} fontWeight={500}>
        {children}
      </Link>
    </LinkWrap>
  </NextLink>
);

const LinkWrap = styled(Box)`
  padding: 4px 8px;
  border-bottom: 2px solid transparent;
  position: relative;
  &:after {
    transition: transform 0.3s ease-in;
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    transform: scaleX(0%);
    transform-origin: center;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid var(--chakra-colors-green-400);
  }
  &:hover {
    &:after {
      content: "";
      z-index: -1;
      border-bottom: 3px solid var(--chakra-colors-green-400);
      transform: scaleX(100%);
    }
  }
`;

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
