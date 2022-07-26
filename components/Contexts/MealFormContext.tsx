import { createContext } from "react";
import { ChildrenOnlyProps } from "../../types/Types";

type MealFormContextProps = {};

const defaultState = {};

export const MealFormContext = createContext<MealFormContextProps>(defaultState);

export const MealFormContextProvider = ({ children }: ChildrenOnlyProps) => {
  return <MealFormContext.Provider value={{}}>{children}</MealFormContext.Provider>;
};
