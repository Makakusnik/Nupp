import { Divider, Heading, ResponsiveValue, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";

type HeadingProps = {
  children: string;
  size?: string;
};

export const MainHeading = ({ children, size }: HeadingProps) => {
  return (
    <Stack w="100%">
      <Heading size={size || "lg"} as="h2">
        {children}
      </Heading>
      <Divider borderBottomWidth={"2px"}></Divider>
    </Stack>
  );
};
