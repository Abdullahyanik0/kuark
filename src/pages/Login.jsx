import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { Button, Checkbox } from "@mantine/core";
import { AiOutlineLock } from "react-icons/ai";

//local imports
import { useStore } from "context/store-context";
import { ValidationSchemas } from "utils";
import Layout from "Layout/Layout";

const Login = () => {
  const { authStore } = useStore();
  const url = "https://ecommerceappexpress.herokuapp.com/api/auth/login";

  return (
    <Layout>
      <div className="flex justify-center  bg-bg h-screen  pt-12 ">
        <div className="lg:w-3/12 w-11/12   ">
          <div className="flex justify-between w-full text-lg my-8">
            <h1 className="">Login</h1>
            <h1 className="">
              <AiOutlineLock />
            </h1>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={ValidationSchemas.LoginSchema}
            onSubmit={(values) => {
              axios
                .post(url, values)
                .then(function (response) {
                  authStore.fullName = response.data.email;
                  authStore.email = response.data.fullName;
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
                  Login
                </Button>
              </Form>
            )}
          </Formik>

          <div className="flex  my-2  gap-2 whitespace-nowrap text-lg font-semibold">
            <p>Don't have an account? </p>
            <Link to="/register">
              <p className=" text-hovertext    ">Create one now.</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default observer(Login);
