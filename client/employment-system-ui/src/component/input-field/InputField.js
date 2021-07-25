import React from "react";
const InputField = ({
  input,
  label,
  type,
  meta: { touched, error, submitFailed },
}) => {
  return (
    <div className="col-md-6 g-3 ">
      <label className="form-label" htmlFor={label}>
        {label}
      </label>

      <input
        {...input}
        type={type}
        placeholder={label}
        id={label}
        className="form-control"
      />
      {touched && error && submitFailed && (
        <span className="alert alert-danger">{error}</span>
      )}
    </div>
  );
};

export default InputField;
