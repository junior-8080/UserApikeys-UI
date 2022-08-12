import React from "react";
import { connect, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginType } from "../components/LoginType";
import { Navbar } from "../components/Navbar";
import SignInForm from "../components/SigInForm";
import { SignUpForm } from "../components/SignUpForm";
import { authPage } from "../redux/actions/userAction";

/**
 * @author
 * @function Auth
 **/
const loginModes = [
  { text: "Google", icon: "fa fa-google", notAvailable: false },
  { text: "Facebook", icon: "fa fa-facebook", notAvailable: true },
  { text: "Twitter", icon: "fa fa-twitter", notAvailable: true },
].map((item) => (
  <LoginType
    text={item.text}
    icon={item.icon}
    key={item.text.toLowerCase()}
    notAvailable={item.notAvailable}
  />
));

const Auth = (props) => {
  const dispatch = useDispatch();
  if (props.isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <Navbar active_path="/" />
      <div className="bg-white w-1/3 mr-auto ml-auto text-center py-5 rounded-md mt-24 auth">
        <h2 className="text-2xl font-bold text-white">Account Login</h2>
        <p className="text-white">
          Hey 🙂
          <br />
          Enter your details to get sign in to <br />
          your account
        </p>
        {props.authPage === "login" ? <SignInForm /> : <SignUpForm />}
        {props.authPage === "login" ? (
          <div>
            <p className="p-2 text-white">--Or Sign in with--</p>
            {loginModes}
            <p className="text-white">
              Dont have an account?{" "}
              <button
                onClick={() => dispatch(authPage("signup"))}
                className="register-now text-accent3"
              >
                Request Now
              </button>
            </p>
          </div>
        ) : (
          <p className="text-white">
            Dont have an account?{" "}
            <button
              className="register-now mt-4 text-accent3"
              onClick={() => dispatch(authPage("login"))}
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateProps = (state) => {
  const { isLoggedIn, authPage } = state.user;
  return { isLoggedIn: isLoggedIn, authPage };
};

export default connect(mapStateProps)(Auth);
