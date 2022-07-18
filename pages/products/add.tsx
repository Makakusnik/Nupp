import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import CategoriesContainer from "../../components/Content/Categories";
import Header, {
  HeaderHeading,
  HeaderImageSection,
  HeaderMainSection,
  HeaderText,
  SmallHeader,
} from "../../components/Content/Header";
import { GiMeal } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { DatabaseTable } from "../../components/Database/DatabaseTable";
import { FilterBox } from "../../components/Database/Filters";
import { BlobAnimatedJsx } from "../../components/Misc/BlobVector";
import { dataBlue } from "../../testdata/blobData";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import { BigButton } from "../../components/Input";

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
      {isMealForm && !isChoosingState && <MealForm />}
      {isProductForm && !isChoosingState && <ProductForm />}
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
      <SmallHeader h={{ base: "300px" }} isTransparent={true}>
        <HeaderMainSection>
          <HeaderHeading>Add Product or Meal</HeaderHeading>
          <HeaderText>
            You can add your meal or product to our database! Don't worry if you
            don't have all informations, we will supply them later.
          </HeaderText>
        </HeaderMainSection>
      </SmallHeader>
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
      <SmallHeader h={{ base: "300px" }} isTransparent={true}>
        <HeaderMainSection>
          <HeaderHeading>Add Product or Meal</HeaderHeading>
          <HeaderText>
            You can add your meal or product to our database! Don't worry if you
            don't have all informations, we will supply them later.
          </HeaderText>
        </HeaderMainSection>
        <HeaderImageSection>
          <Box as={FaAppleAlt} size="128px"></Box>
        </HeaderImageSection>
      </SmallHeader>
    </>
  );
};

const ProductForm = () => {
  return (
    <>
      <SmallHeader h={{ base: "300px" }} isTransparent={true}>
        <HeaderMainSection>
          <HeaderHeading>Product</HeaderHeading>
        </HeaderMainSection>
        <HeaderImageSection>
          <Box as={FaAppleAlt} size="128px"></Box>
        </HeaderImageSection>
      </SmallHeader>
    </>
  );
};
