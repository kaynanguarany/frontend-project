import axios from 'axios';
import {
  URL_CHANGED,
  SAVING_URL,
  ERROR_URL,
  SUCCESS_URL
} from "./types";

const URL_API = process.env.REACT_APP_URL_API;

const savingUrl = dispatch => dispatch({ type: SAVING_URL });
const successUrl = (dispatch, shortened_url) => dispatch({ type: SUCCESS_URL, shortened_url });
const errorUrl = (dispatch, errors) => dispatch({ type: ERROR_URL, errors });

export const urlChanged = (url) => ( { type: URL_CHANGED, url } )

export const sendUrl = _ => async (dispatch, getState) => {
  savingUrl(dispatch);
  const { home } = getState();
  const url = `${URL_API}/v1/shortened_urls`;
  const params = { shortened_url: { destination_url: home.url } };

  try {
    const response = await axios.post(url, params);
    successUrl(dispatch, response.data);
  } catch (e) {
    errorUrl(dispatch, e.response.data.errors);
  }
};