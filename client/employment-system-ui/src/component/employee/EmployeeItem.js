import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteEmployeeById } from "../../redux/actions";
import calculateAge from "../../utils/calculateAge";

import CustomButton from "../customButton/CustomButton";

const EmployeeItem = ({ employee }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <tr scope="row">
      <th className="p-3">{employee.empId}</th>
      <td className="p-3 "> {employee.firstName}</td>
      <td className="p-3"> {employee.lastName}</td>
      <td className="p-3"> {calculateAge(employee.dob)}</td>
      <td className="p-3">
        <CurrencyFormat
          value={employee.salary}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />{" "}
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
            dispatch(deleteEmployeeById(employee.id));
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
