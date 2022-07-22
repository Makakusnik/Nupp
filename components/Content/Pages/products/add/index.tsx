import { Box, IconButton, FormLabel, InputGroup, Input, InputRightAddon, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect, SyntheticEvent, useRef } from "react";
import { MdClose, MdAdd } from "react-icons/md";
import { FoodAdditive, foodAdditives } from "../../../../../testdata/data";
import { Select } from "../../../../Input";
import * as FormElements from "../../../../Input/Form/FormElements";
import { CustomTooltip } from "../../../../Misc/Tooltip";

export const ProductDetailsSection = () => {
  return (
    <VStack w="70%" px="16px" spacing="24px">
      <ProductNameField />
      <BrandNameField />
      <PackingWeight />
      <VendorAndPriceComponent />
      <FoodAdditivesComponent />
    </VStack>
  );
};

export const MacroNutrientsSection = () => {
  return (
    <>
      <VStack spacing="16px" alignItems="space-between">
        <VStack spacing="8px">
          <FatsInputField />
          <SfaInputField />
          <MufaInputField />
          <PufaInputField />
        </VStack>
        <ProteinsInputField />
      </VStack>
      <VStack spacing="16px" alignItems="space-between">
        <VStack spacing="8px">
          <CarbohydratesInputField />
          <SugarInputField />
          <FiberInputField />
        </VStack>
        <SaltInputField />
      </VStack>
    </>
  );
};

export const VendorAndPriceComponent = () => {
  const [selectedValuePairs, setSelectedValuePairs] = useState<VendorPricePair[]>([]);
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
      selectedValuePairs.some((item) => item.name === selectRef.current?.value) ||
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
    setSelectedValuePairs([
      { name: selectRef.current?.value || "", price: Number(inputRef.current?.value) || 0 },
      ...selectedValuePairs,
    ]);
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
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel htmlFor="foodAdditives" whiteSpace={"nowrap"}>
          Vendor {"&"} Price
        </FormLabel>
      </FormElements.LabelSection>

      <FormElements.MainSection>
        <FormElements.InputSection>
          <Select
            id={"vendorPrice"}
            name={"Vendor And Price"}
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
              type={"number"}
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
          {selectedValuePairs.map((item, index) => {
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
      <Text minW="18ch" maxW="18ch" noOfLines={1}>
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

export const FoodAdditivesComponent = () => {
  const [selectedAdditives, setSelectedAdditives] = useState<FoodAdditive[]>([]);
  const handleSelect = (e: SyntheticEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;

    if (e.currentTarget.selectedIndex === 0 || selectedAdditives.some((item) => item.name === value)) {
      e.currentTarget.selectedIndex = 0;
      return;
    }
    e.currentTarget.selectedIndex = 0;

    setSelectedAdditives([foodAdditives.filter((item) => item.name === value)[0], ...selectedAdditives]);
  };
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel htmlFor="foodAdditives" whiteSpace={"nowrap"}>
          Food Additives
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Select
          id={"foodAdditives"}
          name={"Food Additives"}
          placeholder={"Pick an Additive"}
          data={foodAdditives}
          onChange={handleSelect}
        />
        <FormElements.ContainerSection>
          {selectedAdditives.map((item) => {
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

const ProductNameField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel htmlFor="productName" whiteSpace={"nowrap"}>
          Product Name
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Input type="text" id="productName"></Input>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

const BrandNameField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel htmlFor="brandName" whiteSpace={"nowrap"}>
          Brand Name
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <Input type="text" id="brandName"></Input>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

const PackingWeight = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel htmlFor="packingWeight" whiteSpace={"nowrap"}>
          Packing Weight
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.MainSection>
        <InputGroup>
          <Input id={"packingWeight"} type="number" />
          <InputRightAddon>grams</InputRightAddon>
        </InputGroup>
      </FormElements.MainSection>
    </FormElements.Wrapper>
  );
};

const FatsInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel htmlFor="fats" whiteSpace={"nowrap"}>
          Fats
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="fats"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

const SfaInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel w={"fit-content"} paddingLeft="16px" display="flex" htmlFor="saturatedFattyAcids">
          SFA
          <CustomTooltip marginLeft="4px">Saturated Fatty Acids</CustomTooltip>
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="saturatedFattyAcids"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

const MufaInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel w={"fit-content"} paddingLeft="16px" display="flex" htmlFor="productName">
          MUFA
          <CustomTooltip marginLeft="4px">Saturated Fatty Acids</CustomTooltip>
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="productName"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

const PufaInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel w={"fit-content"} paddingLeft="16px" display="flex" htmlFor="productName">
          PUFA
          <CustomTooltip marginLeft="4px">Saturated Fatty Acids</CustomTooltip>
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="productName"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

const ProteinsInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel w={"fit-content"} display="flex" htmlFor="productName">
          Proteins
          <CustomTooltip marginLeft="4px">Saturated Fatty Acids</CustomTooltip>
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="productName"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

const CarbohydratesInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel w={"fit-content"} display="flex" htmlFor="productName">
          Carbohydrates
          <CustomTooltip marginLeft="4px">Saturated Fatty Acids</CustomTooltip>
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="productName"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

const FiberInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel w={"fit-content"} paddingLeft="16px" display="flex" htmlFor="productName">
          Fiber
          <CustomTooltip marginLeft="4px">Saturated Fatty Acids</CustomTooltip>
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="productName"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};

const SugarInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel w={"fit-content"} paddingLeft="16px" display="flex" htmlFor="productName">
          Sugar
          <CustomTooltip marginLeft="4px">Saturated Fatty Acids</CustomTooltip>
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="productName"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};
const SaltInputField = () => {
  return (
    <FormElements.Wrapper>
      <FormElements.LabelSection>
        <FormLabel w={"fit-content"} display="flex" htmlFor="productName">
          Salt
          <CustomTooltip marginLeft="4px">Saturated Fatty Acids</CustomTooltip>
        </FormLabel>
      </FormElements.LabelSection>
      <FormElements.SmallMainSection>
        <FormElements.InputSection>
          <InputGroup>
            <Input type="text" id="productName"></Input>
            <InputRightAddon>g</InputRightAddon>
          </InputGroup>
        </FormElements.InputSection>
      </FormElements.SmallMainSection>
    </FormElements.Wrapper>
  );
};
