import { GET_USER, GET_QUOTES, SAVE_NOTE } from 'constants/ActionTypes';

export const get_user = {
  type: GET_USER,
};

export const get_quotes = {
  type: GET_QUOTES,
};

export const save_note = (payload) => ({
  type: SAVE_NOTE,
  payload: payload,
});
