import React from "react";
import Breadcrums from "../../components/Breadcrums";
import BookCoverCart from "../../images/book-cover-cartpage.png";
import { FaRegFileAudio } from "react-icons/fa";
import {
  BsCameraVideo,
  BsFileText,
  BsFillStarFill,
  BsFillTagFill,
  BsXLg,
} from "react-icons/bs";
import { BiTrashAlt, BiError } from "react-icons/bi";
const Cart = () => {
  return (
    <>
      <Breadcrums />
      <section className="cart-section">
        <div className="container">
          <div className="heading">
            <h1>
              My cart<span>(10)</span>
            </h1>
            <p class="fa-18 light-grey">
              Lorem ipsum is a dummy text we can change it any time
            </p>
          </div>
          <div className="cart-wrapper d-flex flex-wrap">
            <div className="left-part">
              <ul>
                <li>
                  <div className="book-detail d-flex align-items-start">
                    <img src={BookCoverCart} alt="image"></img>
                    <div className="heading-title">
                      <h2>Dream psychology</h2>
                      <p class="light-grey">Sigmund Freud </p>
                      <div className="book-label">
                        <div className="label-item">
                          <BsFileText className="body-color" /> ebook
                        </div>
                        <div className="label-item">
                          <FaRegFileAudio className="body-color"/> Audio Book
                        </div>
                        <div className="label-item">
                          <BsCameraVideo className="body-color"/> Video Book
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="book-data">
                    <div className="btn-wrap">
                      <button className="btn btn-grey">
                        <BiTrashAlt className="danger-color" />
                      </button>
                    </div>
                    <div className="price d-flex justify-content-between align-items-center">
                      <p className="price-number">
                        $18.04 <span>$25.04</span>
                      </p>
                      <p className="rating">
                        <BsFillStarFill />
                        4.6
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right-part">
              <div className="cart-summary">
                <div className="summary-heading">
                  <h3>Your cart summary</h3>
                </div>
                <div className="cart-details">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-16 light-grey">Total Items :</p>
                    <p className="fs-16 light-grey">04</p>
                  </div>
                  <div className="book-label">
                    <div className="label-item">
                      <BsFileText className="body-color" /> ebook: 4
                    </div>
                    <div className="label-item">
                      <FaRegFileAudio className="body-color" /> Audio Book: 3
                    </div>
                    <div className="label-item">
                      <BsCameraVideo className="body-color"/> Video Book: 2
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-3">
                    <p className="fs-18 light-grey">Product cost :</p>
                    <p className="fs-20 light-grey">$57.22</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-3">
                    <p className="fs-18 light-grey">Service charge cost :</p>
                    <p className="fs-20 light-grey">$57.22</p>
                  </div>
                  <div className="input-field">
                    <label>
                      Create User ID <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="input-box"
                      placeholder="Enter coupon code"
                    ></input>
                  </div>
                  <div className="error-message d-flex align-items-center">
                    <BiError className="danger-color" />
                    <p className="danger-color">
                      The coupon code SAVEMORE couldn't be applied to any items
                      in your order.
                    </p>
                  </div>
                  <div className="save-more d-flex align-items-center justify-content-between">
                    <div className="save-more-button btn">
                      <p>
                        <BsFillTagFill /> 
                        SAVEMORE <span>(-100)</span>
                      </p>
                      <a href="#">
                        <BsXLg />
                      </a>
                    </div>
                    <p className="green-color fs-20">-$4.44</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="light-grey fs-18">All your discounts :</p>
                    <p className="green-color fs-20">-$4.44</p>
                  </div>
                  <div className="grand-total d-flex align-items-center justify-content-between">
                    <p className="fs-20">Grand Total :</p>
                    <p className="total">$54.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
