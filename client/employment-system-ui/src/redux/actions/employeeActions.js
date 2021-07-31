import employeesApi from "../../api/employeesApi";
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE_BY_ID,
  UPDATE_EMPLOYEE,
} from "./type";

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await employeesApi.get("/api/employees");
    dispatch({ type: FETCH_EMPLOYEES, payload: response.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const addEmployee = (values, history) => async (dispatch) => {
  try {
    const response = await employeesApi.post("/api/employees", values);
    dispatch({ type: ADD_EMPLOYEE, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    console.log(error.response.data);
  }
};

export const updateEmployee = (values, history) => async (dispatch) => {
  try {
    const response = await employeesApi.put(
      "/api/employee/" + values.id,
      values
    );
    dispatch({ type: UPDATE_EMPLOYEE, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    console.log(error.response.data);
  }
};

export const fetchEmployeeById = (id) => async (dispatch) => {
  try {
    const response = await employeesApi.get("/api/employee/" + id);
    dispatch({ type: FETCH_EMPLOYEE_BY_ID, payload: response.data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteEmployeeById = (id) => async (dispatch) => {
  try {
    const response = await employeesApi.delete("/api/employee/" + id);
    dispatch({ type: DELETE_EMPLOYEE, payload: response.data });
  } catch (error) {
    console.log(error.response.data);
  }
};
