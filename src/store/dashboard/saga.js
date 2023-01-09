import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_DATA } from "./actionTypes";
import { apiSuccess, apiFail } from "./actions";

//Include Both Helper File with needed methods
import {
    getDashboardData,
}
    from "../../helpers/fakebackend_helper";

function* getData({ payload: type }) {
    try {
        var response;
        response = yield call(getDashboardData, type);

        yield put(apiSuccess(GET_DATA, response));
    } catch (error) {
        yield put(apiFail(GET_DATA, error));
    }
}

export function* watchGetData() {
    yield takeEvery(GET_DATA, getData);
}

function* dashboardSaga() {
    yield all([fork(watchGetData)]);
}

export default dashboardSaga;
