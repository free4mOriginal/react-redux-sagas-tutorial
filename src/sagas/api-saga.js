import { takeEvery, call, put } from "redux-saga/effects";
import {
  DATA_REQUESTED,
  DATA_LOADED,
  API_ERRORED
} from "../constants/action-types";

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (err) {
    yield put({ type: API_ERRORED, payload: err });
  }
}

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());
}
