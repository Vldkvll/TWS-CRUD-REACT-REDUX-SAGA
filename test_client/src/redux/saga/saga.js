import { takeLatest, put, takeEvery, call } from 'redux-saga/effects'
import {createUserApi, getUsersApi, deleteUserApi, updateUserApi, getFilterUsersApi} from '../../api/api';
import * as actions from '../actions/actionCreators'
import {
  CREATE_USER,
  CREATE_USER_FAILURE, DELETE_USER, DELETE_USER_FAILURE, FETCH_FILTER, FETCH_FILTER_USERS_FAILURE,
  FETCH_USERS,
  FETCH_USERS_FAILURE, UPDATE_USER,
  UPDATE_USER_FAILURE
} from "../actions/types";

export function* createUser(action) {
  try {
    const data = yield call(createUserApi, action.payload);
    yield put(actions.createUser(data));
    yield call(fetchUser);
  } catch (error) {
    yield put({ type: CREATE_USER_FAILURE })
    console.error(error);
  }
}

export function* watchCreateUser() {
  yield takeEvery(CREATE_USER, createUser);
}

 export function* fetchUser() {
  try {
    const data =  yield call(getUsersApi);
    yield put(actions.retriveUsers(data));
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE })
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUser)
}

export function* updateUser(action) {
  try {
    const data = yield call(updateUserApi, action.payload);
    yield put(actions.updateUser(data));
    yield call(fetchUser);
  } catch (error) {
    yield put({ type: UPDATE_USER_FAILURE })
    console.error(error)
  }
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER, updateUser)
}

export function* deleteUser(action) {
  try {
    const data = yield call(deleteUserApi,action.payload);
    yield put(actions.deleteUser(data));
    yield call(fetchUser);
  } catch (error) {
    yield put({ type: DELETE_USER_FAILURE })
    console.error(error)
  }
}

export function* watchDeleteUser() {
  yield takeEvery(DELETE_USER, deleteUser)
}

export function* fetchFilterUser(action) {
  try {
    const data =  yield call(getFilterUsersApi, action.payload);
    yield put(actions.retriveFilterUsers(data));
  } catch (error) {
    yield put({ type: FETCH_FILTER_USERS_FAILURE })
    console.error(error)
  }
}

export function* watchFilterFetchUsers() {
  yield takeEvery(FETCH_FILTER, fetchFilterUser)
};