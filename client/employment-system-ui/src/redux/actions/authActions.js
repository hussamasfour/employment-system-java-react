import employeesApi from "../../api/employeesApi";
import TokenService from "../../utils/tokenService";

import {
  LOGOUT,
  REFRESH_TOKEN,
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./type";

export const fetchUser = (formValues, history) => async (dispatch) => {
  try {
    dispatch({
      type: SIGN_IN_START,
    });
    const response = await employeesApi.post("/login", formValues);
    if (response.status === 200) {
      TokenService.setUser(response.data);
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: response.data,
      });
      history.push("/");
    }
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const registerUser = (formValues, history) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_UP_START });
    const response = await employeesApi.post("/signup", formValues);
    dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    history.push("/login");
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILURE, payload: error.response.data.message });
  }
};

export const logout = () => (dispatch) => {
  TokenService.removeUser();
  dispatch({
    type: LOGOUT,
  });
};
export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  });
};
