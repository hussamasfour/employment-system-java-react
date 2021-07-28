import { TextField } from "@material-ui/core";
import React from "react";
const InputField = ({
  input,
  label,
  meta: { touched, error, submitFailed },
  ...customProps
}) => {
  if (input.value === "" && customProps.cvalue) {
    input.onChange(String(customProps.cvalue));
  }
  return (
    <TextField
      label={label}
      helperText={touched && error}
      {...input}
      {...customProps}
    />
  );
};

export default InputField;
