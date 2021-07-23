import React from "react";
const InputField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          {...input}
          type={type}
          placeholder={label}
          id={label}
          className="form-control"
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default InputField;
