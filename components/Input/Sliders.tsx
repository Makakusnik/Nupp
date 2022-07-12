import {
  VStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  HStack,
  Input,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface RangeSliderProps {
  ariaValues: string[];
  defaultValues: number[];
  placeholderValues: string[];
  title?: string;
}

export const RangeSliderWInput = ({
  ariaValues,
  defaultValues,
  placeholderValues,
  title,
}: RangeSliderProps) => {
  const [min, setMin] = useState<number>(defaultValues[0]);
  const [max, setMax] = useState<number>(defaultValues[1]);
  const [definiteMin, setDefiniteMin] = useState<number>(defaultValues[0]);
  const [definiteMax, setDefiniteMax] = useState<number>(defaultValues[1]);

  /*
   * Checks if values minimal value is lower than max, and vice versa, then
   * then sets definite values and indefinite values accordingly.
   */
  const handleChangeRangeSlider = (values: number[]) => {
    const minValue = values[0] > values[1] ? values[1] : values[0];
    const maxValue = values[0] > values[1] ? values[0] : values[1];
    setDefiniteMin(minValue);
    setMin(minValue);
    setDefiniteMax(maxValue);
    setMax(maxValue);
  };

  /* Minimal Value
   * Sets indifinite value to state.
   */
  const handleChangeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMin(Number(e.target.value));
  };

  /* Maximal Value
   * Sets indifinite value to state.
   */
  const handleChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMax(Number(e.target.value));
  };

  /* Minimal Value
   * Resets indefinite value according rules and sets definite value according same rules.
   */
  const handleBlurMin = (e: ChangeEvent<HTMLInputElement>) => {
    setMin(min > max ? max : min);
    setDefiniteMin(min > max ? max : min);
  };

  /* Maximal Value
   * Resets indefinite value according rules and sets definite value according same rules.
   */
  const handleBlurMax = (e: ChangeEvent<HTMLInputElement>) => {
    setMax(min > max ? min : max);
    setDefiniteMax(min > max ? min : max);
  };

  return (
    <VStack alignItems="start">
      <Checkbox size="sm">{title}</Checkbox>
      <RangeSlider
        w="100%"
        colorScheme="green"
        aria-label={ariaValues}
        defaultValue={defaultValues}
        value={[definiteMin, definiteMax]}
        onChange={handleChangeRangeSlider}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <HStack justifyContent="space-between" w="100%">
        <Input
          type="number"
          placeholder={placeholderValues[0]}
          size="xs"
          w="40px"
          onChange={handleChangeInputMin}
          onBlur={handleBlurMin}
          value={min}
        ></Input>
        <Input
          type="number"
          colorScheme="green"
          placeholder={placeholderValues[1]}
          size="xs"
          w="40px"
          onChange={handleChangeInputMax}
          onBlur={handleBlurMax}
          value={max}
        ></Input>
      </HStack>
    </VStack>
  );
};

// Možno použijem ako Compound v buducnosti.

// const RangeSliderCC = ({
//   ariaValues,
//   defaultValues,
//   placeholderValues,
// }: RangeSliderProps) => {
//   const [min, setMin] = useState<number>(defaultValues[0]);
//   const [max, setMax] = useState<number>(defaultValues[1]);
//   const [definiteMin, setDefiniteMin] = useState<number>(defaultValues[0]);
//   const [definiteMax, setDefiniteMax] = useState<number>(defaultValues[1]);

//   /*
//    * Checks if values minimal value is lower than max, and vice versa, then
//    * then sets definite values and indefinite values accordingly.
//    */
//   const handleChangeRangeSlider = (values: number[]) => {
//     const minValue = values[0] > values[1] ? values[1] : values[0];
//     const maxValue = values[0] > values[1] ? values[0] : values[1];
//     setDefiniteMin(minValue);
//     setMin(minValue);
//     setDefiniteMax(maxValue);
//     setMax(maxValue);
//   };

//   /* Minimal Value
//    * Sets indifinite value to state.
//    */
//   const handleChangeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     setMin(Number(e.target.value));
//   };

//   /* Maximal Value
//    * Sets indifinite value to state.
//    */
//   const handleChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     setMax(Number(e.target.value));
//   };

//   /* Minimal Value
//    * Resets indefinite value according rules and sets definite value according same rules.
//    */
//   const handleBlurMin = (e: ChangeEvent<HTMLInputElement>) => {
//     setMin(min > max ? max : min);
//     setDefiniteMin(min > max ? max : min);
//   };

//   /* Maximal Value
//    * Resets indefinite value according rules and sets definite value according same rules.
//    */
//   const handleBlurMax = (e: ChangeEvent<HTMLInputElement>) => {
//     setMax(min > max ? min : max);
//     setDefiniteMax(min > max ? min : max);
//   };

//   return (
//     <VStack>
//       <RangeSliderCCC
//         definiteValues={[definiteMin, definiteMax]}
//         ariaValues={["min", "max"]}
//         handleChangeSlider={handleChangeRangeSlider}
//         defaultValues={[0, 150]}
//       />
//       <HStack justifyContent="space-between" w="100%">
//         <InputCC
//           placeholderValue={placeholderValues[0]}
//           value={min}
//           handleBlur={handleBlurMin}
//           handleChange={handleChangeInputMin}
//         />
//         <InputCC
//           placeholderValue={placeholderValues[1]}
//           value={max}
//           handleBlur={handleBlurMax}
//           handleChange={handleChangeInputMax}
//         />
//       </HStack>
//     </VStack>
//   );
// };

// interface RangeSliderPropsC {
//   definiteValues: number[];
//   ariaValues: string[];
//   defaultValues: number[];
//   handleChangeSlider: (values: number[]) => void;
// }

// const RangeSliderCCC = ({
//   definiteValues,
//   ariaValues,
//   defaultValues,
//   handleChangeSlider,
// }: RangeSliderPropsC) => {
//   return (
//     <RangeSlider
//       w="100%"
//       colorScheme="green"
//       aria-label={ariaValues}
//       defaultValue={defaultValues}
//       value={definiteValues}
//       onChange={handleChangeSlider}
//     >
//       <RangeSliderTrack>
//         <RangeSliderFilledTrack />
//       </RangeSliderTrack>
//       <RangeSliderThumb index={0} />
//       <RangeSliderThumb index={1} />
//     </RangeSlider>
//   );
// };

// interface InputCCProps {
//   placeholderValue: string;
//   handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
//   value: number;
// }

// const InputCC = ({
//   placeholderValue,
//   handleChange,
//   handleBlur,
//   value,
// }: InputCCProps) => (
//   <Input
//     type="number"
//     placeholder={placeholderValue}
//     size="xs"
//     w="40px"
//     onChange={handleChange}
//     onBlur={handleBlur}
//     value={value}
//   ></Input>
// );
