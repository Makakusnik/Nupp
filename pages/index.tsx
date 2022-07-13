import {
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Header, {
  HeaderHeading,
  HeaderImageSection,
  HeaderMainSection,
  HeaderText,
} from "../components/Content/Header";
import type { NextPage } from "next";
import Head from "next/head";
import { DatabaseTable } from "../components/Database/DatabaseTable";
import { FilterBox } from "../components/Database/Filters";
import { BlobAnimatedJsx } from "../components/Misc/BlobVectorJsx";
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
      <Header h={{ "2xl": 700 }}>
        <HeaderMainSection>
          <HeaderHeading>
            NUTRITIOUS
            <br></br>
            APPLICATION
          </HeaderHeading>
          <HeaderText>
            Looking for easy yet effective way to track your costs,
            macronutrients and eating habits? Nupp will save you!
          </HeaderText>
          <Button variant="CTA">Find Diet Plan!</Button>
        </HeaderMainSection>
        <HeaderImageSection>
          <BlobAnimatedJsx
            id="svg1"
            left="155px"
            top="50%"
            data={dataBlue}
          ></BlobAnimatedJsx>
          <BlobAnimatedJsx
            id="svg2"
            left="26px"
            top="30%"
            data={dataPurp}
          ></BlobAnimatedJsx>
          <BlobAnimatedJsx
            id="svg3"
            left="130px"
            top="20%"
            data={dataRed}
          ></BlobAnimatedJsx>
        </HeaderImageSection>
      </Header>
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
