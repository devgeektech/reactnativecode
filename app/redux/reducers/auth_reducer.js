import {
    LOGIN,
    SET_USER_DATA,
    GET_USER_PROFILE_DETAIL
} from '../actions/auth_actions'

const initialState = {
    isLoading: true,
    userInfo:[]
}
const onSuccessLoginSuccess=(state,payload)=>{
    debugger
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            if(response.data.UserLogin[0].IsSuccess==1) {
                successCallback()
                return { ...state, isLoading: false,userInfo:response.data.UserLogin[0] }
            }
            else{
                failedCallback(response.data.UserLogin[0].Comment)
                return { ...state, isLoading: false, }
            }
        }
        else {
            failedCallback("Failed")
            return { ...state, isLoading: false, }
        }
    }
    else {
        failedCallback()
        return { ...state, isLoading: false }
    }
}
const onSuccessgetUserProfileDetail=(state,payload)=>{
    if (payload?.response?.status == 200) {
        const { response, failedCallback, successCallback } = payload
        if (response.data.success == 1) {
            successCallback()
          return {
            ...state,  
            isLoading:false,
            userProfile:response.data.UserProfileDetail[0]
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
const AuthReducer =(state=initialState,action) => {
    switch(action.type) {
        case LOGIN.REQUEST:
            return{...state,isLoading:true}
        case LOGIN.FAILED:
            return {...state,isLoading:false}
        case LOGIN.SUCCESS:
            return onSuccessLoginSuccess(state,action.payload)

        case SET_USER_DATA.ACTION:
            return {...state,isLoading: false,userInfo:action.payload}

        case GET_USER_PROFILE_DETAIL.REQUEST:
            return {...state,isLoading:true}
        case GET_USER_PROFILE_DETAIL.FAILED:
            return {...state,isLoading:false}
        case GET_USER_PROFILE_DETAIL.SUCCESS:
            return onSuccessgetUserProfileDetail(state,action.payload)
        default:
            return state;
    }
}
export default AuthReducer