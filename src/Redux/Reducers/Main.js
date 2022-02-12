import { GET_USER } from 'constants/ActionTypes';

import { users } from '@fakeDB';

const INIT_STATE = {
  user: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: users[0] };

    default:
      return { ...state };
  }
};
