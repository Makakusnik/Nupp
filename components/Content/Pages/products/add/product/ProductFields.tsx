import {
  FormLabel,
  InputGroup,
  Input,
  InputRightAddon,
  Box,
  Text,
  Spacer,
  Menu,
  Button,
  MenuButton,
  MenuList,
  Icon,
  Flex,
  IconButton,
  VisuallyHidden,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useRef, SyntheticEvent, useEffect } from "react";
import { MdClose, MdExpandMore } from "react-icons/md";
import {
  foodAdditives,
  FoodAdditive,
  Alergen,
  Alergens as alergens,
  VendorData,
  MarkType,
} from "../../../../../../testdata/data";
import { Select } from "../../../../../Input";
import { CustomTooltip, IconTooltip } from "../../../../../Misc/Tooltip";
import * as FormElements from "../../../../../Input/Form/FormElements";
import { AddButton, RemoveButton } from "../../../../../Input/Buttons/ActionButtons";
import { ListItemProps } from "../../../../../../types/Types";
import { CustomIcon, getIcon } from "../../../../../Custom Icons/Icons";
import { MarkMenuItem } from "../../../../../Input/Form/MenuItem";
import { handleRemoveFactoryFunction } from "../../../..";

export type VendorPricePairType = {
  id: string;
  name: string;
  price: number;
};

type VendorPriceFieldProps = {
  setter: ((value: VendorPricePairType[]) => void) | null;
  values: VendorPricePairType[];
};

export const VendorAndPriceComponent = ({ setter, values }: VendorPriceFieldProps) => {
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  /* Checks if input from Vendor Select component and Price Input component is valid
      conditions Select: Select can't have value that's been already chosen OR can't be first value (place holder)
      conditions Input: Can't be NaN or 0.
      */
  const isValid = () => {
    if (inputRef.current) {
      inputRef.current.reportValidity();
    }
    if (
      (values && values.some((item) => item.name === selectRef.current?.value)) ||
      !selectRef.current?.value ||
      Number(inputRef.current?.value) === 0
    ) {
      setButtonDisabled(true);
      return false;
    }
    setButtonDisabled(false);
    return true;
  };

  const handleAdd = (e: SyntheticEvent) => {
    if (!isValid()) {
      setButtonDisabled(true);
      return;
    }
    if (inputRef.current) inputRef.current.value = Number(inputRef.current?.value).toFixed(2);
    setter &&
      values &&
      setter([
        {
          name: selectRef.current?.value || "",
          price: Number(inputRef.current?.value) || 0,
          id: VendorData.filter((item) => item.name === selectRef.current?.value)[0].id,
        },
        ...values,
      ]);
    if (selectRef.current) {
      selectRef.current.selectedIndex = 0;
    }
    if (inputRef.current) {
      inputRef.current.value = "0.00";
    }
    setButtonDisabled(true);
  };

  const handleRemove = (id: string) => {
    console.log(values.filter((item) => item.id === id)[0]);
    //if (false) setter && values && setter([values.filter((item) => item.id === id)[0], ...values]);
  };

  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="vendorAndPrice" whiteSpace={"nowrap"}>
          Vendor {"&"} Price
        </FormLabel>
      </FormElements.LabelSection>

      <FormElements.MainSection>
        <FormElements.InputSection>
          <Select
            id={"vendorAndPrice"}
            placeholder={"Pick Vendor"}
            data={VendorData}
            onChange={isValid}
            ref={selectRef}
          />
          <InputGroup w="19ch">
            <Input
              ref={inputRef}
              min={0}
              max={999.99}
              p="2"
              type="number"
              id="VendorPrice"
              onChange={isValid}
              step="0.01"
            />
            <InputRightAddon>$</InputRightAddon>
          </InputGroup>
          <AddButton onClick={handleAdd} isDisabled={isButtonDisabled} ariaLabel="Add Vendor & Price Pair" />
        </FormElements.InputSection>
        <FormElements.ContainerSection>
          {values &&
            values.length !== 0 &&
            values.map((item, index) => {
              return (
                <FormElements.SelectedItem key={index}>
                  <VendorPriceItem
                    name={item.name}
                    id={item.id}
                    onClick={handleRemove}
                    price={item.price}
                  ></VendorPriceItem>
                </FormElements.SelectedItem>
              );
            })}
        </FormElements.ContainerSection>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

type VendorPricePairProps = {
  name: string;
  price: number;
} & ListItemProps;

const VendorPriceItem = ({ name, price, id, onClick }: VendorPricePairProps) => {
  return (
    <>
      <Box minW="8px" minH="8px" bg={"gray.300"} />
      <Text minW="16ch" maxW="16ch" noOfLines={1}>
        {name}
      </Text>
      <Text textAlign="end" minW="6ch" maxW="6ch" noOfLines={1}>
        {price + " "} $
      </Text>
      <RemoveButton ariaLabel="Remove Vendor & Price pair" onClick={() => onClick(id)} />
    </>
  );
};

type FoodAdditivesComponentProps = {
  values: FoodAdditive[];
  setter: ((values: FoodAdditive[]) => void) | null;
};

export const FoodAdditivesComponent = ({ values, setter }: FoodAdditivesComponentProps) => {
  /*
    Adds whole FoodAdditive object to values
    IF - object isn't already there
    IF - Selected index is not equal to 0
  */
  const handleSelect = (e: SyntheticEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (e.currentTarget.selectedIndex === 0 || (values && values.some((item) => item.name === value))) {
      e.currentTarget.selectedIndex = 0;
      return;
    }
    e.currentTarget.selectedIndex = 0;

    setter && values && setter([foodAdditives.filter((item) => item.name === value)[0], ...values]);
  };

  const handleRemove = (id: string) => {
    console.log(values.filter((item) => item.id === id)[0]);
    //if (false) setter && values && setter([values.filter((item) => item.id === id)[0], ...values]);
  };
  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="foodAdditives" whiteSpace={"nowrap"}>
          Food Additives
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Select id={"foodAdditives"} placeholder={"Pick an Additive"} data={foodAdditives} onChange={handleSelect} />
        <FormElements.ContainerSection>
          {values &&
            values.map((item) => {
              return (
                <FormElements.SelectedItem key={item.id}>
                  <FoodAdditiveItem
                    code={item.code}
                    name={item.name}
                    type={item.type}
                    onClick={handleRemove}
                    id={item.id}
                  />
                </FormElements.SelectedItem>
              );
            })}
        </FormElements.ContainerSection>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

type FoodAdditiveItemProps = {
  type: "healthy" | "warning" | "dangerous";
  code: string;
} & ListItemProps;

const FoodAdditiveItem = ({ type, code, name, onClick, id }: FoodAdditiveItemProps) => {
  const [color, setColor] = useState("gray.900");
  useEffect(() => {
    switch (type) {
      case "dangerous":
        setColor("red.500");
        break;
      case "healthy":
        setColor("green.500");
        break;
      case "warning":
        setColor("yellow.400");
        break;
    }
  }, [type]);

  return (
    <>
      <Box w="8px" h="8px" bg={color} />
      <Text w="4ch">{code}</Text>
      <Text minW="18ch" maxW="18ch" noOfLines={1}>
        {name}
      </Text>
      <RemoveButton ariaLabel="Remove Food Additive" onClick={() => onClick(id)} />
    </>
  );
};

type AlergensComponentProps = {
  values: Alergen[];
  setter: ((values: Alergen[]) => void) | null;
};

export const AlergensComponent = ({ values, setter }: AlergensComponentProps) => {
  /*
    Adds whole Alergen object to values
    IF - object isn't already there
    &&
    IF - Selected index is not equal to 0
  */
  const handleSelect = (e: SyntheticEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (e.currentTarget.selectedIndex === 0 || (values && values.some((item) => item.name === value))) {
      e.currentTarget.selectedIndex = 0;
      return;
    }
    e.currentTarget.selectedIndex = 0;

    setter && values && setter([alergens.filter((item) => item.name === value)[0], ...values]);
  };

  const handleRemove = (id: string) => {
    console.log(values.filter((item) => item.id === id)[0]);
  };
  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="alergens" whiteSpace={"nowrap"}>
          Alergens
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Select id={"alergens"} placeholder={"Pick an Alergen"} data={alergens} onChange={handleSelect} />
        <FormElements.ContainerSection>
          {values &&
            values.map((item) => {
              return (
                <FormElements.SelectedItem key={item.id}>
                  <AlergenItem name={item.name} id={item.id} onClick={handleRemove}></AlergenItem>
                </FormElements.SelectedItem>
              );
            })}
        </FormElements.ContainerSection>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

export const AlergenItem = ({ name, onClick, id }: ListItemProps) => {
  return (
    <>
      <Box w="8px" h="8px" bg={"red.500"} />
      <Text minW="18ch" maxW="18ch" noOfLines={1}>
        {name}
      </Text>
      <Spacer />
      <RemoveButton ariaLabel={"Remove Alergen"} onClick={() => onClick(id)} />
    </>
  );
};

type MarkComponentProps = {
  values: MarkType[];
  setter: ((values: MarkType[]) => void) | null;
};

export const MarksComponent = ({ values, setter }: MarkComponentProps) => {
  const handleSelect = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string,
    name: string,
    iconName: CustomIcon,
    type: "healthy" | "warning" | "dangerous"
  ) => {
    if (values.some((item) => item.id === id)) {
      return;
    }
    setter!([{ name: name, id: id, iconName: iconName, type: type }, ...values]);
  };

  const handleRemove = handleRemoveFactoryFunction<MarkType>(values, setter!);

  return (
    <Menu>
      <MenuButton w="100%" as={Button} rightIcon={<MdExpandMore size="20px" />}>
        Pick Marks
      </MenuButton>
      <MenuList minW="100%" maxH="360px" overflowY="auto">
        <MarkMenuItem onClick={handleSelect} iconType={"healthy"} iconName={"Vitamin"} name={"Vitamins"} id={"125673"}>
          Has Lot of Vitamins
        </MarkMenuItem>
        <MarkMenuItem
          onClick={handleSelect}
          iconType={"warning"}
          iconName={"Additives"}
          name={"Additives"}
          id={"12673"}
        >
          Has Additives
        </MarkMenuItem>
        <MarkMenuItem
          onClick={handleSelect}
          iconType={"dangerous"}
          iconName={"Additives"}
          name={"Dangerous Additives"}
          id={"1723"}
        >
          Has Dangerous Additives
        </MarkMenuItem>
        <MarkMenuItem onClick={handleSelect} iconType={"healthy"} iconName={"Fiber"} name={"Fiber"} id={"1203"}>
          Has Fiber
        </MarkMenuItem>
        <MarkMenuItem onClick={handleSelect} iconType={"healthy"} iconName={"Minerals"} name={"Minerals"} id={"1923"}>
          Has Minerals
        </MarkMenuItem>
        <MarkMenuItem
          onClick={handleSelect}
          iconType={"healthy"}
          iconName={"NoAdditives"}
          name={"No Additives"}
          id={"16723"}
        >
          No Additives
        </MarkMenuItem>
        <MarkMenuItem
          onClick={handleSelect}
          iconType={"healthy"}
          iconName={"NoAlergens"}
          name={"No Alergens"}
          id={"114123"}
        >
          No Alergens
        </MarkMenuItem>
        <MarkMenuItem
          onClick={handleSelect}
          iconType={"healthy"}
          iconName={"NoSugar"}
          name={"No Sugar"}
          id={"112312323"}
        >
          No Sugar
        </MarkMenuItem>
        <MarkMenuItem onClick={handleSelect} iconType={"healthy"} iconName={"Omega3"} name={"Omega 3"} id={"11823"}>
          Has Healthy Fats: Omega 3
        </MarkMenuItem>
        <MarkMenuItem onClick={handleSelect} iconType={"healthy"} iconName={"Omega6"} name={"Omega 6"} id={"11723"}>
          Has Healthy Fats: Omega 6
        </MarkMenuItem>
        <MarkMenuItem onClick={handleSelect} iconType={"healthy"} iconName={"Omega9"} name={"Omega 9"} id={"11623"}>
          Has Healthy Fats: Omega 9
        </MarkMenuItem>
        <MarkMenuItem
          onClick={handleSelect}
          iconType={"healthy"}
          iconName={"OmegaAll"}
          name={"Healthy Fats"}
          id={"11523"}
        >
          Has Healthy Fats
        </MarkMenuItem>
        <MarkMenuItem onClick={handleSelect} iconType={"warning"} iconName={"PalmOil"} name={"Palm Oil"} id={"1423"}>
          Contains Palm Oil
        </MarkMenuItem>
        <MarkMenuItem onClick={handleSelect} iconType={"warning"} iconName={"Sugar"} name={"Sugar"} id={"13223"}>
          Has lot of Sugar
        </MarkMenuItem>
        <MarkMenuItem
          onClick={handleSelect}
          iconType={"healthy"}
          iconName={"Proteins"}
          name={"High Protein Content"}
          id={"1123"}
        >
          High Protein content
        </MarkMenuItem>
        <MarkMenuItem onClick={handleSelect} iconType={"healthy"} iconName={"Vitamin"} name={"Vitamin"} id={"1223"}>
          Has Lot of Vitamins!
        </MarkMenuItem>
      </MenuList>
      <Flex flexWrap="wrap" maxW="30ch" rowGap="8px" w="100%">
        {values.map((item) => (
          <MarkItem
            name={item.name}
            iconName={item.iconName as CustomIcon}
            type={item.type}
            id={item.id}
            key={item.id}
            onClick={handleRemove!}
          ></MarkItem>
        ))}
      </Flex>
    </Menu>
  );
};

type MarkItemProps = {
  type: "healthy" | "warning" | "dangerous";
  iconName: CustomIcon;
  id: string;
} & ListItemProps;

const MarkItem = ({ type, name, iconName, id, onClick }: MarkItemProps) => {
  const [color, setColor] = useState("gray.900");
  const [bgColor, setBgColor] = useState("gray.900");
  const [showButton, setShowButton] = useState<boolean>(false);

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
      onClick={() => onClick(id)}
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
        hidden={!showButton}
        position="absolute"
        zIndex="2"
        minW="20px"
        maxW="20px"
        minH="20px"
        maxH="20px"
        aria-label="Remove Mark"
        pointerEvents={"none"}
        icon={<MdClose color={"white"} size="16px" />}
        bg="red.600"
        _active={{ bg: "blackAlpha.700" }}
        borderRadius="full"
        size="xs"
      />
      <VisuallyHidden>
        <IconButton aria-label="Remove Mark" icon={<MdClose />} />
      </VisuallyHidden>
    </Box>
  );
};

export const ProductNameField = () => {
  return (
    <FormElements.Wrapper isRequired={true}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="productName" whiteSpace={"nowrap"}>
          Product Name
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Input name="productName" type="text" id="productName"></Input>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

export const BrandNameField = () => {
  return (
    <FormElements.Wrapper isRequired={true}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="brandName" whiteSpace={"nowrap"}>
          Brand Name
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Input name="brandName" type="text" id="brandName"></Input>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

export const PackingWeight = () => {
  return (
    <FormElements.Wrapper isRequired={true}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="packingWeight" whiteSpace={"nowrap"}>
          Packing Weight
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <InputGroup>
          <Input id="packingWeight" name="packingWeight" step={1} min={0} max={999999} type="number" />
          <InputRightAddon>grams</InputRightAddon>
        </InputGroup>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

export const FatsInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel htmlFor="fats" whiteSpace={"nowrap"}>
          Fats
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="fats" name="fats" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

export const SfaInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel marginRight="4px" paddingLeft="16px" htmlFor="sfa">
          SFA
        </FormLabel>
        <CustomTooltip>Saturated Fatty Acids</CustomTooltip>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="sfa" name="sfa" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

export const MufaInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel marginRight="4px" paddingLeft="16px" htmlFor="mufa">
          MUFA
        </FormLabel>
        <CustomTooltip>Monounsaturated Fatty Acids</CustomTooltip>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="mufa" name="mufa" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

export const PufaInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel marginRight="4px" paddingLeft="16px" htmlFor="pufa">
          PUFA
        </FormLabel>
        <CustomTooltip>Polysaturated Fatty Acids</CustomTooltip>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="pufa" name="pufa" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

export const ProteinsInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel htmlFor="proteins">Proteins</FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="proteins" name="proteins" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

export const CarbohydratesInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel htmlFor="carbohydrates">Carbohydrates</FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="carbohydrates" name="carbohydrates" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

export const FiberInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel paddingLeft="16px" htmlFor="fiber">
          Fiber
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="fiber" name="fiber" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

export const SugarInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel paddingLeft="16px" htmlFor="sugar">
          Sugar
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="sugar" name="sugar" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

export const SaltInputField = () => {
  return (
    <FormElements.Wrapper isRequired={true} direction="row">
      <FormElements.LabelSection>
        <FormLabel htmlFor="salt" mx="0">
          Salt
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input id="salt" name="salt" step={0.01} min={0} max={100} type="number" />
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};
