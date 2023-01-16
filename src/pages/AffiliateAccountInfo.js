import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsCheck2, BsDot } from 'react-icons/bs';
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
const AffiliateAccountInfo = ()=>{
  return (
    <>
        <section className='affiliate-account-section'>
            <div className='container'>
                <div className='stepper-menu d-flex flex-wrap'>
                    <div className='stepper-nav'>
                    <div className='left-box'></div>
                        <div className='stepper-item completed'>
                            <div className='stepper-item-details d-flex'>
                                <div className='stepper-icon'>
                                    <div className='stepper-icon-inner'>
                                        <BsCheck2 />
                                        <div className='dot-icon'></div>
                                    </div>
                                </div>
                                <div className='stepper-item-heading'>
                                    <h3>Your account information</h3>
                                    <p>Enter the all website and mobile app link on which you plan to </p>
                                </div>
                            </div>
                        </div>
                        <div className='stepper-item current'>
                            <div className='stepper-item-details d-flex'>
                                <div className='stepper-icon'>
                                    <div className='stepper-icon-inner'>
                                        <BsCheck2 />
                                        <div className='dot-icon'></div>
                                    </div>
                                </div>
                                <div className='stepper-item-heading'>
                                    <h3>Website and mobile app info</h3>
                                    <p>Enter the all website and mobile app link on which you plan to </p>
                                </div>
                            </div>
                        </div>
                        <div className='stepper-item pending'>
                            <div className='stepper-item-details d-flex'>
                                <div className='stepper-icon'>
                                    <div className='stepper-icon-inner'>
                                        <BsCheck2 />
                                        <div className='dot-icon'></div>
                                    </div>
                                </div>
                                <div className='stepper-item-heading'>
                                    <h3>Profile</h3>
                                    <p>Enter the all website and mobile app link on which you plan to </p>
                                </div>
                            </div>
                        </div>
                        <div className='stepper-item pending'>
                            <div className='stepper-item-details d-flex'>
                                <div className='stepper-icon'>
                                    <div className='stepper-icon-inner'>
                                        <BsCheck2 />
                                        <div className='dot-icon'></div>
                                    </div>
                                </div>
                                <div className='stepper-item-heading'>
                                    <h3>Ready to get started</h3>
                                    <p>Enter the all website and mobile app link on which you plan to </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stepper-nav-content'>
                        <div className='stepper-nav-content-item active'>
                            <h2 className='header-title'>Join Dreamcapcha Affiliate Program</h2>
                            <div className='form-details'>
                                <div className='title'>Your account information</div>
                                <div className='input-field-group'>
                                    <div className='input-field-item'>
                                        <label>Payee Name <span>*</span></label>
                                        <input type="text" className='input-box' placeholder='Enter payee name'></input>
                                    </div>
                                    <div className='input-field-item'>
                                       <p className='light-grey mt-3'>Enter the  name exactly as it appears on the bank account that is being used for payment.</p>
                                    </div>
                                    <div className='input-field-item'>
                                        <label>Mobile <span>*</span></label>
                                        <input type="text" className='input-box' placeholder='Mobile number'></input>
                                    </div>
                                    <div className='input-field-item'>
                                        <label>Email <span>*</span></label>
                                        <input type="text" className='input-box' placeholder='Enter email addres'></input>
                                    </div>
                                     <div className='input-field-item'>
                                        <label>Address Line 1 <span>*</span></label>
                                        <input type="text" className='input-box' placeholder='Enter payee name'></input>
                                    </div>
                                    <div className='input-field-item'>
                                        <label>Address Line 2 <span>*</span></label>
                                        <input type="text" className='input-box' placeholder='Enter payee name'></input>
                                    </div>
                                    <div className='input-field-item'>
                                        <label>City <span>*</span></label>
                                        <Dropdown className='input-box without-background'>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                Enter city name <FaChevronDown />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className='input-field-item'>
                                        <label>State <span>*</span></label>
                                        <Dropdown className='input-box without-background'>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                Enter State name <FaChevronDown />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className='input-field-item'>
                                        <label>Postal code <span>*</span></label>
                                        <Dropdown className='input-box without-background'>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                Enter Postal code<FaChevronDown />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className='input-field-item'>
                                        <label>Country<span>*</span></label>
                                        <Dropdown className='input-box without-background'>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                Enter Country name<FaChevronDown />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className='btn-wrap d-flex align-items-center justify-content-end'>
                                    <button className='btn btn-primary'>Proceed</button>
                                </div>
                            </div>
                        </div>
                        <div className='stepper-nav-content-item active'>
                            <h2 className='header-title'>Join Dreamcapcha Affiliate Program</h2>
                            <div className='form-details'>
                                <div className='title'>Website and mobile app info</div>
                                <div className='web-and-mobile-step-info'>
                                    <p className='note'>
                                    <span>Note:</span> Enter the all website and mobile app link on which you plan to display banners, widgets, Special Links, or other ads from Dreamcapcha Affiliate. You need to add at least one website or mobile app. you can add up to 50 websites or mobile apps.
                                    </p>
                                    <div className='input-field-group'>
                                        <div className='add-url d-flex'>
                                            <div className='input-field-item'>
                                                <label>Enter your websites/mobile apps URL<span>*</span></label>
                                                <div className='d-flex flex-wrap'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog'></input>
                                                    <div className='btn-wrap mt-0'>
                                                        <button className='btn btn-primary'>Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='added-url-list'>
                                            <p>Added URL</p>
                                            <div className='d-flex align-items-center justify-content-between flex-wrap'>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                 <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                 <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                                <div className='input-field-item d-flex'>
                                                    <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog...'></input>
                                                    <button className='btn'>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='btn-wrap flex-wrap d-flex align-items-center justify-content-between'>
                                    <button className='btn btn-secondary'><FaChevronLeft />Previous page</button>
                                    <button className='btn btn-primary'>Proceed</button>
                                </div>
                            </div>
                        </div>
                         <div className='stepper-nav-content-item active'>
                            <h2 className='header-title'>Join Dreamcapcha Affiliate Program</h2>
                            <div className='form-details'>
                                <div className='title'>Profile</div>
                                <div className='web-and-mobile-step-info profile-info'>
                                    <div className='input-field-group'>
                                        <div className='add-url d-flex'>
                                            <div className='input-field-item'>
                                                <label>Create User ID <span>*</span></label>
                                                <div className='d-flex flex-wrap'>
                                                    <input type="text" className='input-box mt-0' placeholder='Create unique user id eg: jonedoe12'></input>
                                                    <div className='btn-wrap'>
                                                        <button className='btn btn-primary'>Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='input-field-group'>
                                            <div className=''>
                                            <p className='input-title'>Your website/app links</p>
                                            <div className='d-flex justify-content-between flex-wrap'>
                                                <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog'></input>
                                                <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog'></input>
                                                <input type="text" className='input-box' placeholder='https://www.blogspot.com/myblog'></input>
                                            </div>
                                            </div>
                                        </div>
                                        <div className='input-field-group'>
                                            <div className='input-field-item'>
                                                <p className='input-title'>What are your website or mobile app about?</p>
                                                <textarea className='input-box' placeholder='Describe your website and mobile app'></textarea>
                                            </div>
                                        </div>
                                        <div className='input-field-group'>
                                            <div className='input-field-item'>
                                                <p className='input-title'>Your website and mobile app topic</p>
                                                 <div className='d-flex flex-wrap d-flex justify-content-between flex-wrap'>
                                                    <Dropdown className='input-box without-background'>
                                                        <Dropdown.Toggle id="dropdown-basic">
                                                            Select primary topic<FaChevronDown />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <Dropdown className='input-box without-background'>
                                                        <Dropdown.Toggle id="dropdown-basic">
                                                            Select secondary topic<FaChevronDown />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                 </div>
                                            </div>
                                         </div>
                                         <div className='input-field-group with-column d-flex justify-content-between flex-wrap'>
                                            <div className='input-field-item col-md-6'>
                                                    <p className='input-title'>How do you build link for Ad</p>
                                                    <div className='d-flex justify-content-between flex-wrap'>
                                                        <Dropdown className='input-box without-background'>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                select<FaChevronDown />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                                <div className='input-field-item'>
                                                    <p className='input-title'>How do you here about us?</p>
                                                    <div className='d-flex flex-wrap'>
                                                        <Dropdown className='input-box without-background'>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                select<FaChevronDown />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                                                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
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
                                        You agree to the terms and conditions of the <a href='#'>Affiliate program of Dreamcapcha Agreement.</a>
                                        </label>
                                    </div>
                                </div>
                                <div className='btn-wrap d-flex flex-wrap align-items-center justify-content-between'>
                                    <button className='btn btn-secondary'><FaChevronLeft />Previous page</button>
                                    <button className='btn btn-primary'>Proceed</button>
                                </div>
                            </div>
                        </div>
                        <div className='stepper-nav-content-item active'>
                            <h2 className='header-title'>Join Dreamcapcha Affiliate Program</h2>
                            <div className='form-details get-started'>
                                <div className='title'>Congratulation, Mike Tyson</div>
                                <div className='web-and-mobile-step-info'>
                                    <p className='thank-you-msg'>
                                    Thank you fo applying to the Dreamcapcha Affiliate program
                                    </p>
                                    <p className='user-id'>Your unique user id is :  <span>mike01</span></p>
                                    <div className='desc'>
                                        <p>After our affiliate team has verified your application and all of the information you have submitted, they will let you know if your account has been confirmed. At that point, you can use this user ID to access your Dreamcapcha Affiliate Dashboard.</p>
                                        <p>Your application and access to the Dreamcapcha Affiliate dashboard will be terminated if your affiliate links have not generated the required number of qualified sales after 180 days.</p>
                                    </div>
                                    <h5>What are your website or mobile app about?</h5>
                                </div>
                                    <div className='btn-wrap d-flex align-items-center'>
                                        <button className='btn btn-primary me-4'>Now</button>
                                        <button className='btn btn-secondary'>Later</button>
                                    </div>
                            </div>
                        </div>
                        <ul className='list d-flex flex-wrap justify-content-end'>
                            <li>
                                <a href='#'>Join Affiliate Program</a>
                            </li>
                            <li>
                                <a href='#'>About us</a>
                            </li>
                            <li>
                                <a href='#'>Terms & condition</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
export default AffiliateAccountInfo;