import { TextField } from "@material-ui/core";
import React from "react";
const InputField = ({
  input,
  label,
  meta: { touched, error, submitFailed },
  ...customProps
}) => {
  return (
    <TextField
      label={label}
      floatingLabelText={label}
      helperText={touched && error}
      {...input}
      {...customProps}
    />
  );
};

export default InputField;
