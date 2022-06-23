/*
 User Logged In,


*/
import { Alert, message, notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";

export const login = (payload) => {
  return {
    type: "LOGIN",
    payload: payload,
  };
};

export const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
    payload: true,
  };
};

export const accountDetails = (payload) => {
  return {
    type: "ACCOUNT_FETCH_SUCCESS",
    payload: payload,
  };
};

const  openNotification = (message) => {
  notification.open({
    message: message,
  });
};

export function userSigin(data) {
  return async (dispatch, getState) => {
    try {
      const result = await axios({
        url: config.apiBaseUrl + "/login",
        method: "POST",
        data: data,
        withCredentials: true 
      });
      dispatch(loginSuccess());
      openNotification("Invalid Email or Password");
    } catch (error) {
      console.log(error);
    }
  };
}

export function userSigup(data) {
  return async (dispatch, getState) => {
    try {
      const result = await axios({
        url: config.apiBaseUrl,
        method: "POST",
        data: JSON.stringify(data),
        withCredentials:true
      });
      if (result.statusCode === 200 && result.statusCode) {
        dispatch(loginSuccess());
      }
      alert("Sign up successful");
    } catch (error) {
      console.log(error);
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
      const result = await axios({
        url: config.apiBaseUrl + "/account",
        method: "GET",
        withCredentials:true
      });
      dispatch(accountDetails(result.data.data));
      alert("Sign up successful");
    } catch (error) {
      console.log(error);
    }
  };
}
