import { SyntheticEvent } from "react";
export { MealForm } from "./Pages/products/add/meal";
export { ProductForm } from "./Pages/products/add/product";

// Here are some utilities shared between subdirectories of this directory.

export function handleRemoveFactoryFunction<T extends { id: string }>(array: T[], setter: (arg: T[]) => void) {
  return (id: string) => {
    setter(array.filter((item) => item.id !== id));
  };
}
