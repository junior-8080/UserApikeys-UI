import {legacy_createStore,applyMiddleware} from "redux";
import {composeWithDevTools}  from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from "redux-thunk";
import { getItemLocalStorage } from "../utils";

const preloadedState = {
    user: {
        isLoggedIn: getItemLocalStorage('isLoggedIn'),
        authPage:"login",
    }
}

const  composeEnhanders = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = legacy_createStore(rootReducer,preloadedState,composeEnhanders);


export default store;


