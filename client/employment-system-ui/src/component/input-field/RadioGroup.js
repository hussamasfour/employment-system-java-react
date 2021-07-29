import React from "react";
import { RadioButtonGroup } from "material-ui/RadioButton";

const RadioGroup = ({ input, hidden, children, meta: { touched, error } }) => {
  return (
    <RadioButtonGroup
      {...input}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
      {...hidden}
      children={children}
    />
  );
};

export default RadioGroup;
