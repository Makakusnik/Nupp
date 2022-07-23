import { Box, Container } from "@chakra-ui/react";
import * as Header from "../../../components/Content/Header";
import { FaAppleAlt } from "react-icons/fa";
import Head from "next/head";
import { NextPage } from "next";

const AddMeal: NextPage = () => {
  return (
    <Container p="0" paddingTop={"88px"} w="100%" minW="100%">
      <Head>
        <title>Nupp | Add Item Form</title>
        <meta name="description" content="You can create and add product to our database." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container px="32px" w="container.lg" minW="container.lg" maxW="container.lg">
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
      </Container>
    </Container>
  );
};
export default AddMeal;
