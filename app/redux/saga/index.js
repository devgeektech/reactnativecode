import { call, fork, takeLatest } from "redux-saga/effects";

import commonSaga from "./common_saga"
import dynamicSaga from './dynamic_saga'
import preFlightSaga from './pre_flight_saga'
import authSaga from './auth_saga'
import postFlightSaga from "./post_flight_saga";
export default function* rootSaga() {
	yield fork(commonSaga);
	yield fork(dynamicSaga);
	yield fork(preFlightSaga);
	yield fork(authSaga);
	yield fork(postFlightSaga)
}
