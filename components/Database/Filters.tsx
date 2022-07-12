import {
  Button,
  Checkbox,
  Container,
  Grid,
  GridItem,
  IconButton,
  Select,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { categoriesData } from "../../testdata/data";
import { SelectWTags } from "../Input/SelectWTags";
import { RangeSliderWInput } from "../Input/Sliders";
import { MdOutlineSearch } from "react-icons/md";

export const FilterBox = () => {
  const filterBg = useColorModeValue("gray.100", "gray.900");
  const filterDetailColor = useColorModeValue(
    "blackAlpha.700",
    "whiteAlpha.600"
  );

  return (
    <Container
      h="fit-content"
      p="16px"
      paddingBottom="40px"
      marginTop="40px"
      maxW="container.lg"
      bg={filterBg}
      alignItems="center"
      position="relative"
    >
      <Grid templateColumns="1.25fr 0.75fr repeat(3, 1fr)" gap="16px">
        <GridItem w="100%" px="8px">
          <Text fontSize="lg" fontWeight="600">
            Categories
          </Text>
          <SelectWTags data={categoriesData}></SelectWTags>
        </GridItem>
        <GridItem w="100%" px="8px">
          <Text fontSize="lg" fontWeight="600">
            Diet Type
          </Text>
          <Stack marginTop="16px">
            <Checkbox colorScheme="green" size="sm">
              Vegan
            </Checkbox>
            <Checkbox colorScheme="green" size="sm">
              Checkbox
            </Checkbox>
          </Stack>
        </GridItem>
        <GridItem w="100%" px="8px">
          <Text
            display="inline-flex"
            fontSize="lg"
            fontWeight="600"
            alignItems="baseline"
          >
            Costs
          </Text>
          <Text
            display="inline-flex"
            marginLeft="8px"
            color={filterDetailColor}
          >
            $
          </Text>
          <Stack marginTop="16px" px="8px">
            <RangeSliderWInput
              ariaValues={["min", "max"]}
              placeholderValues={["Min", "Max"]}
              defaultValues={[0, 150]}
              title="Price"
            ></RangeSliderWInput>
          </Stack>
        </GridItem>
        <GridItem colSpan={2} w="100%" px="8px">
          <Text
            display="inline-flex"
            fontSize="lg"
            fontWeight="600"
            alignItems="baseline"
          >
            Macro Nutrients
          </Text>
          <Text
            display="inline-flex"
            marginLeft="8px"
            color={filterDetailColor}
          >
            g / 100 g
          </Text>
          <Stack marginTop="16px" px="8px">
            <Grid templateColumns="repeat(2, 1fr)" gap="32px">
              <GridItem>
                <RangeSliderWInput
                  ariaValues={["min", "max"]}
                  placeholderValues={["Min", "Max"]}
                  defaultValues={[0, 100]}
                  title="Fats"
                ></RangeSliderWInput>
              </GridItem>
              <GridItem>
                <RangeSliderWInput
                  ariaValues={["min", "max"]}
                  placeholderValues={["Min", "Max"]}
                  defaultValues={[0, 100]}
                  title="Carbs"
                ></RangeSliderWInput>
              </GridItem>
              <GridItem>
                <RangeSliderWInput
                  ariaValues={["min", "max"]}
                  placeholderValues={["Min", "Max"]}
                  defaultValues={[0, 100]}
                  title="Proteins"
                ></RangeSliderWInput>
              </GridItem>
              <GridItem>
                <RangeSliderWInput
                  ariaValues={["min", "max"]}
                  placeholderValues={["Min", "Max"]}
                  defaultValues={[0, 100]}
                  title="Salt"
                ></RangeSliderWInput>
              </GridItem>
            </Grid>
          </Stack>
        </GridItem>
      </Grid>
      <Button
        position="absolute"
        bottom="-16px"
        size="md"
        right="16px"
        colorScheme={"green"}
        rightIcon={<MdOutlineSearch />}
      >
        Search
      </Button>
    </Container>
  );
};
