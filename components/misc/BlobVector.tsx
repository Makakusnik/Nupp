import styled from "@emotion/styled";
import { useEffect } from "react";

interface Props {
  blur: boolean;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  initialValue: string;
  values: string;
  id: string;
}

interface SvgElementProps {
  isAbsolute: boolean;
  hasBlur: boolean;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
const Svg = styled.svg<SvgElementProps>`
  position: ${({ isAbsolute }) => (isAbsolute ? "absolute" : "relative")};
  filter: ${({ hasBlur }) => hasBlur && "blur(35px)"};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
`;

export const BlobAnimated = ({
  id,
  blur,
  top,
  right,
  bottom,
  left,
  values,
  initialValue,
}: Props) => {
  return (
    <>
      <Svg
        hasBlur={false}
        isAbsolute={true}
        top={top}
        bottom={bottom}
        right={right}
        left={left}
        id={id + "blur"}
        width="350"
        height="400"
        viewBox="0 0 350 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
          <stop offset="0%" stopColor="rgb(95,54,152)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(247,109,138)" stopOpacity="1" />
        </linearGradient>
        <path id="path" fill="url(#PSgrad_0)" d={initialValue}>
          <animate
            id="animation-to-check"
            repeatCount="indefinite"
            fill="freeze"
            dur="10s"
            attributeName="d"
            values={values}
          />
        </path>
      </Svg>
      <Svg
        hasBlur={false}
        isAbsolute={false}
        top={top}
        bottom={bottom}
        right={right}
        left={left}
        id={id}
        width="350"
        height="400"
        viewBox="0 0 350 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: `${blur ? "blur(35px)" : ""}`,
          position: "absolute",
          top,
          left,
        }}
      >
        <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
          <stop offset="0%" stopColor="rgb(95,54,152)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(247,109,138)" stopOpacity="1" />
        </linearGradient>
        <path id="path" fill="url(#PSgrad_0)" d={initialValue}>
          <animate
            id="animation-to-check"
            repeatCount="indefinite"
            fill="freeze"
            dur="10s"
            attributeName="d"
            values={values}
          />
        </path>
      </Svg>
    </>
  );
};
