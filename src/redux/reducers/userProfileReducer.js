import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
} from '../actions/types';

const initialState = {
  user: [],
  error: null
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null
      };
    case GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        user: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default userProfileReducer;
