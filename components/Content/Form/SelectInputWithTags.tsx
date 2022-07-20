import { VStack, HStack, FormLabel, Select } from "@chakra-ui/react";
import { FormSelectProps, FormProps } from "../../../types/Types";

export const FormSelectInputWithTags = <T extends { name: string }>({
  id,
  children,
  name,
  placeholder,
  data,
}: FormSelectProps<T> & FormProps) => {
  return (
    <VStack w="100%" alignItems={"end"}>
      <HStack w="100%" justifyContent={"space-between"}>
        <FormLabel htmlFor="VendorPrice" whiteSpace={"nowrap"} w="200px">
          {children}
        </FormLabel>
        <Select name={name} placeholder={placeholder} id={id} w="350px">
          {data.map((item, index) => {
            return <option key={index}>{item.name}</option>;
          })}
        </Select>
      </HStack>
    </VStack>
  );
};
