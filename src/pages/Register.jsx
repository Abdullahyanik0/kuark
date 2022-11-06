import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { Button, Checkbox } from "@mantine/core";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
//local imports
import { ValidationSchemas } from "utils";
import Layout from "Layout/Layout";

const Register = () => {
  const url = "https://ecommerceappexpress.herokuapp.com/api/auth/register";

  return (
    <Layout>
      <div className="flex justify-center  bg-bg h-screen  pt-12 ">
        <div className="lg:w-3/12 w-11/12   ">
          <div className="flex justify-between w-full text-lg my-8">
            <h1 className="">Register</h1>
            <h1 className="">
              <AiOutlineLock />
            </h1>
          </div>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
            }}
            validationSchema={ValidationSchemas.RegisterSchema}
            onSubmit={(values) => {
              console.log(values);
              axios
                .post(url, values)
                .then(function (response) {
                  console.log(response);
                  localStorage.setItem("user", values.fullName);
                })
                .catch(function (error) {
                  console.log(error.response.data.msg);
                });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex flex-col">
                  <Field
                    placeholder="Name"
                    className="p-3 border-[1px] !text-black border-gray-400 rounded-md placeholder:text-gray-500 mb-4 my-1"
                    name="fullName"
                  />

                  {errors.fullName && touched.fullName ? (
                    <div className="text-red-600">{errors.fullName}</div>
                  ) : null}
                  <Field
                    placeholder="Email"
                    name="email"
                    className="p-3 border-[1px] !text-black border-gray-400 rounded-md placeholder:text-gray-500 mb-4 my-1"
                  />

                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}

                  <Field
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="p-3 border-[1px] !text-black border-gray-400 rounded-md placeholder:text-gray-500 mb-4 my-1"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>
                <div className="flex gap-x-4  mb-3 items-center">
                  <Checkbox color="teal" size="sm" />
                  <p className="-mt-2">Remember Me</p>
                </div>
                <Button
                  className="w-full my-2 h-14 text-xl bg-[#309242]  hover:bg-[#37B24D]"
                  variant="filled"
                  type="submit"
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>

          <div className="flex  my-2  gap-2 text-xl font-semibold">
            <p> Already have an account? </p>
            <Link to="/login">
              <p className=" text-hovertext ">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
