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
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { MdSettings } from "react-icons/md";
import { JsxElement } from "typescript";
import { NavigationLink } from "./Links";

interface NavProps {}

export const NavigationBar = ({}: NavProps) => {
  return (
    <Flex
      h={"88px"}
      p={{ lg: "4px 64px", md: "4px 16px" }}
      columnGap={"8px"}
      alignContent={"center"}
      justifyContent="space-between"
    >
      <HStack spacing="48px">
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
      <HStack>
        <IconButton aria-label="Log In">
          <Box as={MdSettings} size="16px" color="green.400"></Box>
        </IconButton>
      </HStack>
    </Flex>
  );
};

const SearchBar = () => {
  const [isDietSearch, setDietSearch] = useState<boolean>();
  const [isFoodSearch, setFoodSearch] = useState<boolean>();
  const [isSearchingState, setSearchingState] = useState<boolean>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState<string>();

  const handleLostFocus = (e: SyntheticEvent) => {
    setSearchingState(false);
    setDietSearch(false);
    setFoodSearch(false);
  };

  // Sets diet search state.
  const handleClickDietButton = () => {
    setDietSearch(true);
    setSearchingState(true);
  };

  // Sets food search state on
  const handleClickFoodButton = () => {
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
        <InputLeftAddon bg={"gray.400"}>{`Search For ${
          isSearchingState ? (isDietSearch ? "Diet plan" : "Product") : ""
        } :`}</InputLeftAddon>
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
        {/* Tuto je hidden, prerobiť na state*/}
        <Input
          ref={inputRef}
          autoFocus={true}
          hidden={!isSearchingState}
          onBlur={handleLostFocus}
          type="search"
        />
      </InputGroup>
    </HStack>
  );
};
