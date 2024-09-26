import { combineReducers } from "redux";
import { RESET_APP_STATE } from "../actions/types";
import hamburgerMenu from "./hamburgerMenu";


const appReducer = combineReducers({
    hamburger: hamburgerMenu
})


export default (state, action) => {
    if (action.type === RESET_APP_STATE) {
        state = {};
    }
    return appReducer(state, action);
}