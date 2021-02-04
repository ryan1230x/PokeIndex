import { combineReducers } from "redux"

// Import reducers here
import globalReducer from "./globalReducer";

export default combineReducers({
  pokemon: globalReducer
});