import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import logo from '../../images/logo.svg';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../slices/auth";
import LoginDescription from '../../components/LoginDescription';
import { useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
    });


    const responseGoogle = (response) => {
        console.log(response);
        const socialID = response.clientId;
         const userObject = jwt_decode(response.credential);
         console.log(userObject);
         dispatch(login({ email : userObject.email, socialID  }))
         .unwrap()
         .then(() => {
             navigate("/");
         })
         .catch(() => {
             setLoading(false);
         });
     
       }

    const handleLogin = (formValue) => {
        const { email, password } = formValue;
        setLoading(true);
        dispatch(login({ email, password }))
        .then((response) => {
            console.log(response);
            if (response.payload.user) {
                navigate("/");
                setLoading(false);
            }
            else {
                throw ({ error: response.payload })
            }

        })
        .catch((error) => {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER
            });
            setLoading(false);
        });
};
    return (
        <>
          <ToastContainer />
            <div className='login-page-section'>
                <div className='container-fulid p-0'>
                    <div className='login-page-content-wrapper d-flex justify-content-between'>
                        <div className='left-part'>
                            <div className="logo-image">
                                <Link to='/'>
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className='login-page-content'>
                                <h2>Login</h2>
                                <div className='sign-in-option d-flex'>
                                    <div className='btn-wrap me-3'>
                                    {/* <a onClick={() => Glogin()}>
                                            <FcGoogle /> Sign in with Google
                                        </a> */}
                                        <GoogleLogin
                                            render={(renderProps) => (
                                                <button
                                                    type="button"
                                                    className=""
                                                    onClick={renderProps.onClick}
                                                    disabled={renderProps.disabled}
                                                >
                                                    <FcGoogle className="" /> Sign in with google
                                                </button>
                                            )}
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy="single_host_origin"
                                        />
                                    </div>
                                    <div className='btn-wrap'>
                                        <a href='#'>
                                            <BsApple /> Sign in with Apple
                                        </a>
                                    </div>
                                </div>
                                <div className='separator'>
                                    <span>Or</span>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleLogin}
                                >
                                    <Form>
                                        <div className='input-field-group'>
                                            <Field type="email" name="email" className='input-box' placeholder='Email' />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                            <Field type="password" name="password" className='input-box' placeholder='Password' />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                        </div>
                                        <div className='checkbox-group'>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="defaultCheck1"
                                                ></input>
                                                <label className="form-check-label light-grey" for="defaultCheck1">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className='btn-wrap'>
                                            <Button type="submit" disabled={loading} className='btn btn-primary'>
                                                <span> Login &nbsp;</span>
                                                {loading && (
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                )}
                                            </Button>
                                        </div>
                                    </Form>
                                </Formik>
                                <h6 className='forgot-password'>
                                    Forgot password? <a href='#'> Click here</a>
                                </h6>
                            </div>
                        </div>
                        <div className='right-part'>
                            <div className='right-part-content'>
                                <div className='btn-wrap'>
                                    <Link to='/register'>
                                        <button className='btn btn-secondary'>
                                            New user? Register now
                                        </button>
                                    </Link>
                                </div>
                                <LoginDescription />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;