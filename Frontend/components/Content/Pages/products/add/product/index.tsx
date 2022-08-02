import { Box, VStack, Button, Container, HStack } from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import { MainHeading } from "../../../../../Input/Form/Header";
import { MdCheck } from "react-icons/md";
import {
  ProductNameField,
  BrandNameField,
  PackingWeight,
  VendorAndPriceComponent,
  FatsInputField,
  SfaInputField,
  MufaInputField,
  PufaInputField,
  ProteinsInputField,
  CarbohydratesInputField,
  SugarInputField,
  FiberInputField,
  SaltInputField,
  FoodAdditivesComponent,
  AlergensComponent,
  VendorPricePairType,
} from "./ProductFields";
import { Alergen, FoodAdditive, MarkType } from "../../../../../../testdata/data";
import { MarksComponent } from "../../../..";

export const ProductForm = () => {
  const [vendorAndPrice, vendorAndPriceValuesSetter] = useState<VendorPricePairType[]>([]);
  const [foodAdditives, foodAdditivesSetter] = useState<FoodAdditive[]>([]);
  const [alergens, alergensSetter] = useState<Alergen[]>([]);
  const [marks, marksSetter] = useState<MarkType[]>([]);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    data.append("VendorPrices", JSON.stringify(vendorAndPrice));
    data.append("FoodAdditives", JSON.stringify(foodAdditives));
    data.append("Alergens", JSON.stringify(alergens));
    data.append("Marks", JSON.stringify(marks));
  };
  return (
    <form onSubmit={onSubmit}>
      <MainHeading>Product Details</MainHeading>
      <HStack marginTop="24px" alignItems={"start"} justifyContent="center">
        <VStack w="fit-content" px="16px" spacing="16px">
          <ProductNameField />
          <BrandNameField />
          <PackingWeight />
          <MarksComponent values={marks} setter={marksSetter} />
          <VendorAndPriceComponent setter={vendorAndPriceValuesSetter} values={vendorAndPrice} />
          <FoodAdditivesComponent setter={foodAdditivesSetter} values={foodAdditives} />
          <AlergensComponent setter={alergensSetter} values={alergens} />
        </VStack>
        <ImageSection />
      </HStack>
      <MacroNutrientsSection />
      <HStack w="100%" justifyContent="end">
        <Button type="submit" colorScheme={"green"} w="16ch" rightIcon={<MdCheck size="24px" />}>
          Add Product
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

const MacroNutrientsSection = () => {
  return (
    <Container my="64px" alignSelf={"center"} minW="container.sm">
      <MainHeading>Macro Nutrients</MainHeading>
      <VStack px="16px" marginTop="24px">
        <HStack spacing="40px" alignItems="start" w="100%">
          <VStack spacing="16px" alignItems="space-between" w="90%">
            <VStack spacing="8px" w="100%">
              <FatsInputField />
              <SfaInputField />
              <MufaInputField />
              <PufaInputField />
            </VStack>
            <ProteinsInputField />
          </VStack>
          <VStack spacing="16px" alignItems="space-between" w="100%">
            <VStack spacing="8px" w="100%">
              <CarbohydratesInputField />
              <SugarInputField />
              <FiberInputField />
            </VStack>
            <SaltInputField />
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};
