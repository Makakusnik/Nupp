import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Svg = styled.svg`
  transition: filter 0.5s ease;
  position: absolute;
  filter: ${({ hasBlur }) => (hasBlur ? "blur(15px)" : "blur(0px)")};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
`;

export const BlobAnimatedJsx = ({ id, top, left, data }) => {
  const [hasBlur, setHasBlur] = useState(false);
  const onMouseEnter = (e) => {
    setHasBlur(true);
  };
  const onMouseLeave = (e) => {
    setHasBlur(false);
  };

  return (
    <>
      <Svg
        top={top}
        left={left}
        id={id}
        width="150"
        height="175"
        viewBox="0 0 150 175"
        style={{ zIndex: 2 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient
          id={id + "grad"}
          x1={"0%"}
          y1={"0%"}
          x2={"100%"}
          y2={"100%"}
        >
          <stop offset="0%" stopColor={data.colorValues[0]} stopOpacity="1" />
          <stop offset="100%" stopColor={data.colorValues[1]} stopOpacity="1" />
        </linearGradient>
        <path
          id={id + "path"}
          fill={`url(#${id + "grad"})`}
          d={
            "M76.2937 0.00422347C115.525 -0.468417 131.373 39.4035 142.562 71.809C152.568 100.788 156.199 133.793 129.132 153.031C96.9107 175.932 48.6272 184.317 16.2317 161.599C-13.0452 141.068 3.97941 104.316 15.4928 73.3399C27.2498 41.7082 37.7525 0.468544 76.2937 0.00422347Z"
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <animate
            id="animation-to-check"
            repeatCount="indefinite"
            dur="10s"
            attributeName="d"
            values={data.variants}
          />
        </path>
        <path
          style={{ zIndex: "99" }}
          d="M63 64L89.5 99L121 105L60 112.5L63 64Z"
          fill={"red"}
        >
          <animate
            id="animation-to-check"
            repeatCount="indefinite"
            dur="10s"
            attributeName="d"
            values={
              "M63 68L75.5 99L121 120L60 112.5L63 69Z; M63 64L89.5 99L121 105L60 112.5L63 64Z;M63 64L89.5 99L121 105L60 112.5L63 64Z"
            }
          />
        </path>
      </Svg>
      <Svg
        hasBlur={hasBlur}
        top={top}
        left={left}
        id={id + "blur"}
        width="150"
        height="175"
        viewBox="0 0 150 175"
      >
        <path id="path" fill={`url(#${id + "grad"})`}>
          <animate
            repeatCount="indefinite"
            dur="10s"
            attributeName="d"
            values={data.variants}
          />
        </path>
      </Svg>
    </>
  );
};
