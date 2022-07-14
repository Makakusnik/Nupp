import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import NextLink from "next/link";
import { MdCheck, MdClose, MdPriorityHigh } from "react-icons/md";
import { BigLink } from "../Navigation/Links/BigLink";

const CategoriesContainer = () => {
  const headerBg = useColorModeValue("gray.50", "whiteAlpha.50");
  const fontColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");

  return (
    <Container
      marginTop="80px"
      maxW="container.md"
      h="fit-content"
      bg={headerBg}
      p={"32px"}
      borderRadius="32px"
    >
      <VStack w="100%" align="left">
        <Heading paddingBottom="8px" as="h2">
          Labels
        </Heading>
        <Text maxW="90%" color={fontColor}>
          We use labels to mark potential hazard, unhealthy additives and/or
          health benefits for consumers of various products. This way they can
          be cautious and well infomred when they creating new diet plans.
        </Text>
      </VStack>
      <Grid marginTop="16px" w="100%" templateColumns={"1fr 1fr 1fr"}>
        <GridItem display="flex" justifyContent="center">
          <NextLink href="#">
            <Category
              icon={MdClose}
              backgroundColor={useColorModeValue("red.600", "red.400")}
              backgroundHoverColor={useColorModeValue("red.100", "red.700")}
              color={useColorModeValue("red.300", "red.700")}
            >
              Unhealthy Additives
            </Category>
          </NextLink>
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <Category
            icon={MdPriorityHigh}
            backgroundColor={useColorModeValue("yellow.600", "yellow.300")}
            backgroundHoverColor={useColorModeValue("yellow.100", "yellow.600")}
            color={useColorModeValue("yellow.300", "yellow.600")}
          >
            Alergens
          </Category>
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <Category
            icon={MdCheck}
            backgroundColor={useColorModeValue("green.600", "green.400")}
            backgroundHoverColor={useColorModeValue("green.100", "green.700")}
            color={useColorModeValue("green.300", "green.700")}
          >
            Health-Promoting
          </Category>
        </GridItem>
      </Grid>
      <Center marginTop="48px">
        <BigLink href="#">Read More</BigLink>
      </Center>
    </Container>
  );
};

export default CategoriesContainer;

interface CategoryProps {
  icon: IconType;
  backgroundColor: string;
  backgroundHoverColor: string;
  color: string;
  children: string;
}

const Category = ({
  icon,
  backgroundColor,
  backgroundHoverColor,
  color,
  children,
}: CategoryProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const mouseEnter = () => setHover(true);
  const mouseLeave = () => setHover(false);

  return (
    <VStack
      minW="3xs"
      minH="7rem"
      display="flex"
      borderRadius="16px"
      justifyContent="center"
      transition="box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out"
      _hover={{
        cursor: "pointer",
        boxShadow: "xl",
        background: backgroundHoverColor,
      }}
      spacing={"24px"}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <Stack position="relative" spacing="0">
        <Box
          as={icon}
          size="32px"
          p="2px"
          display="flex"
          borderRadius={"50%"}
          bg={backgroundColor}
          color={color}
          alignContent={"center"}
          justifyContent="center"
          zIndex="1"
        ></Box>
        <Box
          zIndex="0"
          top="0"
          bottom="0"
          left="0"
          right="0"
          position="absolute"
          w="32px"
          display="flex"
          h="32px"
          borderRadius={"50%"}
          bg={backgroundColor}
          transition="filter 0.3s ease-in-out"
          filter={hover ? "blur(5px)" : ""}
        />
      </Stack>

      <Text
        transition="color 0.3s ease-in-out"
        color={hover ? backgroundColor : ""}
        fontSize="lg"
        fontWeight="black"
      >
        {children}
      </Text>
    </VStack>
  );
};
