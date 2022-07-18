import { Box, Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface BigButtonProps {
  icon: IconType;
  children: string;
  color: string;
  clickHandler: () => void;
}

export const BigButton = ({
  icon,
  children,
  color,
  clickHandler,
}: BigButtonProps) => {
  const background = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  const hoverColor = useColorModeValue("blackAlpha.50", "whiteAlpha.200");
  return (
    <VStack
      as="button"
      spacing="16px"
      transition="background 0.2s ease-in-out"
      h="232px"
      borderRadius="lg"
      w="232px"
      bg={background}
      justifyContent="center"
      _hover={{ backgroundColor: hoverColor }}
      onClick={clickHandler}
    >
      <Box as={icon} color={color} size="128px"></Box>
      <Heading as="h2">{children}</Heading>
    </VStack>
  );
};
