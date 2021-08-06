import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import calculateAge from "../../utils/calculateAge";

import CustomButton from "../customButton/CustomButton";

const EmployeeItem = ({ employee, onDeleteClick }) => {
  const history = useHistory();

  return (
    <tr>
      <th className="p-3" scope="row">
        {employee.empId}
      </th>
      <td className="p-3 "> {employee.firstName}</td>
      <td className="p-3"> {employee.lastName}</td>
      <td className="p-3"> {employee.department.departmentName}</td>
      <td className="p-3"> {calculateAge(employee.dob)}</td>
      <td className="p-3">
        <CurrencyFormat
          value={employee.salary}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </td>
      <td className="p-3"> {employee.email}</td>

      <td className="p-3">
        <CustomButton
          onClick={() => {
            history.push(`/employee/${employee.id}/edit`);
          }}
          className="btn-dark m-1"
        >
          Edit
        </CustomButton>

        <CustomButton
          onClick={() => {
            onDeleteClick(employee.id);
          }}
          className=" btn-danger m-1"
        >
          Delete
        </CustomButton>
      </td>
    </tr>
  );
};

export default EmployeeItem;
