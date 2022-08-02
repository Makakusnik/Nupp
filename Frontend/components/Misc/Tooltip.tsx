import { Box, Icon, Tooltip, useColorModeValue } from "@chakra-ui/react";
import React, { forwardRef, ReactNode } from "react";
import { BsQuestion } from "react-icons/bs";

export const IconTooltip = (props: any) => {
  return (
    <Tooltip label={props.children} placement="top">
      <span>
        <Icon {...props} />
      </span>
    </Tooltip>
  );
};

export const CustomTooltip = ({ children, marginLeft }: TooltipProps) => {
  return (
    <Tooltip label={children} placement="top">
      <TooltipVisual marginLeft={marginLeft} />
    </Tooltip>
  );
};

type TooltipProps = {
  children?: string;
  marginLeft?: string;
};

const TooltipVisual = forwardRef<HTMLDivElement, TooltipProps>(
  ({ marginLeft, children, ...rest }: TooltipProps, ref) => {
    const bgColor = useColorModeValue("gray.200", "gray.600");
    return (
      <Box
        ref={ref}
        {...rest}
        marginLeft={marginLeft}
        borderRadius="50%"
        bg={bgColor}
        minW="12px"
        maxW="12px"
        minH="12px"
        maxH="12px"
      >
        <BsQuestion size="12px"></BsQuestion>
      </Box>
    );
  }
);

TooltipVisual.displayName = "Tooltip Button";
