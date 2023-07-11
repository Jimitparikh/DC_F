import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import trendingbookcover from "../../../images/trending-book-cover.png";
import {
    BsFillStarFill,
    BsCart3,
    BsSearch,
} from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

export const AuthorBooks = () => {
    return (
        <div className='tab-content-data'>
            <div className='search-bar d-flex justify-content-between align-items-center'>
                <div className="header-search">
                    <input className="input-box" placeholder="Search Stories, Category, Author"></input>
                    <button className="btn btn-primary">
                        <BsSearch />
                    </button>
                </div>
                <Dropdown className='without-background'>
                    <Dropdown.Toggle id="dropdown-basic">
                        All Stories <FaChevronDown />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <section className="trending-books-section">
                <div className="trending-books-content">
                    <div className="Books-listing vertical-align d-flex justify-content-between align-items-center">
                        <ul className="trending-books-list">
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
                                            <p className="price-number">$18.04 <span>$25.04</span></p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
                                                <BsCart3 />
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li> <li>
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
                                                <BsCart3 />
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li> <li>
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
                                                <BsCart3 />
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li> <li>
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
                                                <BsCart3 />
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li> <li>
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
                                                <BsCart3 />
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li> <li>
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
                                            <p className="price-number green-color">Free Book</p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
                                            <button className="btn btn-green">
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
                                            <p className="price-number">$18.04 <span>$25.04</span></p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
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
                                            <p className="price-number">$18.04 <span>$25.04</span></p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
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
                                            <p className="price-number">$18.04 <span>$25.04</span></p>
                                            <p className="rating">
                                                <BsFillStarFill />
                                                4.6
                                            </p>
                                        </div>
                                        <div className="btn-wrap">
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
            </section>
        </div>
    )
}
