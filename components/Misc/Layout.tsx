import { Container } from "@chakra-ui/react";
import { ChildrenOnlyProps } from "../../types/Types";

export const PageContainer = ({ children }: ChildrenOnlyProps) => {
  return (
    <Container p="0" paddingTop={"88px"} w="100%" minW="100%">
      {children}
    </Container>
  );
};
