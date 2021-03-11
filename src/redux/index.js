import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";
import imagesReducer from "./images";
import imagesIdReducer from "./imagesId";

const logger =createLogger({
    diff:true,
    collapsed:true
})
const rootReduces =combineReducers({
    images:imagesReducer,
    imagesId:imagesIdReducer,


})
const store =createStore(rootReduces,applyMiddleware(thunk,logger));
export default store;