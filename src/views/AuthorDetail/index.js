import React from 'react';
import Breadcrums from "../../components/Breadcrums";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import trendingbookcover from '../../images/trending-book-cover.png';
import userprofilelarge from '../../images/user-profile-large.png';
import authorprofile from '../../images/author-profile.png';
import {BsFillStarFill, BsHeart, BsShare, BsStarHalf, BsCart3, BsInfoCircle, BsChevronDown, BsThreeDotsVertical, BsCameraVideo, BsFileText, BsSearch} from "react-icons/bs";
import { FaChevronDown, FaRegFileAudio } from "react-icons/fa";

const AuthorDetailPage = ()=>{
    
  return (
    <>
          <Breadcrums />
          <section className='author-detail-page-secton'>
            <div className='container'>
                <div className='author-details-page-content'>
                    <div className='author-background'>

                    </div>
                    <div className='author-details-info d-flex justify-content-betweeen'>
                        <div className='left-part'>
                        <div className="top-autors-content">
                            <ul className="authors-list d-flex flex-wrap">
                                <li>
                                <div className="author-detail">
                                    <img src={userprofilelarge} alt="Author Profile" className='author-profile-image'/>
                                    <div className='author-details-content'>
                                    <h4 className="title">Albert Flores</h4>
                                    <p className="light-grey">Comic & Horror Book Writer</p>
                                    <ul className="social-network">
                                    <li>
                                        <h5 className="heading">200</h5>
                                        <span>Followers</span>
                                    </li>
                                    <li>
                                        <h5 className="heading">4.5</h5>
                                        <span>Rating</span>
                                    </li>
                                    <li>
                                        <h5 className="heading">20+</h5>
                                        <span>Book Published</span>
                                    </li>
                                    </ul>
                                    <div className="btn-wrap">
                                    <button className="btn btn-primary">Follow Now</button>
                                    </div>
                                    <div className='about-author'>
                                        <h5 className='small-title'>
                                        About author
                                        </h5>
                                        <p className='author-desc light-grey'>
                                        Lorem ipsum dolor sit amet, laboris nisi ut aliquip ex ea commodo consequat.  consectetur adipiscing elit, sed do ut labore et dolore magna aliqua... 
                                        <a href='#'>more</a>
                                        </p>
                                    </div>
                                    <div className='author-stats'>
                                        <h5 className='small-title'>
                                            About author
                                        </h5>
                                        <span className='light-grey'>Joined Feb 12, 2018</span>
                                    </div>
                                    <div>
                                        <h5 className='small-title'>
                                        Details
                                        </h5>
                                        <span className='light-grey'>Location:  Canada</span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className='right-part'>
                        <div className='author-detail-page-tabbing'>
                            <Tabs
                                defaultActiveKey="All Books"
                                transition={false}
                                id="fill-tab-example"
                                >
                                    <Tab eventKey="All Books" title="All Books">
                                                <div className='tab-content-data'>
                                                <div className='search-bar d-flex justify-content-between align-items-center'>
                                                <div className="header-search">
                                                    <input className="input-box" placeholder="Search Books, Category, Author"></input>
                                                    <button className="btn btn-primary">
                                                        <BsSearch />
                                                    </button>
                                                    </div>
                                                    <Dropdown className='without-background'>
                                                        <Dropdown.Toggle id="dropdown-basic">
                                                            All Books <FaChevronDown />
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                                                    <BsFillStarFill/>
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
                                    </Tab>
                                    <Tab eventKey="Reviews & Rating" title="Reviews & Rating">
                                        <div className='tab-content-data'>
                                        Second Tab Cotent Comes here
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Community Posts" title="Community Posts">
                                        <div className='tab-content-data'>
                                        Second Tab Cotent Comes here
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-authors-section">
                <div className="top-autors-content">
                    <div className="headng d-flex justify-content-between align-items-center">
                        <div className="left-content">
                            <h4 className="fs-2 fw-bold">Suggested Authors</h4>
                        </div>
                        <div className="left-content d-flex align-items-center">
                            <a href="#" className="dark-blue fw-500">View All</a>
                        </div>
                    </div>
                    <ul className="authors-list d-flex flex-wrap">
                        <li>
                        <div className="background-box"></div>
                        <div className="author-detail">
                            <img src={authorprofile} alt="Author Profile" />
                            <h4 className="title">Albert Flores</h4>
                            <p className="light-grey">Comic & Horror Book Writer</p>
                            <ul className="social-network">
                            <li>
                                <h5 className="heading">200</h5>
                                <span>Followers</span>
                            </li>
                            <li>
                                <h5 className="heading">4.5</h5>
                                <span>Rating</span>
                            </li>
                            <li>
                                <h5 className="heading">20+</h5>
                                <span>Book Published</span>
                            </li>
                            </ul>
                            <div className="btn-wrap">
                            <button className="btn btn-primary">Write a book</button>
                            <a href="#" className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="background-box"></div>
                        <div className="author-detail">
                            <img src={authorprofile} alt="Author Profile" />
                            <h4 className="title">Albert Flores</h4>
                            <p className="light-grey">Comic & Horror Book Writer</p>
                            <ul className="social-network">
                            <li>
                                <h5 className="heading">200</h5>
                                <span>Followers</span>
                            </li>
                            <li>
                                <h5 className="heading">4.5</h5>
                                <span>Rating</span>
                            </li>
                            <li>
                                <h5 className="heading">20+</h5>
                                <span>Book Published</span>
                            </li>
                            </ul>
                            <div className="btn-wrap">
                            <button className="btn btn-primary">Write a book</button>
                            <a href="#" className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="background-box"></div>
                        <div className="author-detail">
                            <img src={authorprofile} alt="Author Profile" />
                            <h4 className="title">Albert Flores</h4>
                            <p className="light-grey">Comic & Horror Book Writer</p>
                            <ul className="social-network">
                            <li>
                                <h5 className="heading">200</h5>
                                <span>Followers</span>
                            </li>
                            <li>
                                <h5 className="heading">4.5</h5>
                                <span>Rating</span>
                            </li>
                            <li>
                                <h5 className="heading">20+</h5>
                                <span>Book Published</span>
                            </li>
                            </ul>
                            <div className="btn-wrap">
                            <button className="btn btn-primary">Write a book</button>
                            <a href="#" className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="background-box"></div>
                        <div className="author-detail">
                            <img src={authorprofile} alt="Author Profile" />
                            <h4 className="title">Albert Flores</h4>
                            <p className="light-grey">Comic & Horror Book Writer</p>
                            <ul className="social-network">
                            <li>
                                <h5 className="heading">200</h5>
                                <span>Followers</span>
                            </li>
                            <li>
                                <h5 className="heading">4.5</h5>
                                <span>Rating</span>
                            </li>
                            <li>
                                <h5 className="heading">20+</h5>
                                <span>Book Published</span>
                            </li>
                            </ul>
                            <div className="btn-wrap">
                            <button className="btn btn-primary">Write a book</button>
                            <a href="#" className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
          </section>
    </>
  );
}
export default AuthorDetailPage;