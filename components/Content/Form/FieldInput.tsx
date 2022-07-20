import {
  HStack,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import { FormFieldProps, FormProps } from "../../../types/Types";
import { CustomTooltip } from "../../Misc/Tooltip";

export const FormFieldInput = ({
  id,
  children,
  name,
  leftAddon,
  rightAddon,
  paddingLeft,
  inputWidth,
  labelWidth,
  fieldWidth,
  tooltip,
}: FormFieldProps & FormProps) => {
  return (
    <HStack w={fieldWidth ? fieldWidth : "100%"}>
      <FormLabel
        htmlFor={id}
        paddingLeft={paddingLeft}
        whiteSpace={"nowrap"}
        w={labelWidth ? labelWidth : "200px"}
        display="flex"
      >
        {children}
        {tooltip && <CustomTooltip marginLeft="4px">{tooltip}</CustomTooltip>}
      </FormLabel>

      {leftAddon || rightAddon ? (
        <InputGroup w={inputWidth ? inputWidth : "350px"}>
          {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
          <Input name={name ? name : id} id={id} type="text" />
          {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
        </InputGroup>
      ) : (
        <Input
          name={name ? name : id}
          w={inputWidth ? inputWidth : "350px"}
          id={id}
          type="text"
        />
      )}
    </HStack>
  );
};
