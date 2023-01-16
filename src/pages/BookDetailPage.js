import React from "react";
import Breadcrums from "../pages/Breadcrums";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import ProgressBar from "react-bootstrap/ProgressBar";
import trendingbookcover from "../images/trending-book-cover.png";
import userprofile from "../images/user-profile.png";
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
} from "react-icons/bs";
import { FaChevronDown, FaRegFileAudio } from "react-icons/fa";
import Loader from "../components/Loader";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
const BookDetailPage = () => {
  return (
    <>
      <Breadcrums />
      <section className="book-detail-section">
        <div className="container">
          <div className="book-detail-content d-flex">
            <div className="book-detail-left">
              <img src={trendingbookcover} alt="trendingbookcover"></img>
              <div className="btn-wrap">
                <button className="btn btn-secondary">Read Sample</button>
              </div>
            </div>
            <div className="book-detail-right">
              <div className="book-detail-header">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="label-chip mb-2">
                    <p>Trending on #1</p>
                  </div>
                  <div className="icon d-flex">
                    <div className="icon-border me-3">
                      <BsHeart />
                    </div>
                    <div className="icon-border">
                      <BsShare />
                    </div>
                  </div>
                </div>
              </div>
              <div className="book-details-info">
                <h1>Oscar wild the canterrville ghost</h1>
                <ul className="d-flex flex-wrap">
                  <li>Sigmund Freud</li>
                  <li>Comic & Horror Book Writer</li>
                </ul>
                <div className="column">
                  <div className="icon star-icon">
                    <BsFillStarFill />
                    <span>4.5</span>
                    <p>500(Reviews)</p>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                    >
                      <path
                        d="M6.24984 1.33325V20.8333M2.99984 1.33325H14.9165C15.4911 1.33325 16.0422 1.56153 16.4486 1.96785C16.8549 2.37418 17.0832 2.92528 17.0832 3.49992V16.4999C17.0832 17.0746 16.8549 17.6257 16.4486 18.032C16.0422 18.4383 15.4911 18.6666 14.9165 18.6666H2.99984C2.71252 18.6666 2.43697 18.5525 2.23381 18.3493C2.03064 18.1461 1.9165 17.8706 1.9165 17.5833V2.41659C1.9165 2.12927 2.03064 1.85372 2.23381 1.65055C2.43697 1.44739 2.71252 1.33325 2.99984 1.33325V1.33325Z"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5835 5.66675H12.7502"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5835 10H12.7502"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>eBook/ Audio/ Video</p>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.5 4.50016C2.90169 4.50016 2.41667 4.98519 2.41667 5.5835V18.5835C2.41667 19.1818 2.90169 19.6668 3.5 19.6668H16.5C17.0983 19.6668 17.5833 19.1818 17.5833 18.5835V5.5835C17.5833 4.98519 17.0983 4.50016 16.5 4.50016H3.5ZM0.25 5.5835C0.25 3.78857 1.70507 2.3335 3.5 2.3335H16.5C18.2949 2.3335 19.75 3.78857 19.75 5.5835V18.5835C19.75 20.3784 18.2949 21.8335 16.5 21.8335H3.5C1.70507 21.8335 0.25 20.3784 0.25 18.5835V5.5835Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.3333 0.166748C14.9316 0.166748 15.4167 0.651773 15.4167 1.25008V5.58342C15.4167 6.18172 14.9316 6.66675 14.3333 6.66675C13.735 6.66675 13.25 6.18172 13.25 5.58342V1.25008C13.25 0.651773 13.735 0.166748 14.3333 0.166748Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.66683 0.166748C6.26514 0.166748 6.75016 0.651773 6.75016 1.25008V5.58342C6.75016 6.18172 6.26514 6.66675 5.66683 6.66675C5.06852 6.66675 4.5835 6.18172 4.5835 5.58342V1.25008C4.5835 0.651773 5.06852 0.166748 5.66683 0.166748Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.25 9.91683C0.25 9.31852 0.735025 8.8335 1.33333 8.8335H18.6667C19.265 8.8335 19.75 9.31852 19.75 9.91683C19.75 10.5151 19.265 11.0002 18.6667 11.0002H1.33333C0.735025 11.0002 0.25 10.5151 0.25 9.91683Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99984 13.1667C10.5981 13.1667 11.0832 13.6518 11.0832 14.2501V17.5001C11.0832 18.0984 10.5981 18.5834 9.99984 18.5834C9.40153 18.5834 8.9165 18.0984 8.9165 17.5001V14.2501C8.9165 13.6518 9.40153 13.1667 9.99984 13.1667Z"
                        fill="#333333"
                      />
                    </svg>
                    <p>Jun 22, 2022</p>
                  </div>
                </div>
                <div className="btn-wrap">
                  <Dropdown
                    as={ButtonGroup}
                    className="primary me-4 checkbox-group"
                    autoClose="outside"
                    align="end"
                  >
                    <Button>$28.00 Purchase</Button>
                    <Dropdown.Toggle split id="dropdown-split-basic">
                      <BsChevronDown />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            <FaRegFileAudio /> <span>$10.12</span> AudioBook
                          </label>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck2"
                          >
                            <BsCameraVideo /> <span>$10.12</span> Videobook
                          </label>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck3"
                          >
                            <BsFileText /> <span>$10.12</span> AudioBook
                          </label>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown as={ButtonGroup} className="secondary" align="end">
                    <Button>Rent at $10/day</Button>
                    <Dropdown.Toggle split id="dropdown-split-basic">
                      <FaChevronDown />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Register as Author
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Register as Affliate
                      </Dropdown.Item>
                      <Dropdown.Item className="active" href="#/action-3">
                        Have Account? Login
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
          <div className="about-book-details d-flex justify-content-between align-items-start">
            <div className="left-part">
              <div className="header d-flex justify-content-between align-items-center">
                <h4>About this Book</h4>
                <a href="#">
                  <span>More info</span>
                  <BsInfoCircle />
                </a>
              </div>
              <p className="desc">
                ‘Mahatma Gandhi’ written by Romain Rolland, a French novelist
                and Nobel Prize winner, presents the life and legacy of the
                legendary Indian Political Leader. Mahatma Gandhi was an Indian
                lawyer, anti-colonial nationalist and political ethicist, who
                employed nonviolent resistance to lead the successful campaign
                for India's independence from British Rule, and in turn inspired
                movements for civil rights and freedom across the world
              </p>
              <ul className="book-tag d-flex">
                <li>Horror</li>
                <li>Horror</li>
                <li>Horror</li>
              </ul>
              <div className="review-rating">
                <div className="header d-flex justify-content-between align-items-center">
                  <h4>Rating & Reviews</h4>
                  <a href="#">
                    <span>More info</span>
                    <BsInfoCircle />
                  </a>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="left-part">
                    <h5>4.1</h5>
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
                    <span>50 reviews</span>
                  </div>
                  <div className="right-part">
                    <div className="progress-detail">
                      <p>5 Star</p>
                      <ProgressBar now={40} />
                    </div>
                    <div className="progress-detail">
                      <p>4 Star</p>
                      <ProgressBar now={20} />
                    </div>
                    <div className="progress-detail">
                      <p>3 Star</p>
                      <ProgressBar now={80} />
                    </div>
                    <div className="progress-detail">
                      <p>2 Star</p>
                      <ProgressBar now={10} />
                    </div>
                    <div className="progress-detail mb-0">
                      <p>1 Star</p>
                      <ProgressBar now={20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rate-book-details">
                <h6>Rate this book</h6>
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
                    <BsFillStarFill />{" "}
                  </li>
                </ul>
                <div className="checkbox-group d-flex">
                  <div className="form-check me-4 pe-1 mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    ></input>
                    <label className="form-check-label" for="defaultCheck1">
                      E-book
                    </label>
                  </div>
                  <div className="form-check me-4 pe-1 mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    ></input>
                    <label className="form-check-label" for="defaultCheck2">
                      Audio
                    </label>
                  </div>
                  <div className="form-check me-4 pe-1 mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck3"
                    ></input>
                    <label className="form-check-label" for="defaultCheck3">
                      Video
                    </label>
                  </div>
                  <div className="form-check me-4 pe-1 mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck4"
                    ></input>
                    <label className="form-check-label" for="defaultCheck4">
                      General
                    </label>
                  </div>
                </div>
                <div className="submit-input d-flex flex-wrap">
                  <input
                    className="input-box"
                    placeholder="Write your review about this book (optional)"
                  ></input>
                  <Button className="btn btn-primary">Submit</Button>
                </div>
              </div>
              <div className="customer-review">
                <div className="header d-flex justify-content-between align-items-center">
                  <h4>Reviews</h4>
                  <Dropdown className="without-background">
                    <Dropdown.Toggle id="dropdown-basic">
                      Newest <FaChevronDown />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <ul className="customer-list">
                  <li className="customer-list-item d-flex align-items-start flex-wrap">
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
                        Mahatma Gandhi’ written by Romain Rolland, a French
                        novelist and Nobel Prize winner...
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
                      <Dropdown className="without-background">
                        <Dropdown.Toggle id="dropdown-basic">
                          <BsThreeDotsVertical />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <button className="btn btn-secondary">
                    Load more reviews
                  </button>
                </div>
              </div>
            </div>
            <div className="right-part">
              <div className="book-detail-page-tabbing">
                <Tabs
                  defaultActiveKey="More from this author"
                  transition={false}
                  id="fill-tab-example"
                >
                  <Tab
                    eventKey="More from this author"
                    title="More from this author"
                  >
                    <div className="tab-content-data">
                      <section className="trending-books-section">
                        <div className="trending-books-content">
                          <diiv className="Books-listing vertical-align d-flex justify-content-between align-items-center">
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
                          </diiv>
                        </div>
                      </section>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="Smilar category books"
                    title="Smilar category books"
                  >
                    <div className="tab-content-data position-relative">
                      <Loader />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BookDetailPage;
