import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { userSigup } from "../redux/actions/userAction";
/**
 * @author
 * @function SignInForm
 **/

export const SignUpForm = (props) => {
  // define data schema:
  const schema = {
    email: Yup.string().email(),
    password: Yup.string().min(6).max(12),
    password_confirmation: Yup.string(),
  };

  const dispatch = useDispatch();
  // form initial values: more fields will be added.
  const initialValues = {
    email: "",
    phonenumber: "",
    password: "",
    confirm_password: "",
  };
  // initializing formik instance.
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape(schema),
    onSubmit: (values) => {
      delete values.confirm_password;
      dispatch(userSigup(values));
    },
  });

  return (
    <div className="mt-10">
      <form onSubmit={formik.handleSubmit}>
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
            <p>{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full mt-4">
          <input
            placeholder="Enter Your Phonenumber"
            name="phonenumber"
            type="text"
            className="w-4/5 border-2 border-black-300 p-2 rounded-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phonenumber && formik.errors.phonenumber ? (
            <p>{formik.errors.phonenumber}</p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full mt-4">
          <input
            placeholder="Enter Your Password"
            name="password"
            type="password"
            className="w-4/5 border-2 border-black-300 p-2 rounded-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full mt-4">
          <input
            placeholder="Confirm Your Password"
            name="confirm_password"
            type="password"
            className="w-4/5 border-2 border-black-300 p-2 rounded-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirm_password && formik.errors.confirm_password ? (
            <p>{formik.errors.confirm_password}</p>
          ) : (
            ""
          )}
        </div>
        <div className="w-full my-4">
          <button
            type="submit"
            onSubmit={(e) => e.preventDefault()}
            className="bg-accent5 text-white py-2 px-20 rounded-sm w-4/5"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
