import React from "react";

const EmployeeItem = ({ employee }) => {
  return (
    <tr>
      <th scope="row">{employee.empId} </th>
      <td> {employee.firstName}</td>
      <td> {employee.lastName}</td>
      <td> {employee.dob}</td>

      <td> {employee.salary}</td>
      <td> fetchEmployees</td>
      <td> fetchEmployees</td>
    </tr>
  );
};

export default EmployeeItem;
