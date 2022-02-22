import { GET_USER, GET_QUOTES, SAVE_NOTE } from 'constants/ActionTypes';

import { users, quotes as dbQuotes } from '@fakeDB';

const INIT_STATE = {
  user: {},
  quotes: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: users[0] };

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

    default:
      return { ...state };
  }
};
