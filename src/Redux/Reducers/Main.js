import {
  GET_USERS,
  GET_QUOTES,
  SAVE_NOTE,
  DELETE_NOTE,
} from 'constants/ActionTypes';

import { users, quotes as dbQuotes } from '@fakeDB';

const INIT_STATE = {
  users: [],
  quotes: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: users };

    case GET_QUOTES:
      return { ...state, quotes: [...dbQuotes] };

    case SAVE_NOTE:
      return {
        ...state,
        user: {
          ...state.user,
          user_notes: [
            ...state.user.user_notes,
            {
              date: new Date(),
              text: action.payload,
            },
          ],
        },
      };

    case DELETE_NOTE:
      return {
        ...state,
        user: {
          ...state.user,
          user_notes: [
            ...state.user.user_notes.filter(
              (note) => note.id !== action.payload
            ),
          ],
        },
      };

    default:
      return state;
  }
};
