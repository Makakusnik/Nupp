import {
  Box,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SyntheticEvent } from "react";
import { MdClose } from "react-icons/md";
import { data, RecipeData, RecipeDataType, SelectedIngredients } from "../../../../../../testdata/data";
import { SmallDataTable, SmallTableRow } from "../../../../../Database/DatabaseTable";
import { Select } from "../../../../../Input";
import * as FormElements from "../../../../../Input/Form/FormElements";

export const MealNameField = () => {
  return (
    <FormElements.Wrapper isRequired>
      <FormElements.LabelSection>
        <FormLabel htmlFor="mealName" whiteSpace={"nowrap"}>
          Meal Name
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Input type="text" id="mealName"></Input>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

type RecipeComponentProps = {
  values: RecipeDataType[];
  setter: ((values: RecipeDataType[]) => void) | null;
};

export const RecipeField = ({ values, setter }: RecipeComponentProps) => {
  const handleSelect = (e: SyntheticEvent<HTMLSelectElement>) => {};
  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="correspondingRecipe" whiteSpace={"nowrap"}>
          Correspodning Recipe
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Select
          id={"correspondingRecipe"}
          name={"Recipe"}
          placeholder={"Pick Recipe"}
          data={RecipeData}
          onChange={handleSelect}
        />
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

export const IngredientsField = ({ values, setter }: RecipeComponentProps) => {
  const handleSelect = (e: SyntheticEvent<HTMLSelectElement>) => {};
  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="ingredients" whiteSpace={"nowrap"} paddingLeft="40px">
          Ingredients
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection w="100%">
        <HStack w="100%" px="40px" alignItems={"start"} spacing="32px">
          <SmallDataTable>
            {data.map((item, index) => {
              return <SmallTableRow ariaLabelIconButton="Add product to ingredients." key={index} item={item} />;
            })}
          </SmallDataTable>
          <FormElements.ContainerSection>
            {SelectedIngredients.map((item) => {
              return (
                <FormElements.SelectedItem key={item.id}>
                  <SelectedIngredient name={item.name} key={item.id} weight={item.weight} brandName={item.brandName} />
                </FormElements.SelectedItem>
              );
            })}
          </FormElements.ContainerSection>
        </HStack>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

type SelectedIngredientProps = {
  name: string;
  brandName: string;
  weight: number;
};

const SelectedIngredient = ({ name, brandName, weight }: SelectedIngredientProps) => {
  return (
    <HStack maxW="220px" minW="220px">
      <Box minW="8px" minH="8px" bg="gray.400" />
      <VStack spacing="0" minW="160px" maxW="160px" alignItems={"start"}>
        <Text p="0" m="0" maxW="18ch" noOfLines={1}>
          {name}
        </Text>
        <Text p="0" m="0" maxW="18ch" fontSize="12px" textAlign={"start"} color="gray.600" noOfLines={1}>
          {brandName}
        </Text>
      </VStack>
      <InputGroup minW="7ch" size="xs">
        <Input type="number" value={weight} fontSize="14px" textAlign={"end"} color="gray.600" noOfLines={1}></Input>
        <InputRightAddon>g</InputRightAddon>
      </InputGroup>

      <Spacer />
      <IconButton
        aria-label="Remove Ingredient"
        colorScheme="red"
        size="xs"
        icon={<MdClose size="24px" />}
      ></IconButton>
    </HStack>
  );
};
