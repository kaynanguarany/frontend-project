import {
  URL_CHANGED,
  SAVING_URL,
  ERROR_URL,
  SUCCESS_URL
} from "../actions/types";

const INITIAL_STATE = {
  url: "",
  shortened_url: {},
  loading: false,
  errors: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case URL_CHANGED:
      return { ...state, ...INITIAL_STATE, url: action.url, errors: [] };
    case SAVING_URL:
      return { ...state, loading: true };
    case SUCCESS_URL:
      return { ...state, loading: false, shortened_url: { ...action.shortened_url } };
    case ERROR_URL:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};
