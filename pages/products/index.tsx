import { Button, ButtonGroup, Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Header, {
  HeaderHeading,
  HeaderImageSection,
  HeaderMainSection,
  HeaderText,
} from "../../components/Content/Header";
import { BlobAnimatedJsx } from "../../components/Misc/BlobVectorJsx";
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
            <Button variant="ghost">Add your own products</Button>
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
    </Container>
  );
};

export default Products;
