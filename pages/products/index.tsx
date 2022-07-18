import { Box, Button, ButtonGroup, Container, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import CategoriesContainer from "../../components/Content/Categories";
import Header, {
  HeaderHeading,
  HeaderImageSection,
  HeaderMainSection,
  HeaderText,
} from "../../components/Content/Header";
import { DatabaseTable } from "../../components/Database/DatabaseTable";
import { FilterBox } from "../../components/Database/Filters";
import { BlobAnimatedJsx } from "../../components/Misc/BlobVector";
import { dataBlue } from "../../testdata/blobData";

const Products: NextPage = () => {
  return (
    <Container p="0" paddingTop={"88px"} w="100%" minW="100%">
      <Head>
        <title>Nupp | Products</title>
        <meta
          name="description"
          content="Rich database with many products from Slovak groceries with detailed macro nutrients and costs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <HeaderMainSection>
          <HeaderHeading>Products</HeaderHeading>
          <HeaderText>
            Here your good eating habits begin. Choose from variety of products
            based on your preferences and our tips.
          </HeaderText>
          <ButtonGroup>
            <Button variant="CTA">Find recommended products</Button>
            <Button as='a' variant="ghost" href='/products/add'>Add your own products</Button>
          </ButtonGroup>
        </HeaderMainSection>
        <HeaderImageSection>
          <BlobAnimatedJsx
            id="svg1"
            left="25%"
            top="25%"
            data={dataBlue}
          ></BlobAnimatedJsx>
        </HeaderImageSection>
      </Header>
      <CategoriesContainer />
      <Container marginTop={"80px"} px="32px" maxW="container.lg">
        <Heading textAlign={"center"} as="h2" size="lg">
          Database search
        </Heading>
        <FilterBox/>
        <DatabaseTable/>
      </Container>
    </Container>
  );
};

export default Products;
