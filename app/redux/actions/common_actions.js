import { putActions } from '../action_wrapper'
const GET_FLIGHT_CALL_SIGN_DETAIL = putActions("GET_FLIGHT_CALL_SIGN_DETAIL")
const GET_SQUADRON_DETAIL = putActions("GET_SQUADRON_DETAIL")
const GET_MSN_TYPE_DETAIL = putActions("GET_MSN_TYPE_DETAIL")

export {
    GET_FLIGHT_CALL_SIGN_DETAIL,
    GET_SQUADRON_DETAIL,
    GET_MSN_TYPE_DETAIL
}

export function getFlightCallSignDetail(payload) {
    return { type: GET_FLIGHT_CALL_SIGN_DETAIL.REQUEST, payload }
}

export function getSquadronDetail(payload) {
    return { type: GET_SQUADRON_DETAIL.REQUEST, payload }
}
export function getMsnTypeDetail(payload) {
    return { type: GET_MSN_TYPE_DETAIL.REQUEST, payload }
}