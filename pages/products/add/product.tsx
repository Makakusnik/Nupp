import { Box, Container } from "@chakra-ui/react";
import { FaAppleAlt } from "react-icons/fa";

import * as Header from "../../../components/Content/Header";
import { ProductFormProvider } from "../../../components/Contexts/ProductFormContext";
import { ProductForm } from "../../../components/Content";

export const AddProduct = () => {
  return (
    <>
      <Header.SmallHeader h={{ base: "300px" }} isTransparent={true}>
        <Header.MainSection>
          <Header.Title>Product</Header.Title>
        </Header.MainSection>
        <Header.ImageSection placeContent="center center">
          <Box as={FaAppleAlt} size="128px"></Box>
        </Header.ImageSection>
      </Header.SmallHeader>
      <Container maxW="container.md">
        <ProductFormProvider>
          <ProductForm />
        </ProductFormProvider>
      </Container>
    </>
  );
};

export default AddProduct;
