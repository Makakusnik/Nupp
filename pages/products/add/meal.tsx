import { Box, Container } from "@chakra-ui/react";
import * as Header from "../../../components/Content/Header";
import { GiMeal } from "react-icons/gi";
import Head from "next/head";
import { NextPage } from "next";
import { MealFormContextProvider } from "../../../components/Contexts/MealFormContext";
import { MealForm } from "../../../components/Content";
import { PageContainer } from "../../../components/Misc/Layout";

const AddMeal: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Nupp | Add Meal Form</title>
        <meta name="description" content="You can create and add meal to our database." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container px="32px" w="container.lg" minW="container.lg" maxW="container.lg">
        <Header.SmallHeader h={{ base: "300px" }} isTransparent={true}>
          <Header.MainSection>
            <Header.Title>Meal</Header.Title>
          </Header.MainSection>
          <Header.ImageSection placeContent="center center">
            <Box as={GiMeal} size="128px"></Box>
          </Header.ImageSection>
        </Header.SmallHeader>
      </Container>
      <Container maxW="container.md">
        <MealFormContextProvider>
          <MealForm />
        </MealFormContextProvider>
      </Container>
    </PageContainer>
  );
};
export default AddMeal;
