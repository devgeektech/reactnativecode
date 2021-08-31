import { call, takeEvery, put, all } from 'redux-saga/effects'
import { Endpoints } from '../../resources/Endpoints'
import { defaultPostService, defaultGetCall } from '../services/commonService'

import {GET_PRE_FLIGHT_DETAILS} from '../actions/dynamic_actions'

function* getPreFlightDetailsCall(payload) {
    const { params, successCallback, failedCallback,screenName } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.getPreFlightItemDetail, params)
        // debugger
        yield put({
            type: GET_PRE_FLIGHT_DETAILS.SUCCESS,
            payload: { response, successCallback, failedCallback,screenName }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_PRE_FLIGHT_DETAILS.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}


export default function* CommonSaga() {
    yield all([
        yield takeEvery(GET_PRE_FLIGHT_DETAILS.REQUEST, getPreFlightDetailsCall),
    ])
}