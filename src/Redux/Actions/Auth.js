import { SET_USER, SAVE_NOTE, DELETE_NOTE } from 'constants/ActionTypes';

export const set_user = (user) => ({
  type: SET_USER,
  payload: user,
});

export const save_note = (payload) => ({
  type: SAVE_NOTE,
  payload: payload,
});

export const delete_note = (noteID) => ({
  type: DELETE_NOTE,
  payload: noteID,
});
