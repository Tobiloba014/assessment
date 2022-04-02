import { useFormik } from "formik";
import { useState } from "react";
import { resetpassword } from "../services/auth";

function ResetPassword () {
  const [serverError, setServerError] = useState();
  const formik = useFormik({
    initial: {
        email: "",
},
onsubmit : (values) => {
  //call firebase to resetpassword
  resetpassword(values, onsuccess,onfailure)
}
})

const onsuccess = () => {

}

const onfailure = () => {

}



    return (
        <div>
           <h1>Reset password</h1>
           <div>
             <input type="text" placeholder="email" className="name"/>
           <div>{serverError}</div>
            </div> 
           <div className="login-button">
          <button>Login</button>
          </div>
        </div>
    )
  }
export default ResetPassword;