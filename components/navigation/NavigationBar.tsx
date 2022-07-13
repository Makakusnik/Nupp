import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  SyntheticEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { BsMoonStarsFill, BsSunFill, BsFillPersonFill } from "react-icons/bs";
import { NavigationLink } from "./Links";

export const NavigationBar = () => {
  const [height, setHeight] = useState<string>("88px");
  const [backgroundOpacity, setBackgroundOpacity] = useState<number>(100);
  const { colorMode, toggleColorMode } = useColorMode();

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
      p={{ lg: "4px 64px", md: "4px 16px" }}
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
      <HStack spacing="48px" zIndex="1">
        <Center>
          <NextLink href="/" passHref>
            <Link>NUPP</Link>
          </NextLink>
        </Center>
        <HStack spacing="16px">
          <NavigationLink href="/">Homepage</NavigationLink>
          <NavigationLink href="/diets">Diets</NavigationLink>
          <NavigationLink href="/products">Products</NavigationLink>
        </HStack>
      </HStack>
      <SearchBar />
      <HStack spacing={"16px"}>
        <IconButton
          bg={barBg}
          aria-label="Toggle light dark mode"
          onClick={toggleColorMode}
          icon={
            colorMode === "light" ? (
              <Box as={BsMoonStarsFill} size="24px" color="purple.700" />
            ) : (
              <Box as={BsSunFill} size="24px" color="yellow.400" />
            )
          }
        />
        <IconButton aria-label="Log In" bg={barBg}>
          <Box as={BsFillPersonFill} size="24px" color="green.400" />
        </IconButton>
      </HStack>
    </Flex>
  );
};

const SearchBar = () => {
  const [isDietSearch, setDietSearch] = useState<boolean>();
  const [isFoodSearch, setFoodSearch] = useState<boolean>();
  const [isSearchingState, setSearchingState] = useState<boolean>();

  /** inputRef is used for referencing Input field and to read input from it**/
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Resets searching bar to default state.
   * */
  const handleLostFocus = (e: SyntheticEvent) => {
    if (inputRef.current && inputRef.current.value === "") {
      setSearchingState(false);
      setDietSearch(false);
      setFoodSearch(false);
    }
  };

  const handleClickDietButton = () => {
    setFoodSearch(false);
    setDietSearch(true);
    setSearchingState(true);
  };

  const handleClickFoodButton = () => {
    setDietSearch(false);
    setFoodSearch(true);
    setSearchingState(true);
  };

  useEffect(() => {
    if (isSearchingState && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchingState]);

  return (
    <HStack marginRight={["0px", "0px", "8px", "80px", "144px"]}>
      <InputGroup>
        {/*
         *  Changes post-fix of Left Searchbar Addon
         *  isSearchingState -> Informs about state of searchbar
         *  isDietSearch -> Informs about which state has been chosen
         */}
        <InputLeftAddon bg={"gray.400"}>{`Search For ${
          isSearchingState ? (isDietSearch ? "Diet plan" : "Product") : ""
        } :`}</InputLeftAddon>
        {/**
         * Hides Button Group when isSearchingState is true
         **/}
        <ButtonGroup hidden={isSearchingState}>
          <HStack spacing={0}>
            <Button onClick={handleClickDietButton} borderRadius={0}>
              Diet Plans
            </Button>
            <Button
              onClick={handleClickFoodButton}
              borderRadius={"0 .375rem .375rem 0"}
            >
              Food
            </Button>
          </HStack>
        </ButtonGroup>
        <Input
          ref={inputRef}
          hidden={!isSearchingState}
          onBlur={handleLostFocus}
          type="search"
        />
      </InputGroup>
    </HStack>
  );
};
