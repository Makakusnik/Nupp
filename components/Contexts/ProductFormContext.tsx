import { createContext, useState } from "react";
import { Alergen, FoodAdditive } from "../../testdata/data";
import { ChildrenOnlyProps, VendorPricePairType } from "../../types/Types";

type ProductFormContextProps = {
  productName: string;
  productNameSetter: null | ((value: string) => void);
  brandName: string;
  brandNameSetter: null | ((value: string) => void);
  packingWeight: number;
  packingWeightSetter: null | ((value: number) => void);
  vendorAndPriceValues: VendorPricePairType[]; // Sprav VendorAndPrice type
  vendorAndPriceValuesSetter: null | ((value: VendorPricePairType[]) => void);
  foodAdditives: FoodAdditive[]; // foodAditive type
  foodAdditivesSetter: null | ((value: FoodAdditive[]) => void);
  alergens: Alergen[]; // alergen type
  alergensSetter: null | ((value: Alergen[]) => void);
  fats: number;
  fatsSetter: null | ((value: number) => void);
  sfa: number;
  sfaSetter: null | ((value: number) => void);
  mufa: number;
  mufaSetter: null | ((value: number) => void);
  pufa: number;
  pufaSetter: null | ((value: number) => void);
  proteins: number;
  proteinsSetter: null | ((value: number) => void);
  carbohydrates: number;
  carbohydratesSetter: null | ((value: number) => void);
  sugar: number;
  sugarSetter: null | ((value: number) => void);
  fiber: number;
  fiberSetter: null | ((value: number) => void);
  salt: number;
  saltSetter: null | ((value: number) => void);
};

const defaultState = {
  productName: "",
  productNameSetter: null,
  brandName: "",
  brandNameSetter: null,
  packingWeight: 0,
  packingWeightSetter: null,
  vendorAndPriceValues: [],
  vendorAndPriceValuesSetter: null,
  foodAdditives: [], // foodAditive type
  foodAdditivesSetter: null,
  alergens: [], // alergen type
  alergensSetter: null,
  fats: 0,
  fatsSetter: null,
  sfa: 0,
  sfaSetter: null,
  mufa: 0,
  mufaSetter: null,
  pufa: 0,
  pufaSetter: null,
  proteins: 0,
  proteinsSetter: null,
  carbohydrates: 0,
  carbohydratesSetter: null,
  sugar: 0,
  sugarSetter: null,
  fiber: 0,
  fiberSetter: null,
  salt: 0,
  saltSetter: null,
};

export const ProductFormContext = createContext<ProductFormContextProps>(defaultState);

export const ProductFormProvider = ({ children }: ChildrenOnlyProps) => {
  const [productName, productNameSetter] = useState<string>("");
  const [brandName, brandNameSetter] = useState<string>("");
  const [packingWeight, packingWeightSetter] = useState<number>(0);
  const [vendorAndPrice, vendorAndPriceValuesSetter] = useState<VendorPricePairType[]>([]);
  const [foodAdditives, foodAdditivesSetter] = useState<FoodAdditive[]>([]);
  const [alergens, alergensSetter] = useState<Alergen[]>([]);
  const [fats, fatsSetter] = useState<number>(0);
  const [sfa, sfaSetter] = useState<number>(0);
  const [mufa, mufaSetter] = useState<number>(0);
  const [pufa, pufaSetter] = useState<number>(0);
  const [proteins, proteinsSetter] = useState<number>(0);
  const [carbohydrates, carbohydratesSetter] = useState<number>(0);
  const [sugar, sugarSetter] = useState<number>(0);
  const [fiber, fiberSetter] = useState<number>(0);
  const [salt, saltSetter] = useState<number>(0);

  return (
    <ProductFormContext.Provider
      value={{
        productName,
        productNameSetter,
        brandName,
        brandNameSetter,
        packingWeight,
        packingWeightSetter,
        vendorAndPriceValues: vendorAndPrice,
        vendorAndPriceValuesSetter,
        foodAdditives: foodAdditives,
        foodAdditivesSetter,
        alergens,
        alergensSetter,
        fats,
        fatsSetter,
        sfa,
        sfaSetter,
        mufa,
        mufaSetter,
        pufa,
        pufaSetter,
        proteins,
        proteinsSetter,
        carbohydrates,
        carbohydratesSetter,
        sugar,
        sugarSetter,
        fiber,
        fiberSetter,
        salt,
        saltSetter,
      }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};
