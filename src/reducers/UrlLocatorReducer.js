import {
  URL_FOUND,
  URL_NOT_FOUND,
  SEARCHING_URL
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  found: null,
  shortened_url: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCHING_URL:
      return { ...state, ...INITIAL_STATE, loading: true };
    case URL_FOUND:
      return { ...state, loading: false, found: true, shortened_url: action.shortened_url };
    case URL_NOT_FOUND:
      return { ...state, loading: false, found: false };
    default:
      return state;
  }
};
