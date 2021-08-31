import { call, takeEvery, put, all } from 'redux-saga/effects'
import { Endpoints } from '../../resources/Endpoints'
import { defaultPostService, defaultGetCall } from '../services/commonService'

import {
    GET_FLIGHT_CALL_SIGN_DETAIL,
    GET_SQUADRON_DETAIL,
    GET_MSN_TYPE_DETAIL
} from '../actions/common_actions'


function* getFlightCallSignDetailCall(payload) {
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.getFlightCallSignDetail, params)
        yield put({
            type: GET_FLIGHT_CALL_SIGN_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_FLIGHT_CALL_SIGN_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}

function* getSquadronDetailCall(payload) {
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.getLocationDetail, params)
        yield put({
            type: GET_SQUADRON_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_SQUADRON_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}

function* getMsnTypeDetailCall(payload) {
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.getMissionTypeDetail, params)
        yield put({
            type: GET_MSN_TYPE_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_MSN_TYPE_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}


export default function* CommonSaga() {
    yield all([
        yield takeEvery(GET_FLIGHT_CALL_SIGN_DETAIL.REQUEST, getFlightCallSignDetailCall),
        yield takeEvery(GET_SQUADRON_DETAIL.REQUEST, getSquadronDetailCall),
        yield takeEvery(GET_MSN_TYPE_DETAIL.REQUEST, getMsnTypeDetailCall),

    ])
}