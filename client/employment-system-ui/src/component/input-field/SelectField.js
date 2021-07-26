import React from "react";
import SelectField from "material-ui/SelectField";

const SelectField = ({
  input,
  label,
  children,
  meta: { touched, error },
  ...customProps
}) => {
  return (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...input}
      {...customProps}
    />
  );
};

export default SelectField;
