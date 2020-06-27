import {
  LIST_LOADED,
  LOADING_LIST,
  ERROR_LIST
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  list: [],
  errors: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_LIST:
      return { ...state, ...INITIAL_STATE, loading: true };
    case LIST_LOADED:
      return { ...state, loading: false, list: action.list };
    case ERROR_LIST:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};
