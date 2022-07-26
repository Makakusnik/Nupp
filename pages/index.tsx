import { Button, Container, Heading } from "@chakra-ui/react";
import * as Header from "../components/Content/Header";
import type { NextPage } from "next";
import Head from "next/head";
import { DatabaseTable } from "../components/Database/DatabaseTable";
import { FilterBox } from "../components/Database/Filters";
import { BlobAnimatedJsx } from "../components/Misc/BlobVector";
import { dataBlue, dataPurp, dataRed } from "../testdata/blobData";
import { PageContainer } from "../components/Misc/Layout";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Nupp | Diet Tracker</title>
        <meta
          name="description"
          content="Nupp is application made for tracking macro nutrients and costs of diet plans, listing various products with detailed macronutrients and creating diet plans, recipes and many more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header.Component h={{ "2xl": 600 }}>
        <Header.MainSection>
          <Header.Title>
            NUTRITIOUS
            <br></br>
            APPLICATION
          </Header.Title>
          <Header.Description>
            Looking for easy yet effective way to track your costs, macronutrients and eating habits? Nupp will save
            you!
          </Header.Description>
          <Button variant="CTA">Find Diet Plan!</Button>
        </Header.MainSection>
        <Header.ImageSection>
          <BlobAnimatedJsx id="svg1" left="155px" top="50%" data={dataBlue}></BlobAnimatedJsx>
          <BlobAnimatedJsx id="svg2" left="26px" top="30%" data={dataPurp}></BlobAnimatedJsx>
          <BlobAnimatedJsx id="svg3" left="130px" top="20%" data={dataRed}></BlobAnimatedJsx>
        </Header.ImageSection>
      </Header.Component>
      <Container marginTop={"80px"} px="32px" maxW="container.lg">
        <Heading textAlign={"center"} as="h2" size="lg">
          Database search
        </Heading>
        <FilterBox></FilterBox>
        <DatabaseTable></DatabaseTable>
      </Container>
    </PageContainer>
  );
};

export default Home;
