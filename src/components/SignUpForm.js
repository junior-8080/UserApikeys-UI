import React from "react";
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux'
/**
 * @author
 * @function SignInForm
 **/

export const SignUpForm = (props) => {

  // define data schema:
  const schema = {
    email : Yup.string().email(),
    password : Yup.string().min(6).max(12),
    password_confirmation: Yup.string()
  }

  const dispatch = useDispatch();
  // form initial values: more fields will be added.
  const initialValues = {
    email:"",
    phonenumber:"",
    password:"",
    confirm_password:""
  }
  // initializing formik instance.
  const formik = useFormik({
    initialValues:initialValues,
    validationSchema: Yup.object().shape(schema),
    onSubmit: values => {
        dispatch()
    }
  })


  return (
    <div className=" sm:mt-10">
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full mt-4">
          <input placeholder="Enter Your Email" name="email" type="text" className="w-full border-2 border-black-300 p-2 rounded-sm"/>
          {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>:''}
        </div>
        <div className="w-full mt-4">
          <input placeholder="Enter Your Phonenumber" name="phonenumber" type="text" className="w-full border-2 border-black-300 p-2 rounded-sm" />
          {formik.touched.phonenumber && formik.errors.phonenumber ? <p>{formik.errors.phonenumber}</p>:''}
        </div>
        <div className="w-full mt-4">
          <input placeholder="Enter Your Password" name="password" type="password" className="w-full border-2 border-black-300 p-2 rounded-sm"/>
          {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p>:''}
        </div>
        <div className="w-full mt-4">
          <input placeholder="Confirm Your Password" name="password_confirmation" type="password"  className="w-full border-2 border-black-300 p-2 rounded-sm"/>
          {formik.touched.confirm_password && formik.errors.confirm_password ? <p>{formik.errors.confirm_password}</p>:''}
        </div>
        <div className="w-full my-4">
          <button type="submit" onSubmit={(e) => e.preventDefault() } className="bg-accent py-2 px-20 rounded-sm w-full">Sign Up</button> 
        </div>
      </form>
    </div>
  );
};
