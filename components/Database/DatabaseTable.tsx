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
} from "@chakra-ui/react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { data, Data } from "../../testdata/data";
import { DataTableLink } from "../navigation/Links";

const formatSecondaryData = (data: string) => {
  return <DataTableLink href="#">{data}</DataTableLink>;
};

export const DatabaseTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Grocery database from Slovak grocery shops</TableCaption>
        <Thead>
          <Tr>
            <TableHead title="Name" details="Brand / Recipe Link" />
            <TableHead title="Energy" details="g / 100 g" align={true} />
            <TableHead title="Fats" details="g / 100 g" align={true} />
            <TableHead title="Carbs" details="g / 100 g" align={true} />
            <TableHead title="Proteins" details="g / 100 g" align={true} />
            <TableHead title="Salt" details="g / 100 g" align={true} />
            <TableHead title="Avg. Price" details="$" align={true} />
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

        <IconButton
          marginLeft="8px"
          size="xs"
          aria-label="Add Product To Favorits"
        >
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
  details: string;
  align?: boolean;
}

const TableHead = ({ title, details, align }: TableHeadProps) => {
  return (
    <Th textAlign={align ? "center" : "left"}>
      {title}
      <br></br>
      <span style={{ color: "gray", fontSize: "10px" }}>{details}</span>
    </Th>
  );
};
