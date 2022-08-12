import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { connect, useDispatch } from "react-redux";
import { userSigin } from "../redux/actions/userAction";
import { Link } from "react-router-dom";

/**
 * @author
 * @function SignInForm
 **/

const SignInForm = (props) => {
  // define data schema:
  const {isLoggingIn} = props;
  const schema = {
    email: Yup.string().email(),
    password: Yup.string().min(6).max(12),
  };
  // form initial values
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  // initializing formik instance.
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape(schema),
    onSubmit: (values) => {
      dispatch(userSigin(values));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="mt-10">
        <div className="w-full mt-4">
          <input
            placeholder="Enter Your Email"
            name="email"
            type="text"
            className="w-4/5 border-2 border-black-300 p-2 rounded-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error-message">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full my-4">
          <input
            placeholder="Enter Your Password"
            name="password"
            type="password"
            className="w-4/5 border-2 border-black-300 p-2 rounded-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error-message">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <Link to={"/"} className="text-left w-4/5 text-accent3">
          Having troubles in sigin?
        </Link>
        <div className="w-full mt-8 ">
          <button
            type="submit"
            className="bg-accent5 py-2 px-20 rounded-sm w-4/5 text-white" 
          >
            {isLoggingIn ? "Logging..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateProps = (state)=> {
  const {isLoggingIn} = state.user;
  return isLoggingIn
}

export default connect(mapStateProps)(SignInForm)