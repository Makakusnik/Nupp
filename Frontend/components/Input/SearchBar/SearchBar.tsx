import { Box, FormLabel, HStack, Input, InputGroup, InputLeftElement, VisuallyHidden } from "@chakra-ui/react";
import { SyntheticEvent } from "react";
import { MdSearch } from "react-icons/md";
import * as FormElements from "../Form/FormElements";

export const SearchBar = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <HStack
      display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
      marginRight={["0px", "0px", "8px", "80px", "144px"]}
    >
      <form onSubmit={handleSubmit}>
        <FormElements.Wrapper placeItems="center" isRequired={false} direction="row">
          <VisuallyHidden>
            <FormLabel my="0" whiteSpace="nowrap" htmlFor="productSearch">
              Search for Product
            </FormLabel>
          </VisuallyHidden>
          <InputGroup>
            <InputLeftElement>
              <Box as={MdSearch} size="24px" color="green.500" />
            </InputLeftElement>
            <Input
              placeholder="Search for Product"
              variant="searchBar"
              id="productSearch"
              type="search"
              name="Product Search"
            />
          </InputGroup>
          <VisuallyHidden>
            <input tabIndex={-1} type="submit" value="Submit search query"></input>
          </VisuallyHidden>
        </FormElements.Wrapper>
      </form>
    </HStack>
  );
};
