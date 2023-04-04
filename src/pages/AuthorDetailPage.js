import React from "react";
import Breadcrums from "../pages/Breadcrums";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Dropdown from "react-bootstrap/Dropdown";
import trendingbookcover from "../images/trending-book-cover.png";
import userprofilelarge from "../images/user-profile-large.png";
import authorprofile from "../images/author-profile.png";
import userprofile from "../images/user-profile.png";
import dummyImage from "../images/dummy-img.png";
import {
  BsFillStarFill,
  BsHeart,
  BsShare,
  BsStarHalf,
  BsCart3,
  BsInfoCircle,
  BsChevronDown,
  BsThreeDotsVertical,
  BsCameraVideo,
  BsFileText,
  BsSearch,
} from "react-icons/bs";
import { FaChevronDown, FaRegFileAudio } from "react-icons/fa";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { HiOutlineChatAlt } from "react-icons/hi";

const AuthorDetailPage = () => {
  return (
    <>
      <Breadcrums />
      <section className="author-detail-page-secton">
        <div className="container">
          <div className="author-details-page-content">
            <div className="author-background"></div>
            <div className="author-details-info d-flex justify-content-betweeen">
              <div className="left-part">
                <div className="top-autors-content">
                  <ul className="authors-list d-flex flex-wrap">
                    <li>
                      <div className="author-detail">
                        <img
                          src={userprofilelarge}
                          alt="Author Profile"
                          className="author-profile-image"
                        />
                        <div className="author-details-content">
                          <h4 className="title">Albert Flores</h4>
                          <p className="light-grey">
                            Comic & Horror Book Writer
                          </p>
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
                            <button className="btn btn-primary">
                              Follow Now
                            </button>
                          </div>
                          <div className="about-author">
                            <h5 className="small-title">About author</h5>
                            <p className="author-desc light-grey">
                              Lorem ipsum dolor sit amet, laboris nisi ut
                              aliquip ex ea commodo consequat. consectetur
                              adipiscing elit, sed do ut labore et dolore magna
                              aliqua...
                              <a href="#">more</a>
                            </p>
                          </div>
                          <div className="author-stats">
                            <h5 className="small-title">About author</h5>
                            <span className="light-grey">
                              Joined Feb 12, 2018
                            </span>
                          </div>
                          <div>
                            <h5 className="small-title">Details</h5>
                            <span className="light-grey">Location: Canada</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-part">
                <div className="author-detail-page-tabbing">
                  <Tabs
                    defaultActiveKey="All Books"
                    transition={false}
                    id="fill-tab-example"
                  >
                    <Tab eventKey="All Books" title="All Books">
                      <div className="tab-content-data">
                        <div className="search-bar d-flex justify-content-between align-items-center">
                          <div className="header-search">
                            <input
                              className="input-box"
                              placeholder="Search Books, Category, Author"
                            ></input>
                            <button className="btn btn-primary">
                              <BsSearch />
                            </button>
                          </div>
                          <Dropdown className="without-background">
                            <Dropdown.Toggle id="dropdown-basic">
                              All Books <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Something else
                              </Dropdown.Item>
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                </li>{" "}
                                <li>
                                  <div className="add-to-cart-book-box d-flex">
                                    <div className="add-cart-book-image">
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                </li>{" "}
                                <li>
                                  <div className="add-to-cart-book-box d-flex">
                                    <div className="add-cart-book-image">
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                </li>{" "}
                                <li>
                                  <div className="add-to-cart-book-box d-flex">
                                    <div className="add-cart-book-image">
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                </li>{" "}
                                <li>
                                  <div className="add-to-cart-book-box d-flex">
                                    <div className="add-cart-book-image">
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                </li>{" "}
                                <li>
                                  <div className="add-to-cart-book-box d-flex">
                                    <div className="add-cart-book-image">
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
                                    </div>
                                    <div className="add-cart-book-data">
                                      <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                      </div>
                                      <div className="price d-flex justify-content-between align-items-center">
                                        <p className="price-number green-color">
                                          Free Book
                                        </p>
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
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
                                      <img
                                        src={trendingbookcover}
                                        alt="Book Cover"
                                      />
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
                      <div className="tab-content-data">
                        <div className="rate-author-detail">
                          <div className="author-detail-left-part">
                            <h5>4.1</h5>
                            <div>
                              <ul className="rating-list d-flex">
                                <li>
                                  {" "}
                                  <BsFillStarFill />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <BsFillStarFill />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <BsFillStarFill />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <BsFillStarFill />{" "}
                                </li>
                                <li>
                                  {" "}
                                  <BsStarHalf />{" "}
                                </li>
                              </ul>
                              <span className="fs-14 light-grey">
                                50 reviews
                              </span>
                            </div>
                          </div>
                          <div className="author-detail-right-part">
                            <p className="fs-14">Rate author</p>
                            <ul>
                              <li>
                                <BsFillStarFill />
                              </li>
                              <li>
                                <BsFillStarFill />
                              </li>
                              <li>
                                <BsFillStarFill />
                              </li>
                              <li>
                                <BsFillStarFill />
                              </li>
                              <li>
                                <BsFillStarFill />
                              </li>
                            </ul>
                            <div className="input-field-group d-flex">
                              <input
                                className="input-box"
                                placeholder="Write your review about this book(optional)"
                              ></input>
                              <button className="btn">Submit</button>
                            </div>
                          </div>
                        </div>
                        <div className="customer-list">
                          <div className="customer-list-item d-flex align-items-start flex-wrap">
                            <img
                              src={userprofile}
                              alt="Profile"
                              className="user-profile"
                            ></img>
                            <div className="customer-data">
                              <h3>
                                Darrell Steward<span>10 hours ago</span>
                              </h3>
                              <div className="customer-rating d-flex align-items-center">
                                <ul className="d-flex">
                                  <li>
                                    {" "}
                                    <BsFillStarFill />{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillStarFill />{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillStarFill />{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <BsFillStarFill />{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <BsStarHalf />{" "}
                                  </li>
                                </ul>
                                <p className="rating-label">Audio</p>
                              </div>
                              <p className="customer-desc">
                                Mahatma Gandhi’ written by Romain Rolland, a
                                French novelist and Nobel Prize winner...
                                <a href="#">Read more</a>
                              </p>
                              <ul className="like d-flex">
                                <li>
                                  <AiOutlineLike />
                                  <span>Like</span>
                                </li>
                                <li className="selected">
                                  <AiOutlineDislike />
                                  <span>Dislike</span>
                                </li>
                              </ul>
                              <Dropdown
                                className="without-background"
                                align="end"
                              >
                                <Dropdown.Toggle id="dropdown-basic">
                                  <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">
                                    Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="Community Posts" title="Community Posts">
                      <div className="tab-content-data">
                        <div className="community-post-tab-content">
                          <div className="banner-list">
                            <div className="heading d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center flex-wrap">
                                <div className="user-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M9.9974 8.97266C8.71406 8.97266 7.66406 8.56432 6.8474 7.74766C6.03073 6.93099 5.6224 5.88099 5.6224 4.59766C5.6224 3.31432 6.03073 2.26432 6.8474 1.44766C7.66406 0.63099 8.71406 0.222656 9.9974 0.222656C11.2807 0.222656 12.3307 0.63099 13.1474 1.44766C13.9641 2.26432 14.3724 3.31432 14.3724 4.59766C14.3724 5.88099 13.9641 6.93099 13.1474 7.74766C12.3307 8.56432 11.2807 8.97266 9.9974 8.97266ZM0.664062 18.3352V15.5935C0.664062 14.8546 0.848785 14.2227 1.21823 13.6977C1.58767 13.1727 2.06406 12.774 2.6474 12.5018C3.95017 11.9185 5.19948 11.481 6.39531 11.1893C7.59115 10.8977 8.79184 10.7518 9.9974 10.7518C11.203 10.7518 12.3988 10.9025 13.5849 11.2039C14.771 11.5053 16.0155 11.9379 17.3182 12.5018C17.921 12.774 18.4071 13.1727 18.7766 13.6977C19.146 14.2227 19.3307 14.8546 19.3307 15.5935V18.3352H0.664062ZM2.41406 16.5852H17.5807V15.5935C17.5807 15.2824 17.4884 14.9859 17.3036 14.7039C17.1189 14.422 16.8905 14.2129 16.6182 14.0768C15.3738 13.474 14.2363 13.0609 13.2057 12.8372C12.1752 12.6136 11.1057 12.5018 9.9974 12.5018C8.88906 12.5018 7.8099 12.6136 6.7599 12.8372C5.7099 13.0609 4.5724 13.474 3.3474 14.0768C3.07517 14.2129 2.85156 14.422 2.67656 14.7039C2.50156 14.9859 2.41406 15.2824 2.41406 15.5935V16.5852ZM9.9974 7.22266C10.7557 7.22266 11.3828 6.97474 11.8786 6.47891C12.3745 5.98307 12.6224 5.35599 12.6224 4.59766C12.6224 3.83932 12.3745 3.21224 11.8786 2.71641C11.3828 2.22057 10.7557 1.97266 9.9974 1.97266C9.23906 1.97266 8.61198 2.22057 8.11615 2.71641C7.62031 3.21224 7.3724 3.83932 7.3724 4.59766C7.3724 5.35599 7.62031 5.98307 8.11615 6.47891C8.61198 6.97474 9.23906 7.22266 9.9974 7.22266Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                                <p className="fs-20 fw-500">
                                  Romain Rolland
                                  <span className="light-grey fs-14 fw-normal ms-2">
                                    10 hours ago
                                  </span>
                                </p>
                              </div>
                              <Dropdown
                                className="without-background position-relative"
                                align="end"
                              >
                                <Dropdown.Toggle id="dropdown-basic">
                                  <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">
                                    All
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">
                                    Images
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">
                                    Videos
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">
                                    Audio
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="post-data-details">
                              <p>
                                Mahatma Gandhi’ written by Romain Rolland, a
                                French novelist and Nobel Prize winner Rolland,
                                a French novelist and Nobel Prize winner
                                <span> random</span> <span>#newpost</span>
                              </p>
                              <div className="post-image">
                                <img
                                  src={dummyImage}
                                  alt="Image"
                                  className="uploaded-image"
                                ></img>
                              </div>
                              <ul className="like d-flex">
                                <li>
                                  <AiOutlineLike />
                                  <span>11 Likes</span>
                                </li>
                                <li className="selected">
                                  <HiOutlineChatAlt />
                                  <span>20 Comments</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="banner-list">
                            <div className="heading d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center flex-wrap">
                                <div className="user-icon">
                                  <img
                                    src={userprofile}
                                    alt="Author Profile"
                                  />
                                </div>
                                <p className="fs-20 fw-500">
                                  Romain Rolland
                                  <span className="light-grey fs-14 fw-normal ms-2">
                                    10 hours ago
                                  </span>
                                </p>
                              </div>
                              <Dropdown
                                className="without-background position-relative"
                                align="end"
                              >
                                <Dropdown.Toggle id="dropdown-basic">
                                  <BsThreeDotsVertical />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">
                                    All
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">
                                    Images
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">
                                    Videos
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">
                                    Audio
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="post-data-details">
                              <p>
                                Mahatma Gandhi’ written by Romain Rolland, a
                                French novelist and Nobel Prize winner Rolland,
                                a French novelist and Nobel Prize winner
                                <span> random</span> <span>#newpost</span>
                              </p>
                              <div className="post-image">
                                <img
                                  src={dummyImage}
                                  alt="Image"
                                  className="uploaded-image"
                                ></img>
                              </div>
                              <ul className="like d-flex">
                                <li>
                                  <AiOutlineLike />
                                  <span>11 Likes</span>
                                </li>
                                <li className="selected">
                                  <HiOutlineChatAlt />
                                  <span>20 Comments</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
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
                  <a href="#" className="dark-blue fw-500">
                    View All
                  </a>
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
                      <a
                        href="#"
                        class="primary-color fw-semibold"
                        title="View Profile"
                        alt="View Profile"
                      >
                        View Profile
                      </a>
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
                      <a
                        href="#"
                        class="primary-color fw-semibold"
                        title="View Profile"
                        alt="View Profile"
                      >
                        View Profile
                      </a>
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
                      <a
                        href="#"
                        class="primary-color fw-semibold"
                        title="View Profile"
                        alt="View Profile"
                      >
                        View Profile
                      </a>
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
                      <a
                        href="#"
                        class="primary-color fw-semibold"
                        title="View Profile"
                        alt="View Profile"
                      >
                        View Profile
                      </a>
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
};
export default AuthorDetailPage;
