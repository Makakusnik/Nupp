import { ComponentMultiStyleConfig, useColorModeValue } from "@chakra-ui/react";
import {mode } from '@chakra-ui/theme-tools'

export const Checkbox: ComponentMultiStyleConfig = {
    parts: ['control'],
    baseStyle: (props) =>({
      'control':{
        bg:mode("white","gray.800")(props),
        borderWidth: '2px',
      }
    }),
    defaultProps:{
      colorScheme:'green'
    }
  };
  