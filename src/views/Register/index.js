import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../../slices/auth";

import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../images/logo.svg';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { FaChevronDown } from "react-icons/fa";
import LoginDescription from '../../components/LoginDescription';
import csc from "country-state-city";
import { useGoogleLogin, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const Register = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    
    const responseGoogle = (response) => {
        console.log(response);
        const socialID = response.clientId;
        const token = response.credential;
         const userObject = jwt_decode(response.credential);
         console.log(userObject);

         dispatch(register({ firstName:userObject.given_name, lastName : userObject.family_name  , email : userObject.email, socialID  , token}))
            .unwrap()
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                setLoading(false);
            });
        }
         //  localStorage.setItem('user', JSON.stringify(userObject));
        //   const { name, sub, picture } = userObject;
        //   const doc = {
        //         _id: sub,
        //         _type: 'user',
        //         userName: name,
        //         image: picture,
        //       };
            //   client.createIfNotExists(doc).then(() => {
            //         navigate('/', { replace: true });
            //       });
                 

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("This field is required!"),
        lastName: Yup.string().required("This field is required!"),
        phone: Yup.string().required("This field is required!"),
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
            .required("This field is required!"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const handleRegister = (formValue) => {
        const { firstName, lastName, email, phone, password } = formValue;
        setLoading(true);
        dispatch(register({ firstName, lastName, email, phone, password}))
            .unwrap()
            .then(() => {
                navigate("/otp");
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <>
            < div className='login-page-section '>
                <div className='container-fulid p-0'>
                    <div className='login-page-content-wrapper d-flex justify-content-between'>
                        <div className='left-part'>
                            <div className="logo-image">
                                <Link to='/'>
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>

                            <div className='login-page-content'>
                                <h2>Become a reader</h2>
                                <p className='small-desc fs-18 light-grey'>Join us as a reader </p>
                                <div className='sign-in-option d-flex'>
                                    <div className='btn-wrap me-3'>
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
                                    onSubmit={handleRegister}
                                >
                                    <Form>
                                        <div className='input-field-group'>
                                            <Field type="text" name="firstName" className='input-box' placeholder='First Name' />
                                            <ErrorMessage
                                                name="firstName"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                            <Field type="text" name="lastName" className='input-box' placeholder='Last Name' />
                                            <ErrorMessage
                                                name="lastName"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                            <Field type="email" name="email" className='input-box' placeholder='Email' />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                            <Field type="number" name="phone" className='input-box' placeholder='Mobile Number' />
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                            <Field type="password" name="password" className='input-box' placeholder='Password' />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                            <Field type="password" name="confirmpassword" className='input-box' placeholder='Confirm password' />
                                            <ErrorMessage
                                                name="confirmpassword"
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
                                                    By registering you agree with our <a href='#'>terms & condition</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='btn-wrap'>
                                            <Button type="submit"   className='btn btn-primary'>
                                                <span> Create account &nbsp;</span>
                                                {loading && (
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                )}
                                                </Button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <div className='right-part'>
                            <div className='right-part-content'>
                                <div className='btn-wrap d-flex'>
                                    <button className='btn btn-secondary me-2'>
                                        Become Author
                                    </button>
                                    <Link to='/login'>
                                        <button className='btn btn-secondary'>
                                            Already user? Login
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
export default Register;