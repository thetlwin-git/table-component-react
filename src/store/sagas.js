import { all, fork } from "redux-saga/effects";

import dashboardSaga from "./dashboard/saga";
import LayoutSaga from "./layout/saga";

export default function* rootSaga() {
    yield all([
        fork(LayoutSaga),
        fork(dashboardSaga),
    ])
}