import { GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_ERROR } from "../constants/Users";

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
