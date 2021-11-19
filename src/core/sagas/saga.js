import {
    put,
    takeEvery,
    call
} from "redux-saga/effects";

import { CREATE_SPLIT_SUCCESSFULLY, CREATE_SPLIT_FAILED } from '../../constants/index';
import { CREATE_SPLITING } from '../actions/actions-type';
import Axios from 'axios'

// create instance..
const instance = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

instance.interceptors.request.use(
    async config => {
        config.headers = {
            'Content-Type': 'application/json',
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


function* createAcheivement(action) {
    try {
        const response = yield call(instance.post, `${action.url}`, action.payload);
        const payload = {
            loading: false,
            error: false,
            split: response.data.response
        }
        yield put({ type: `${CREATE_SPLIT_SUCCESSFULLY}`, payload });

    } catch (error) {
        yield put({ type: `${CREATE_SPLIT_FAILED}`, error })
    }
}


function* rootSaga() {
    yield takeEvery(CREATE_SPLITING, createAcheivement);
}

export default rootSaga;