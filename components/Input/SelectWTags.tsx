import {
  Container,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// val.target.options[val.target.selectedIndex].dataset.fagotik
export const SelectWTags = ({ data }: { data: string[] }) => {
  const [list, setList] = useState<string[]>([]);
  const [dataList, setDataList] = useState<string[]>([" ", ...data]);
  useEffect(() => {}, [list]);
  return (
    <Container>
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
      <Container marginTop="16px" maxH="132px" w="100%" overflowY={"auto"}>
        {list.map((item, index) => {
          return (
            <Tag
              size="sm"
              key={index}
              colorScheme="green"
              bg="green.300"
              mx={"4px"}
            >
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
