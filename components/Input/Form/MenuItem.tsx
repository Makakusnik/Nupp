import { MenuItem, Box, Icon } from "@chakra-ui/react";
import { SyntheticEvent, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { CustomIcon, getIcon, VitaminIcon } from "../../Custom Icons/Icons";

type MarkMenuItemProps = {
  children: string;
  iconType: "healthy" | "warning" | "dangerous";
  iconName: CustomIcon;
  name: string;
  id: string;
  onClick: (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string,
    name: string,
    iconName: CustomIcon,
    iconType: "healthy" | "warning" | "dangerous"
  ) => void;
};

export const MarkMenuItem = ({ children, iconType, iconName, id, name, onClick }: MarkMenuItemProps) => {
  const [color, setColor] = useState("gray.900");
  const [bgColor, setBgColor] = useState("gray.900");

  useEffect(() => {
    switch (iconType) {
      case "dangerous":
        setColor("red.700");
        setBgColor("red.300");
        break;
      case "healthy":
        setColor("green.700");
        setBgColor("green.300");
        break;
      case "warning":
        setColor("yellow.700");
        setBgColor("yellow.300");
        break;
    }
  }, [iconType]);
  return (
    <MenuItem minW="30ch" minH="48px" onClick={(e) => onClick(e, id, name, iconName, iconType)}>
      <Box
        w="32px"
        h="32px"
        bg={bgColor}
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr="12px"
      >
        <Icon color={color} w="24px" h="24px" as={getIcon(iconName)} />
      </Box>
      <span>{children}</span>
    </MenuItem>
  );
};
