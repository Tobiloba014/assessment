import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup"
import { signup } from '../services/auth';
import { signupvalidationSchema } from '../utils/formutils';


function Signup() {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
            phonenumber: "",
            homeaddress: "",
        },
        validationSchema: signupvalidationSchema,
        onSubmit: (values) => {
            console.log("see me")
            //call firebase to signup
            signup(values, onSuccess, onFailure)
        }
    }
    )

    const onSuccess = () => {
        // navigate to home page
    }

    const onFailure = (error) => {
        // set server error
    }


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>Signup</div>
            <h1>Signup</h1>
            <input id="firstname" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} placeholder="firstname" />
            <div classname="text-red-500 text-x6">
                {formik.errors.firstname}
            </div>
            <input id="lastname" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} placeholder="lastname" />
            <div classname="text-red-500 text-x6">
                {formik.errors.lastname}
            </div>
            <input id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="email" />
            <div className="text-red-500 text-x6">
                {formik.errors.email}
            </div>
            <input id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="password" />
            <div classname="text-red-500 text-x6">
                {formik.errors.password}
            </div>
            <input id="confirmpassword" name="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword} placehlder="confirmpassword" />
            <div classname="text-red-500 text-x6">
                {formik.errors.confirmpassword}
            </div>
            <input id="phonenumber" name="phonenumber" onChange={formik.handleChange} value={formik.values.phonenumber} placeholder="phonenumber" />
            <div classname="text-red-500 text-x6">
                {formik.errors.phonenumber}
            </div>
            <input id="homeaddress" name="homeaddress" onChange={formik.handleChange} value={formik.values.homeaddress} placeholder="homeaddress" />
            <div classname="text-red-500 text-x6">
                {formik.errors.homeaddress}
            </div>
            <div className="submit-button">
                <button type='submit'>submit</button>
            </div>






        </form>
    )
}
export default Signup;