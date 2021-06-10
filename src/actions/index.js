import Axios from 'axios';
import { GET_USER_LIST_SUCCESS, GET_USER_DATA,logout_User } from '../actionTypes';

export const getUserList = () => {
  return async dispatch => {
    const res = await Axios.get('https://panorbit.in/api/users.json');
    dispatch(getUserListSuccess(res.data.users));
    // .catch(err => console.log(err));
  };
};

export const getUserListSuccess = res => ({
  type: GET_USER_LIST_SUCCESS,
  res
});

export const getUserData = userId => ({
  type: GET_USER_DATA,
  userId
});
export const setOutUser = userId => ({
  type: logout_User,
  userId
});
