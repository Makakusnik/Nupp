import { SyntheticEvent } from "react";
export { MealForm } from "./Pages/products/add/meal";
export { ProductForm } from "./Pages/products/add/product";

// Here are some utilities shared between subdirectories of this directory.

export function handleRemoveFactoryFunction<T extends { id: string }>(array: T[], setter: (arg: T[]) => void) {
  return (id: string) => {
    setter(array.filter((item) => item.id !== id));
  };
}

export function handleSelectFactoryFunction<T extends { id: string }>(
  data: T[],
  array: T[],
  setter: (arg: T[]) => void
) {
  return (e: SyntheticEvent) => {
    e.preventDefault();
    if (e.type === "click") {
      const event = e as SyntheticEvent<HTMLButtonElement>;
      event.preventDefault();
      const value = event.currentTarget.dataset.id;
      if (array!.some((item) => item.id === value)) {
        return;
      }
      setter!([{ ...data.filter((item) => item.id === value)[0] }, ...array]);
    } else {
      const event = e as SyntheticEvent<HTMLSelectElement>;
      const value = event.currentTarget.options[event.currentTarget.selectedIndex].dataset.id;
      if (event.currentTarget.selectedIndex === 0 || (array && array.some((item) => item.id === value))) {
        event.currentTarget.selectedIndex = 0;
        return;
      }
      event.currentTarget.selectedIndex = 0;
      setter!([{ ...data.filter((item) => item.id === value)[0] }, ...array]);
    }
  };
}
