import {
  GET_USER,
  GET_QUOTES,
  SAVE_NOTE,
  DELETE_NOTE,
} from 'constants/ActionTypes';

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

export const delete_note = (noteID) => ({
  type: DELETE_NOTE,
  payload: noteID,
});
