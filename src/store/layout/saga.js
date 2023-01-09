import { all, call, fork, takeEvery, put } from "redux-saga/effects"

import {
    CHANGE_LAYOUT_MODE
} from "./actionTypes"

function changeBodyAttribute(attribute, value) {
    if (document.body) document.body.setAttribute(attribute, value)
    return true
}

function* changeLayoutMode({ payload: mode }) {
    try {
        yield call(changeBodyAttribute, "data-layout-mode", mode);
    } catch (error) {
        // console.log(error);
    }
}

export function* watchSChangeLayoutMode() {
    yield takeEvery(CHANGE_LAYOUT_MODE, changeLayoutMode)
}

function* LayoutSaga() {
    yield all([
        fork(watchSChangeLayoutMode),
    ])
}

export default LayoutSaga
