import React from "react";
import { Link } from "react-router-dom";
const EmployeeItem = ({ employee, history }) => {
  return (
    <tr>
      <th scope="row">{employee.empId} </th>
      <td> {employee.firstName}</td>
      <td> {employee.lastName}</td>
      <td> {employee.dob}</td>

      <td> {employee.salary}</td>
      <td> {employee.email}</td>
      <td>
        <Link to={`employee/${employee.id}/edit`}>Edit</Link>
      </td>
    </tr>
  );
};

export default EmployeeItem;
