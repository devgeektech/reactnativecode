

import {
    GET_FLIGHT_CALL_SIGN_DETAIL,
    GET_SQUADRON_DETAIL,
    GET_MSN_TYPE_DETAIL
} from '../actions/common_actions'

const initialState = {
    isLoading: true,
    flightCallSignDetail: [],
    squadronDetail: [],
    msnTypeDetail: []
}

const onSuccessGetFlightCall = (state, payload) => {
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            successCallback()
            const modal = response.data.FlightCallSignDetail.map(item => {
                return {
                    ...item,
                    value: item.CallSignName,
                    label: item.CallSignName,
                    key: item.FlightCallSignDetailID
                }
            })
            return { ...state, isLoading: false, flightCallSignDetail: modal }
            // const modal=
            // return { ...state, isLoading: false, flightCallSignDetail: response.data.FlightCallSignDetail }
        }
        else {
            failedCallback()
            return { ...state, isLoading: false, }
        }
    }
    else {

        failedCallback()
        return { ...state, isLoading: false }
    }
}

const onSuccessGetSquadron = (state, payload) => {
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            const modal = response.data.LocationDetail.map(item => {
                return {
                    ...item,
                    value: item.Squadron,
                    label: item.Squadron,
                    key: item.LocationDetailID
                }
            })

            return { ...state, isLoading: false, squadronDetail: modal }
        }
        else {
            failedCallback()
            return { ...state, isLoading: false, }
        }
    }
    else {

        failedCallback()
        return { ...state, isLoading: false }
    }
}

const onSuccessGetMsnType = (state, payload) => {
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            const modal = response.data.MissionTypeDetail.map(item => {
                return {
                    ...item,
                    value: item.MissionTypeName,
                    label: item.MissionTypeName,
                    key: item.MissionTypeDetailID
                }
            })
            return { ...state, isLoading: false, msnTypeDetail: modal }
        }
        else {
            failedCallback()
            return { ...state, isLoading: false, }
        }
    }
    else {

        failedCallback()
        return { ...state, isLoading: false }
    }
}

const EventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FLIGHT_CALL_SIGN_DETAIL.REQUEST:
            return { ...state, isLoading: true }
        case GET_FLIGHT_CALL_SIGN_DETAIL.FAILED:
            return { ...state, isLoading: false }
        case GET_FLIGHT_CALL_SIGN_DETAIL.SUCCESS:
            return onSuccessGetFlightCall(state, action.payload)
        case GET_SQUADRON_DETAIL.REQUEST:
            return { ...state, isLoading: true }
        case GET_SQUADRON_DETAIL.FAILED:
            return { ...state, isLoading: false }
        case GET_SQUADRON_DETAIL.SUCCESS:
            return onSuccessGetSquadron(state, action.payload)
        case GET_MSN_TYPE_DETAIL.REQUEST:
            return { ...state, isLoading: true }
        case GET_MSN_TYPE_DETAIL.FAILED:
            return { ...state, isLoading: false }
        case GET_MSN_TYPE_DETAIL.SUCCESS:
            return onSuccessGetMsnType(state, action.payload)
        default:
            return state
    }
}
export default EventReducer
