import { ComponentMultiStyleConfig, ComponentSingleStyleConfig, useColorModeValue } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Select: ComponentMultiStyleConfig = {
  parts: ["field", "icon"],
  baseStyle: (props) => ({
    field: {
      backgroundColor: mode("white", "inherit")(props),
      borderWidth: "2px",
      _focusVisible: {
        borderColor: "transparent",
        boxShadow: "0 0 0 2px #48BB78",
      },
      _focusWithin: {
        borderColor: "transparent",
        boxShadow: "0 0 0 2px #48BB78",
      },
    },
  }),
  defaultProps: {
    vraiant: null,
  },
};
