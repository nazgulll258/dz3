import {createStore} from "redux";
import counterReducer from "./reducer/reducer.js";

const store = createStore(
    counterReducer,
)
export default store