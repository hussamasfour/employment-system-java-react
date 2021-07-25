import { ADD_EMPLOYEE, FETCH_EMPLOYEES } from "../actions/type";

const INITIAL_STATE = {
  employees: [],
  ms: "",
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case ADD_EMPLOYEE:
      return { ...state, ms: action.payload };
    default:
      return state;
  }
};
