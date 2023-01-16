import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../images/logo.svg';
import activeuser from '../images/active-user.png';
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsArrowLeft } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { FaChevronDown } from "react-icons/fa";
const ForgotPassword = ()=>{
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
                    <p className='small-desc fs-18 light-grey'>We sent 6 digit of OTP of password reset link to <span>testuse123@gmail.com</span><a href='#'>Change</a></p>
                    <div className='input-field-group otp-verification'>
                        <input type="text" className='input-box' placeholder=''></input>
                        <input type="text" className='input-box' placeholder=''></input>
                        <input type="text" className='input-box' placeholder=''></input>
                        <input type="text" className='input-box' placeholder=''></input>
                        <input type="text" className='input-box' placeholder=''></input>
                        <input type="text" className='input-box' placeholder=''></input>
                    </div>
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
                        <Button className='btn btn-primary'>Reset password</Button>
                        <a href='#'><BsArrowLeft />Back to login</a>
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
                <div className='login-page-desc'>
                    <h1>Welcome to <span>our community</span></h1>
                    <p className='desc'>
                    Mahatma Gandhi written by Romain Rolland, a French novelist and Nobel Prize winner, presents the life and legacy ‘Mahatma Gandhi’ written by Romain Rolland, 
                    </p>
                    <div className='active-user d-flex align-items-center'>
                        <img src={activeuser} alt="Active users"></img>
                        <span>4k+ Active Readers on Dreamcapcha </span>
                    </div>
                </div>
                <ul className='list d-flex flex-wrap'>
                    <li>
                        <a href='#'>Join Affiliate Program</a>
                    </li>
                    <li>
                        <a href='#'>About us</a>
                    </li>
                    <li>
                        <a href='#'>Terms & condition</a>
                    </li>
                    <li>
                        <a href='#'>Contact us</a>
                    </li>
                </ul>
               </div>
            </div>
           </div>
        </div>
    </div>
    </>
  );
}
export default ForgotPassword;