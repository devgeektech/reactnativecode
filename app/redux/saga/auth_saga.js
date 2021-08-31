import {
LOGIN,
GET_USER_PROFILE_DETAIL
} from '../actions/auth_actions'
import {
    defaultGetCall,
    defaultPostService
} from '../services/commonService'
import { call, takeEvery, put, all } from 'redux-saga/effects'
import { Endpoints } from '../../resources/Endpoints'
import {saveLoginInfo} from '../../utils/CommonMethods'

function* loginCall(payload){
    
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.UserLogin, params)
        debugger
        if(response?.data?.UserLogin[0]?.IsSuccess==1){
          saveLoginInfo(response.data.UserLogin[0])
        }
        yield put({
            type: LOGIN.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: LOGIN.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}
function* getUserProfileDetailCall(payload){
    const { params, successCallback, failedCallback } = payload.payload
    try {
        const response = yield call(defaultPostService, Endpoints.getUserProfileDetail,params)
        // debugger
        yield put({
            type: GET_USER_PROFILE_DETAIL.SUCCESS,
            payload: { response, successCallback, failedCallback }
        })
    }
    catch (err) {
        console.log(err)
        yield put({
            type: GET_USER_PROFILE_DETAIL.FAILED,
            payload: { response: err, failedCallback }
        })
    }
}

export default function* authSaga() {
    yield all([
        yield takeEvery(LOGIN.REQUEST, loginCall),
        yield takeEvery(GET_USER_PROFILE_DETAIL.REQUEST,getUserProfileDetailCall)

    ])
}
