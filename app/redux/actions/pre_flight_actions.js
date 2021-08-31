import { putActions } from '../action_wrapper'

const ADD_PRE_FLIGHT_SURVEY_DETAIL=putActions("ADD_PRE_FLIGHT_SURVEY_DETAIL") 
const ADD_SURVEY_ITEM_DETAIL_MAPPING=putActions("ADD_SURVEY_ITEM_DETAIL_MAPPING") 
const ADD_THREAT_MITIGATION_DETAIL=putActions("ADD_THREAT_MITIGATION_DETAIL")  
const ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL=putActions("ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL") 
const ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL=putActions("ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL") 
const SET_MISSION_TOTAL=putActions("SET_MISSION_TOTAL") 
const SET_ENVIRONMENT_TOTAL=putActions("SET_ENVIRONMENT_TOTAL")
const SET_PERSON_TOTAL=putActions("SET_PERSON_TOTAL")
export{
    ADD_PRE_FLIGHT_SURVEY_DETAIL,
    ADD_SURVEY_ITEM_DETAIL_MAPPING,
    ADD_THREAT_MITIGATION_DETAIL,
    ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL,
    ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL,
    SET_MISSION_TOTAL,
    SET_ENVIRONMENT_TOTAL,
    SET_PERSON_TOTAL
}
export const setPersonTotal=(payload)=>{
    return {type:SET_PERSON_TOTAL.ACTION,payload}
}
export const setEnvironmentTotal=(payload)=>{
    return {type:SET_ENVIRONMENT_TOTAL.ACTION,payload}
}
export const setMissionTotal =(payload)=>{
    
    return {type:SET_MISSION_TOTAL.ACTION,payload}
}
export const addEnvironmentSpecificRiskDetail=(payload)=>{
    return {type:ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL.REQUEST,payload}
}
export const addIndividualSpecificRiskDetail=(payload)=>{
    return {type:ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL.REQUEST,payload}
}
export const addThreatMitigationDetail=(payload)=>{
    return{type:ADD_THREAT_MITIGATION_DETAIL.REQUEST,payload}
}
export const addSurveyItemDetailMapping=(payload)=>{
    return {type:ADD_SURVEY_ITEM_DETAIL_MAPPING.REQUEST,payload}
}

export const addPreFlightSurveyDetail=(payload)=>{
    return {type:ADD_PRE_FLIGHT_SURVEY_DETAIL.REQUEST,payload}
}