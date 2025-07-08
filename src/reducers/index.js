import { combineReducers } from "redux";
import signInReducer from "./signIn.reducer.js"
// import editNameReducer from "./editName.reducer"

export const rootReducers = combineReducers({
    signInReducer,
    // editNameReducer,
});