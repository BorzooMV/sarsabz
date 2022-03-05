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
              id: action.payload.noteId,
              date: new Date(),
              text: action.payload.text,
            },
          ],
        },
      };

    case DELETE_NOTE:
      return {
        user: {
          ...state.user,
          user_notes: [...state.user.user_notes].filter(
            (user) => user.id !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};
