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
} from "@chakra-ui/react";
import { categoriesData, CategoryType } from "../../testdata/data";
import { RangeSliderWInput } from "../Input/Sliders/RangeSliders";
import { MdOutlineSearch } from "react-icons/md";
import * as FormElements from "../../components/Input/Form/FormElements";
import { Select } from "../Input";
import { SyntheticEvent, useState } from "react";

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
      <Grid templateColumns="1.25fr 0.75fr repeat(3, 1fr)" gap="16px">
        <GridItem w="100%" px="8px">
          <Text marginBottom="16px" fontSize="lg" fontWeight="600">
            Categories
          </Text>
          <CategoriesSelectField />
        </GridItem>
        <GridItem w="100%" px="8px">
          <Text fontSize="lg" fontWeight="600">
            Diet Type
          </Text>
          <Stack marginTop="16px">
            <Checkbox size="md">Vegan</Checkbox>
            <Checkbox size="md">Checkbox</Checkbox>
          </Stack>
        </GridItem>
        <GridItem w="100%" px="8px">
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
        </GridItem>
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

const CategoriesSelectField = () => {
  const [selectedItems, setSelectedItems] = useState<CategoryType[]>([]);
  const handleSelect = (e: SyntheticEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    if (e.currentTarget.selectedIndex === 0 || (selectedItems && selectedItems.some((item) => item.name === value))) {
      e.currentTarget.selectedIndex = 0;
      return;
    }
    setSelectedItems([categoriesData.filter((item) => item.name === value)[0], ...selectedItems]);
    e.currentTarget.selectedIndex = 0;
  };
  const handleRemove = (e: SyntheticEvent, name: string) => {
    setSelectedItems(selectedItems.filter((item) => item.name !== name));
  };

  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.MainSection w="100%">
        <Select
          data={categoriesData}
          name="Categories"
          placeholder="Pick Category"
          id="categories"
          onChange={handleSelect}
        />
        <FormElements.ContainerSection maxH="132px">
          {selectedItems.map((item) => {
            return <CategoryItem name={item.name} onClick={(e) => handleRemove(e, item.name)}></CategoryItem>;
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
