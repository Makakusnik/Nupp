import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { DatabaseTable } from "../components/Database/DatabaseTable";
import { FilterBox } from "../components/Database/Filters";
import { BlobAnimatedJsx } from "../components/misc/BlobVectorJsx";
import { dataBlue, dataPurp, dataRed } from "../testdata/blobData";

const Home: NextPage = () => {
  const headerBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Container p="0" paddingTop={"88px"} w="100%" minW="100%">
      <Head>
        <title>Nupp | Diet Tracker</title>
        <meta
          name="description"
          content="Nupp is application made for tracking macro nutrients and costs of diet plans, listing various products with detailed macronutrients and creating diet plans, recipes and many more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        p="0"
        minW="100%"
        h={{ "2xl": "600px" }}
        bg={headerBg}
        alignItems="center"
        display="flex"
      >
        <Container display="flex" alignContent="center" maxW="container.lg">
          <HStack>
            <VStack alignItems="start" spacing="48px" p={"16"} h="100%" w="50%">
              <Heading as="h1" size={"xl"} autoCapitalize="">
                NUTRITIOUS
                <br></br>
                APPLICATION
              </Heading>
              <Text>
                Looking for easy yet effective way to track your costs,
                macronutrients and eating habits? Nupp will save you!
              </Text>
              <Button variant="CTA">Create Diet Plan!</Button>
            </VStack>
            <VStack p={"16"} h="100%" w="50%">
              <Center position="relative">
                <BlobAnimatedJsx
                  id="svg1"
                  left="155px"
                  top="120px"
                  data={dataBlue}
                ></BlobAnimatedJsx>
                <BlobAnimatedJsx
                  id="svg2"
                  left="26px"
                  top="35px"
                  data={dataPurp}
                ></BlobAnimatedJsx>
                <BlobAnimatedJsx
                  id="svg3"
                  left="130px"
                  top="-25px"
                  data={dataRed}
                ></BlobAnimatedJsx>
              </Center>
            </VStack>
          </HStack>
        </Container>
      </Container>
      <Container marginTop={"80px"} px="32px" maxW="container.lg">
        <Heading textAlign={"center"} as="h2" size="lg">
          Database search
        </Heading>
        <FilterBox></FilterBox>
        <DatabaseTable></DatabaseTable>
      </Container>
    </Container>
  );
};

export default Home;
