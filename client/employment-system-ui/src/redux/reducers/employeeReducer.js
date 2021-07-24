import { FETCH_EMPLOYEES } from "../actions/type";

const INITIAL_STATE = {
  employees: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: Object.values(action.payload),
      };

    default:
      return state;
  }
};
