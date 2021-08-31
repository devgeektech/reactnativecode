import {
GET_USER_LOCATION_MAPPING_DETAIL,
GET_POST_FLIGHT_QUESTION_DETAIL,
GET_USER_AIRCRAFT_MAPPING_DETAIL,
ADD_POST_FLIGHT_SORTIE_DETAIL,
SET_SORTIE_SCREEN_DATA
} from '../actions/post_flight_actions'

const initialState ={
    isLoading:false,
    userLocationMappingDetail:[],
    postFlightQuestionDetail:[],
    userAircraftMappingDetail:[],
    questions:[],
    userProfile:{},
    sortieScreenData:{}
}
const onSuccessGetUserLocationMapping=(state,payload)=>{
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            const updatedValue=response.data.UserLocationMappingDetail.map(item=>{
                return {...item,label:item.Squadron,value:item.LocationDetailID}
            })
            successCallback()
          return {
            ...state,  
            isLoading:false,
            userLocationMappingDetail:updatedValue
        }
    }
        else {
            // debugger
            failedCallback()
            return { ...state, isLoading: false }
        }
    }
    else {
        payload.failedCallback()
        return state
    }
}
const onSuccessGetPostFlightQuestion=(state,payload)=>{
    debugger
    payload.successCallback()
    return {...state,questions:payload.response}
    // if (payload?.response?.status == 200) {
    //     const { response, failedCallback, successCallback } = payload
    //     if (response.data.success == 1) {
    //         const data=eval(response.data.PostFlightQuestionDetail[0])
    //         console.log(data)
    //         debugger
    //         // const updatedValue=response.data.UserLocationMappingDetail.map(item=>{
    //         //     return {...item,label:item.Squadron,value:item.UserLocationMappingDetailID}
    //         // })

    //         successCallback()
    //       return {
    //         ...state,  
    //         isLoading:false,
    //         // userLocationMappingDetail:updatedValue
    //     }
    // }
    //     else {
    //         // debugger
    //         failedCallback()
    //         return { ...state, isLoading: false }
    //     }
    // }
    // else {
    //     payload.failedCallback()
    //     return state
    // }
}
const onSuccessGetUserAircraftMappingDetails=(state,payload) => {
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            const updatedValue=response.data.UserAircraftMappingDetail.map(item=>{
                return {...item,label:item.AircraftName,value:item.AircraftDetailID}
            })
            successCallback()
          return {
            ...state,  
            isLoading:false,
            userAircraftMappingDetail:updatedValue
        }
    }
        else {
            // debugger
            failedCallback()
            return { ...state, isLoading: false }
        }
    }
    else {
        payload.failedCallback()
        return state
    }
}
const onSuccessAddPostFlightSortieDetail=(state,payload) =>{
    debugger
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
           if(response.data.PostFlightSortieDetail[0].IsSuccess==1){
            successCallback(response.data.PostFlightSortieDetail[0].Comment)
          return {
            ...state,  
            isLoading:false
            }
        }
        else{
              failedCallback(response.data.PostFlightSortieDetail[0].Comment)
              return {
                  ...state,
                  isLoading:false
              }
              //////////////////////////////////////////  
        }
    }

        else {
            // debugger
            failedCallback()
            return { ...state, isLoading: false }
        }
    }
    else {
        payload.failedCallback()
        return state
    }
}
const postFlightReducer=(state=initialState,action)=>{
    switch(action.type) {
        case GET_USER_LOCATION_MAPPING_DETAIL.REQUEST:
            return {...state,isLoading:true}
        case GET_USER_LOCATION_MAPPING_DETAIL.FAILED:
            return {...state,isLoading:false}
        case GET_USER_LOCATION_MAPPING_DETAIL.SUCCESS:
            return onSuccessGetUserLocationMapping(state,action.payload)

        case GET_POST_FLIGHT_QUESTION_DETAIL.REQUEST:
            return {...state,loading:false}
        case GET_POST_FLIGHT_QUESTION_DETAIL.FAILED:
            return {...state,loading:false}
        case GET_POST_FLIGHT_QUESTION_DETAIL.SUCCESS:
            return onSuccessGetPostFlightQuestion(state,action.payload)
            // return onSuccessGetPostFlightsMapping(state,action.payload)

        case GET_USER_AIRCRAFT_MAPPING_DETAIL.REQUEST:
            return {...state,isLoading:true}
        case GET_USER_AIRCRAFT_MAPPING_DETAIL.FAILED:
            return {...state,isLoading:false}
        case GET_USER_AIRCRAFT_MAPPING_DETAIL.SUCCESS:
            return onSuccessGetUserAircraftMappingDetails(state,action.payload)
        
        case ADD_POST_FLIGHT_SORTIE_DETAIL.REQUEST:
            return {...state,isLoading:false}
        case ADD_POST_FLIGHT_SORTIE_DETAIL.FAILED:
            return {...state,isLoading:false}
        case ADD_POST_FLIGHT_SORTIE_DETAIL.SUCCESS:
            return onSuccessAddPostFlightSortieDetail(state,action.payload)
        
        case SET_SORTIE_SCREEN_DATA.ACTION:
            // debugger
            return {...state,isLoading:false,sortieScreenData:action.payload}
        default:
            return state
    }
}

export default postFlightReducer