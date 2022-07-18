import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
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
      <FormControl
        w="container.md"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <MainHeading>Product Details</MainHeading>
        <HStack marginTop="24px" alignItems={"start"} justifyContent="start">
          <VStack w="60%" px="16px" spacing="24px">
            <HStack w="100%" spacing="24px" justifyContent={"space-between"}>
              <FormLabel htmlFor="ProductName" whiteSpace={"nowrap"}>
                Product Name
              </FormLabel>
              <Input w="25ch" id="ProductName" type="text" />
            </HStack>
            <HStack w="100%" spacing="24px" justifyContent={"space-between"}>
              <FormLabel htmlFor="BrandName" whiteSpace={"nowrap"}>
                Brand Name
              </FormLabel>
              <Input id="BrandName" w="25ch" />
            </HStack>
            <HStack w="100%" spacing="24px" justifyContent={"space-between"}>
              <FormLabel htmlFor="PackingWeight" whiteSpace={"nowrap"}>
                Packing Weight
              </FormLabel>
              <InputGroup w="25ch">
                <Input id="PackingWeight" w="25ch" type="number" />
                <InputRightAddon>grams</InputRightAddon>
              </InputGroup>
            </HStack>
            <VStack w="100%" alignItems={"end"}>
              <HStack w="100%" spacing="24px" justifyContent={"space-between"}>
                <FormLabel htmlFor="VendorPrice" whiteSpace={"nowrap"}>
                  Vendor {"&"} Price
                </FormLabel>
                <HStack w="25ch">
                  <Input id="VendorName" />
                  <InputGroup w="10ch">
                    <Input px="1" type={"number"} w="6ch" id="VendorPrice" />
                    <InputRightAddon p="3">$</InputRightAddon>
                  </InputGroup>
                </HStack>
              </HStack>
            </VStack>
            <VStack w="100%" alignItems={"end"}>
              <HStack w="100%" spacing="24px" justifyContent={"space-between"}>
                <FormLabel htmlFor="VendorPrice" whiteSpace={"nowrap"}>
                  Food Additives
                </FormLabel>
                <Select id="BrandName" w="25ch" />
              </HStack>
            </VStack>
            <VStack w="100%" alignItems={"end"}>
              <HStack w="100%" spacing="24px" justifyContent={"space-between"}>
                <FormLabel htmlFor="VendorPrice" whiteSpace={"nowrap"}>
                  Alergens
                </FormLabel>
                <Select id="BrandName" w="25ch" />
              </HStack>
            </VStack>
          </VStack>

          <VStack w="40%">
            <Box h="256px" w="256px" bg="red"></Box>
          </VStack>
        </HStack>
        <VStack marginTop="32px" alignContent="center" w="container.sm">
          <MainHeading>Product Details</MainHeading>
          <Box h="256px" w="256px" bg="red"></Box>
        </VStack>
      </FormControl>
    </>
  );
};

type FormFieldProps = {
  id: string;
};

const FormInput = () => {};
