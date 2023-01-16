import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../images/logo.svg';
import activeuser from '../images/active-user.png';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { FaChevronDown } from "react-icons/fa";
const Login = ()=>{
  return (
    <>
    < div className='login-page-section register-page-section'>
        <div className='container-fulid p-0'>
           <div className='login-page-content-wrapper d-flex justify-content-between'>
           <div className='left-part'>
                <div className="logo-image">
                    <a href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className='login-page-content'>
                    <h2>Become a reader</h2>
                    <p className='small-desc fs-18 light-grey'>Join us as a reader </p>
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
                        <input type="text" className='input-box' placeholder='First Name'></input>
                        <input type="text" className='input-box' placeholder='Last Name'></input>
                        <input type="text" className='input-box' placeholder='Mobile number'></input>
                        <Dropdown className='input-box without-background'>
                            <Dropdown.Toggle id="dropdown-basic">
                                Select gender <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input type="date" className='input-box' placeholder='Select Date'></input>
                        <Dropdown className='input-box without-background'>
                            <Dropdown.Toggle id="dropdown-basic">
                                Country <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='input-box without-background'>
                            <Dropdown.Toggle id="dropdown-basic">
                                City <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input type="password" className='input-box' placeholder='Password'></input>
                        <input type="password" className='input-box' placeholder='Confirm password'></input>
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
                        <Button className='btn btn-primary'>Create account</Button>
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
export default Login;