import { Container, Select, Tag, TagCloseButton, TagLabel, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const SelectWTags = ({ data }: { data: string[] }) => {
  const [list, setList] = useState<string[]>([]);
  const [dataList, setDataList] = useState<string[]>([" ", ...data]);

  const tagFontColor = useColorModeValue("gray.700", "gray.900");
  useEffect(() => {}, [list]);
  return (
    <Container px="0px">
      <Select
        onChange={(val) => {
          setList([...list, val.target.value]);
          setDataList(dataList.filter((item) => item !== val.target.value));
          val.target.selectedIndex = 0;
        }}
      >
        {dataList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
      <Container marginTop="16px" maxH="132px" minW="100%" padding="0px" overflowY={"auto"}>
        {list.map((item, index) => {
          return (
            <Tag size="sm" key={index} colorScheme="green" color={tagFontColor} bg="green.300" mx={"4px"} my="2px">
              <TagLabel>{item}</TagLabel>
              <TagCloseButton
                onClick={(e) => {
                  setList(list.filter((element) => element !== item));
                  setDataList([...dataList, item]);
                }}
              ></TagCloseButton>
            </Tag>
          );
        })}
      </Container>
    </Container>
  );
};
