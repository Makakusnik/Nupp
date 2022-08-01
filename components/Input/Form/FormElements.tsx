import { FormControl, HStack, Stack, StackDirection, VStack } from "@chakra-ui/react";
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

type WrapperProps = {
  isRequired: boolean;
  direction?: StackDirection;
  placeContent?: string;
  placeItems?: string;
  isDisabled?: boolean;
} & ChildrenOnlyProps;

export const Wrapper = ({
  children,
  direction = "column",
  isRequired,
  placeContent = "start space-between",
  placeItems = "start start",
  isDisabled,
}: WrapperProps) => {
  return (
    <FormControl isRequired={isRequired} isDisabled={isDisabled}>
      <Stack w="100%" placeContent={placeContent} placeItems={placeItems} spacing="0" direction={direction}>
        {children}
      </Stack>
    </FormControl>
  );
};

export const LabelSection = ({ children }: ChildrenOnlyProps) => {
  return (
    <Stack w="fit-content" display="flex" flexDirection="row" alignContent="start" spacing="0">
      {children}
    </Stack>
  );
};

type MainSectionPros = {
  w?: string;
};

export const MainSection = ({ children, w = "30ch" }: ChildrenOnlyProps & MainSectionPros) => {
  return (
    <VStack maxW={w} minW={w}>
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

type ContainerProps = {
  maxW?: string;
  minW?: string;
  maxH?: string;
  minH?: string;
} & ChildrenOnlyProps;

/* If there is not children, component will not be rendered. */
export const ContainerSection = ({ children, maxW, minW, maxH, minH }: ContainerProps) => {
  return (
    <>
      {Array.isArray(children) && children.length > 0 ? (
        <VStack
          as="ul"
          maxW={maxW}
          minW={minW}
          maxH={maxH}
          minH={minH}
          overflowY="auto"
          w="100%"
          spacing="8px"
          py="4px"
          alignItems={"start"}
        >
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
