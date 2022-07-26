import { HStack, Stack, VStack } from "@chakra-ui/react";
import { ChildrenOnlyProps } from "../../../types/Types";

/* 
  How to structure Form components:
  <SelectInput.Wrapper>
      <SelectInput.LabelSection>
        <FormLabel>
         Label Name
        </FormLabel>
      </SelectInput.LabelSection>
      <SelectInput.MainSection>
        <SelectInput.InputSection> ** in case of more input elements
          --Here goes any input--
        </SelectInput.InputSection>
        <SelectInput.ContainerSection>
          --List of components--
        </SelectInput.ContainerSection>
      </SelectInput.MainSection>
    </SelectInput.Wrapper>
*/

export const Wrapper = ({ children }: ChildrenOnlyProps) => {
  return (
    <HStack w="100%" alignItems={"start"} justifyContent="space-between">
      {children}
    </HStack>
  );
};

export const LabelSection = ({ children }: ChildrenOnlyProps) => {
  return (
    <Stack paddingTop="8px" w="fit-content" display="flex" flexDirection="row" alignContent="start" spacing="0">
      {children}
    </Stack>
  );
};

type MainSectionPros = {
  width?: string;
};

export const MainSection = ({ children, width = "30ch" }: ChildrenOnlyProps & MainSectionPros) => {
  return (
    <VStack maxW={width} minW={width} justifyContent={"space-between"}>
      {children}
    </VStack>
  );
};

export const SmallMainSection = ({ children }: ChildrenOnlyProps) => {
  return (
    <VStack maxW="12ch" minW="12ch" justifyContent={"space-between"}>
      {children}
    </VStack>
  );
};

export const InputSection = ({ children }: ChildrenOnlyProps) => {
  return <HStack maxW="100%">{children}</HStack>;
};

/* If there is not children, component will not be rendered. */
export const ContainerSection = ({ children }: ChildrenOnlyProps) => {
  return (
    <>
      {Array.isArray(children) && children.length > 0 ? (
        <VStack as="ul" w="100%" spacing="8px" alignItems={"start"}>
          {children}
        </VStack>
      ) : (
        ""
      )}
    </>
  );
};

export const SelectedItem = ({ children }: ChildrenOnlyProps) => {
  return (
    <HStack as="li" minW="100%" w="100%" px="8px" justifyContent={"space-between"}>
      {children}
    </HStack>
  );
};
