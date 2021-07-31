import React from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/actions";
import EmployeeForm from "./EmployeeForm";

const EmployeeNew = () => {
  const dispatch = useDispatch();

  const handleNewEmpSubmit = (values, history) => {
    dispatch(addEmployee(values, history));
  };
  return <EmployeeForm handleNewEmpSubmit={handleNewEmpSubmit} />;
};

export default EmployeeNew;
