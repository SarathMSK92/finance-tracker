import { combineReducers } from "redux";
import filterReducer from "./filterReducer";


const appReducer = combineReducers({
    filters: filterReducer,
})



export default (state, action) => {
    return appReducer(state, action)
}