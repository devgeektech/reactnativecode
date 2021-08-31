import {
    ADD_PRE_FLIGHT_SURVEY_DETAIL,
    ADD_SURVEY_ITEM_DETAIL_MAPPING,
    ADD_THREAT_MITIGATION_DETAIL,
    ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL,
    ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL,
    SET_MISSION_TOTAL,
    SET_ENVIRONMENT_TOTAL,
    SET_PERSON_TOTAL
} from '../actions/pre_flight_actions'


const initalState = {
    isLoading:false,
    PreFlightSurveyDetailID:"",
    MissionTotal:0,
    EnvironmentTotal:0,
    PersonTotal:0,
}
const onSuccessAddPreFlightSurvey=(state,payload)=>{
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            if (response.data.PreFlightSurveyDetail[0].IsSuccess == 1) {
                successCallback(response.data.PreFlightSurveyDetail[0].Comment)
                return { ...state, isLoading: false,PreFlightSurveyDetailID: response.data.PreFlightSurveyDetail[0].PreFlightSurveyDetailID}
            }
            else {
                failedCallback(response.data.PreFlightSurveyDetail[0].Comment)
                return { ...state, isLoading: false, }
            }
        }
        else {
            debugger
            failedCallback()
            return { ...state, isLoading: false }
        }
    }
    else {
        payload.failedCallback()
        return state
    }
}
const onSuccessAddSurveyItemDetailMapping=(state,payload)=>{
    debugger
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            if (response.data.SurveyItemDetailMapping[0].IsSuccess == 1) {
                successCallback(response.data.SurveyItemDetailMapping[0].Comment)
                return { ...state, isLoading: false }
            }
            else {
                failedCallback(response.data.SurveyItemDetailMapping[0].Comment)
                return { ...state, isLoading: false, }
            }
        }
        else {
            debugger
            failedCallback()
            return { ...state, isLoading: false }
        }
    }
    else {
        payload.failedCallback()
        return state
    }
}
const onSuccessAddThreatMapping=(state,payload)=>{
    debugger
    console.log(payload)
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            if (response.data.ThreatMitigationDetail[0].IsSuccess == 1) {
                successCallback(response.data.ThreatMitigationDetail[0].Comment)
                return { ...state,
                     isLoading: false,
                     MissionTotal:0,
                    EnvironmentTotal:0,
                    PersonTotal:0 }
            }
            else {
                failedCallback(response.data.ThreatMitigationDetail[0].Comment)
                return { 
                    ...state, 
                    isLoading: false,
                    
                }
            }
        }
        else {
            debugger
            failedCallback()
            return { ...state, isLoading: false }
        }
    }
    else {
        payload.failedCallback()
        return state
    }
}
const onSuccessAddEnvironmentSpecificationMapping=()=>{
    debugger
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            if (response.data.EnvironmentSpecificRiskDetail[0].IsSuccess == 1) {
                successCallback(response.data.EnvironmentSpecificRiskDetail[0].Comment)
                return { ...state, isLoading: false }
            }
            else {
                failedCallback(response.data.EnvironmentSpecificRiskDetail[0].Comment)
                return { ...state, isLoading: false, }
            }
        }
        else {
            debugger
            failedCallback()
            return { ...state, isLoading: false }
        }
    }
    else {
        payload.failedCallback()
        return state
    }
}
const onSuccessAddIndividualSpecificRiskDetail=(state,payload)=>{
    debugger
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            if (response.data.IndividualSpecificRiskDetail[0].IsSuccess == 1) {
                successCallback(response.data.IndividualSpecificRiskDetail[0].Comment)
                return { ...state, isLoading: false }
            }
            else {
                failedCallback(response.data.IndividualSpecificRiskDetail[0].Comment)
                return { ...state, isLoading: false, }
            }
        }
        else {
            debugger
            failedCallback()
            return { ...state, isLoading: false }
        }
    }
    else {
        payload.failedCallback()
        return state
    }
}
const preFlight=(state=initalState,action)=>{
    switch(action.type){
        case ADD_PRE_FLIGHT_SURVEY_DETAIL.REQUEST:
            return{...state, isLoading:true}

        case ADD_PRE_FLIGHT_SURVEY_DETAIL.FAILED:
            return{...state,isLoading:false}

        case ADD_PRE_FLIGHT_SURVEY_DETAIL.SUCCESS:
            return onSuccessAddPreFlightSurvey(state, action.payload)
            
        case ADD_SURVEY_ITEM_DETAIL_MAPPING.REQUEST:
            return {...state,isLoading: true}
        case ADD_SURVEY_ITEM_DETAIL_MAPPING.FAILED:
            return {...state, isLoading: false}
        case ADD_SURVEY_ITEM_DETAIL_MAPPING.SUCCESS:
            return onSuccessAddSurveyItemDetailMapping(state,action.payload)

        case ADD_THREAT_MITIGATION_DETAIL.REQUEST:
            return{...state,isLoading: true}
        case ADD_THREAT_MITIGATION_DETAIL.REQUEST:
            return {...state,isLoading: true}
        case ADD_THREAT_MITIGATION_DETAIL.SUCCESS:
            return onSuccessAddThreatMapping(state,action.payload)

        case ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL.REQUEST:
            return {...state,isLoading: true}
        case ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL.FAILED:
            return{...state, isLoading: false}
        case ADD_ENVIRONMENT_SPECIFIC_RISK_DETAIL.SUCCESS:
            return onSuccessAddEnvironmentSpecificationMapping(state,action.payload)
        
        case ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL.REQUEST:
            return {...state,isLoading: true}
        case ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL.FAILED:
            return {...state,isLoading: false}
        case ADD_INDIVIDUAL_SPECIFIC_RISK_DETAIL.SUCCESS:
            return onSuccessAddIndividualSpecificRiskDetail(state,action.payload)

        case SET_MISSION_TOTAL.ACTION:
            return{...state,MissionTotal:action.payload}
        case SET_ENVIRONMENT_TOTAL.ACTION:
            return{...state,EnvironmentTotal:action.payload}
        case SET_PERSON_TOTAL.ACTION:
            return{...state,PersonTotal:action.payload}
    
            default:
            return state
    }
}

export default preFlight