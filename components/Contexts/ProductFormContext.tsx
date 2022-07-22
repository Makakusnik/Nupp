import { createContext } from "react";
import { ChildrenOnlyProps } from "../../types/Types";

type ProductFormContextProps = {
  productName: string;
  brandName: string;
  packingWeight: number;
  vendorAndPrice: string; // Sprav VendorAndPrice type
  foodAdditive: string; // foodAditive type
  alergens: string; // alergen type
  fats: number;
  sfa: number;
  mufa: number;
  pufa: number;
  proteins: number;
  carbohydrates: number;
  sugar: number;
  fiber: number;
  salt: number;
};

const defaultState = {
  productName: "",
  brandName: "",
  packingWeight: 0,
  vendorAndPrice: "", // Sprav VendorAndPrice type
  foodAdditive: "", // foodAditive type
  alergens: "", // alergen type
  fats: 0,
  sfa: 0,
  mufa: 0,
  pufa: 0,
  proteins: 0,
  carbohydrates: 0,
  sugar: 0,
  fiber: 0,
  salt: 0,
};

const ProductFormContext = createContext<ProductFormContextProps>(defaultState);

export const ProductFormProvider = ({ children }: ChildrenOnlyProps) => {
  return <ProductFormProvider>{children}</ProductFormProvider>;
};
