import React from 'react';
import logo from '../images/logo.svg';
import activeuser from '../images/active-user.png';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
const Login = ()=>{
  return (
    <>
    < div className='login-page-section'>
        <div className='container-fulid p-0'>
           <div className='login-page-content-wrapper d-flex justify-content-between'>
           <div className='left-part'>
                <div className="logo-image">
                    <a href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className='login-page-content'>
                    <h2>Login</h2>
                    <div className='sign-in-option d-flex'>
                        <div className='btn-wrap me-3'>
                            <a href='#'>
                                <FcGoogle /> Sign in with Google
                            </a>
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
                    <div className='input-field-group'>
                        <input type="text" className='input-box' placeholder='Email'></input>
                        <input type="password" className='input-box' placeholder='Password'></input>
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
                        <Button className='btn btn-primary'>Login</Button>
                    </div>
                    <h6 className='forgot-password'>
                    Forgot password? <a href='#'> Click here</a>
                    </h6>
                </div>
            </div>
            <div className='right-part'>
               <div className='right-part-content'>
               <div className='btn-wrap'>
                    <button className='btn btn-secondary'>
                    New user? Register now
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
export default Login;