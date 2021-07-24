import React from "react";

const EmployeeItem = ({ employee }) => {
  return (
    <div className="d-flex flex-row">
      <div className="p-2"> {employee.firstName}</div>
      <div className="p-2"> {employee.lastName}</div>
      <div className="p-2"> {employee.dob}</div>
      <div className="p-2"> {employee.empId}</div>
      <div className="p-2"> {employee.salary}</div>
      <div className="p-2"> fetchEmployees</div>
      <div className="p-2"> fetchEmployees</div>
    </div>
  );
};

export default EmployeeItem;
