import React from "react";
import contactuser from "../../images/contact-us.png";
import Dropdown from "react-bootstrap/Dropdown";
import { FaChevronDown } from "react-icons/fa";
import contactuserbg from "../../images/contact-user-bg.png";
const Contactus = () => {
  return (
    <>
      <section className="contact-us-section">
        <div className="container">
          <div className="contact-us-content d-flex justify-content-between flex-wrap">
            <div className="left-part">
              <h1>Thanks for your interest in Dreamcapcha!</h1>
              <p>
                Want to learn more about the all-in-one business automation
                platform? Submit this form and our sales representative will
                contact you soon.
              </p>
              <div className="image">
                <img src={contactuser} alt="User" className="user"/>
                <img src={contactuserbg} alt="User" className="user-background"/>
              </div>
            </div>
            <div className="right-part">
              <div className="contact-form row">
                <div className="col-md-6">
                <div className="input-field-item">
                    <label>
                      First Name
                    </label>
                    <input type="text" className='input-box' placeholder='eg. John'></input>
                  </div>
                </div>
                <div className="col-md-6">
                <div className="input-field-item">
                    <label>
                      Last Name
                    </label>
                    <input type="text" className='input-box' placeholder='eg. John'></input>
                  </div>
                </div>
                <div className="col-md-12">
                <div className="input-field-item">
                    <label>
                      Your email
                    </label>
                    <input type="email" className='input-box' placeholder='eg. johnmarris324@gmail.com'></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-field-item">
                    <label>
                     Mobile
                    </label>
                    <Dropdown className="input-box without-background dropdown">
                      <Dropdown.Toggle id="dropdown-basic">
                        Enter Postal code
                        <FaChevronDown />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-field-item">
                    <label>
                     You are a?
                    </label>
                    <Dropdown className="input-box without-background">
                      <Dropdown.Toggle id="dropdown-basic">
                        Enter Postal code
                        <FaChevronDown />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="col-md-12">
                <div className="input-field-item">
                    <label>
                      Subject
                    </label>
                    <input type="text" className='input-box' placeholder='eg. book price'></input>
                  </div>
                </div>
                <div className="col-md-12">
                <div className="input-field-item">
                    <label>
                    Message <span className="light-grey">(optional)</span>
                    </label>
                    <textarea type="text" className='input-box' placeholder='Write your message...'></textarea>
                  </div>
                </div>
                <div className="btn-wrap">
                    <button className="btn btn-primary">Submit Message</button>
                </div>
                <p className="desc">By clicking “Submit Message” you agree to recive marketing communications from us in accordance with our <a href="#">Privacy Policy</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contactus;
