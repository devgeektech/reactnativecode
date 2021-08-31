import { putActions } from '../action_wrapper'

const GET_USER_LOCATION_MAPPING_DETAIL=putActions("GET_USER_LOCATION_MAPPING_DETAIL") 
const GET_POST_FLIGHT_QUESTION_DETAIL=putActions("GET_POST_FLIGHT_QUESTION_DETAIL") 
const GET_USER_AIRCRAFT_MAPPING_DETAIL=putActions("GET_USER_AIRCRAFT_MAPPING_DETAIL") 
const ADD_POST_FLIGHT_SORTIE_DETAIL=putActions("ADD_POST_FLIGHT_SORTIE_DETAIL") 
const SET_SORTIE_SCREEN_DATA=putActions("SET_SORTIE_SCREEN_DATA") 
export{
    GET_USER_LOCATION_MAPPING_DETAIL,
    GET_POST_FLIGHT_QUESTION_DETAIL,
    GET_USER_AIRCRAFT_MAPPING_DETAIL,
    ADD_POST_FLIGHT_SORTIE_DETAIL,
    SET_SORTIE_SCREEN_DATA
}
export function setSortieScreenData(payload){
    return {type:SET_SORTIE_SCREEN_DATA.ACTION,payload}
}
export function addPostFlightSortieDetail(payload){
    return {type:ADD_POST_FLIGHT_SORTIE_DETAIL.REQUEST,payload}
}
export function getUserAircraftMappingDetail(payload){
    return {type:GET_USER_AIRCRAFT_MAPPING_DETAIL.REQUEST,payload}
}
export function getPostFlightQuestionDetail(payload){
    return {type:GET_POST_FLIGHT_QUESTION_DETAIL.REQUEST,payload}
}
export function getUserLocationMappingDetail(payload){
    return {type:GET_USER_LOCATION_MAPPING_DETAIL.REQUEST,payload}
}