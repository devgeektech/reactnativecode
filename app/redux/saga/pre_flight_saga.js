import { call, takeEvery, put, all } from 'redux-saga/effects'
import { Endpoints } from '../../resources/Endpoints'
import { defaultPostService, defaultGetCall } from '../services/commonService'

import {
    ADD_PRE_FLIGHT_SURVEY_DETAIL,
    ADD_SURVEY_ITEM_DETAIL_MAPPING,
    ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL,
    ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL,
    ADD_THREAT_MITIGATION_DETAIL,
    

} from '../actions/pre_flight_actions'

function* addPreFlightSurveyDetailCall(payload) {
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.addPreFlightSurveyDetail, params)
        debugger
        yield put({
            type: ADD_PRE_FLIGHT_SURVEY_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: ADD_PRE_FLIGHT_SURVEY_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}
function* addSurveyItemDetailMappingCall(payload) {
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.addSurveyItemDetailMapping, params)
        debugger
        yield put({
            type: ADD_SURVEY_ITEM_DETAIL_MAPPING.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: ADD_SURVEY_ITEM_DETAIL_MAPPING.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}
function* addEnvironmentSpecificRiskDetailCall(payload){
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.addEnvironmentSpecificRiskDetail, params)
        debugger
        yield put({
            type: ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}
function* addIndividualSpecificRiskDetailCall(payload){
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.addIndividualSpecificRiskDetail, params)
        debugger
        yield put({
            type: ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
} 
function* addThreatMitigationDetailCall(payload){
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.addThreatMitigationDetail, params)
        debugger
        yield put({
            type: ADD_THREAT_MITIGATION_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: ADD_THREAT_MITIGATION_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
} 
export default function* PreFlightSaga() { 
    yield all([
        yield takeEvery(ADD_PRE_FLIGHT_SURVEY_DETAIL.REQUEST, addPreFlightSurveyDetailCall),
        yield takeEvery(ADD_SURVEY_ITEM_DETAIL_MAPPING.REQUEST,addSurveyItemDetailMappingCall),
        yield takeEvery(ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL.REQUEST,addEnvironmentSpecificRiskDetailCall),
        yield takeEvery(ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL.REQUEST,addIndividualSpecificRiskDetailCall),
        yield takeEvery(ADD_THREAT_MITIGATION_DETAIL.REQUEST,addThreatMitigationDetailCall),
    ])
}