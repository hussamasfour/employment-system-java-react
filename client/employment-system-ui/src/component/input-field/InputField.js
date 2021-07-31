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
    <div className="form-outline form-white mb-4">
      <label className="form-label" htmlFor="typeEmailX">
        {label}
      </label>
      <input {...input} type={type} {...customProps} id="typeEmailX" />
      {touched && error && submitFailed && (
        <span className="bg-danger">{error}</span>
      )}
    </div>
  );
};

export default InputField;
