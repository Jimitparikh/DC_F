import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../images/logo.svg';
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsArrowLeft } from 'react-icons/bs';
import { Button, NavLink } from 'react-bootstrap';
import { FaChevronDown } from "react-icons/fa";
import LoginDescription from '../../components/LoginDescription';
import AuthService from "../../services/auth.service";
import './index.css';


const ForgotPassword = () => {
    let email = "";
    let readerID = "";
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => state.auth);
    if (user) {
        readerID = user._id;
        email = user.email;
    }
    const [OTP, setOTP] = useState("");
    function handleChange(OTP) {
        setOTP(OTP);
    }

    const verifyotp = async () => {
        console.log(readerID,OTP,"in verify")
        setLoading(true);
        const data = await AuthService.verifyotp({readerID, OTP})
        console.log(data, "otp response")
        if(data.success){
            navigate("/");
        }
        else{
            setLoading(false);
        }
        setLoading(false);
    }

    return (
        <>
            < div className='login-page-section forgot-password-page'>
                <div className='container-fulid p-0'>
                    <div className='login-page-content-wrapper d-flex justify-content-between'>
                        <div className='left-part'>
                            <div className="logo-image">
                                <a href="#">
                                    <img src={logo} alt="Logo" />
                                </a>
                            </div>
                            <div className='login-page-content'>

                                {/* <h2>Forgot Password?</h2>
                    <p className='small-desc fs-18 light-grey'>Don’t worry it happens. Please enter the address associated with your account.</p>
                    <div className='input-field-group'>
                        <input type="text" className='input-box' placeholder='Email ID / Mobile number'></input>
                    </div> */}

                                <h2>Check your email</h2>
                                <p className='small-desc fs-18 light-grey'>We sent 6 digit of OTP to <span>{email}</span></p>
                                <OTPInput
                                    className=""
                                    onChange={handleChange}
                                    value={OTP}
                                    inputStyle="inputStyle"
                                    numInputs={6}
                                    separator={<span></span>}
                                />
                                {/* <div className='input-field-group otp-verification'>
                                        <input type="text" className='input-box' placeholder=''></input>
                                        <input type="text" className='input-box' placeholder=''></input>
                                        <input type="text" className='input-box' placeholder=''></input>
                                        <input type="text" className='input-box' placeholder=''></input>
                                        <input type="text" className='input-box' placeholder=''></input>
                                        <input type="text" className='input-box' placeholder=''></input>
                                    </div> */}
                                <p className='otp-message'>Didn’t recived OTP?<span>00:10</span></p>

                                {/* <h2>Set new password</h2>
                    <p className='small-desc fs-18 light-grey'>Your new password must be diffrent to previously used passwords.</p>
                    <div className='input-field-group set-new-password'>
                       <div className='input-field'>
                            <input type="password" className='input-box' placeholder='Password'></input>
                            <p className='light-grey mt-2'>Password must be at least 8 characters.</p>
                       </div>
                       <div className='input-field'>
                            <input type="password" className='input-box' placeholder='Confirm password'></input>
                       </div>
                    </div> */}

                                <div className='btn-wrap'>
                                    <Button className='btn btn-primary' onClick={()=> verifyotp()}>
                                        <span>Submit &nbsp;</span>
                                        {loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                    </Button>
                                    <Link to='/login'><BsArrowLeft />Back to login</Link>
                                </div>
                            </div>
                        </div>
                        <div className='right-part'>
                            <div className='right-part-content'>
                                <div className='btn-wrap d-flex'>
                                    <button className='btn btn-secondary me-2'>
                                        Become Author
                                    </button>
                                    <button className='btn btn-secondary'>
                                        Already user? Login
                                    </button>
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
export default ForgotPassword;