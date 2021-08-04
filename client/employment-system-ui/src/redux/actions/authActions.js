import employeesApi from "../../api/employeesApi";
import TokenService from "../../utils/tokenService";

import {
  REFRESH_TOKEN,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
} from "./type";

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
    payload: error.response.data.message,
  };
};

export const fetchUser = (formValues, history) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await employeesApi.post("/login", formValues);
    if (response.status === 200) {
      TokenService.setUser(response.data);
      dispatch(loginSuccess(response.data));
      history.push("/dashboard");
    }
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  });
};
