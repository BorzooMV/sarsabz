import { TEST_ON, TEST_OFF } from 'constants/ActionTypes';

const INIT_STATE = {
  //some initial values
  testMode: 'off',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TEST_ON: {
      return { ...state, testMode: 'on' };
    }
    case TEST_OFF: {
      return { ...state, testMode: 'off' };
    }
    default: {
      return { ...state };
    }
  }
};
