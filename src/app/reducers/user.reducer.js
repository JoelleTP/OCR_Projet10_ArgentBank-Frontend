import { GET_USERDATA, ERROR, EDIT_NAME, DELETE_USERDATA } from "../actions/user.action";

const initialState = {
    userData: JSON.parse(localStorage.getItem("userData")) || {},
    error: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERDATA:
            return {...state, userData: action.payload, error: null}
        case ERROR:
            return {...state, error: action.payload}
        case EDIT_NAME:
            return {...state, userData: action.payload, error: null}
        case DELETE_USERDATA:
            return {...state, userData: action.payload}
        default:
            return state;
    }
}