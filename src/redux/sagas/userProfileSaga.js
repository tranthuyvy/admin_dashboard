import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_USER_PROFILE_REQUEST } from '../actions/types';

import { getUserProfileSuccess, getUserProfileFailure } from '../actions/actions';

function* getUserProfileSaga() {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.get, 'http://localhost:9999/api/users/find', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getUserProfileSuccess(response.data));
  } catch (error) {
    yield put(getUserProfileFailure(error));
  }
}

export default function* userProfileSaga() {
  yield takeLatest(GET_USER_PROFILE_REQUEST, getUserProfileSaga);
}
