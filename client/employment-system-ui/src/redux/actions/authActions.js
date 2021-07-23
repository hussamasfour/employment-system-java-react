import employeesApi from "../../api/employeesApi";
import tokenHandler from "../../utils/tokenHandler";
// import history from "../../history";
import { SIGN_IN_FAILURE, SIGN_IN_START, SIGN_IN_SUCCESS } from "./type";

export const loginStart = () => {
  return {
    type: SIGN_IN_START,
  };
};
export const loginSuccess = (user) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error.response.data,
  };
};

export const fetchUser = (formValues, history) => async (dispatch) => {
  try {
    dispatch(loginStart);
    const response = await employeesApi.post("/api/login", formValues);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.accessToken);
      tokenHandler(response.data.accessToken);
      dispatch(loginSuccess(response.data));
    }
  } catch (error) {
    // dispatch(loginFailure(error));
  }
  history.push("/dashboard");
};
