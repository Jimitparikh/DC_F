import React from 'react';
import logo from '../../images/logo.svg';
import paymentvisa from '../../images/payment-visa.png'
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = ()=>{
  return (
    <>
         <footer>
        <div className="container">
          <div className="footer-content d-flex justify-content-between flex-wrap">
            <div className="column">
              <div className="logo-image">
                <img src={logo} alt="Logo" />
              </div>
              <p className="light-grey desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="payment">
                <h2 className="payment-title">Accepted Payment Method</h2>
                <ul className="d-flex">
                  <li className="me-3">
                    <img src={paymentvisa} alt="Visa image" />
                  </li>
                  <li className="me-3">
                    <img src={paymentvisa} alt="Visa image" />
                  </li>
                  <li className="me-3">
                    <img src={paymentvisa} alt="Visa image" />
                  </li>
                  <li className="me-3">
                    <img src={paymentvisa} alt="Visa image" />
                  </li>
                  <li className="me-3">
                    <img src={paymentvisa} alt="Visa image" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <h4 className="column-title">Account</h4>
              <ul className="link-list">
                <li>
                  <Link to="/user-dashboard">My Account</Link>
                </li>
                <li>
                  <Link to="/cart">My Cart</Link>
                </li>
                <li>
                  <Link to="/wishlist">My Wishlist</Link>
                </li>
                <li>
                  <a href="#">Shopping Guide</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4 className="column-title">Opportunities</h4>
              <ul className="link-list">
                <li>
                  <a href="#">Publish your book</a>
                </li>
                <li>
                  <a href="#">Join Affiliate</a>
                </li>
                <li>
                  <a href="#">Author support</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Author pannel</a>
                </li>
                <li>
                  <a href="#">Download our App</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4 className="column-title">Sitemap</h4>
              <ul className="link-list">
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/bookList">All Books</Link>
                </li>
                <li>
                  <a href="#">All Categories</a>
                </li>
                <li>
                  <a href="#">Terms & condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">option</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right d-flex justify-content-between flex-wrap align-items-center">
            <p className="copy-right-text fs-18 light-grey">
            ©2023 Dream capcha. All Right Reserved
            </p>
            <ul className="social-icon d-flex">
              <li className="ms-3 fs-20">
               <a href="#" className="light-grey"> <BsFacebook /></a>
              </li>
              <li className="ms-3 light-grey fs-20">
              <a href="#" className="light-grey"><BsTwitter /></a>  
              </li>
              <li className="ms-3 light-grey fs-20">
              <a href="#" className="light-grey"> <BsLinkedin /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;