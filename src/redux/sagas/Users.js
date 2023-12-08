import { put, takeEvery } from "redux-saga/effects";
import { getUsersSuccessAction, getUsersErrorAction } from "redux/actions";
import { GET_USERS_LOADING } from "redux/constants/Users";
import UserService from "services/UserService";

function* getUser() {
  try {
    const users = yield UserService.getUsers();

    yield put(getUsersSuccessAction(users));
  } catch (e) {
    yield put(getUsersErrorAction());
  }
}

export default function* usersSaga() {
  yield takeEvery(GET_USERS_LOADING, getUser);
}
