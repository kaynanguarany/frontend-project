import {
  URL_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  url: "",
  errors: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case URL_CHANGED:
      return { ...state, ...INITIAL_STATE, url: action.url };
    default:
      return state;
  }
};
