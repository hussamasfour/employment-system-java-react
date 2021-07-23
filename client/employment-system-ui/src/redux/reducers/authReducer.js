import {
  SIGN_IN_FAILURE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
} from "../actions/type";

const INITIAL_STATE = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  errorMessage: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
