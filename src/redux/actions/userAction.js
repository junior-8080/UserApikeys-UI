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

export const openNotification = (message) => {
  notification.open({
    message: message,
  });
};

export function userSigin(data) {
  return async (dispatch, getState) => {
    try {
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
      if (response.status === 200 && response.data.status) {
        const payload = {
          email: data.email,
          password: data.password,
        };
        dispatch(userSigin(payload));
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
