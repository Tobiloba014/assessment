import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { LoginvalidationSchema } from '../utils/formutils';
import { useState } from 'react/cjs/react.development';
import { signIn } from '../services/auth';
function Login() {
  const navigate = useNavigate()
  const [serverError, setServerError,] = useState("")
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginvalidationSchema,
    onSubmit: (values) => {
      //call firebase to signup
      signIn(values, onsuccess, onfailure)
    }
  })
  const onsuccess = () => {
   navigate("/home")             
  }
  const onfailure = (message) => {
    setServerError(message)
  }
  const signUpHandler = () => {
    navigate("/SignUp")

  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">

            </div>


          </div>
          <form onSubmit={formik.handleSubmit}>
            <h1>Login Page</h1>
            <input id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="email" />
            <div className="text-red-500 text-x6">
              {formik.errors.email}
              <div>{serverError}</div>
            </div>
            <input id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="password" />
            <div classname="text-red-500 text-x6">
              {formik.errors.password}
              <div>{serverError}</div>
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
            <div onClick={signUpHandler}>Sign Up</div>

            <p className="link">
            </p>


          </form>
        </div>


      </div>
    </div>
  );
}

export default Login;