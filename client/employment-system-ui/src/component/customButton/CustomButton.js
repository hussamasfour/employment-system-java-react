import React from "react";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <button className="btn btn-primary" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
