import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchEmployeeById } from "../../redux/actions";
import EmployeeForm from "./EmployeeForm";

const EmployeeEdit = ({ match }) => {
  const selectedEmployee = useSelector((state) => state.employee.emp);
  const dispatch = useDispatch();
  const { id } = match.params;
  useEffect(() => {
    dispatch(fetchEmployeeById(id));
  }, []);

  return <EmployeeForm editMode employee={selectedEmployee} />;
};

export default EmployeeEdit;
