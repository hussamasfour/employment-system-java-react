import React from "react";
const InputField = ({
  input,
  label,
  type,
  cvalue,
  meta: { touched, error, submitFailed },
  ...customProps
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} {...customProps} />
        {touched && error && submitFailed && <span>{error}</span>}
      </div>
    </div>
  );
};

export default InputField;
