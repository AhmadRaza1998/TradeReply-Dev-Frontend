'use client';

import TextInput from "@/Components/UI/TextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import InputError from "@/Components/UI/InputError";
import Link from "next/link";
import CommonButton from "@/Components/UI/CommonButton";
import { handleError } from "@/utils/helper";
import { loginSchema } from "@/validations/schema";
import { RightArrowIcon, Logo } from "@/Components/img/svgIcons/SvgIcon";
import ThirdPartyLogin from "@/Components/common/ThirdPartyLogin";
import useForms from "@/Hooks/useForms";
import { Formik, Field, Form, ErrorMessage } from "formik";
import LoginFooter from "@/Components/UI/LoginFooter";
import NavLink from "@/Components/UI/NavLink";
import AlertMsg from "@/Components/UI/AlertMsg";
import { values } from "lodash";
import { login } from "@/utils/auth";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/authSlice';
import { useRouter } from 'next/navigation'


const initialValues = {
  email: "",
  password: "",
};

export default function Login({ status }) {

  const dispatch = useDispatch();
  const router = useRouter()

  const submit = async (values, { setSubmitting }) => {
    try {
      const response = await login(values);
      console.log('response' , response);
      const userData = response;
      document.cookie = `token=${response.auth_token}; expires=${expires.toUTCString()}; path=/`;
      dispatch(setUser(response.user));
      const useree = useSelector(getUser);
      console.log('user' , useree);
      // router.push("/dashboard");
    } 
    catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <AuthLayout>



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
                    <Link href="/auth/forgotPassword">
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
                      <Link href="/auth/register">
                        Create a free TradeReply Account
                      </Link>                    
                    </h6>
                  </div>


                    </Form>)}

                    </Formik>
                {/* <form onSubmit={submit}>
                  <TextInput
                    placeholder="Email"
                    className=""
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                    />

                  <TextInput
                    placeholder="Password"
                    id="password"
                    className=""
                    type="password"
                    onChange={(e) => handleChange("password", e.target.value)}
                    autoFocus={true}
                  />

                </form> */}
              </div>
            </div>
          </div>
          <div className="mt-4 mt-md-5">
            {" "}
            <LoginFooter />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}


// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { login } from '@/utils/auth';

// // import { useAuth } from '@/context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
// //   const { loginUser } = useAuth();
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await login({ email, password });
//     //   loginUser(data.user); 
//       router.push('/dashboard');  // Redirect to dashboard or home page
//     } catch (error) {
//       console.error('Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
