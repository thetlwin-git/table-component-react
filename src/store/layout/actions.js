import {
    CHANGE_LAYOUT_MODE
} from "./actionTypes"

export const changeLayoutMode = layoutMode => ({
    type: CHANGE_LAYOUT_MODE,
    payload: layoutMode,
})