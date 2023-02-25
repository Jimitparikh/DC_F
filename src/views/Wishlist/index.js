import React from "react";
import { BiTrash, BiTrashAlt } from "react-icons/bi";
import { BsCart3, BsFillStarFill } from "react-icons/bs";
import Breadcrums from "../../components/Breadcrums";
import trendingbookcover from '../../images/trending-book-cover.png';
const Wishlist = () => {
  return (
    <>
      <Breadcrums />
      <section className="wishlist-section">
        <div className="container">
          <div className="heading d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <h1>
                Wishlist<span>(10)</span>
              </h1>
              <p class="fa-18 light-grey">
                Over 100+ Authors are join with us.
              </p>
            </div>
            <div className="btn-wrap">
              <button className="btn btn-grey me-3">
                <BsCart3 className="body-color"/>
                Move all to Cart
              </button>
              <button className="btn btn-grey">
                <BiTrashAlt className="danger-color"/>
                Remove All
              </button>
            </div>
          </div>
          <div className="trending-books-section">
            <div className="trending-books-content">
              <div className="Books-listing vertical-align d-flex justify-content-between align-items-center">
                <ul className="trending-books-list">
                  <li>
                    <div className="add-to-cart-book-box d-flex overflow-hidden position-relative">
                      <div className="add-cart-book-image">
                        <img src={trendingbookcover} alt="Book Cover" />
                      </div>
                      <div className="add-cart-book-data">
                        <div className="title">
                          <h3>Dream psychology</h3>
                          <p>Sigmund Fread</p>
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
                        <div className="btn-wrap d-flex justify-content-between align-items-center">
                        <button className="btn btn-grey">
                            <BiTrashAlt className="danger-color"/>
                        </button>
                          <button className="btn btn-add-to-cart">
                            <BsCart3 />
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <div class="corner-ribbon">No 1</div>
                    </div>
                  </li>
                  <li>
                    <div className="add-to-cart-book-box d-flex position-relative">
                      <div className="add-cart-book-image">
                        <img src={trendingbookcover} alt="Book Cover" />
                      </div>
                      <div className="add-cart-book-data">
                        <div className="title">
                          <h3>Dream psychology</h3>
                          <p>Sigmund Fread</p>
                        </div>
                        <div className="price d-flex justify-content-between align-items-center">
                          <p className="price-number green-color">Free Book</p>
                          <p className="rating">
                            <BsFillStarFill />
                            4.6
                          </p>
                        </div>
                        <div className="btn-wrap d-flex justify-content-between align-items-center">
                        <button className="btn btn-grey">
                            <BiTrashAlt className="danger-color"/>
                        </button>
                          <button className="btn btn-green">
                            Free Book
                          </button>
                        </div>
                      </div>
                      <div class="trending-corner-label">Trending on #4</div>
                    </div>
                  </li>
                  <li>
                    <div className="add-to-cart-book-box d-flex">
                      <div className="add-cart-book-image">
                        <img src={trendingbookcover} alt="Book Cover" />
                      </div>
                      <div className="add-cart-book-data">
                        <div className="title">
                          <h3>Dream psychology</h3>
                          <p>Sigmund Fread</p>
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
                        <div className="btn-wrap d-flex justify-content-between align-items-center">
                        <button className="btn btn-grey">
                            <BiTrashAlt className="danger-color"/>
                        </button>
                          <button className="btn btn-add-to-cart">
                            <BsCart3 />
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="add-to-cart-book-box d-flex">
                      <div className="add-cart-book-image">
                        <img src={trendingbookcover} alt="Book Cover" />
                      </div>
                      <div className="add-cart-book-data">
                        <div className="title">
                          <h3>Dream psychology</h3>
                          <p>Sigmund Fread</p>
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
                        <div className="btn-wrap d-flex justify-content-between align-items-center">
                        <button className="btn btn-grey">
                            <BiTrashAlt className="danger-color"/>
                        </button>
                          <button className="btn btn-add-to-cart">
                            <BsCart3 />
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="add-to-cart-book-box d-flex">
                      <div className="add-cart-book-image">
                        <img src={trendingbookcover} alt="Book Cover" />
                      </div>
                      <div className="add-cart-book-data">
                        <div className="title">
                          <h3>Dream psychology</h3>
                          <p>Sigmund Fread</p>
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
                        <div className="btn-wrap d-flex justify-content-between align-items-center">
                        <button className="btn btn-grey">
                            <BiTrashAlt className="danger-color"/>
                        </button>
                          <button className="btn btn-add-to-cart">
                            <BsCart3 />
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Wishlist;
