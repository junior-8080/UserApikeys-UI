import { removeItemLocalStorage, setLocalStorage } from "../../utils";

const initialState = {
  isLoggedIn: false,
  userData: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      setLocalStorage('token',action.payload);
      setLocalStorage('isLoggedIn',true);
      return { ...state, isLoggedIn: true};
    case "ACCOUNT_FETCH_SUCCESS":
      return {...state,userData:action.payload}
    case "LOGOUT":
      removeItemLocalStorage('isLoggedIn');
      removeItemLocalStorage('token')
      return {...state, isLoggedIn:false}
    default:
      return state;
  }
}


