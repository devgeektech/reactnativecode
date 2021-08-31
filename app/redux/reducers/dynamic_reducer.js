import {
GET_PRE_FLIGHT_DETAILS,
SET_SCREEN_DATA,
REMOVE_ALL_SCREEN_DATA
} from '../actions/dynamic_actions'



    const initialState = {
        isLoading: false,
        missionScreenData:[],
        // dashBoardScreenData:[],
        environmentScreenData:[],
        personScreenData:[],

    }
    
    const onSuccessGetPreFlightDetails=(state,payload)=>{
        
        if(payload?.response?.data){
            debugger
            let newModal=payload.response.data.map(item=>{
                return {...item,title:item.CategoryName,data:item.child}
            })
            
                payload.successCallback(newModal)   
        switch(payload.screenName) {
            case 'mission':
                return {...state,isLoading:false,missionScreenData: [...newModal]}
            case 'person':
                return {...state,isLoading:false,personScreenData: [...newModal]}
            // case 'dashBoard':
            //     return {...state,isLoading:false,dashBoardScreenData: [...newModal]}
            case "environment":
                return {...state,isLoading:false,environmentScreenData: [...newModal]}
            default:
                return {...state,isLoading:false,missionScreenData: [...newModal]}
                
        }
        }
        else{
            payload.failedCallback()
            return {...state,isLoading:false}
        }
    }
    const onSuccessSetScreenData=(state,payload)=>{
        switch(payload.screenName){
            case 'mission':
                return {...state,isLoading:false,missionScreenData: payload.screenData}
            case 'person':
                return {...state,isLoading:false,personScreenData: payload.screenData}
            case "environment":
                return {...state,isLoading:false,environmentScreenData:payload.screenData}
        }
    }
    const dynamicReducer=(state=initialState, action)=>{
        // debugger
        switch(action.type){
            case GET_PRE_FLIGHT_DETAILS.REQUEST:
                // debugger
                return{...state,isLoading: true}
            case GET_PRE_FLIGHT_DETAILS.FAILED:
                return{...state,isLoading: false}
            case GET_PRE_FLIGHT_DETAILS.SUCCESS:
                return onSuccessGetPreFlightDetails(state,action.payload)
            case SET_SCREEN_DATA.ACTION:
                return onSuccessSetScreenData(state,action.payload)
            case REMOVE_ALL_SCREEN_DATA.ACTION:
                return {...state,isLoading:false,missionScreenData:[],environmentScreenData:[],personScreenData:[]}
            default:
                return state
        }
    }

    export default dynamicReducer