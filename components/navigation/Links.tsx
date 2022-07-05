import { Box, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";

interface NavLinkProps {
  href: string;
  children: string;
}

export const NavigationLink = ({ href, children }: NavLinkProps) => (
  <NextLink href={href} passHref={true}>
    <LinkWrap>
      <Link _hover={{}} fontFamily="Lato" fontWeight={700}>
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
