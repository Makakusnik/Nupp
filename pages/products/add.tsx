import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import * as Header from "../../components/Content/Header";
import { GiMeal } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BigButton } from "../../components/Input";
import { MainHeading } from "../../components/Content/Form/Header";
import { Alergens, foodAdditives } from "../../testdata/data";
import { MdAdd } from "react-icons/md";
import { FormFieldInput } from "../../components/Content/Form/FieldInput";
import { FormSelectInputWithTags } from "../../components/Content/Form/SelectInputWithTags";

const Products: NextPage = () => {
  const [isMealForm, setIsMealForm] = useState(false);
  const [isProductForm, setIsProductForm] = useState(false);
  const [isChoosingState, setIsChoosingState] = useState(true);
  const handleMealButton = () => {
    setIsChoosingState(false);
    setIsMealForm(true);
  };

  const handleProductButton = () => {
    setIsChoosingState(false);
    setIsProductForm(true);
  };

  useEffect(() => {}, [isMealForm, isProductForm]);

  return (
    <Container p="0" paddingTop={"88px"} w="100%" minW="100%">
      <Head>
        <title>Nupp | Add Item Form</title>
        <meta
          name="description"
          content="You can create and add product to our database."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isChoosingState && (
        <Intro
          mealButtonHandler={handleMealButton}
          productButtonHandler={handleProductButton}
        />
      )}
      {!isChoosingState && (
        <Container
          px="32px"
          maxW="container.lg"
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
        >
          {isMealForm && <MealForm />}
          {isProductForm && <ProductForm />}
        </Container>
      )}
    </Container>
  );
};

export default Products;

interface IntroProps {
  mealButtonHandler: () => void;
  productButtonHandler: () => void;
}

const Intro = ({ mealButtonHandler, productButtonHandler }: IntroProps) => {
  return (
    <>
      <Header.SmallHeader h={{ base: "300px" }} isTransparent={true}>
        <Header.MainSection>
          <Header.Title>Add Product or Meal</Header.Title>
          <Header.Description>
            You can add your meal or product to our database! Don't worry if you
            don't have all informations, we will supply them later.
          </Header.Description>
        </Header.MainSection>
      </Header.SmallHeader>
      <Container maxW="container.lg" marginTop={"40px"}>
        <HStack margin="auto" spacing="40px" justifyContent={"center"}>
          <BigButton
            icon={GiMeal}
            color={useColorModeValue("orange.400", "orange.200")}
            clickHandler={mealButtonHandler}
          >
            Meal
          </BigButton>
          <BigButton
            icon={FaAppleAlt}
            color={useColorModeValue("green.400", "green.200")}
            clickHandler={productButtonHandler}
          >
            Product
          </BigButton>
        </HStack>
      </Container>
    </>
  );
};

const MealForm = () => {
  return (
    <>
      <Header.SmallHeader h={{ base: "300px" }} isTransparent={true}>
        <Header.MainSection>
          <Header.Title>Add Product or Meal</Header.Title>
          <Header.Description>
            You can add your meal or product to our database! Don't worry if you
            don't have all informations, we will supply them later.
          </Header.Description>
        </Header.MainSection>
        <Header.ImageSection>
          <Box as={FaAppleAlt} size="128px"></Box>
        </Header.ImageSection>
      </Header.SmallHeader>
    </>
  );
};

const ProductForm = () => {
  return (
    <>
      <Header.SmallHeader h={{ base: "300px" }} isTransparent={true}>
        <Header.MainSection>
          <Header.Title>Product</Header.Title>
        </Header.MainSection>
        <Header.ImageSection placeContent="center center">
          <Box as={FaAppleAlt} size="128px"></Box>
        </Header.ImageSection>
      </Header.SmallHeader>
      <FormControl w="container.md" display="flex" flexDirection={"column"}>
        <MainHeading>Product Details</MainHeading>
        <HStack marginTop="24px" alignItems={"start"} justifyContent="start">
          <VStack w="70%" px="16px" spacing="24px">
            <FormFieldInput id="productName" type="text">
              Product Name
            </FormFieldInput>
            <FormFieldInput id="brandName" type="text">
              Brand Name
            </FormFieldInput>
            <FormFieldInput id="packingWeight" type="number" rightAddon="grams">
              Packing Weight
            </FormFieldInput>
            <VStack w="100%">
              <HStack w="100%">
                <FormLabel
                  htmlFor="VendorPrice"
                  whiteSpace={"nowrap"}
                  w="200px"
                >
                  Vendor {"&"} Price
                </FormLabel>
                <HStack w="350px">
                  <Select id="VendorName" w="60%" />
                  <InputGroup w="40%">
                    <Input
                      min={0}
                      max={999.99}
                      p="2"
                      type={"number"}
                      id="VendorPrice"
                    />
                    <InputRightAddon>$</InputRightAddon>
                  </InputGroup>
                  <IconButton
                    aria-label="Add Vendor & Price pair."
                    icon={<MdAdd size="24px" />}
                    colorScheme="green"
                    size="xs"
                  />
                </HStack>
              </HStack>
            </VStack>
            <FormSelectInputWithTags
              placeholder="Pick Additive"
              data={foodAdditives}
              id="foodAdditives"
            >
              Food Additives
            </FormSelectInputWithTags>
            <FormSelectInputWithTags
              placeholder="Pick Alergen"
              data={Alergens}
              id="alergens"
            >
              Alergens
            </FormSelectInputWithTags>
          </VStack>
          <VStack w="30%">
            <Box h="200px" w="200px" bg="red"></Box>
          </VStack>
        </HStack>
        <Container marginTop="64px" alignSelf={"center"} minW="container.xs">
          <MainHeading>Macro Nutrients</MainHeading>
          <VStack px="16px" marginTop="24px">
            <HStack spacing="40px" alignItems="start">
              <VStack spacing="24px">
                <VStack>
                  <FormFieldInput
                    id="productName"
                    rightAddon="g"
                    fieldWidth="fit-content"
                    inputWidth="120px"
                    labelWidth="80px"
                    type="number"
                  >
                    Fats
                  </FormFieldInput>
                  <FormFieldInput
                    id="productName"
                    rightAddon="g"
                    fieldWidth="fit-content"
                    inputWidth="120px"
                    labelWidth="80px"
                    tooltip="Saturated Fatty Acids"
                    paddingLeft="16px"
                    type="number"
                  >
                    SFA
                  </FormFieldInput>
                  <FormFieldInput
                    id="productName"
                    rightAddon="g"
                    fieldWidth="fit-content"
                    inputWidth="120px"
                    labelWidth="80px"
                    tooltip="Monounsaturated Fatty Acids"
                    paddingLeft="16px"
                    type="number"
                  >
                    MUFA
                  </FormFieldInput>
                  <FormFieldInput
                    id="productName"
                    rightAddon="g"
                    fieldWidth="fit-content"
                    inputWidth="120px"
                    labelWidth="80px"
                    tooltip="Polyunsaturated Fatty Acids"
                    paddingLeft="16px"
                    type="number"
                  >
                    PUFA
                  </FormFieldInput>
                </VStack>
                <FormFieldInput
                  id="productName"
                  rightAddon="g"
                  fieldWidth="fit-content"
                  inputWidth="120px"
                  labelWidth="80px"
                  type="number"
                >
                  Proteins
                </FormFieldInput>
              </VStack>
              <VStack spacing="24px">
                <VStack>
                  <FormFieldInput
                    id="productName"
                    rightAddon="g"
                    fieldWidth="fit-content"
                    inputWidth="120px"
                    labelWidth="80px"
                    type="number"
                  >
                    Carbs
                  </FormFieldInput>
                  <FormFieldInput
                    id="productName"
                    rightAddon="g"
                    fieldWidth="fit-content"
                    inputWidth="120px"
                    labelWidth="80px"
                    paddingLeft="16px"
                    type="number"
                  >
                    Sugar
                  </FormFieldInput>
                  <FormFieldInput
                    id="productName"
                    rightAddon="g"
                    fieldWidth="fit-content"
                    inputWidth="120px"
                    labelWidth="80px"
                    paddingLeft="16px"
                    type="number"
                  >
                    Fiber
                  </FormFieldInput>
                </VStack>

                <FormFieldInput
                  id="productName"
                  rightAddon="g"
                  fieldWidth="fit-content"
                  inputWidth="120px"
                  labelWidth="80px"
                  type="number"
                >
                  Salt
                </FormFieldInput>
              </VStack>
            </HStack>
          </VStack>
        </Container>
      </FormControl>
    </>
  );
};
