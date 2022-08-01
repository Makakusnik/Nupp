import {
  Button,
  Checkbox,
  Container,
  Grid,
  GridItem,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { categoriesData, CategoryType } from "../../testdata/data";
import { RangeSliderWInput } from "../Input/Sliders/RangeSliders";
import { MdOutlineSearch } from "react-icons/md";
import * as FormElements from "../../components/Input/Form/FormElements";
import { Select } from "../Input";
import { SyntheticEvent, useState } from "react";
import { handleRemoveFactoryFunction, handleSelectFactoryFunction } from "../Content";

export const FilterBox = () => {
  const filterBg = useColorModeValue("gray.100", "gray.900");
  const filterDetailColor = useColorModeValue("blackAlpha.700", "whiteAlpha.600");

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
      <Stack direction={{ base: "column", md: "row" }}>
        <VStack w="fit-content" alignItems="start">
          <Text marginBottom="8px" fontSize="lg" fontWeight="600">
            Categories
          </Text>
          <CategoriesSelectField />
        </VStack>
        <VStack>
          <Text fontSize="lg" fontWeight="600">
            Diet Type
          </Text>
          <Stack marginTop="16px">
            <Checkbox size="md">Vegan</Checkbox>
            <Checkbox size="md">Checkbox</Checkbox>
          </Stack>
        </VStack>
        <VStack>
          <Text display="inline-flex" fontSize="lg" fontWeight="600" alignItems="baseline">
            Costs
          </Text>
          <Text display="inline-flex" marginLeft="8px" color={filterDetailColor}>
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
        </VStack>
        <GridItem colSpan={2} w="100%" px="8px">
          <Text display="inline-flex" fontSize="lg" fontWeight="600" alignItems="baseline">
            Macro Nutrients
          </Text>
          <Text display="inline-flex" marginLeft="8px" color={filterDetailColor}>
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
      </Stack>
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

const CategoriesSelectField = () => {
  const [selectedItems, setSelectedItems] = useState<CategoryType[]>([]);
  const handleSelect = handleSelectFactoryFunction(categoriesData, selectedItems, setSelectedItems!);
  const handleRemove = handleRemoveFactoryFunction(selectedItems, setSelectedItems!);

  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.MainSection w="24ch">
        <Select
          data={categoriesData}
          name="Categories"
          placeholder="Pick Category"
          id="categories"
          onChange={handleSelect}
        />
        <FormElements.ContainerSection maxH="132px">
          {selectedItems.map((item) => {
            return <CategoryItem key={item.id} name={item.name} onClick={(e) => handleRemove(item.id)}></CategoryItem>;
          })}
        </FormElements.ContainerSection>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

type ItemProps = {
  name: string;
  onClick: (e: SyntheticEvent) => void;
};

const CategoryItem = ({ onClick, name }: ItemProps) => {
  const tagFontColor = useColorModeValue("gray.700", "gray.900");
  return (
    <Tag as="li" size="sm" colorScheme="green" color={tagFontColor} bg="green.300">
      <TagLabel>{name}</TagLabel>
      <TagCloseButton onClick={onClick} />
    </Tag>
  );
};
