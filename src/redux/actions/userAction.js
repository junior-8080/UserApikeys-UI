/*
 User Logged In,

*/
import { message, notification } from "antd";
import axios from "axios";
import { config } from "../../config";
import { getItemLocalStorage } from "../../utils";

export const login = (payload) => {
  return {
    type: "LOGIN",
    payload: payload,
  };
};

export const loginSuccess = (token) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: token,
  };
};

export const isLoggingIn = (payload) => {
  return {
    type:"IS_LOGGING_IN",
    payload: payload
  }
}
export const accountDetails = (payload) => {
  return {
    type: "ACCOUNT_FETCH_SUCCESS",
    payload: payload,
  };
};

export const logoutSuccess = () => {
  return {
    type: "LOGOUT",
    payload: false,
  };
};

export const authPage = (page) => {
  return {
    type: "AUTH_PAGE",
    payload: page,
  };
};

export const openNotification = (message) => {
  notification.open({
    message: message,
  });
};

export function userSigin(data) {
  return async (dispatch, getState) => {
    try {
      dispatch(isLoggingIn(true))
      let response = await axios({
        url: config.apiBaseUrl + "/login",
        method: "POST",
        data: data,
      });
      let token  = response.data.data.token;
      dispatch(loginSuccess(token));
    } catch (error) {
      if (error.response.status === 404) {
        openNotification("Invalid Email or Password");
      } else {
        openNotification("Something  went wrong");
      }
    }finally{
      dispatch(isLoggingIn(false))
    }
  };
}

export function userSigup(data) {
  return async (dispatch, getState) => {
    try {
      const response = await axios({
        url: config.apiBaseUrl + "/signup",
        method: "POST",
        data: data,
      });
      if (response.status === 200) {
        // const payload = {
        //   email: data.email,
        //   password: data.password,
        // };
        dispatch(authPage("login"));
      }
    } catch (error) {
      const statusCode = error.statusCode;
      if (statusCode === 401 && message === "Invalid email or password") {
        openNotification("Invalid Email or Password");
      }
    }
  };
}

export function fetchUser(data) {
  return async (dispatch, getState) => {
    try {
      const token = getItemLocalStorage("token");
      const result = await axios({
        url: config.apiBaseUrl + "/account",
        method: "GET",
        headers: {
          token: token,
        },
      });
      dispatch(accountDetails(result.data.data));
    } catch (error) {
      openNotification("Something Went Wrong");
    }
  };
}
