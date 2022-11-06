import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Formik, Form, Field } from "formik";
import { Button, Checkbox, useMantineColorScheme } from "@mantine/core";
import { AiOutlineLock } from "react-icons/ai";

import { useStore } from "context/store-context";

//local imports
import { ValidationSchemas } from "utils";
import Layout from "Layout/Layout";

const Login = () => {
  const { colorScheme } = useMantineColorScheme();
  const { authStore } = useStore();

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex justify-center   h-screen  pt-12 ">
        <div className="lg:w-3/12 w-11/12   ">
          <div className="flex justify-between w-full text-lg my-8">
            <h1
              className={colorScheme === "dark" ? "text-white" : "text-black"}
            >
              Login
            </h1>

            <h1
              className={colorScheme === "dark" ? "text-white" : "text-black"}
            >
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
              authStore.fullName = values.email;
              localStorage.setItem("email", values.email);
              authStore.email = values.password;
              navigate("/");
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex flex-col">
                  <Field
                    placeholder="Email"
                    name="email"
                    autoComplete="new-password"
                    className="p-3 border-[1px]  border-gray-400 rounded-md  mb-4 my-1"
                  />

                  {errors.email && touched.email ? (
                    <div className="mb-2 text-red-600 ">{errors.email}</div>
                  ) : null}

                  <Field
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    className="p-3 border-[1px]  border-gray-400 rounded-md  mb-4 my-1"
                  />
                  {errors.password && touched.password ? (
                    <div className="mb-2 text-red-600 ">{errors.password}</div>
                  ) : null}
                </div>
                <div className="flex gap-x-4  mb-3 items-center">
                  <Checkbox color="teal" size="sm" />
                  <p
                    className={
                      colorScheme === "dark" ? "text-white" : "text-black"
                    }
                  >
                    Remember Me
                  </p>
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
            <p className={colorScheme === "dark" ? "text-white" : "text-black"}>
              Don't have an account?{" "}
            </p>
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
