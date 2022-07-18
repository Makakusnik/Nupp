import React, { ReactNode } from "react";
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading as H,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FlexType } from "../../types/Types";

type ChildrenOnlyProps = {
  children: ReactNode | string;
};

type HeaderProps = {
  h?: any;
  isTransparent?: boolean;
};

export const SmallHeader = ({
  h,
  children,
  isTransparent,
}: HeaderProps & ChildrenOnlyProps) => {
  const headerBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Container
      minW="100%"
      minH={h && { ...h }}
      h="fit-content"
      bg={isTransparent ? "transparent" : headerBg}
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

export const Component = ({
  h,
  children,
  isTransparent,
}: HeaderProps & ChildrenOnlyProps) => {
  const headerBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Container
      minW="100%"
      minH={(h && { ...h }) || { "2xl": "500px" }}
      h="fit-content"
      bg={isTransparent ? "transparent" : headerBg}
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

export const Title = ({ children }: ChildrenOnlyProps) => {
  return (
    <H as="h1" size={"2xl"}>
      {children}
    </H>
  );
};

export const Description = ({ children }: ChildrenOnlyProps) => {
  const fontColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");
  return (
    <Text fontWeight="200" color={fontColor}>
      {children}
    </Text>
  );
};

export const MainSection = ({ children }: ChildrenOnlyProps) => {
  return (
    <GridItem w="60%">
      <VStack alignItems="start" spacing="48px" p={"16"} h="100%">
        {children}
      </VStack>
    </GridItem>
  );
};

export const ImageSection = ({
  children,
  placeContent,
}: ChildrenOnlyProps & FlexType) => {
  return (
    <GridItem w="40%" position="relative">
      <Flex placeContent={placeContent}>{children}</Flex>
    </GridItem>
  );
};
