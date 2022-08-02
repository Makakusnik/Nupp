import { ComponentMultiStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Input: ComponentMultiStyleConfig = {
  parts: ["field", "addon"],
  baseStyle: (props) => ({
    field: {
      backgroundColor: mode("white", "inherit")(props),
      borderWidth: "2px",
      _focusVisible: {
        borderColor: "transparent",
        boxShadow: "0 0 0 2px #48BB78",
      },
      _disabled: {
        backgroundColor: mode("gray.100", "gray.800")(props),
        color: mode("blackAlpha.600", "whiteAlpha.600")(props),
      },
    },
    addon: {
      backgroundColor: mode("gray.100", "gray.700")(props),
    },
  }),
  variants: {},
  defaultProps: {
    variant: null,
  },
};
