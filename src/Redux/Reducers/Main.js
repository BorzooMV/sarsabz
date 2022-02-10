import {
  GET_USER_JOIN_DATE,
  GET_USER_NAME,
  GET_USER_NAME_FA,
  GET_PLANTS,
  GET_PLANTS_COUNT,
  GET_USER_RANK,
} from 'constants/ActionTypes';

import { users } from '@fakeDB';

const INIT_STATE = {
  user: {},
  plants: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return { ...state, user: { ...state.user, name: users[0].name } };

    case GET_USER_NAME_FA:
      return { ...state, user: { ...state.user, name_fa: users[0].name_fa } };

    case GET_USER_RANK:
      return { ...state, user: { ...state.user, rank: users[0].rank } };

    case GET_USER_JOIN_DATE:
      return {
        ...state,
        user: { ...state.user, join_date: users[0].join_date },
      };

    case GET_PLANTS_COUNT:
      return {
        ...state,
        user: { ...state.user, plants_count: users[0].user_plants.count },
      };

    case GET_PLANTS:
      return { ...state, plants: users[0].user_plants.plants };

    default:
      return { ...state };
  }
};
