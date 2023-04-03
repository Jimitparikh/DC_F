import { combineReducers } from 'redux'
import authReducer from "../slices/auth";

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        auth: authReducer,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer