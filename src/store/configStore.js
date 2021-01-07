import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import placeReducer from "./reducers/places";

const rootReducer = combineReducers({
    places:placeReducer
})


const store = createStore(rootReducer);

export default store