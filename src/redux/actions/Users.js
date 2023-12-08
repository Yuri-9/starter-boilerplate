import { GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_ERROR, UPDATE_USER } from "../constants/Users";

export function getUsersSuccessAction(users) {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
}

export function getUsersLoadingAction() {
  return {
    type: GET_USERS_LOADING,
  };
}

export function getUsersErrorAction(error) {
  return {
    type: GET_USERS_ERROR,
    payload: error,
  };
}
export function updateUserAction(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  };
}
