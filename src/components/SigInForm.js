import React from "react";
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { useDispatch } from "react-redux";
import { userSigin } from "../redux/actions/userAction";
import { Link } from "react-router-dom";

/**
 * @author
 * @function SignInForm
 **/

export const SignInForm = (props) => {

  // define data schema:
  const schema = {
    email : Yup.string().email(),
    password : Yup.string().min(6).max(12),
  }
  // form initial values
  const initialValues = {
    email:"",
    password:"",
  }
  const dispatch = useDispatch();
  // initializing formik instance.
  const formik = useFormik({
    initialValues:initialValues,
    validationSchema: Yup.object().shape(schema),
    onSubmit: values => {
       console.log(values)
       dispatch(userSigin(values));
    }
  })


  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="mt-10" >
        <div className="w-full mt-4">
          <input placeholder="Enter Your Email" name="email" type="text"  className="w-full border-2 border-black-300 p-2 rounded-sm" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.email && formik.errors.email ? <p className="text-rose-500">{formik.errors.email}</p>:''}
        </div>
        <div className="w-full my-4">
          <input placeholder="Enter Your Password" name="password" type="password" className="w-full border-2 border-black-300 p-2 rounded-sm" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.password && formik.errors.password ?<p className="text-rose-500">{formik.errors.password}</p>:''}
        </div>
           <Link to={"/"} className="text-left w-full text-accent3">Having troubles in sigin?</Link>
        <div className="w-full mt-8 ">
          <button type="submit"  className="bg-accent py-2 px-20 rounded-sm w-full">Login</button>
        </div>
      </form>
    </div>
  );
};
