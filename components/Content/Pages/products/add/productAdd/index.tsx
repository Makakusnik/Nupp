import { Box, VStack, Button, Container, HStack } from "@chakra-ui/react";
import { useContext, FormEvent } from "react";
import { ProductFormContext } from "../../../../../Contexts/ProductFormContext";
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
} from "./ProductFields";

export const ProductForm = () => {
  const { ...ever } = useContext(ProductFormContext);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ever);
  };
  return (
    <form onSubmit={onSubmit}>
      <MainHeading>Product Details</MainHeading>
      <HStack marginTop="24px" alignItems={"start"} justifyContent="center">
        <ProductDetailsSection />
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
const ProductDetailsSection = () => {
  const {
    productNameSetter,
    brandNameSetter,
    packingWeightSetter,
    vendorAndPriceValuesSetter,
    vendorAndPriceValues,
    foodAdditives,
    foodAdditivesSetter,
    alergensSetter,
    alergens,
  } = useContext(ProductFormContext);
  return (
    <VStack w="fit-content" px="16px" spacing="16px">
      <ProductNameField setter={productNameSetter} />
      <BrandNameField setter={brandNameSetter} />
      <PackingWeight setter={packingWeightSetter} />
      <VendorAndPriceComponent setter={vendorAndPriceValuesSetter} values={vendorAndPriceValues} />
      <FoodAdditivesComponent setter={foodAdditivesSetter} values={foodAdditives} />
      <AlergensComponent setter={alergensSetter} values={alergens} />
    </VStack>
  );
};

const MacroNutrientsSection = () => {
  const {
    fatsSetter,
    sfaSetter,
    mufaSetter,
    pufaSetter,
    proteinsSetter,
    saltSetter,
    sugarSetter,
    fiberSetter,
    carbohydratesSetter,
  } = useContext(ProductFormContext);

  return (
    <Container my="64px" alignSelf={"center"} minW="container.sm">
      <MainHeading>Macro Nutrients</MainHeading>
      <VStack px="16px" marginTop="24px">
        <HStack spacing="40px" alignItems="start" w="100%">
          <VStack spacing="16px" alignItems="space-between" w="90%">
            <VStack spacing="8px" w="100%">
              <FatsInputField setter={fatsSetter} />
              <SfaInputField setter={sfaSetter} />
              <MufaInputField setter={mufaSetter} />
              <PufaInputField setter={pufaSetter} />
            </VStack>
            <ProteinsInputField setter={proteinsSetter} />
          </VStack>
          <VStack spacing="16px" alignItems="space-between" w="100%">
            <VStack spacing="8px" w="100%">
              <CarbohydratesInputField setter={carbohydratesSetter} />
              <SugarInputField setter={sugarSetter} />
              <FiberInputField setter={fiberSetter} />
            </VStack>
            <SaltInputField setter={saltSetter} />
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};
