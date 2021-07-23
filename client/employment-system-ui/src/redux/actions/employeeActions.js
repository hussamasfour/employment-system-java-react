import employeesApi from "../../api/employeesApi";
import { FETCH_EMPLOYEES } from "./type";

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await employeesApi.get("/api/employees");
    dispatch({ type: FETCH_EMPLOYEES, payload: response.data });
  } catch (error) {
    console.log(error.response.data);
  }
};
