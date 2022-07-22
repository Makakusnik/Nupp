import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import * as Header from "../../components/Content/Header";
import { GiMeal } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { createContext, useEffect, useState } from "react";
import { BigButton } from "../../components/Input";
import { MainHeading } from "../../components/Input/Form/Header";
import { FormFieldInput } from "../../components/Input/Form/FieldInput";
import { ProductDetailsSection } from "../../components/Content/";
import * as FormElements from "../../components/Input/Form/FormElements";
import { CustomTooltip } from "../../components/Misc/Tooltip";
import { MacroNutrientsSection } from "../../components/Content/Pages/products/add";
import { MdCheck } from "react-icons/md";

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
        <meta name="description" content="You can create and add product to our database." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isChoosingState && <Intro mealButtonHandler={handleMealButton} productButtonHandler={handleProductButton} />}
      {!isChoosingState && (
        <Container px="32px" maxW="container.lg" display="flex" flexDirection={"column"} alignItems={"center"}>
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
            You can add your meal or product to our database! Don't worry if you don't have all informations, we will
            supply them later.
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
            You can add your meal or product to our database! Don't worry if you don't have all informations, we will
            supply them later.
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
          <ProductDetailsSection />
          <VStack w="30%">
            <Box h="200px" w="200px" bg="red"></Box>
          </VStack>
        </HStack>
        <Container marginTop="64px" alignSelf={"center"} minW="container.xs">
          <MainHeading>Macro Nutrients</MainHeading>
          <VStack px="16px" marginTop="24px">
            <HStack spacing="40px" alignItems="start">
              <MacroNutrientsSection />
            </HStack>
          </VStack>
        </Container>
        <ButtonGroup>
          <Button colorScheme={"green"} w="16ch" alignSelf="end" rightIcon={<MdCheck size="24px" />}>
            Add Product
          </Button>
        </ButtonGroup>
      </FormControl>
    </>
  );
};
