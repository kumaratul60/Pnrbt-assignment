import { GET_USER_DATA, GET_USER_LIST_SUCCESS, logout_User } from '../actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USER_LIST_SUCCESS:
      return { ...state, users: action.res };
    case GET_USER_DATA:
      return {
        ...state,
        activeUser: state.users.find(user => user.id === action.userId)
      };
      case logout_User:
        return {
          ...state,
          activeUser: state.users.find(user => user.id === action.null)
          

        }
    default:
      return state;
  }
};

export default users;
