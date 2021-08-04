import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEmployeeById, updateEmployee } from "../../redux/actions";
import EmployeeForm from "./EmployeeForm";

const EmployeeEdit = () => {
  const selectedEmployee = useSelector((state) => state.employee.emp);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchEmployeeById(id));
  }, [dispatch]);

  const handleEmpUpdate = (values, history) => {
    dispatch(updateEmployee(values, history));
  };

  return (
    <EmployeeForm
      editMode
      initialValues={selectedEmployee}
      handleEmpUpdate={handleEmpUpdate}
    />
  );
};

export default EmployeeEdit;
