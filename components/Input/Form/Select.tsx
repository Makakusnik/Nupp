import { Select as SelectInput } from "@chakra-ui/react";
import { forwardRef, ReactNode, Ref, SyntheticEvent } from "react";

export type SelectProps<T> = {
  name?: string;
  id: string;
  placeholder?: string;
  data: T[];
  children?: ReactNode;
  onChange: (e: SyntheticEvent<any>) => void;
};

export const Select = forwardRef(
  <T extends { name: string; id: string }>(
    { name, id, placeholder, data, children, onChange }: SelectProps<T>,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <SelectInput name={name} onChange={onChange} placeholder={placeholder} id={id} w={"100%"} ref={ref}>
        {data && data.map((item) => <option key={item.id}>{item.name}</option>)}
      </SelectInput>
    );
  }
);

Select.displayName = "Select";
