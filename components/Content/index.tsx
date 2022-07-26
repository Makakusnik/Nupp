import { SyntheticEvent } from "react";

export { MealForm } from "./Pages/products/add/mealAdd";
export { ProductForm } from "./Pages/products/add/productAdd";

export const handleSimpleTextInput = (
  e: SyntheticEvent<HTMLInputElement>,
  setter: ((value: string) => void) | null
) => {
  if (setter) setter(e.currentTarget.value);
};

export const handleSimpleNumberInput = (
  e: SyntheticEvent<HTMLInputElement>,
  setter: ((value: number) => void) | null
) => {
  if (setter) setter(Number(e.currentTarget.value));
};

export type SimpleFieldType<T> = {
  setter: ((value: T) => void) | null;
};
