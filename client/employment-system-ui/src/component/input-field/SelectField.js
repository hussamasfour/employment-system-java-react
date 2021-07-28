import { Select } from "@material-ui/core";
import SelectField from "material-ui/SelectField";

import React from "react";

const SelectFields = ({
  input,
  label,
  children,
  meta: { touched, error },
  onChange,
  ...customProps
}) => {
  if (input.value === "" && customProps.cvalue) {
    // hack for redux form with material components
    // if (is.function(onChange)) {
    //   onChange(customProps.cvalue);
    // }
    input.onChange(customProps.cvalue);
  }
  return (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      onChange={(event, index, value) => {
        // if (is.function(onChange)) {
        //   value = onChange(value);
        // }
        input.onChange(value);
      }}
      children={children}
      {...input}
      {...customProps}
    ></SelectField>
  );
};

export default SelectFields;
