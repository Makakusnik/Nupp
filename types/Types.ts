import { ReactNode } from "react";
import { Url } from "url";

export type Positionable = {
    top : string ;
    left: string;
    bottom: string;
    right: string;
  }

export type FlexType = {
  placeContent?: string;
}

export type FormProps = {
  id: string;
  children: string;
  placeholder?: string;
  name?: string;
};

export type ChildrenOnlyProps= {
  children:  ReactNode | any[] | string ;
};

export type VendorType = {
  name: string;
  url?: Url;
  residence?: string;
  image?: any;
}

export type VendorPricePairType = {
  price: number;
} & VendorType
