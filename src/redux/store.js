import {legacy_createStore,applyMiddleware} from "redux";
import {composeWithDevTools}  from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

const preloadedState = {
    user: {
        isLoggedIn: localStorage.getItem('my_api_isLoggedIn',)
    }
}

const  composeEnhanders = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = legacy_createStore(rootReducer,preloadedState,composeEnhanders);


export default store;


