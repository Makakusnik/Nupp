import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import Error from "next/error";
import { MdAdd, MdOutlineFavoriteBorder, MdLink } from "react-icons/md";
import { data, Data, Brand, Recipe, SecondaryData } from "../../testdata/data";

const formatSecondaryData = (data: SecondaryData) => {
  console.log("Executed");
  if ((typeof data as SecondaryData) === "Brand") {
    console.log("Returning Brand");
    return <span style={{ color: "gray", fontSize: "12px" }}>{data}</span>;
  }
  if ((typeof data as SecondaryData) === "Recipe") {
    console.log("Returning Recipe");
    return (
      <span style={{ color: "gray", fontSize: "12px" }}>
        {data}
        <Box marginLeft="8px" size="xs" as={MdLink}></Box>
      </span>
    );
  }
  console.log(typeof data);
};

export const DatabaseTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Grocery database from Slovak grocery shops</TableCaption>
        <Thead>
          <Tr>
            <Th>
              Name{" "}
              <span style={{ color: "gray", fontSize: "10px" }}>
                <br></br>
                brand / Recipe
              </span>
            </Th>
            <Th textAlign="center">
              Energy<br></br>
              <span style={{ color: "gray", fontSize: "10px" }}>g / 100 g</span>
            </Th>
            <Th textAlign="center">
              Fats<br></br>
              <span style={{ color: "gray", fontSize: "10px" }}>g / 100 g</span>
            </Th>
            <Th textAlign="center">
              Carbs<br></br>
              <span style={{ color: "gray", fontSize: "10px" }}>g / 100 g</span>
            </Th>
            <Th textAlign="center">
              Proteins<br></br>
              <span style={{ color: "gray", fontSize: "10px" }}>g / 100 g</span>
            </Th>
            <Th textAlign="center">
              Salt<br></br>
              <span style={{ color: "gray", fontSize: "10px" }}>g / 100 g</span>
            </Th>
            <Th>Avg. Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: Data, index: number) => {
            return (
              <Tr key={index}>
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
              </Tr>
            );
          })}
          <Tr>
            <Td>
              Tuniakový šalát
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>Rio Mare</span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Chilli Con Carne Bardzo Fajne
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Ochujeny Recept
              </span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Chilli Con Carne Bardzo Fajne
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Ochujeny Recept
              </span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Tuniakový šalát
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>Rio Mare</span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Chilli Con Carne Bardzo Fajne
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Ochujeny Recept
              </span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Chilli Con Carne Bardzo Fajne
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Ochujeny Recept
              </span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Tuniakový šalát
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>Rio Mare</span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Chilli Con Carne Bardzo Fajne
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Ochujeny Recept
              </span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Chilli Con Carne Bardzo Fajne
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Ochujeny Recept
              </span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Tuniakový šalát
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>Rio Mare</span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Chilli Con Carne Bardzo Fajne
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Ochujeny Recept
              </span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              Chilli Con Carne Bardzo Fajne
              <IconButton
                marginLeft="8px"
                size="xs"
                aria-label="Add Product To Favorits"
              >
                <Box as={MdOutlineFavoriteBorder}></Box>
              </IconButton>
              <br></br>
              <span style={{ color: "gray", fontSize: "12px" }}>
                Ochujeny Recept
              </span>
            </Td>
            <Td isNumeric>250</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
