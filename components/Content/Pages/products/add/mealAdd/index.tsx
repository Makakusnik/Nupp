import { HStack, Button, Box, VStack, Container, Text } from "@chakra-ui/react";
import { FormEvent, useContext } from "react";
import { MdCheck } from "react-icons/md";
import { Alergens } from "../../../../../../testdata/data";
import { ProductFormContext } from "../../../../../Contexts/ProductFormContext";
import * as FormDataFields from "../../../../../Input/Form/FormDataFields";
import { MainHeading } from "../../../../../Input/Form/Header";
import { AlergenItem } from "../productAdd/ProductFields";
import { IngredientsField, MarksComponent, MealNameField, RecipeField } from "./MealFields";

export const MealForm = () => {
  const { ...ever } = useContext(ProductFormContext);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ever);
  };
  return (
    <form onSubmit={onSubmit}>
      <MainHeading>Meal Details</MainHeading>
      <HStack marginTop="24px" justifyContent="space-around">
        <MealDetailsSection />
        <ImageSection />
      </HStack>
      <HStack marginTop="16px" justifyContent="center">
        <IngredientsField values={[]} setter={() => {}} />
      </HStack>
      <SummarySection />
      <HStack w="100%" justifyContent="end">
        <Button type="submit" colorScheme={"green"} w="16ch" rightIcon={<MdCheck size="24px" />}>
          Add Meal
        </Button>
      </HStack>
    </form>
  );
};

const ImageSection = () => {
  return (
    <VStack w="30%">
      <Box h="200px" w="200px" bg="red"></Box>
    </VStack>
  );
};

const MealDetailsSection = () => {
  return (
    <VStack w="fit-content" px="16px" spacing="16px">
      <MealNameField setter={() => {}} />
      <RecipeField values={[]} setter={() => {}} />
      <MarksComponent values={[]} setter={() => {}} />
    </VStack>
  );
};

const SummarySection = () => {
  return (
    <Container my="64px" alignSelf={"center"} minW="container.md">
      <MainHeading>Summary</MainHeading>
      <HStack px="16px" spacing="32px" marginTop="24px" alignItems="start">
        <VStack spacing="16px" alignItems="space-between" w="45%">
          <MainSummary />
        </VStack>
        <VStack spacing="16px" alignItems="space-between" w="55%">
          <MacroSummary />
        </VStack>
      </HStack>
    </Container>
  );
};

const MainSummary = () => {
  return (
    <VStack spacing="16px">
      <FormDataFields.MainContainer>
        <FormDataFields.Title>Estimated Cost:</FormDataFields.Title>
        <FormDataFields.Value>150 $</FormDataFields.Value>
      </FormDataFields.MainContainer>
      <FormDataFields.MainContainer>
        <FormDataFields.Title>Weight Sum:</FormDataFields.Title>
        <FormDataFields.Value>1865 grams</FormDataFields.Value>
      </FormDataFields.MainContainer>
      <FormDataFields.MainContainer>
        <FormDataFields.Title>Ingredients count:</FormDataFields.Title>
        <FormDataFields.Value>16</FormDataFields.Value>
      </FormDataFields.MainContainer>
      <FormDataFields.MainContainer direction="column">
        <FormDataFields.Title>Alergens: </FormDataFields.Title>
        <FormDataFields.Wrapper>
          {AlergenSummaryItems.map((item, index) => {
            return (
              <AlergenSummaryItem name={item.name} key={index} productName={item.productName}></AlergenSummaryItem>
            );
          })}
        </FormDataFields.Wrapper>
      </FormDataFields.MainContainer>
      <FormDataFields.MainContainer>
        <FormDataFields.Title>Food Additives: </FormDataFields.Title>
        <FormDataFields.Value>Tu bude container</FormDataFields.Value>
      </FormDataFields.MainContainer>
    </VStack>
  );
};

const MacroSummary = () => {
  return (
    <VStack spacing="16px">
      <FormDataFields.MainContainer alignItems="center">
        <FormDataFields.Title>Energy </FormDataFields.Title>
        <FormDataFields.Wrapper>
          <FormDataFields.Value>
            153 <abbr title="Kilo Calories">kcal</abbr>
          </FormDataFields.Value>
          <FormDataFields.Value>
            658 <abbr title="Kilo Calories">kJ</abbr>
          </FormDataFields.Value>
        </FormDataFields.Wrapper>
      </FormDataFields.MainContainer>
      <HStack w="100%" spacing="16px" alignItems={"start"}>
        <VStack w="40%" spacing="16px">
          <VStack w="100%" spacing="4px">
            <FormDataFields.MainContainer>
              <FormDataFields.Title>Fats</FormDataFields.Title>
              <FormDataFields.Value>
                52.12 <abbr title="grams">g</abbr>
              </FormDataFields.Value>
            </FormDataFields.MainContainer>
            <FormDataFields.MainContainer>
              <FormDataFields.Title subLevel="8px">
                <abbr title="Satturated Fatty Acids">SFA</abbr>
              </FormDataFields.Title>
              <FormDataFields.Value>
                16.04 <abbr title="grams">g</abbr>
              </FormDataFields.Value>
            </FormDataFields.MainContainer>
            <FormDataFields.MainContainer>
              <FormDataFields.Title subLevel="8px">
                <abbr title="Monounsatturated Fatty Acids">MUFA</abbr>
              </FormDataFields.Title>
              <FormDataFields.Value>
                10.61 <abbr title="grams">g</abbr>
              </FormDataFields.Value>
            </FormDataFields.MainContainer>
            <FormDataFields.MainContainer>
              <FormDataFields.Title subLevel="8px">
                <abbr title="Polyunsatturated Fatty Acids">PUFA</abbr>
              </FormDataFields.Title>
              <FormDataFields.Value>
                18.28 <abbr title="grams">g</abbr>
              </FormDataFields.Value>
            </FormDataFields.MainContainer>
          </VStack>
          <FormDataFields.MainContainer>
            <FormDataFields.Title>Proteins</FormDataFields.Title>
            <FormDataFields.Value>
              16.26 <abbr title="Kilo Calories">g</abbr>
            </FormDataFields.Value>
          </FormDataFields.MainContainer>
        </VStack>
        <VStack w="60%" spacing="16px">
          <VStack w="100%" spacing="4px">
            <FormDataFields.MainContainer>
              <FormDataFields.Title>Crabohydrates</FormDataFields.Title>
              <FormDataFields.Value>
                23.26 <abbr title="grams">g</abbr>
              </FormDataFields.Value>
            </FormDataFields.MainContainer>
            <FormDataFields.MainContainer>
              <FormDataFields.Title subLevel="8px">Sugar</FormDataFields.Title>
              <FormDataFields.Value>
                14.16 <abbr title="grams">g</abbr>
              </FormDataFields.Value>
            </FormDataFields.MainContainer>
            <FormDataFields.MainContainer>
              <FormDataFields.Title subLevel="8px">Fiber</FormDataFields.Title>
              <FormDataFields.Value>
                12.64 <abbr title="grams">g</abbr>
              </FormDataFields.Value>
            </FormDataFields.MainContainer>
          </VStack>
          <FormDataFields.MainContainer>
            <FormDataFields.Title>Salt</FormDataFields.Title>
            <FormDataFields.Value>
              10.86 <abbr title="Kilo Calories">g</abbr>
            </FormDataFields.Value>
          </FormDataFields.MainContainer>
        </VStack>
      </HStack>
    </VStack>
  );
};

type AlergenItemProps = {
  name: string;
  productName: string;
};

const AlergenSummaryItems = [
  { name: "Nut", productName: "Orechová Niečo" },
  { name: "Gluten", productName: "Chleba" },
  { name: "Lactose", productName: "Syrovy mozog" },
];

export const AlergenSummaryItem = ({ name, productName }: AlergenItemProps) => {
  return (
    <HStack as="li" w="100%" fontSize="small">
      <Box w="8px" h="8px" bg={"red.500"} />
      <Text w="fit-content" maxW="15ch" noOfLines={1}>
        {name}
      </Text>
      <Text w="fit-content" maxW="15ch" color="gray.500" noOfLines={1}>
        {productName}
      </Text>
    </HStack>
  );
};
