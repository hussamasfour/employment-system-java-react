import {
  ADD_EMPLOYEE,
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEE_BY_ID,
  UPDATE_EMPLOYEE,
} from "../actions/type";

const INITIAL_STATE = {
  employees: [],
  emp: {},
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

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? { ...action.payload } : emp
        ),
      };

    case FETCH_EMPLOYEE_BY_ID:
      return { ...state, emp: action.payload };
    default:
      return state;
  }
};
