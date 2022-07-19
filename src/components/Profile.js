import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function Profile({ userData }) {
  const schema = {
    email: Yup.string().email().required(),
    phonenumber: Yup.string().required(),
  };
  const initialValues = {
    email: userData.email || "",
    phonenumber: userData.phonenumber || "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape(schema),
    onSubmit: (values) => {},
  });

  return (
    <div className="profile">
      <h2 className="text-center">Profile</h2>
      <form>
        <div className="w-full mt-4">
          <input
            placeholder="Enter Your Email"
            name="email"
            type="text"
            className="border-2 border-black-300 px-8 py-1 rounded-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
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
            className="border-2 border-black-300 px-8 py-1 rounded-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phonenumber}
          />
          {formik.touched.phonenumber && formik.errors.phonenumber ? (
            <p>{formik.errors.phonenumber}</p>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
