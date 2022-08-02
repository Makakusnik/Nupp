import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { SyntheticEvent } from "react";
import { MdAdd, MdClose } from "react-icons/md";

export type ButtonProps = {
  onClick: () => void;
  isDisabled?: boolean;
  ariaLabel: string;
};

export const RemoveButton = ({ isDisabled, onClick, ariaLabel }: ButtonProps) => {
  const activeBackgroundColor = useColorModeValue("red.600", "red.500");
  const hoverBackgroundColor = useColorModeValue("red.500", "red.400");
  const hoverIconColor = useColorModeValue("red.100", "red.900");
  const backgroundColor = useColorModeValue("red.400", "red.300");
  const iconColor = useColorModeValue("red.100", "red.900");

  return (
    <IconButton
      _hover={{
        backgroundColor: hoverBackgroundColor,
        color: hoverIconColor,
      }}
      _active={{
        backgroundColor: activeBackgroundColor,
      }}
      bg={backgroundColor}
      isDisabled={isDisabled}
      onClick={() => onClick()}
      aria-label={ariaLabel}
      size="xs"
      color={iconColor}
      icon={<MdClose size="24px" />}
    ></IconButton>
  );
};

export const AddButton = ({ isDisabled, onClick, ariaLabel }: ButtonProps) => {
  const activeBackgroundColor = useColorModeValue("green.700", "green.500");
  const hoverBackgroundColor = useColorModeValue("green.600", "green.400");
  const hoverIconColor = useColorModeValue("green.200", "green.900");
  const backgroundColor = useColorModeValue("green.500", "green.300");
  const iconColor = useColorModeValue("green.200", "green.900");

  return (
    <IconButton
      _hover={{
        backgroundColor: hoverBackgroundColor,
        color: hoverIconColor,
      }}
      _active={{
        backgroundColor: activeBackgroundColor,
      }}
      bg={backgroundColor}
      color={iconColor}
      isDisabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      icon={<MdAdd size="24px" />}
      size="xs"
    />
  );
};
