import { combineReducers } from 'redux'
import commonReducer from './common_reducer'
import dynamicReducer from './dynamic_reducer'
import preFlightReducer from './pre_flight_reducer'
import authReducer from './auth_reducer'
import postFlightReducer from './post_flight_reducer'
const reducers = combineReducers({
    common: commonReducer,
    dynamic:dynamicReducer,
    preFligt:preFlightReducer,
    auth:authReducer,
    postFlight:postFlightReducer
})
export default reducers