
import { SET_HAMBURGER__MENU_FILTER } from "../../actions/types";

const initialState = {
    hamburgerMenu: "Home"
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HAMBURGER__MENU_FILTER:
            return { hamburgerMenu: action.payload }
        default:
            return state;
    }
}

export default filterReducer;