import * as Yup from 'yup';
export const SignupSchema=Yup.object({
name:Yup.string().min(2).max(25).required("Name is reqired"),
email:Yup.string().email().required("Email is required"),
password:Yup.string().min(4).required("New password required"),
confirmPassword:Yup.string().required("Password is required") .oneOf([Yup.ref('password'),null] ,"Password is required"),
})
export const LoginSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("Name is required"),
    password:Yup.string().min(4).required("Password is required"),
    })