import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup"
import { signup } from '../services/auth';
import { signupvalidationSchema } from '../utils/formutils';
import { Navigate, useNavigate } from 'react-router-dom';


function Signup() {
    const Navigate = useNavigate()

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
        onSubmit: (Values) => {
            //call firebase to signup
            Navigate("/home")   
          }
        })
        
       


    return (
        <form onSubmit={formik.handleSubmit}>
<h2 style={{textAlign: "center"}}>Sign Up </h2>
        <p style={{textAlign: "center"}}>
        <h2 style={{ flex: 1, justifyContent: 'center', alignItems:"center", lineHeight:"100px"}}>Fill in for New Users</h2>
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
            <input id="confirmpassword" name="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword} placehlder="confirmpassword"/>
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
</p>





        </form>
    )
}

export default Signup;