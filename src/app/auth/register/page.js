"use client";
import Link from "next/link";
import InputError from "@/Components/UI/InputError";
import TextInput from "@/Components/UI/TextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import CommonButton from "@/Components/UI/CommonButton";
import { handleError } from "@/utils/helper";
import { RightArrowIcon, Logo } from "@/Components/img/svgIcons/SvgIcon";
import ThirdPartyLogin from "@/Components/common/ThirdPartyLogin";
import useForms from "@/Hooks/useForms";
import LoginFooter from "@/Components/UI/LoginFooter";
import { signupSchema } from "@/validations/schema";
import NavLink from "@/Components/UI/NavLink";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { register } from "@/utils/auth";
const initialValues = {
  email: "",
  password: "",
  password_confirmation: ""
};

export default function Register() {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await register(values);
      setSubmitting(false);
      handleError(response.errors);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <div className="loginCommon_rightSide signup_form">
        <div className="loginCommon_rightSide_inner">
          <div className="backbtn">
            <Link href={"/"}>
              <RightArrowIcon /> Return to Home
            </Link>
          </div>
          <div className="loginCommon_rightSide_formBox">
            <div className="text-center mb-4 pb-xl-2">
              <Logo />
            </div>
            <div className="loginHeading">
              <h1>Sign up with</h1>
            </div>
            <ThirdPartyLogin />
            <div className="orLine">
              <span>or start with</span>
            </div>
            <div className="loginTabs">
              <div className="loginForm">
                <Formik
                  initialValues={initialValues}
                  validationSchema={signupSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    handleChange,
                    values,
                    errors,
                    touched,
                    isSubmitting
                  }) => (
                    <Form>
                      {/* Email Field */}
                      <Field name="email">
                        {({ field }) => (
                          <TextInput
                            {...field} // Connects Formik state
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

                      {/* Password Field */}
                      <Field name="password">
                        {({ field }) => (
                          <TextInput
                            {...field} // Connects Formik state
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

                      <Field name="password_confirmation">
                        {({ field }) => (
                          <TextInput
                            {...field} // Connects Formik state
                            placeholder="Confirm Password"
                            type="password"
                            error={
                              touched.password_confirmation && errors.password_confirmation ? (
                                <InputError message={errors.password_confirmation} />
                              ) : null
                            }
                          />
                        )}
                      </Field>

                      <div className="w-100">
                        <CommonButton
                          type="submit"
                          title="Create Account"
                          fluid
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="anAccount mt-3 text-center">
                        <h6>
                          Already have an account?{" "}
                          <NavLink href="/auth/login">Login</NavLink>
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
