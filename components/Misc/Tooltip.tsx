import { Box, Tooltip } from "@chakra-ui/react";
import React, { forwardRef, ReactNode } from "react";
import { BsQuestion } from "react-icons/bs";

export const CustomTooltip = ({
  children,
  marginLeft,
}: {
  children: ReactNode;
  marginLeft: string;
}) => {
  return (
    <Tooltip label={children} placement="top">
      <TooltipVisual marginLeft={marginLeft} />
    </Tooltip>
  );
};

type TooltipProps = {
  children?: string;
  marginLeft: string;
};

const TooltipVisual = forwardRef<HTMLDivElement, TooltipProps>(
  ({ marginLeft, children, ...rest }: TooltipProps, ref) => {
    return (
      <Box
        ref={ref}
        {...rest}
        marginLeft={marginLeft}
        borderRadius="50%"
        bg="gray.200"
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
