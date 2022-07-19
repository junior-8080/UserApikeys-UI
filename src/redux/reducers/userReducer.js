
const initialState = {
  isLoggedIn: false,
  userData: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem('my_api_isLoggedIn',action.payload)
      return { ...state, isLoggedIn: action.payload };
    case "ACCOUNT_FETCH_SUCCESS":
      return {...state,userData:action.payload}
    case "LOGOUT":
      localStorage.removeItem('my_api_isLoggedIn');
      return {...state, isLoggedIn:false}
    default:
      return state;
  }
}


