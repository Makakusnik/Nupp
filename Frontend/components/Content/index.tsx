import { Menu, MenuButton, Button, MenuList, Flex, Box, IconButton, VisuallyHidden } from "@chakra-ui/react";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { MdExpandMore, MdClose } from "react-icons/md";
import { MarkType, MarkData } from "../../testdata/data";
import { ListItemProps } from "../../types/Types";
import { CustomIcon, getIcon } from "../Custom Icons/Icons";
import { MarkMenuItem } from "../Input/Form/MenuItem";
import { IconTooltip } from "../Misc/Tooltip";
export { MealForm } from "./Pages/products/add/meal";
export { ProductForm } from "./Pages/products/add/product";

// Here are some utilities shared between subdirectories of this directory.

export function handleRemoveFactoryFunction<T extends { id: string }>(array: T[], setter: (arg: T[]) => void) {
  return (id: string) => {
    setter(array.filter((item) => item.id !== id));
  };
}

export function handleSelectFactoryFunction<T extends { id: string }>(
  data: T[],
  array: T[],
  setter: (arg: T[]) => void
) {
  return (e: SyntheticEvent) => {
    e.preventDefault();
    if (e.type === "click") {
      const event = e as SyntheticEvent<HTMLButtonElement>;
      event.preventDefault();
      const value = event.currentTarget.dataset.id;
      if (array!.some((item) => item.id === value)) {
        return;
      }
      setter!([{ ...data.filter((item) => item.id === value)[0] }, ...array]);
    } else {
      const event = e as SyntheticEvent<HTMLSelectElement>;
      const value = event.currentTarget.options[event.currentTarget.selectedIndex].dataset.id;
      if (event.currentTarget.selectedIndex === 0 || (array && array.some((item) => item.id === value))) {
        event.currentTarget.selectedIndex = 0;
        return;
      }
      event.currentTarget.selectedIndex = 0;
      setter!([{ ...data.filter((item) => item.id === value)[0] }, ...array]);
    }
  };
}

/* 
  Shared Components
*/

type MarkComponentProps = {
  values: MarkType[];
  setter: ((values: MarkType[]) => void) | null;
};

export const MarksComponent = ({ values, setter }: MarkComponentProps) => {
  const handleSelect = handleSelectFactoryFunction(MarkData, values, setter!);
  const handleRemove = handleRemoveFactoryFunction(values, setter!);

  return (
    <Menu>
      <MenuButton w="100%" as={Button} rightIcon={<MdExpandMore size="20px" />}>
        Pick Marks
      </MenuButton>
      <MenuList mt="0" as="ul" zIndex="2" minW="100%" maxH="360px" overflowY="auto">
        {MarkData.map((item) => {
          return (
            <MarkMenuItem
              key={item.id}
              onClick={handleSelect}
              data-id={item.id}
              iconName={item.iconName}
              iconType={item.iconType}
            >
              {item.name}
            </MarkMenuItem>
          );
        })}
      </MenuList>
      {values.length >= 1 && (
        <Flex flexWrap="wrap" maxW="30ch" rowGap="8px" w="100%">
          {values.map((item) => (
            <MarkItem
              name={item.name}
              iconName={item.iconName as CustomIcon}
              type={item.iconType}
              id={item.id}
              key={item.id}
              onClick={() => handleRemove(item.id)}
            ></MarkItem>
          ))}
        </Flex>
      )}
    </Menu>
  );
};

type MarkItemProps = {
  type: "healthy" | "warning" | "dangerous";
  iconName: CustomIcon;
  id: string;
} & ListItemProps;

const MarkItem = ({ type, name, iconName, onClick }: MarkItemProps) => {
  const [color, setColor] = useState("gray.900");
  const [bgColor, setBgColor] = useState("gray.900");
  const [showButton, setShowButton] = useState<boolean>(false);

  const ref = useRef<HTMLButtonElement>(null);
  const handleMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };

  useEffect(() => {
    switch (type) {
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
  }, [type]);
  return (
    <Box
      flexBasis="32px"
      w="32px"
      h="32px"
      bg={bgColor}
      borderRadius="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={() => onClick()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      mr="12px"
      cursor="pointer"
      position="relative"
    >
      <IconTooltip color={color} w="24px" h="24px" as={getIcon(iconName)}>
        {name}
      </IconTooltip>
      <IconButton
        ref={ref}
        hidden={!showButton}
        position="absolute"
        zIndex="1"
        minW="20px"
        maxW="20px"
        minH="20px"
        maxH="20px"
        tabIndex={-1}
        aria-label="Remove Mark"
        pointerEvents={"none"}
        icon={<MdClose color={"white"} size="16px" />}
        bg="red.600"
        _active={{ bg: "blackAlpha.700" }}
        borderRadius="full"
        size="xs"
      />
      <VisuallyHidden>
        <IconButton
          aria-label="Remove Mark"
          onFocus={() => {
            setShowButton(true);
            ref.current?.focus();
          }}
          onBlur={() => {
            setShowButton(false);
          }}
          tabIndex={0}
          icon={<MdClose />}
        />
      </VisuallyHidden>
    </Box>
  );
};
