import React from "react";
import { Button } from "@material-ui/core";
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <Button {...otherProps}>{children}</Button>
    </div>
  );
};

export default CustomButton;
