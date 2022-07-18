import { Divider, Heading, ResponsiveValue, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";

type HeadingProps = {
  children: string;
};

export const MainHeading = ({ children }: HeadingProps) => {
  return (
    <Stack w="100%">
      <Heading as="h2">{children}</Heading>
      <Divider borderBottomWidth={"2px"}></Divider>
    </Stack>
  );
};
