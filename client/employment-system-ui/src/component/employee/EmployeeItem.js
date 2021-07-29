import { TableCell } from "@material-ui/core";
import { TableRow } from "material-ui";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import CustomButton from "../customButton/CustomButton";
const EmployeeItem = ({ employee, history }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {employee.empId}
      </TableCell>
      <TableCell align="right"> {employee.firstName}</TableCell>
      <TableCell align="right"> {employee.lastName}</TableCell>
      <TableCell align="right"> {employee.dob}</TableCell>

      <TableCell align="right"> {employee.salary}</TableCell>
      <TableCell align="right"> {employee.email}</TableCell>
      <TableCell align="right">
        <CustomButton
          variant="contained"
          size="small"
          onClick={() => {
            history.push(`employee/${employee.id}/edit`);
          }}
        >
          Edit
        </CustomButton>
        /
        <CustomButton variant="contained" color="secondary" size="small">
          Delete
        </CustomButton>
      </TableCell>
    </TableRow>
  );
};

export default withRouter(EmployeeItem);
