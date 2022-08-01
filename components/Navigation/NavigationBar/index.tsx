import { Box, Center, Flex, HStack, IconButton, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { NavigationLink } from "./NavigationBarLink";
import { SearchBar } from "../../Input/SearchBar/SearchBar";
import { LoginButton } from "./Login";

export const NavigationBar = () => {
  const [height, setHeight] = useState<string>("88px");
  const [backgroundOpacity, setBackgroundOpacity] = useState<number>(100);

  const barBg = useColorModeValue("gray.100", "gray.900");

  useEffect(() => {
    const handleScroll = (e: Event) => {
      setBackgroundOpacity(window.scrollY < 120 ? window.scrollY / 200 : 1);
      setHeight(window.scrollY < 150 ? "88px" : "64px");
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundOpacity]);

  return (
    <Flex
      as="nav"
      transition="height 0.5s ease-in-out"
      h={height}
      p={{ base: "4px 16px", lg: "4px 64px", md: "4px 16px" }}
      columnGap={"8px"}
      alignContent={"center"}
      justifyContent="space-between"
      position="fixed"
      w="100%"
      zIndex="9999"
      _before={{
        transition: "opacity 0.5s ease-in-out",
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: barBg,
        zIndex: "0",
        left: "0",
        top: "0",
        opacity: backgroundOpacity,
      }}
    >
      <HStack spacing="48px" justifyContent="space-between" px="0" zIndex="1">
        <Center>
          <NextLink href="/" passHref>
            <Link>NUPP</Link>
          </NextLink>
        </Center>
        <HStack display={{ base: "none", sm: "flex" }} as="ul" spacing={{ base: "8px", sm: "8px", md: "16px" }}>
          <li>
            <NavigationLink href="/">Homepage</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/diets">Diets</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/products">Products</NavigationLink>
          </li>
        </HStack>
      </HStack>
      <SearchBar />
      <HStack spacing={"16px"}>
        <ColorModeButton />
        <LoginButton />
      </HStack>
    </Flex>
  );
};

const ColorModeButton = () => {
  const buttonBg = useColorModeValue("gray.100", "gray.900");
  const { toggleColorMode } = useColorMode();
  const IconColor = useColorModeValue("purple.800", "yellow.400");
  const Icon = useColorModeValue(BsMoonStarsFill, BsSunFill);

  return (
    <IconButton
      bg={buttonBg}
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      icon={<Box as={Icon} size="24px" color={IconColor} />}
    />
  );
};
