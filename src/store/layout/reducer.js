// @flow
import {
    CHANGE_LAYOUT_MODE
} from "./actionTypes"

import {
    layoutModeTypes,
} from "../../constants/layout";

const INIT_STATE = {
    layoutModeType: layoutModeTypes.LIGHT,
}

const Layout = (state = INIT_STATE, action) => {
    switch (action.type) {

        case CHANGE_LAYOUT_MODE:
            return {
                ...state,
                layoutModeType: action.payload,
            }

        default:
            return state
    }
}

export default Layout
