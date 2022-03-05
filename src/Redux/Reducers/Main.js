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

    default:
      return state;
  }
};
