import { Box, Container } from "@chakra-ui/react";
import { FaAppleAlt } from "react-icons/fa";

import * as Header from "../../../components/Content/Header";
import { ProductFormProvider } from "../../../components/Contexts/ProductFormContext";
import { ProductForm } from "../../../components/Content";
import Head from "next/head";
import { PageContainer } from "../../../components/Misc/Layout";

export const AddProduct = () => {
  return (
    <PageContainer>
      <Head>
        <title>Nupp | Add Product Form</title>
        <meta name="description" content="You can create and add product to our database." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container px="32px" w="container.lg" minW="container.lg" maxW="container.lg">
        <Header.SmallHeader h={{ base: "300px" }} isTransparent={true}>
          <Header.MainSection>
            <Header.Title>Product</Header.Title>
          </Header.MainSection>
          <Header.ImageSection placeContent="center center">
            <Box as={FaAppleAlt} size="128px"></Box>
          </Header.ImageSection>
        </Header.SmallHeader>
      </Container>
      <Container maxW="container.md">
        <ProductFormProvider>
          <ProductForm />
        </ProductFormProvider>
      </Container>
    </PageContainer>
  );
};

export default AddProduct;
