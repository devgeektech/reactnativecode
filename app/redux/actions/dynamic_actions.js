import { putActions } from '../action_wrapper'

const GET_PRE_FLIGHT_DETAILS = putActions("GET_PRE_FLIGHT_DETAILS")
const SET_SCREEN_DATA=putActions("SET_SCREEN_DATA")
const REMOVE_ALL_SCREEN_DATA= putActions("REMOVE_ALL_SCREEN_DATA")
export {
    GET_PRE_FLIGHT_DETAILS,
    SET_SCREEN_DATA,
    REMOVE_ALL_SCREEN_DATA,
}

export function removeAllScreenData() {
    return {type:REMOVE_ALL_SCREEN_DATA.ACTION}
}

export function setScreenData(payload) {
    // debugger
    return{type:SET_SCREEN_DATA.ACTION,payload}
}

export function getPreFlightDetails(payload){
    return{type:GET_PRE_FLIGHT_DETAILS.REQUEST,payload}
}