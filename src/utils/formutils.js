import * as Yup from "yup";




export const signupvalidationSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match'),
  phonenumber: Yup.string().required("Phone number is required"),
  homeaddress: Yup.string().required("Homeaddress is required"),
})
export const LoginvalidationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),

})