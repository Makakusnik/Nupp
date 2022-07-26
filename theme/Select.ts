import { ComponentMultiStyleConfig, ComponentSingleStyleConfig, useColorModeValue } from "@chakra-ui/react";
import {mode } from '@chakra-ui/theme-tools'

export const Select: ComponentMultiStyleConfig = {
    parts: ['field'],
    baseStyle: (props) =>({
      'field':{
        backgroundColor:mode("white","gray.800")(props),
      }
    }),
    defaultProps:{
      colorScheme:'green'
    }
  };

  