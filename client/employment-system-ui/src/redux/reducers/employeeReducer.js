import {
  ADD_EMPLOYEE,
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE_BY_ID,
  FETCH_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../actions/type";

const INITIAL_STATE = {
  employees: [],
  emp: null,
  ms: null,
  errorMessage: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        errorMessage: null,
      };

    case ADD_EMPLOYEE:
      return { ...state, ms: action.payload, errorMessage: null };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? { ...action.payload } : emp
        ),
        errorMessage: null,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((emp) => {
          return emp.id !== action.payload;
        }),
      };
    case FETCH_EMPLOYEE_BY_ID:
      return { ...state, emp: action.payload, errorMessage: null };

    case FETCH_EMPLOYEE_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
