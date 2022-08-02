import { HStack, Stack, StackDirection, Text } from "@chakra-ui/react";
import { ChildrenOnlyProps } from "../../../types/Types";

/*
  Usage of this component:

  In case of simple use:
  <MainContainer>
      <Title>Est. Cost:</Title>
      <Value>150 $</Value>
  </MainContainer>

  In case of custom Value component:
  <MainContainer>
      <Title>Est. Cost:</Title>
      <Wrapper>-- Here goes any component --</Wrapper>
  </MainContainer>
*/

type StackProps = {
  direction?: StackDirection;
  maxW?: string;
  maxH?: string;
  alignItems?: string;
  spacing?: string;
} & ChildrenOnlyProps;

export const MainContainer = ({ children, direction = "row", alignItems }: StackProps) => {
  return (
    <Stack
      w="100%"
      spacing={direction === "column" ? "4px" : ""}
      direction={direction}
      justifyContent={direction === "row" ? "space-between" : ""}
      alignItems={alignItems}
    >
      {children}
    </Stack>
  );
};

type TitleProps = {
  subLevel?: string;
} & ChildrenOnlyProps;

export const Title = ({ children, subLevel }: TitleProps) => {
  return (
    <Text fontWeight="bold" paddingLeft={subLevel} w="fit-content">
      {children}
    </Text>
  );
};

export const Wrapper = ({ children, direction = "column", maxW, maxH, spacing = "8px" }: StackProps) => {
  return (
    <Stack direction={direction} maxW={maxW} maxH={maxH} spacing={spacing} overflowY="auto">
      {children}
    </Stack>
  );
};

export const Value = ({ children }: ChildrenOnlyProps) => {
  return <Text color="gray.600">{children}</Text>;
};
