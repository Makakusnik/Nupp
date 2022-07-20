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
export type FormFieldProps = {
  leftAddon?: string;
  type: "text" | "number" | "email";
  rightAddon?: string;
  paddingLeft?: string;
  inputWidth?: string;
  labelWidth?: string;
  fieldWidth?: string;
  tooltip?: string;
};



export type FormSelectProps<T> = {
  data: T[];
};
