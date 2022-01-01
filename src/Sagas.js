import { put, takeEvery, all } from 'redux-saga/effects';

function* getData() {
  const res = yield fetch('https://jsonplaceholder.typicode.com/users');
  const data = yield res.json();
  yield put({ type: 'FETCH_USER', payload: data });
}

function* fetchUser() {
  yield takeEvery('FETCH_USERDATA', getData);
}

export default function* rootSaga() {
  yield all([fetchUser()]);
}
