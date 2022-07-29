import { FormLabel, InputGroup, Input, InputRightAddon, IconButton, Box, Text, HStack, Spacer } from "@chakra-ui/react";
import { useState, useRef, SyntheticEvent, useEffect } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { foodAdditives, FoodAdditive, Alergen, Alergens as alergens } from "../../../../../../testdata/data";
import { Select } from "../../../../../Input";
import { CustomTooltip } from "../../../../../Misc/Tooltip";
import * as FormElements from "../../../../../Input/Form/FormElements";
import { VendorPricePairType } from "../../../../../../types/Types";
import { SimpleFieldType } from "../../../..";

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
      setter([{ name: selectRef.current?.value || "", price: Number(inputRef.current?.value) || 0 }, ...values]);
    if (selectRef.current) {
      selectRef.current.selectedIndex = 0;
    }
    if (inputRef.current) {
      inputRef.current.value = "0.00";
    }
    setButtonDisabled(true);
  };
  useEffect(() => {}, []);

  return (
    <FormElements.Wrapper isRequired={false}>
      <FormElements.LabelSection>
        <FormLabel htmlFor="foodAdditives" whiteSpace={"nowrap"}>
          Vendor {"&"} Price
        </FormLabel>
      </FormElements.LabelSection>

      <FormElements.MainSection>
        <FormElements.InputSection>
          <Select
            id={"vendorPrice"}
            placeholder={"Pick Vendor"}
            data={foodAdditives}
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
          <IconButton
            isDisabled={isButtonDisabled}
            onClick={handleAdd}
            aria-label="Add Vendor & Price pair."
            icon={<MdAdd size="24px" />}
            colorScheme="green"
            size="xs"
          />
        </FormElements.InputSection>
        <FormElements.ContainerSection>
          {values &&
            values.length !== 0 &&
            values.map((item, index) => {
              return (
                <FormElements.SelectedItem key={index}>
                  <VendorPricePair name={item.name} price={item.price}></VendorPricePair>
                </FormElements.SelectedItem>
              );
            })}
        </FormElements.ContainerSection>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

type VendorPricePair = {
  name: string;
  price: number;
};

const VendorPricePair = ({ name, price }: { name: string; price: number }) => {
  return (
    <>
      <Box minW="8px" minH="8px" bg={"gray.300"} />
      <Text minW="16ch" maxW="16ch" noOfLines={1}>
        {name}
      </Text>
      <Text textAlign="end" minW="6ch" maxW="6ch" noOfLines={1}>
        {price + " "} $
      </Text>
      <IconButton aria-label="Remove Option" colorScheme="red" size="xs" icon={<MdClose size="24px" />}></IconButton>
    </>
  );
};

const FoodAdditiveItem = ({ type, code, id, name }: FoodAdditive) => {
  const [color, setColor] = useState("gray.900");
  useEffect(() => {
    switch (type) {
      case "dangerous":
        setColor("red.500");
        break;
      case "healthy":
        setColor("green.500");
        break;
      case "neutral":
        setColor("yellow.400");
        break;
    }
  }, []);

  return (
    <>
      <Box w="8px" h="8px" bg={color} />
      <Text w="4ch">{code}</Text>
      <Text minW="18ch" maxW="18ch" noOfLines={1}>
        {name}
      </Text>
      <IconButton aria-label="Remove Option" colorScheme="red" size="xs" icon={<MdClose size="24px" />}></IconButton>
    </>
  );
};

type FoodAdditivesComponentProps = {
  values: FoodAdditive[];
  setter: ((values: FoodAdditive[]) => void) | null;
};

export const FoodAdditivesComponent = ({ values, setter }: FoodAdditivesComponentProps) => {
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
                  <FoodAdditiveItem code={item.code} name={item.name} type={item.type} id={item.id}></FoodAdditiveItem>
                </FormElements.SelectedItem>
              );
            })}
        </FormElements.ContainerSection>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

type AlergensComponentProps = {
  values: Alergen[];
  setter: ((values: Alergen[]) => void) | null;
};

export const AlergensComponent = ({ values, setter }: AlergensComponentProps) => {
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
                  <AlergenItem name={item.name}></AlergenItem>
                </FormElements.SelectedItem>
              );
            })}
        </FormElements.ContainerSection>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

type AlergenItemProps = {
  name: string;
};

export const AlergenItem = ({ name }: AlergenItemProps) => {
  return (
    <HStack as="li" w="100%">
      <Box w="8px" h="8px" bg={"red.500"} />
      <Text minW="18ch" maxW="18ch" noOfLines={1}>
        {name}
      </Text>
      <Spacer />
      <IconButton aria-label="Remove Option" colorScheme="red" size="xs" icon={<MdClose size="24px" />}></IconButton>
    </HStack>
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
