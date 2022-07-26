import { Button, ButtonGroup, Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CategoriesContainer from "../../components/Content/Categories";
import * as Header from "../../components/Content/Header";
import { DatabaseTable } from "../../components/Database/DatabaseTable";
import { FilterBox } from "../../components/Database/Filters";
import { BlobAnimatedJsx } from "../../components/Misc/BlobVector";
import { PageContainer } from "../../components/Misc/Layout";
import { dataBlue } from "../../testdata/blobData";

const Products: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Nupp | Products</title>
        <meta
          name="description"
          content="Rich database with many products from Slovak groceries with detailed macro nutrients and costs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header.Component>
        <Header.MainSection>
          <Header.Title>Products</Header.Title>
          <Header.Description>
            Here your good eating habits begin. Choose from variety of products based on your preferences and our tips.
          </Header.Description>
          <ButtonGroup>
            <Button variant="CTA">Find recommended products</Button>
            <Link href="/products/add">
              <Button variant="ghost">Add your own products</Button>
            </Link>
          </ButtonGroup>
        </Header.MainSection>
        <Header.ImageSection>
          <BlobAnimatedJsx id="svg1" left="25%" top="25%" data={dataBlue}></BlobAnimatedJsx>
        </Header.ImageSection>
      </Header.Component>
      <CategoriesContainer />
      <Container marginTop={"80px"} px="32px" maxW="container.lg">
        <Heading textAlign={"center"} as="h2" size="lg">
          Database search
        </Heading>
        <FilterBox />
        <DatabaseTable />
      </Container>
    </PageContainer>
  );
};

export default Products;
