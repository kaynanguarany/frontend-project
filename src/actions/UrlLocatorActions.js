import axios from 'axios';
import {
  URL_FOUND,
  URL_NOT_FOUND,
  SEARCHING_URL
} from "./types";

const URL_API = process.env.REACT_APP_URL_API;

const searchingUrl = dispatch => dispatch({ type: SEARCHING_URL });
const urlFound = (dispatch, shortened_url) => dispatch({ type: URL_FOUND, shortened_url });
const urlNotFound = (dispatch, errors) => dispatch({ type: URL_NOT_FOUND, errors });

export const searchUrl = (url_code) => async dispatch => {
  const url = `${URL_API}/v1/shortened_urls/${url_code}`;
  searchingUrl(dispatch);

  try {
    const response = await axios.get(url);
    urlFound(dispatch, response.data);
  } catch (e) {
    urlNotFound(dispatch, e.response.data.errors);
  }
};