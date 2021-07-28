import React from "react";
import { Button } from "@material-ui/core";
const CustomButton = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
