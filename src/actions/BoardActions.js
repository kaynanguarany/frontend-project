import axios from 'axios';
import {
  LIST_LOADED,
  LOADING_LIST,
  ERROR_LIST
} from "./types";

const URL_API = process.env.REACT_APP_URL_API;

const loadingList = dispatch => dispatch({ type: LOADING_LIST });
const listLoaded = (dispatch, list) => dispatch({ type: LIST_LOADED, list });
const errorList = (dispatch, errors) => dispatch({ type: ERROR_LIST, errors });

export const fetchList = () => async dispatch => {
  const url = `${URL_API}/v1/shortened_urls`;
  loadingList(dispatch);

  try {
    const response = await axios.get(url);
    listLoaded(dispatch, response.data);
  } catch (e) {
    errorList(dispatch, e.response.data.errors);
  }
};