import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteEmployeeById } from "../../redux/actions";

import CustomButton from "../customButton/CustomButton";

const EmployeeItem = ({ employee }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <tr>
      <th scope="row">{employee.empId}</th>
      <td> {employee.firstName}</td>
      <td> {employee.lastName}</td>
      <td> {employee.dob}</td>

      <td> $ {employee.salary}</td>
      <td> {employee.email}</td>
      <td> {employee.gender}</td>

      <td>
        <CustomButton
          onClick={() => {
            history.push(`/employee/${employee.id}/edit`);
          }}
        >
          Edit
        </CustomButton>
        /
        <CustomButton
          onClick={() => {
            dispatch(deleteEmployeeById(employee.id));
          }}
        >
          Delete
        </CustomButton>
      </td>
    </tr>
  );
};

export default EmployeeItem;
