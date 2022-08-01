import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  IconButton,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { SyntheticEvent, useState } from "react";
import { MdAdd, MdCheck, MdOutlineFavoriteBorder, MdPlusOne } from "react-icons/md";
import { data, Data } from "../../testdata/data";
import { ChildrenOnlyProps } from "../../types/Types";
import { DataTableLink } from "../Navigation";

const formatSecondaryData = (data: string) => {
  return <DataTableLink href="#">{data}</DataTableLink>;
};

type DataTableProps = {
  hasEnergy?: boolean;
  hasFats?: boolean;
  hasCarbohydrates?: boolean;
  hasProteins?: boolean;
  hasSalt?: boolean;
  hasAvgPrice?: boolean;
};

export const DatabaseTable = ({
  hasEnergy = true,
  hasFats = true,
  hasCarbohydrates = true,
  hasProteins = true,
  hasSalt = true,
  hasAvgPrice = true,
}: DataTableProps) => {
  return (
    <TableContainer marginTop="40px">
      <Table variant="simple">
        <TableCaption>Grocery database from Slovak grocery shops</TableCaption>
        <Thead>
          <Tr>
            <TableHead title="Name" details="Brand / Recipe Link" />
            {hasEnergy && <TableHead title="Energy" details="g / 100 g" alignCenter={true} />}
            {hasFats && <TableHead title="Fats" details="g / 100 g" alignCenter={true} />}
            {hasCarbohydrates && <TableHead title="Carbohydrates" details="g / 100 g" alignCenter={true} />}
            {hasProteins && <TableHead title="Proteins" details="g / 100 g" alignCenter={true} />}
            {hasSalt && <TableHead title="Salt" details="g / 100 g" alignCenter={true} />}
            {hasAvgPrice && <TableHead title="Avg. Price" details="$" alignCenter={true} />}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: Data, index: number) => {
            return <FormatedTableRow item={item} key={index} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

interface TableRowProps {
  item: Data;
}

const FormatedTableRow = ({ item }: TableRowProps) => {
  return (
    <Tr>
      <Td>
        {item.name}

        <IconButton marginLeft="8px" size="xs" aria-label="Add Product To Favorits">
          <Box as={MdOutlineFavoriteBorder}></Box>
        </IconButton>
        <br></br>
        {formatSecondaryData(item.secondaryData)}
      </Td>
      <Td isNumeric>250</Td>
      <Td isNumeric>25.4</Td>
      <Td isNumeric>25.4</Td>
      <Td isNumeric>25.4</Td>
      <Td isNumeric>25.4</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
  );
};

interface TableHeadProps {
  title: string;
  details?: string;
  alignCenter?: boolean;
}

const TableHead = ({ title, details, alignCenter }: TableHeadProps) => {
  return (
    <Th textAlign={alignCenter ? "center" : "left"}>
      {title}
      <br></br>
      <span style={{ color: "gray", fontSize: "10px" }}>{details}</span>
    </Th>
  );
};

export const SmallDataTable = ({ children }: ChildrenOnlyProps) => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <TableContainer w="100%">
      <Box overflowY="auto" overflowX="hidden" maxHeight="500px">
        <Table variant="striped" size="sm">
          <Thead bg={bg} zIndex="1" position="sticky" top={0}>
            <Tr>
              <TableHead title="Name" details="Brand / Recipe Link" />
              <TableHead title="Add" alignCenter={true} />
            </Tr>
          </Thead>
          <Tbody w="100%" minW="100%">
            {children}
          </Tbody>
        </Table>
      </Box>
    </TableContainer>
  );
};

type SmallTableRowProps = {
  ariaLabelIconButton: string;
  onClick: (e: SyntheticEvent<HTMLButtonElement>, weight: number) => void;
  id: string;
};

export const SmallTableRow = ({ item, ariaLabelIconButton, onClick, id }: TableRowProps & SmallTableRowProps) => {
  const [isFieldActive, setActiveField] = useState<boolean>(false);
  const [weight, setWeight] = useState<number>(0);

  const handleClick = () => {
    setActiveField(true);
  };
  return (
    <Tr>
      <Td w="50%">
        {item.name}
        {formatSecondaryData(item.secondaryData)}
      </Td>
      <Td w="50%" justifyContent="center">
        <HStack spacing="8px" justifyContent="center">
          {isFieldActive ? (
            <>
              <InputGroup size="xs">
                <Input
                  type="number"
                  name="weight"
                  aria-label="Weight"
                  w="100%"
                  onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                    setWeight(Number(e.currentTarget.value));
                  }}
                />
                <InputRightAddon>g</InputRightAddon>
              </InputGroup>
              <IconButton
                colorScheme="green"
                marginLeft="8px"
                size="xs"
                aria-label={ariaLabelIconButton}
                data-id={id}
                onClick={(e) => {
                  onClick(e, weight);
                  setActiveField(false);
                }}
              >
                <Box size="16px" as={MdCheck}></Box>
              </IconButton>
            </>
          ) : (
            <IconButton
              colorScheme="green"
              marginLeft="8px"
              size="xs"
              onClick={handleClick}
              aria-label={ariaLabelIconButton}
            >
              <Box size="16px" as={MdAdd}></Box>
            </IconButton>
          )}
        </HStack>
      </Td>
    </Tr>
  );
};
