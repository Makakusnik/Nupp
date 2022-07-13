import {
  Button,
  ButtonGroup,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { SyntheticEvent, useEffect, useRef, useState } from "react";

/**
 * Search bar with options
 *
 **/
export const SearchBarTwoOption = () => {
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
