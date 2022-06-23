import React,{useState} from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginType } from "../components/LoginType";
import { Navbar } from "../components/Navbar";
import { SignInForm } from "../components/SigInForm";
import { SignUpForm } from "../components/SignUpForm";

/**
 * @author
 * @function Auth
 **/
const Auth = (props) => {
  const loginModes = [{text:'Google',icon:"fa fa-google",notAvailable:false},{text:'Facebook',icon:"fa fa-facebook",notAvailable:true},{text:'Twitter',icon:"fa fa-twitter",notAvailable:true}].map((item) => (
    <LoginType text={item.text} icon={item.icon} key={item.text.toLowerCase()} notAvailable={item.notAvailable} />
  ));
  const [authState,setAuthState] = useState('login');
  if(props.isLoggedIn){
   return <Navigate to="/dashboard"  />
  }
  return (
    <div className="h-full">
      <Navbar />
      <div className="bg-white w-4/5 mt-2 mr-auto ml-auto rounded-md flex justify-center py-2 sm:w-1/3 sm:mt-24 sm:py-5">
      <div className="w-4/5">
        <h2 className="text-2xl font-bold text-center p-2">Account Login</h2>
        <p className="text-center hidden sm:block">Hey{" "}🙂<br/>Enter your details to get sign in to <br/>your account</p>
        {authState === 'login' ? <SignInForm /> : <SignUpForm />}
        {authState === 'login'? <div>
          <p className="p-2 text-center">--Or Sign in with--</p>
          <div className="text-center">
             {loginModes}
          </div>
          <p className="text-center">Dont have an account?{" "}<button onClick={() => setAuthState('signin')} className="register-now text-accent3">Request Now</button></p>
        </div>: <p className="register-now mt-4 text-accent3 text-center cursor-pointer" onClick={() => setAuthState('login')}>Login</p>}
      </div>
      </div>
    </div>
  );
};

const mapStateProps = state   => {
   const {isLoggedIn} = state.user;
   return {isLoggedIn: isLoggedIn};
}

export default connect(mapStateProps)(Auth)


