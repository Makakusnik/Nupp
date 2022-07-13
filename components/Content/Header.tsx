import React, { ReactNode } from "react";
import {
  Container,
  Grid,
  GridItem,
  Heading,
  ResponsiveValue,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

interface ChildrenOnlyProps {
  children: ReactNode | string;
}

interface HeaderProps {
  h?: any;
}

const Header = ({ h, children }: HeaderProps & ChildrenOnlyProps) => {
  const headerBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Container
      minW="100%"
      minH={(h && { ...h }) || { "2xl": "500px" }}
      h="fit-content"
      bg={headerBg}
      alignItems="center"
      display="flex"
      as="header"
    >
      <Grid
        display="flex"
        alignContent="center"
        maxW="container.lg"
        templateColumns={"1fr 1fr"}
        px="16px"
        mx="auto"
        w="100%"
      >
        {children}
      </Grid>
    </Container>
  );
};

export default Header;

export const HeaderHeading = ({ children }: ChildrenOnlyProps) => {
  return (
    <Heading as="h1" size={"2xl"} autoCapitalize="">
      {children}
    </Heading>
  );
};

export const HeaderText = ({ children }: ChildrenOnlyProps) => {
  const fontColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  return (
    <Text fontWeight="200" color={fontColor}>
      {children}
    </Text>
  );
};

export const HeaderMainSection = ({ children }: ChildrenOnlyProps) => {
  return (
    <GridItem w="60%">
      <VStack alignItems="start" spacing="48px" p={"16"} h="100%">
        {children}
      </VStack>
    </GridItem>
  );
};

export const HeaderImageSection = ({ children }: ChildrenOnlyProps) => {
  return (
    <GridItem w="40%" position="relative">
      {children}
    </GridItem>
  );
};
