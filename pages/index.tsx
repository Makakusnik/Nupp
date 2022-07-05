import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { NavigationBar } from "../components/navigation/NavigationBar";

const Home: NextPage = () => {
  return (
    <Container w="100%" maxW="100%">
      <Head>
        <title>Nupp | Diet Tracker</title>
        <meta
          name="description"
          content="Nupp is application made for tracking macro nutrients and costs of diet plans, listing various products with detailed macronutrients and creating diet plans, recipes and many more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar></NavigationBar>
    </Container>
  );
};

export default Home;
