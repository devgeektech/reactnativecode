import { call, takeEvery, put, all } from 'redux-saga/effects'
import { Endpoints } from '../../resources/Endpoints'
import { defaultPostService, defaultGetCall } from '../services/commonService'
import{
    GET_USER_LOCATION_MAPPING_DETAIL,
    GET_POST_FLIGHT_QUESTION_DETAIL,
    GET_USER_AIRCRAFT_MAPPING_DETAIL,
    ADD_POST_FLIGHT_SORTIE_DETAIL
} from '../actions/post_flight_actions'
import Axios from 'axios'
function* getUserLocationMappingDetailCall(payload){
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.getUserLocationMappingDetail, params)
        // debugger
        yield put({
            type: GET_USER_LOCATION_MAPPING_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_USER_LOCATION_MAPPING_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
} 

const getQuestion=async()=>{
    let question
    try{
        await Axios.get("http://103.212.121.241/spydrapi/public/PostFlight/PostFlightQuestionDetail.json").then((data)=>{
        question=data
        // debugger
    })
    }
    catch(err){
        console.log(err)
    }
    
    return question.data
}
function* getPostFlightQuestionDetailCall(payload){
    // debugger
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response=yield call(getQuestion)
        // const response = yield call(defaultPostService, Endpoints.getPostFlightQuestionDetail)
        debugger
        yield put({
            type: GET_POST_FLIGHT_QUESTION_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_POST_FLIGHT_QUESTION_DETAIL.FAILED,
            payload:{ response: err, failedCallback }
        })
    }
}
function* getUserAircraftMappingDetailCall(payload){
    // debugger
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.getUserAircraftMappingDetail,params)
        // debugger
        yield put({
            type: GET_USER_AIRCRAFT_MAPPING_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_USER_AIRCRAFT_MAPPING_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
} 

function* addPostFlightSortieDetailCall(payload){
    debugger
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.addPostFlightSortieDetail,params)
        debugger
        yield put({
            type: ADD_POST_FLIGHT_SORTIE_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: ADD_POST_FLIGHT_SORTIE_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
} 
export default function* postFlightSaga() { 
    yield all([
        yield takeEvery(GET_USER_LOCATION_MAPPING_DETAIL.REQUEST, getUserLocationMappingDetailCall),
        yield takeEvery(GET_POST_FLIGHT_QUESTION_DETAIL.REQUEST, getPostFlightQuestionDetailCall),
        yield takeEvery(GET_USER_AIRCRAFT_MAPPING_DETAIL.REQUEST,getUserAircraftMappingDetailCall),
        yield takeEvery(ADD_POST_FLIGHT_SORTIE_DETAIL.REQUEST,addPostFlightSortieDetailCall)
    ])
}