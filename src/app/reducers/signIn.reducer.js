import { LOGIN, LOGOUT, ERROR } from "../actions/signIn.action";

const initialState = {
    token: localStorage.getItem("token") || null,
    error: null
};

export default function signInReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, token: action.payload, error: null}
        case LOGOUT:
            return {...state, token: action.payload}
        case ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}