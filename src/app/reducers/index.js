import { combineReducers } from "redux";
import signInReducer from "./signIn.reducer.js"
import userReducer from "./user.reducer.js"

export const rootReducers = combineReducers({
    signInReducer,
    userReducer,
});