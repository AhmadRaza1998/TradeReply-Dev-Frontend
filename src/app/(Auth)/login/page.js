"use client";

import TextInput from "@/Components/UI/TextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/UI/InputError";
import Link from "next/link";
import Head from "next/head";
import CommonButton from "@/Components/UI/CommonButton"; 
import { loginSchema } from "@/validations/schema";
import { RightArrowIcon, Logo } from "@/Components/img/svgIcons/SvgIcon";
import ThirdPartyLogin from "@/Components/common/ThirdPartyLogin"; 
import { Formik, Field, Form, ErrorMessage } from "formik";
import LoginFooter from "@/Components/UI/LoginFooter";
import NavLink from "@/Components/UI/NavLink";
import AlertMsg from "@/Components/UI/AlertMsg"; 
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

const initialValues = {
  email: "",
  password: ""
};

export default function Login({ status }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token, loading } = useSelector((state) => state.auth);

  const submit = async (values, { setSubmitting, setErrors }) => {
    const response = await dispatch(loginUser(values));

    if (response.payload?.errors) {
      setErrors(response.payload.errors); // Display backend errors
    } else if (response.payload?.token) {
      router.push("/user/dashboard");
    }

    setSubmitting(false);
  };

  //Redirect to dashboard if already Login
  useEffect(() => {
    const tokenFromCookies = Cookies.get("authToken");
    if (tokenFromCookies) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [token, router]);

  return (
    <AuthLayout>
      <Head title="Log in" />

      <div className="loginCommon_rightSide">
        <div className="loginCommon_rightSide_inner">
          <div className="backbtn">
            <NavLink href={"/"}>
              <RightArrowIcon /> Return to Home
            </NavLink>
          </div>
          <div className="loginCommon_rightSide_formBox">
            <div className="text-center mb-4 pb-xl-2">
              <Logo />
            </div>

            <div className="loginHeading">
              <h1>Log in with</h1>
            </div>
            <ThirdPartyLogin />
            <div className="orLine">
              <span>or continue with</span>
            </div>
            <div className="loginTabs">
              <div className="loginForm">
                <AlertMsg message={status} />
                <Formik
                  initialValues={initialValues}
                  validationSchema={loginSchema}
                  onSubmit={submit}
                >
                  {({
                    handleChange,
                    values,
                    errors,
                    touched,
                    isSubmitting
                  }) => (
                    <Form>
                      <Field name="email">
                        {({ field }) => (
                          <TextInput
                            {...field}
                            placeholder="Email"
                            type="email"
                            error={
                              touched.email && errors.email ? (
                                <InputError message={errors.email} />
                              ) : null
                            }
                          />
                        )}
                      </Field>
                      <Field name="password">
                        {({ field }) => (
                          <TextInput
                            {...field}
                            placeholder="Password"
                            type="password"
                            error={
                              touched.password && errors.password ? (
                                <InputError message={errors.password} />
                              ) : null
                            }
                          />
                        )}
                      </Field>

                      <div className="Forgotpassoword text-center pt-2 mb-4 pb-2">
                        <Link href="/forget-password">
                          Forgot password or can&apos;t log in
                        </Link>
                      </div>

                      <div className="w-100">
                        <CommonButton
                          type="submit"
                          title="Log In"
                          fluid
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="anAccount mt-3 text-center">
                        <h6>
                          <Link href="/register">
                            Create a free TradeReply Account
                          </Link>
                        </h6>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="mt-4 mt-md-5">
            <LoginFooter />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
