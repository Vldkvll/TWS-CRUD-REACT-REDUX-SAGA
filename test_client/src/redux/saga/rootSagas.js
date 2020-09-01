import { all } from 'redux-saga/effects'
import {
  watchCreateUser,
  watchFetchUsers,
  watchUpdateUser,
  watchDeleteUser,
  watchFilterFetchUsers
} from './saga'

export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
    watchDeleteUser(),
    watchCreateUser(),
    watchUpdateUser(),
    watchFilterFetchUsers()
  ])
}