import React from "react";
import { ErrorMessage, useFormik } from "formik";
import { TextField, Button, Checkbox } from "@mui/material";
import Logo from "../../assets/Screenshot_3-removebg-preview.png";
import { SignupSchema } from "./Validation";
import Logo1 from "../../assets/real.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    // <div className="flex flex-col justify-center items-center bg-gray-400  lg:w-full sm:w-full w-full">
    //   <div className="flex w-full justify-center items-center   xl:flex-row lg:flex-row sm:flex-col flex-col  bg-yellow-500 ">
    //     {/* <form onSubmit={handleSubmit}> */}
    //     {/*
    // ye ha form ki
    // */}{" "}
    //     <div className=" flex  flex-col    ">
    //       <div className="bg-white flex flex-row left-0">
    //         <div>
    //           <img alt="pic" src={Logo} className="h-[30px]" />
    //         </div>
    //         <div className="pl-5">
    //           <span>Sherjan platform</span>
    //         </div>
    //       </div>

    //       {/* <div className=" mt-5">
    //         <h1 className="text-black sm:pl-24 pl-24 lg:pl-0 xl:pl-0  font-bold sm:text-2xl text-2xl xl:text-3xl">
    //           Create account
    //         </h1>
    //         <span className="sm:pl-4 pl-4 lg:pl-0 xl:pl-0 ">
    //           Get All Access to the features by creating account
    //         </span>
    //       </div> */}

    //       <div className="lg:flex flex-row   items-center sm:flex flex sm:gap-[4.5rem] gap-[4.5rem] lg:gap-20 xl:gap-0  mt-16 w-[100%]">
    //         <div className="flex w-auto lg:w-[9rem] mt-2 justify-center items-center lg:pl-0 xl:pl-0 md:pl-0 pl-10 sm:pl-10">
    //           <span className="text-black font-semibold text-center">Name</span>
    //         </div>

    //         <div className="flex justify-center items-center">
    //           <TextField
    //             id="name"
    //             value={values.name}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             name="name"
    //             className="addBorder"
    //             placeholder="Name"
    //             autoComplete="off"
    //             sx={{
    //               radius: "15px",
    //               width: {
    //                 sm: "15rem",
    //                 xs: "12rem",
    //                 xl: "20rem",
    //                 lg: "20rem",
    //               },

    //               height: "40px",

    //               "&:focus": {
    //                 outline: 0,
    //                 // Remove the focus ring
    //                 caretPosition: "end",
    //                 // Move the cursor to the end of the input
    //               },
    //             }}
    //           />
    //         </div>
    //       </div>
    //       <div className="xl:mt-4 xl:ml-96 lg:mt-4 lg:ml-96 sm:mt-4 mt-4 ml-60">
    //         <span>
    //           {errors.name && touched.name ? <p>{errors.name}</p> : null}
    //         </span>
    //       </div>
    //       <div className="lg:flex flex-rows  items-center sm:flex sm:gap-20 gap-20 xl:gap-0 lg:gap-20 flex mt-10 w-[100%]">
    //         <div className="flex w-auto lg:w-[9rem] mt-2 justify-center items-center lg:pl-0 xl:pl-0 md:pl-0 pl-10 sm:pl-10">
    //           <span className="text-black font-semibold text-center">
    //             Email
    //           </span>
    //         </div>
    //         <div className="flex justify-center items-center">
    //           <TextField
    //             id="email"
    //             name="email"
    //             value={values.email}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             className="addBorder"
    //             placeholder="Email"
    //             autoComplete="off"
    //             sx={{
    //               radius: "10px",
    //               width: {
    //                 sm: "15rem",
    //                 xs: "12rem",
    //                 xl: "20rem",
    //                 lg: "20rem",
    //               },
    //               height: "35px",
    //               "&:focus": {
    //                 outline: 0,
    //                 // Remove the focus ring
    //                 caretPosition: "end",
    //                 // Move the cursor to the end of the input
    //               },
    //             }}
    //           />
    //         </div>
    //       </div>
    //       <div className="xl:mt-4 xl:ml-96 lg:mt-4 lg:ml-96 sm:mt-4 mt-4 ml-60">
    //         {errors.email && touched.email ? <p>{errors.email}</p> : null}
    //       </div>
    //       <div className="lg:flex flex-row xl:gap-0 items-center sm:flex sm:gap-[3rem] gap-[3rem] lg:gap-12 flex mt-10 w-[100%]">
    //         <div className="flex w-auto lg:w-[9rem] mt-2 justify-center items-center lg:pl-0 xl:pl-0 md:pl-0 pl-10 sm:pl-10">
    //           <span className="text-black font-semibold text-center">
    //             Password
    //           </span>
    //         </div>
    //         <div className="flex justify-center items-center">
    //           <TextField
    //             id="password"
    //             value={values.password}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             className="addBorder"
    //             placeholder="Password"
    //             autoComplete="off"
    //             sx={{
    //               radius: "10px",
    //               width: {
    //                 sm: "15rem",
    //                 xs: "12rem",
    //                 xl: "20rem",
    //                 lg: "20rem",
    //               },
    //               height: "35px",
    //               "&:focus": {
    //                 outline: 0,
    //                 // Remove the focus ring
    //                 caretPosition: "end",
    //                 // Move the cursor to the end of the input
    //               },
    //             }}
    //           />
    //         </div>
    //       </div>
    //       <div className="xl:mt-4 xl:ml-[21rem] lg:mt-4 lg:ml-[21rem] sm:mt-4 mt-4 ml-44">
    //         {errors.password && touched.password ? (
    //           <p>{errors.password}</p>
    //         ) : null}
    //       </div>
    //       <div className="lg:flex flex-rows xl:gap-0  items-center sm:flex sm:gap-12 gap-12 lg:gap-10 flex  mt-10 w-[100%]">
    //         <div className="flex mt-2 w-auto lg:w-[9rem] justify-center items-center lg:pl-0 xl:pl-0 md:pl-0 pl-10 sm:pl-10">
    //           <span className="text-black font-semibold ">password</span>
    //         </div>
    //         <div className="flex justify-center items-center">
    //           <TextField
    //             id="ConfirmPassword"
    //             value={values.confirmPassword}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             className="addBorder"
    //             name="confirmPassword"
    //             placeholder="ConfirmPassword"
    //             autoComplete="off"
    //             sx={{
    //               radius: "10px",
    //               width: {
    //                 sm: "15rem",
    //                 xs: "12rem",
    //                 xl: "20rem",
    //                 lg: "20rem",
    //               },
    //               height: "35px",
    //               "&:focus": {
    //                 outline: 0,
    //                 // Remove the focus ring
    //                 caretPosition: "end",
    //                 // Move the cursor to the end of the input
    //               },
    //             }}
    //           />
    //         </div>
    //       </div>
    //       <div className="xl:mt-4 xl:ml-[22rem] lg:mt-4 lg:ml-[22rem] sm:mt-1 mt-1 ml-52">
    //         {errors.confirmPassword && touched.confirmPassword ? (
    //           <p>{errors.confirmPassword}</p>
    //         ) : null}
    //       </div>

    //       {/* <div className=" flex flex-col justify-center items-center">
    //         <div className="mt-10 flex flex-row justify-center items-center xl:pl-10 sm:pl-0 pl-0 lg:pl-10 ">
    //           <Checkbox />
    //           <span className="text-black font-semibold sm:text-base text-base md:text-lg">
    //             I have agree with all the{" "}
    //             <span className="text-orange-500">terms and conditions </span>
    //           </span>
    //         </div>

    //         <div className="pl-16">
    //           <span>Subscribe to membership upto date</span>
    //         </div>
    //       </div>

    //       <div className="pt-5  sm:[5rem] xl:pl-[20rem] sm:pl-20 pl-20 lg:pl-[20rem] ">
    //         <Button
    //           variant="contained"
    //           sx={{
    //             backgroundColor: "orangered",

    //             width: {
    //               lg: "200px",
    //               sm: "150px",
    //               xl: "200px",
    //               xs: "200px",
    //             },
    //             fontSize: "10",
    //             "&:hover": {
    //               backgroundColor: "orange-red",
    //             },
    //           }}
    //         >
    //           create my account
    //         </Button>
    //       </div> */}
    //       <div className="mt-10 lg:ml-0 justify-center items-center xl:ml-0 sm:ml-20 ml-20">
    //         <span className="text-orange-400">
    //           Already have Account ?{" "}
    //           <Link to="/LoginPage">
    //             <span>Login</span>
    //           </Link>
    //         </span>
    //       </div>
    //     </div>
    //     {/* </form> */}
    //     <div class="flex lg:w-[40%] bg-orange-500 lg:flex sm:hidden flex-col justify-center items-center ">
    //       <img src={Logo1} alt="pic" />
    //       <div class="flex flex-col  items-center">
    //         <span class="text-lg font-semibold text-white pl-52">
    //           Meet the Exchange hub
    //         </span>
    //         <span class="text-sm text-white pl-28">
    //           Sherjan cloud visual integration builder set you integrate in real
    //           time
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="flex justify-center items-center h-screen bg-gray-400 p-[20px] lg:p-[30px]">
        <div className="w-full flex flex-row h-full">
          <div className="lg:w-1/2 w-full bg-red-400">
            <div className="flex flex-row bg-white">
              <div>
                <img alt="pic" src={Logo} className="h-[30px]" />
              </div>
              <div className="pl-5">
                <span>Sherjan platform</span>
              </div>
            </div>
            <div className=" mt-5 flex flex-col justify-center items-center  ">
              <h1 className="text-black lg:pl-0 xl:pl-0  font-bold sm:text-2xl text-2xl xl:text-3xl">
                Create account
              </h1>
              <span className=" lg:pl-0 xl:pl-0 ">
                Get All Access to the features by creating account
              </span>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-x-20 bg-yellow-300 ">
            <div className="flex flex-row xl:gap-0 items-center justify-center mt-6 ">
              <div className="flex w-auto lg:w-[9rem] mt-2 justify-center items-center">
                <span className="text-black font-semibold text-center">
                  Name
                </span>
              </div>
              <div className="flex justify-center items-center">
                <TextField
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                  autoComplete="off"
                  size='small'
                  sx={{
                    radius: "10px",
                    width: {
                      sm: "15rem",
                      xs: "15rem",
                      xl: "22rem",
                      lg: "22rem",
                    },
                    width:'100%' ,
                    padding: "3.5px 10px",
                 
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
            <div className="xl:mt-1 ml-72 lg:mt-1  sm:mt-1 mt-1 ">
              {errors.name && touched.name ? <p>{errors.name}</p> : null}
            </div>
            <div className="flex flex-row xl:gap-0 items-center  justify-center   ">
              <div className="flex w-auto lg:w-[9rem] mt-2 justify-center items-center ">
                <span className="text-black font-semibold text-center">
                  Email
                </span>
              </div>
              <div className="flex justify-center items-center">
                <TextField
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                  autoComplete="off"
                  size="small"
                  sx={{
                    radius: "10px",
                    width: {
                      sm: "15rem",
                      xs: "15rem",
                      xl: "22rem",
                      lg: "22rem",
                    },
                    width:'100%' ,
                    padding: "3.5px 10px",
                
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
            <div className="xl:mt-1 ml-72 lg:mt-1  sm:mt-1 mt-1 ">
              {errors.email && touched.email ? <p>{errors.name}</p> : null}
            </div>
            <div className="flex flex-row justify-center items-center   ">
              <div className="flex w-auto lg:w-[9rem] mt-2 justify-center items-center">
                <span className="text-black font-semibold text-center">
                  password
                </span>
              </div>
              <div className="flex justify-center items-center">
                <TextField
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="password"
                  autoComplete="off"
                  size='small'
                  sx={{
                    radius: "10px",
                    width: {
                      sm: "15rem",
                      xs: "15rem",
                      xl: "22rem",
                      lg: "22rem",
                    },
                    width:'100%' ,
                    padding: "3.5px 10px",
              
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
            <div className="xl:mt-1 ml-72 lg:mt-1  sm:mt-1 mt-1 ">
              {errors.password && touched.password ? (
                <p>{errors.name}</p>
              ) : null}
            </div>
            {/* <div className="flex flex-row xl:gap-0 justify-center items-center  ">
              <div className="flex w-auto lg:w-[9rem] mt-2 justify-center items-center">
                <span className="text-black font-semibold text-center">
                  Repeat
                </span>
              </div>
              <div className="flex justify-center flex-wrap w-full items-center">
                <TextField
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="confirmPassword"
                  autoComplete="off"
                  size="small"
                   sx={{
                  //   radius: "10px",
                  //   width: {
                  //     sm: "15rem",
                  //     xs: "15rem",
                  //     xl: "20rem",
                  //     lg: "22rem",
                  //   },
                  width:'100%' ,                   padding: "3.5px 10px",
                  
                    "&:focus": {
                      outline: 0,
                      // Remove the focus ring
                      caretPosition: "end",
                      // Move the cursor to the end of the input
                    },
                  }}
                />
              </div>
            </div> */}
            <div className="flex flex-row justify-center items-center   ">
              <div className="flex w-auto lg:w-[9rem] mt-2 justify-center items-center">
                <span className="text-black font-semibold text-center">
                  password
                </span>
              </div>
              <div className="flex justify-center items-center">
                <TextField
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="password"
                  autoComplete="off"
                  size='small'
                  sx={{
                    radius: "10px",
                    width: {
                      sm: "15rem",
                      xs: "15rem",
                      xl: "22rem",
                      lg: "22rem",
                    },
                    width:'100%' ,
                    padding: "3.5px 10px",
              
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
            <div className="xl:mt-1 ml-72 lg:mt-1  sm:mt-1 mt-1 ">
              {errors.confirmPassword && touched.confirmPassword ? (
                <p>{errors.confirmPassword}</p>
              ) : null}
            </div>
            </div>
            <div className=" mt-4 flex flex-col justify-center items-center">
              <div className=" flex flex-row justify-center items-center ">
                <Checkbox />
                <span className="text-black font-semibold sm:text-base text-base md:text-lg">
                  I have agree with all the
                  <span className="text-orange-500">terms and conditions </span>
                </span>
              </div>

              <div className="pl-16">
                <span>Subscribe to membership upto date</span>
              </div>
            </div>

            <div className="flex xl:ml-72 ml-36 ">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "orangered",
                  fontSize: "5",
                  "&:hover": {
                    backgroundColor: "orange-red",
                  },
                }}
              >
                create my account
              </Button>
            </div>
            <div className="mt-3 lg:ml-20 justify-center items-center xl:ml-0 sm:ml-20 ml-20">
              <span className="text-orange-400">
                Already have Account ?{" "}
                <Link to="/LoginPage">
                  <span>Login</span>
                </Link>
              </span>
            </div>
          </div>

          <div className="lg:w-1/2  lg:flex sm:hidden hidden justify-center items-center bg-green-400">
            <div className="flex flex-col lg:flex sm:hidden  ">
              <div className="lg:flex sm:hidden h-[400px]">
                <img src={Logo1} alt="pic" />
              </div>
              <div className="lg:flex sm:hidden flex-col">
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
      
    </>
  );
};
export default Signup;
