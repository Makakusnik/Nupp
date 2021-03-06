import { Container, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import * as Header from "../../../components/Content/Header";
import { GiMeal } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { BigButton } from "../../../components/Input";
import { PageContainer } from "../../../components/Misc/Layout";
import { VitaminIcon } from "../../../components/Custom Icons/Icons";

const ProductsAdd: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Nupp | Add Product or Meal</title>
        <meta name="description" content="You can create and add product or meal to our database." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header.SmallHeader h={{ base: "500px" }} isTransparent={true}>
        <Header.MainSection>
          <Header.Title>Add Product or Meal</Header.Title>
          <Header.Description>
            You can add your meal or product to our database! Don&apos;t worry if you don&apos;t have all informations,
            we will supply them later.
          </Header.Description>
        </Header.MainSection>
      </Header.SmallHeader>
      <Container maxW="container.lg" marginTop={"40px"}>
        <HStack margin="auto" spacing="40px" justifyContent={"center"}>
          <BigButton href="/products/add/meal" icon={GiMeal} color={useColorModeValue("orange.400", "orange.200")}>
            Meal
          </BigButton>
          <BigButton href="/products/add/product" icon={FaAppleAlt} color={useColorModeValue("green.400", "green.200")}>
            Product
          </BigButton>
        </HStack>
      </Container>
    </PageContainer>
  );
};

export default ProductsAdd;
