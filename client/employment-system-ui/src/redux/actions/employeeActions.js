import employeesApi from "../../api/employeesApi";
import {
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE_BY_ID,
  FETCH_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE,
} from "./type";

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await employeesApi.get("/employees");
    dispatch({ type: FETCH_EMPLOYEES, payload: response.data });
  } catch (error) {
    dispatch({
      type: FETCH_EMPLOYEE_FAILURE,
      payload: error.response || "Something went wrong, please try again",
    });
  }
};

export const addEmployee = (values, history) => async (dispatch) => {
  try {
    const response = await employeesApi.post("/employees", values);
    dispatch({ type: ADD_EMPLOYEE, payload: response.data });
    history.push("/");
  } catch (error) {
    dispatch({
      type: FETCH_EMPLOYEE_FAILURE,
      payload: error.response || "Something went wrong, please try again",
    });
  }
};

export const updateEmployee = (values, history) => async (dispatch) => {
  try {
    const response = await employeesApi.put("/employee/" + values.id, values);
    dispatch({ type: UPDATE_EMPLOYEE, payload: response.data });
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: FETCH_EMPLOYEE_FAILURE,
      payload: error.response || "Something went wrong, please try again",
    });
  }
};

export const fetchEmployeeById = (id) => async (dispatch) => {
  try {
    const response = await employeesApi.get("/employee/" + id);
    dispatch({ type: FETCH_EMPLOYEE_BY_ID, payload: response.data });
  } catch (error) {
    dispatch({
      type: FETCH_EMPLOYEE_FAILURE,
      payload: error.response || "Something went wrong, please try again",
    });
  }
};

export const deleteEmployeeById = (id) => async (dispatch) => {
  try {
    const response = await employeesApi.delete("/employee/" + id);
    dispatch({ type: DELETE_EMPLOYEE, payload: id });
  } catch (error) {
    dispatch({
      type: FETCH_EMPLOYEE_FAILURE,
      payload: error.response || "Something went wrong, please try again",
    });
  }
};
