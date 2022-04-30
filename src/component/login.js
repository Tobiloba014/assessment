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
  const onfailure = (error) => {
    setServerError(error)
  }
  const signUpHandler = () => {
    navigate("/SignUp")

  }

  return (
    <body>
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">

            </div>


          </div>  
          <div>
        <h2 style={{textAlign: "center"}}> Jesus House baltimore </h2>
        <p style={{textAlign: "center"}}>
        <h2 style={{ flex: 1, justifyContent: 'center', alignItems:"center", lineHeight:"100px"}}>Login</h2>

          <form onSubmit={formik.handleSubmit}>

            <input id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="email" />
            <div className="text-red-500 text-x6">
              {formik.errors.email}
              <div>{serverError}</div>
            </div>
            <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="password" />
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
            <div>
        
        <p style={{textAlign: "center"}}>
       
        </p>
      </div>


          </form>
          
        </p>
        </div>


      </div>
    </div>
    </div>
    </body>
  );
}

export default Login;