import { putActions } from "../action_wrapper";
const LOGIN=putActions("LOGIN")
const SET_USER_DATA=putActions("SET_USER_DATA")
const GET_USER_PROFILE_DETAIL=putActions("GET_USER_PROFILE_DETAIL")   

export {
    LOGIN,
    SET_USER_DATA,
    GET_USER_PROFILE_DETAIL
}
export function getUserProfileDetail(payload){
    return {type:GET_USER_PROFILE_DETAIL.REQUEST,payload}
}
export function login(payload){
    return {type:LOGIN.REQUEST,payload}
}
export function setUserData(payload){
    return {type:SET_USER_DATA.ACTION,payload}
}