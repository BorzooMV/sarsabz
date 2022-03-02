import { SET_USER, SAVE_NOTE, DELETE_NOTE } from 'constants/ActionTypes';

const INIT_STATE = {
  user: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

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
