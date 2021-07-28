import React from "react";
import { RadioButtonGroup } from "material-ui/RadioButton";

const RadioGroup = ({
  input,

  children,
  meta: { touched, error },
}) => {
  return (
    <RadioButtonGroup
      {...input}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
      children={children}
    />
  );
};

export default RadioGroup;
