import React from "react";
import { ErrorMessage, useFormik } from "formik";
import { TextField, Button, Checkbox } from "@mui/material";
import Logo from "../../assets/Screenshot_3-removebg-preview.png";
import { LoginSchema } from "./Validation";
import Logo1 from "../../assets/real.png";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div className="flex flex-col lg:w-auto sm:w-full w-full">
      <div className="bg-gray-200 flex flex-row">
        <div>
          <img alt="pic" src={Logo} className="h-[30px]" />
        </div>
        <div className="pl-5">
          <span>Sherjan platform</span>
        </div>
      </div>

      <div className="flex xl:flex-row lg:flex-row sm:flex-col flex-col h-full sm:h-full bg-white lg:[45rem] xl:h-[45rem]">
        {/* <form onSubmit={handleSubmit}> */}
        <div className="col-span-12 lg:pl-36 xl:pl-36 sm:pl-0 pl-0 pt-20 lg:h-auto sm:h-full h-screen bg-gray-00 xl:w-[60%] sm:w-auto w-auto lg:w-[60%] ">
          <div className=" mt-5">
            <h1 className="text-black sm:pl-24 pl-24 lg:pl-0 xl:pl-0  font-bold sm:text-2xl text-2xl xl:text-3xl">
              Create account
            </h1>
            <span className="sm:pl-4 pl-4 lg:pl-0 xl:pl-0 ">
              Get All Access to the features by creating account
            </span>
          </div>

          <div className="lg:flex sm:flex flex sm:gap-[4.5rem] gap-[4.5rem] lg:gap-0  flex-row mt-16 ">
            <div className="flex mt-2 lg:pl-0 xl:pl-0 md:pl-0 pl-10 sm:pl-10">
              <span className="text-black font-semibold text-center">Name</span>
            </div>

            <div className="flex w-[20rem] h-10">
              <TextField
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                placeholder="Name"
                autoComplete="off"
                 sx={{
                //   radius: "10px",
                //   width: {
                //     sm: "15rem",
                //     xs: "12rem",
                //     xl: "30rem",
                //     lg: "20rem",
                //   },

                  // height: "40px",

                  "&:focus": {
                    outline: 0,
                    // Remove the focus ring
                    caretPosition: "end",
                    // Move the cursor to the end of the input
                  },
                }}
              />
            </div>
          </div>
          <div className="xl:mt-4  lg:mt-4  sm:mt-4 mt-4 ">
            <span>
              {errors.name && touched.name ? <p>{errors.name}</p> : null}
            </span>
          </div>

          <div className="lg:grid sm:flex sm:gap-[3rem] gap-[3rem] lg:gap-0 flex grid-cols-12 mt-10 w-[70%]">
            <div className="col-span-6 mt-2 lg:pl-0 xl:pl-0 md:pl-0 pl-10 sm:pl-10">
              <span className="text-black font-semibold text-center">
                Password
              </span>
            </div>
            <div className="col-span-6">
              <TextField
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="addBorder"
                placeholder="Password"
                autoComplete="off"
                sx={{
                  radius: "10px",
                  width: {
                    sm: "15rem",
                    xs: "12rem",
                    xl: "20rem",
                    lg: "20rem",
                  },
                  height: "35px",
                  "&:focus": {
                    outline: 0,
                    // Remove the focus ring
                    caretPosition: "end",
                    // Move the cursor to the end of the input
                  },
                }}
              />
            </div>
          </div>
          <div className="xl:mt-4 xl:ml-[21rem] lg:mt-4 lg:ml-[21rem] sm:mt-4 mt-4 ml-44">
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <div className="mt-10 xl:pl-10 sm:pl-0 pl-0 lg:pl-10 ">
            <Checkbox />
            <span className="text-black font-semibold sm:text-base text-base md:text-lg">
              I have agree with all the{" "}
              <span className="text-orange-500">terms and conditions </span>
            </span>
            <div className="pl-16">
              <span>Subscribe to membership upto date</span>
            </div>
          </div>
          <div className="pt-5  sm:[5rem] xl:pl-[20rem] sm:pl-20 pl-20 lg:pl-[20rem] ">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "orangered",

                width: {
                  lg: "200px",
                  sm: "150px",
                  xl: "200px",
                  xs: "200px",
                },
                fontSize: "10",
                "&:hover": {
                  backgroundColor: "orange-red",
                },
              }}
            >
              create my account
            </Button>
          </div>
          <div className="mt-10 lg:ml-40 xl:ml-40 sm:ml-20 ml-20">
            <span className="text-orange-400">
            Dont have Account ? <Link to='/RegistrationPage'><span>Signup</span></Link>
            </span>
          </div>
        </div>
        {/* </form> */}

        <div className="lg:w-[50%] lg:flex xl:flex sm:hidden hidden bg-orange-500 h-[45rem]  ml-20">
          <div className="lg:grid sm:hidden grid-cols-12 ">
            <div className="col-span-12">
              <img src={Logo1} alt="pic" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white pl-52">
                  Meet the Exchange hub
                </span>
                <span className="text-sm text-white pl-28">
                  Sherjan cloud visual integration builder set you integrate in
                  real time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
