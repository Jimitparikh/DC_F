import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Dropdown from "react-bootstrap/Dropdown";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  BsArrowRepeat,
  BsBell,
  BsCameraVideo,
  BsChatLeftDots,
  BsCheck2Circle,
  BsChevronDown,
  BsChevronRight,
  BsDot,
  BsFileEarmarkMusic,
  BsFileText,
  BsFillStarFill,
  BsFilterLeft,
  BsInfoCircle,
  BsSearch,
  BsStarHalf,
  BsThreeDotsVertical,
  BsUpload,
} from "react-icons/bs";
import logo from "../images/logo-white.svg";
import { FiUser } from "react-icons/fi";
import { BiAddToQueue, BiBarChartAlt2 } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import {
  AiOutlineBarChart,
  AiOutlineBook,
  AiOutlineCamera,
  AiOutlineDislike,
  AiOutlineEye,
  AiOutlineLike,
  AiOutlineLock,
  AiOutlinePlus,
} from "react-icons/ai";
import {
  MdClose,
  MdContentCopy,
  MdOutlineAccountBalanceWallet,
  MdOutlineArrowForwardIos,
  MdOutlineContentCopy,
  MdOutlineDeleteOutline,
  MdOutlineDriveFolderUpload,
  MdOutlineKeyboardArrowRight,
  MdOutlineManageAccounts,
  MdOutlineModeEditOutline,
  MdOutlineNotificationsActive,
  MdOutlineReviews,
} from "react-icons/md";
import {
  HiMenu,
  HiOutlineChatAlt,
  HiOutlineMail,
  HiOutlineTicket,
  HiSpeakerphone,
  HiUserGroup,
} from "react-icons/hi";
import { FaChevronDown, FaRegFileAudio, FaRegFileVideo } from "react-icons/fa";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import bookcover from "../images/book-cover-table.png";
import chartimage from "../images/chart.png";
import userprofile from "../images/user-profile.png";
import reviewbookcover from "../images/review-book-cover.png";
import assetimg from "../images/asset-img.png";
import dummyImage from "../images/dummy-img.png";
import dropdownbookcover from "../images/dropdown-book-cover.png";
import addplace1 from "../images/add-place1.png";
import audiobookcover from "../images/audio-book-cover.png";
import { Button, ButtonGroup } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import userdashboardprofile from "../images/user-dashboard-profile.png";
import citibanklogo from "../images/citibank-logo.png";
import sbilogo from "../images/sbi-logo.png";
import axislogo from "../images/axis-logo.png";
import visalogo from "../images/visa-logo.png";
import mastercardlogo from "../images/mastercard-logo.png";
import { RiBankLine } from "react-icons/ri";
import userprofilefollwers from "../images/user-menu-profile.png";
import addhere from "../images/add-here.png";
import addhereactive from "../images/add-here-active.png";

const AuthorsDashboard = () => {
  const [profileupload, setprofileupload] = useState(false);
  const setprofileuploadclose = () => setprofileupload(false);
  const setprofileuploadshow = () => setprofileupload(true);

  const [createcoupon, setcreatecoupon] = useState(false);
  const setcreatecouponclose = () => setcreatecoupon(false);
  const setcreatecouponshow = () => setcreatecoupon(true);

  const [createad, setcreatead] = useState(false);
  const setcreateadclose = () => setcreatead(false);
  const setcreateaddshow = () => setcreatead(true);

  const [successreqadd, setsuccessreqadd] = useState(false);
  const setsuccessreqaddclose = () => setsuccessreqadd(false);
  const setsuccessreqaddshow = () => setsuccessreqadd(true);

  const [createbook, setcreatebook] = useState(false);
  const setcreatebookclose = () => setcreatebook(false);
  const setcreatebookshow = () => setcreatebook(true);

  const [enterbookname, setenterbookname] = useState(false);
  const setenterbooknameclose = () => setenterbookname(false);
  const setenterbooknameshow = () => setenterbookname(true);

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  // const [isActivee, setActivee] = useState(false);
  // const toggleClass = () => {
  //   setActivee(!isActivee);
  // };

  return (
    <>
      <section className="authors-dashboard-section">
        <div className="authors-dashboard-header d-flex align-items-center">
          <div className="column mobile-menu" onClick={toggleClass}>
            <HiMenu />
          </div>
          <div className="column">
            <a href="#" className="logo">
              <img src={logo} alt="Logo"></img>
            </a>
          </div>
          <div className="column">
            <div className="header-search">
              <input
                className="input-box"
                placeholder="Search Books, Category, Author"
              ></input>
              <BsSearch />
            </div>
          </div>
          <div className="column d-flex">
            <div className="icon">
              <BsBell />
              <div class="notification-circle"></div>
            </div>
            <div className="icon">
              <FiUser />
            </div>
          </div>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div
            className={
              isActive
                ? "show author-tabbing-wrapper d-flex flex-wrap"
                : "author-tabbing-wrapper d-flex flex-wrap"
            }
          >
            <div className="side-panel">
              <div className="create-book">
                <button className="btn btn-green" onClick={setcreatebookshow}>
                  <BiAddToQueue className="fs-20 me-1" /> Create Book
                </button>
                <Modal
                  show={createbook}
                  onHide={setcreatebookclose}
                  className="large-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Create new book
                      <p className="fs-14 light-grey">
                        In order to create a new book, you should first choose a
                        book type from the list below.
                      </p>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="create-new-book-content">
                      <ul>
                        <li>
                          <div className="heading">
                            <p>Paid Upload</p>
                          </div>
                          <div className="data">
                            <div>
                              <BsFileText />
                            </div>
                            <div className="data-title">
                              <h5>E-books</h5>
                              <p>
                                Lorem ipsum is a dummy text and we can change
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="paid">
                          <div className="heading">
                            <p>Paid Upload</p>
                          </div>
                          <div className="data">
                            <div>
                              <FaRegFileAudio />
                            </div>
                            <div className="data-title">
                              <h5>Audio book</h5>
                              <p>You have to pay 20% amount to Dreamcapcha</p>
                            </div>
                          </div>
                        </li>
                        <li className="paid">
                          <div className="heading">
                            <p>Paid Upload</p>
                          </div>
                          <div className="data">
                            <div>
                              <FaRegFileVideo />
                            </div>
                            <div className="data-title">
                              <h5>Video book</h5>
                              <p>You have to pay 30% amount to Dreamcapcha</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="btn-wrap d-flex">
                      <button className="btn btn-grey me-3">Cancle</button>
                      <button
                        className="btn btn-green"
                        onClick={setenterbooknameshow}
                      >
                        Next
                      </button>
                    </div>
                  </Modal.Footer>
                </Modal>
                <Modal
                  show={enterbookname}
                  onHide={setenterbooknameclose}
                  className="large-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Enter your book name
                      <p className="fs-14 light-grey">
                        Enter your book name and select category, you can change
                        these info on main page
                      </p>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="enter-book-name-modal">
                      <div className="input-field-group">
                        <div className="input-field-item">
                          <label>Book Name</label>
                          <input
                            type="text"
                            class="input-box"
                            placeholder="Albert"
                          ></input>
                        </div>
                        <div className="input-field-item">
                          <label>Writing Formate</label>
                          <Dropdown className="input-box without-background">
                            <Dropdown.Toggle id="dropdown-basic">
                              Chapter Wise <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Male
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Female
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Other
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <h5>Book category</h5>
                      <div className="checkbox-group d-flex flex-wrap">
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
                            Horror
                          </label>
                        </div>
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
                            Love
                          </label>
                        </div>
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
                            Action
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck4"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck4"
                          >
                            Adventure
                          </label>
                        </div>
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
                            Horror
                          </label>
                        </div>
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
                            Love
                          </label>
                        </div>
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
                            Action
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck4"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck4"
                          >
                            Adventure
                          </label>
                        </div>
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
                            Horror
                          </label>
                        </div>
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
                            Love
                          </label>
                        </div>
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
                            Action
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck4"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck4"
                          >
                            Adventure
                          </label>
                        </div>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="btn-wrap d-flex">
                      <button className="btn btn-grey me-3">Previous</button>
                      <button className="btn btn-green">Next</button>
                    </div>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="tab-item-link">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <p>
                        <RxDashboard />
                        Dashboard
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <p>
                        <AiOutlineBook />
                        My Books
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <p>
                        <AiOutlineBarChart />
                        Stats
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                      <p>
                        <MdOutlineReviews />
                        Reviews
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">
                      <p>
                        <BiBarChartAlt2 />
                        Earnings
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">
                      <p>
                        <MdOutlineAccountBalanceWallet />
                        Wallet
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">
                      <p>
                        <MdOutlineDriveFolderUpload />
                        My Assets
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eighth">
                      <p>
                        <HiUserGroup />
                        Community Wall
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="nineth">
                      <p>
                        <HiOutlineTicket />
                        Coupons
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tenth">
                      <p>
                        <HiSpeakerphone />
                        Advertisment
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eleventh">
                      <p>
                        <MdOutlineManageAccounts />
                        Profile & Settings
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="dummy">
                      <p>
                        <MdOutlineManageAccounts />
                        Coupon Table
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="author-tabbing-content">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="dashboard-tab-content">
                    <div className="banner">
                      <div className="banner-title">
                        <h6>Welcome back, Nick</h6>
                        <p>
                          Lorem ipsum is a dummy content and we can replace it
                          anytime
                        </p>
                      </div>
                      <ul>
                        <li>
                          <div className="icon">
                            <AiOutlineBook />
                          </div>
                          <div className="title">
                            <p>E-BOOK</p>
                            <h3>300</h3>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <BsFileEarmarkMusic />
                          </div>
                          <div className="title">
                            <p>Audio books</p>
                            <h3>20</h3>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <FaRegFileVideo />
                          </div>
                          <div className="title">
                            <p>Video book</p>
                            <h3>300</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mini-header d-flex flex-wrap justify-content-between align-items-center">
                      <div className="data">
                        <p>Quick Stats</p>
                        <span className="light-grey">
                          Lorem ipsum is a dummy content and
                        </span>
                      </div>
                      <Dropdown className="input-box without-background">
                        <Dropdown.Toggle id="dropdown-basic">
                          Last 30 Days <FaChevronDown />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Yesterday
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Last 30 Days
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-1">
                            Last 1 Week
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-1">
                            Last 1 Year
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-1">
                            Life Time
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-1">
                            Custome Date Range
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="custom-date-range">
                      <ul>
                        <li>
                          <input className="input-box" type="date"></input>
                        </li>
                        <li>
                          <input className="input-box" type="date"></input>
                        </li>
                        <li>
                          <button className="btn btn-dark-blue">
                            Get Result
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="chart-data">
                      <ul>
                        <li>
                          <div className="heading d-flex justify-content-between align-items-center">
                            <span className="light-grey">Total Books</span>
                            <p className="label">
                              <HiArrowTrendingUp />
                              10%
                            </p>
                          </div>
                          <h5>335</h5>
                        </li>
                        <li>
                          <div className="heading d-flex justify-content-between align-items-center">
                            <span className="light-grey">Total Readers</span>
                            <p className="label red">
                              <HiArrowTrendingDown />
                              10%
                            </p>
                          </div>
                          <h5>40,000</h5>
                        </li>
                        <li>
                          <div className="heading d-flex justify-content-between align-items-center">
                            <span className="light-grey">Amount Earned</span>
                            <p className="label red">
                              <HiArrowTrendingDown />
                              10%
                            </p>
                          </div>
                          <h5>$500</h5>
                        </li>
                        <li>
                          <div className="heading d-flex justify-content-between align-items-center">
                            <span className="light-grey">Total Pageviews</span>
                            <p className="label red">
                              <HiArrowTrendingUp />
                              25%
                            </p>
                          </div>
                          <h5>1.2k</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="my-books-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>My Books</h2>
                      <div className="right-side d-flex">
                        <div className="header-search">
                          <input
                            className="input-box"
                            placeholder="Search..."
                          ></input>
                          <BsSearch />
                        </div>
                        <Dropdown className="input-box without-background">
                          <Dropdown.Toggle id="dropdown-basic">
                            All (06) <FaChevronDown />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Today
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Yesterday
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Last 30 Days
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Last 1 Week
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Last 1 Year
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Life Time
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Custome Date Range
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="action">
                          <a href="#" title="Delete" className="delete">
                            <MdOutlineDeleteOutline /> <span>Remove</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table>
                        <tr>
                          <th>Book</th>
                          <th>Book Type</th>
                          <th>Visibility</th>
                          <th>Date</th>
                          <th>Restrictions</th>
                          <th>Reviews</th>
                          <th>Impression</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex align-items-center">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <AiOutlineBook className="fs-20 me-1 mb-1 body-color" />
                            E-Book
                          </td>
                          <td className="danger-color">Draft</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                          <td>
                            <div className="action">
                              <a href="#" title="Edit" className="edit">
                                <MdOutlineModeEditOutline />
                              </a>
                              <a href="#" title="Delete" className="delete">
                                <MdOutlineDeleteOutline />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex align-items-center">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <BsFileEarmarkMusic className="fs-20 me-1 mb-1 body-color" />
                            E-Book
                          </td>
                          <td className="green-color">Published</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                          <td>
                            <div className="action">
                              <a href="#" title="Edit" className="edit">
                                <MdOutlineModeEditOutline />
                              </a>
                              <a href="#" title="Delete" className="delete">
                                <MdOutlineDeleteOutline />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex align-items-center">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <FaRegFileVideo className="fs-20 me-1 mb-1 body-color" />
                            E-Book
                          </td>
                          <td className="green-color">Published</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                          <td>
                            <div className="action">
                              <a href="#" title="Edit" className="edit">
                                <MdOutlineModeEditOutline />
                              </a>
                              <a href="#" title="Delete" className="delete">
                                <MdOutlineDeleteOutline />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="stats-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>Statistics</h2>
                      <div className="right-side d-flex">
                        <Dropdown className="input-box without-background m-0">
                          <Dropdown.Toggle id="dropdown-basic">
                            Last 30 Days <FaChevronDown />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Today
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Yesterday
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Last 30 Days
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Last 1 Week
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Last 1 Year
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Life Time
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Custome Date Range
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="stats-tabbing">
                      <Tabs
                        defaultActiveKey="Overview"
                        transition={false}
                        id="fill-tab-example"
                      >
                        <Tab eventKey="Overview" title="Overview">
                          <div className="overview-content-data">
                            <div className="d-flex flex-wrap">
                              <div className="chart-column">
                                <ul>
                                  <li>
                                    <h4>Last 30 Days</h4>
                                    <p>400 Readers</p>
                                  </li>
                                  <li>
                                    <h4>Last 30 Days</h4>
                                    <p>$100 Earned</p>
                                  </li>
                                  <li>
                                    <h4>Last 30 Days</h4>
                                    <p>$200 Followers</p>
                                  </li>
                                </ul>
                                <div className="chart-image">
                                  <img src={chartimage} alt="Chart"></img>
                                  <p className="note">
                                    <BsInfoCircle />
                                    this graph is showing weekly data
                                  </p>
                                </div>
                              </div>
                              <div className="chart-data-right">
                                <div className="data-title d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="fs-20">Realtime</h6>
                                    <p className="light-grey mt-2">
                                      Updating live data
                                    </p>
                                  </div>
                                  <div className="label">
                                    <BsDot />
                                    Live
                                  </div>
                                </div>
                                <ul>
                                  <li>
                                    <h6 className="fs-20">150</h6>
                                    <p className="light-grey mt-2">
                                      Total Number of E-book Readers
                                    </p>
                                  </li>
                                  <li>
                                    <h6 className="fs-20">150</h6>
                                    <p className="light-grey mt-2">
                                      Total Number of E-book Readers
                                    </p>
                                  </li>
                                  <li>
                                    <h6 className="fs-20">150</h6>
                                    <p className="light-grey mt-2">
                                      Total Number of E-book Readers
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="Content" title="Content">
                          <div className="content-tab-data">
                            <div className="d-flex flex-wrap">
                              <div className="views-column">
                                <div className="data-title d-flex flex-wrap align-items-center justify-content-between">
                                  <div>
                                    <h6 className="fs-20">Views</h6>
                                    <p className="light-grey mt-2">
                                      Last 30 Days
                                    </p>
                                  </div>
                                  <ul>
                                    <li>E-book</li>
                                    <li>Audio book</li>
                                    <li>Video book</li>
                                  </ul>
                                </div>
                                <div className="progress-bar-wrapper">
                                  <div className="progress-detail">
                                    <p>E-book</p>
                                    <ProgressBar now={40} />
                                    <span>120 (30.00%)</span>
                                  </div>
                                  <div className="progress-detail">
                                    <p>Audio book</p>
                                    <ProgressBar now={80} />
                                    <span>200 (50.00%)</span>
                                  </div>
                                  <div className="progress-detail mb-0">
                                    <p>Video book</p>
                                    <ProgressBar now={20} />
                                    <span>80 (20.00%)</span>
                                  </div>
                                </div>
                              </div>
                              <div className="readers-find-column">
                                <div className="readers-data">
                                  <div className="data-title d-flex align-items-center justify-content-between">
                                    <div>
                                      <h6 className="fs-20">
                                        How readers finds you
                                      </h6>
                                      <p className="light-grey mt-2">
                                        Last 30 Days
                                      </p>
                                    </div>
                                  </div>
                                  <div className="progress-bar-wrapper">
                                    <div className="progress-detail">
                                      <p>Dreamcapcha</p>
                                      <ProgressBar now={40} />
                                      <span>55%</span>
                                    </div>
                                    <div className="progress-detail">
                                      <p>Advertisment</p>
                                      <ProgressBar now={80} />
                                      <span>25%</span>
                                    </div>
                                    <div className="progress-detail mb-0">
                                      <p>External</p>
                                      <ProgressBar now={20} />
                                      <span>20%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="chart-image">
                                  chart comes here
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                    <p className="table-header">
                      Your top book of last 30 days
                    </p>
                    <div className="table-responsive">
                      <table>
                        <tr>
                          <th>Book</th>
                          <th>Book Type</th>
                          <th>Visibility</th>
                          <th>Date</th>
                          <th>Restrictions</th>
                          <th>Reviews</th>
                          <th>Impression</th>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex align-items-center">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <AiOutlineBook className="fs-20 me-1 mb-1 body-color" />
                            E-Book
                          </td>
                          <td className="danger-color">Draft</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex align-items-center">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <BsFileEarmarkMusic className="fs-20 me-1 mb-1 body-color" />
                            E-Book
                          </td>
                          <td className="green-color">Published</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex align-items-center">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <FaRegFileVideo className="fs-20 me-1 mb-1 body-color" />
                            E-Book
                          </td>
                          <td className="green-color">Published</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="review-tab-content">
                    <div className="tab-content-heading">
                      <h2>Reviews & Ratings</h2>
                    </div>
                    <div className="reviews-tabbing">
                      <Tabs
                        defaultActiveKey="Book reviews"
                        transition={false}
                        id="fill-tab-example"
                      >
                        <Tab eventKey="Book reviews" title="Book reviews">
                          <div className="book-review-tab-content">
                            <div className="book-review-list  d-flex justify-content-between flex-wrap">
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
                                      Mahatma Gandhi’ written by Romain Rolland,
                                      a French novelist and Nobel Prize
                                      winner...
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
                              <div className="book-list">
                                <div className="d-flex align-items-center">
                                  <img src={reviewbookcover} alt="Image"></img>
                                  <div className="data">
                                    <p>Mahatma Gandhi</p>
                                    <span>05 Episod - 02 Hours</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="book-review-list  d-flex justify-content-between flex-wrap">
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
                                      Mahatma Gandhi’ written by Romain Rolland,
                                      a French novelist and Nobel Prize
                                      winner...
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
                              <div className="book-list">
                                <div className="d-flex align-items-center">
                                  <img src={reviewbookcover} alt="Image"></img>
                                  <div className="data">
                                    <p>Mahatma Gandhi</p>
                                    <span>05 Episod - 02 Hours</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="book-review-list  d-flex justify-content-between flex-wrap">
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
                                      Mahatma Gandhi’ written by Romain Rolland,
                                      a French novelist and Nobel Prize
                                      winner...
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
                              <div className="book-list">
                                <div className="d-flex align-items-center">
                                  <img src={reviewbookcover} alt="Image"></img>
                                  <div className="data">
                                    <p>Mahatma Gandhi</p>
                                    <span>05 Episod - 02 Hours</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="book-review-list  d-flex justify-content-between flex-wrap">
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
                                      Mahatma Gandhi’ written by Romain Rolland,
                                      a French novelist and Nobel Prize
                                      winner...
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
                              <div className="book-list">
                                <div className="d-flex align-items-center">
                                  <img src={reviewbookcover} alt="Image"></img>
                                  <div className="data">
                                    <p>Mahatma Gandhi</p>
                                    <span>05 Episod - 02 Hours</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="My reviews" title="My reviews">
                          <div className="my-review-tab-content">
                            <div className="book-review-list  d-flex justify-content-between flex-wrap">
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
                                      Mahatma Gandhi’ written by Romain Rolland,
                                      a French novelist and Nobel Prize
                                      winner...
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
                                      Mahatma Gandhi’ written by Romain Rolland,
                                      a French novelist and Nobel Prize
                                      winner...
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
                                      Mahatma Gandhi’ written by Romain Rolland,
                                      a French novelist and Nobel Prize
                                      winner...
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

                              <div className="chart-data-right">
                                <div className="data-title d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="fs-20">Realtime</h6>
                                    <p className="light-grey mt-2">
                                      Updating live data
                                    </p>
                                  </div>
                                </div>
                                <div className="review-rating">
                                  <div className="left-part">
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
                                      <span>50 reviews</span>
                                    </div>
                                  </div>
                                  <div className="right-part">
                                    <div className="progress-detail">
                                      <p>5 Star</p>
                                      <ProgressBar now={40} />
                                      <h6>
                                        75% <span>982</span>
                                      </h6>
                                    </div>
                                    <div className="progress-detail">
                                      <p>4 Star</p>
                                      <ProgressBar now={20} />
                                      <h6>
                                        16% <span>205</span>
                                      </h6>
                                    </div>
                                    <div className="progress-detail">
                                      <p>3 Star</p>
                                      <ProgressBar now={80} />
                                      <h6>
                                        5% <span>65</span>
                                      </h6>
                                    </div>
                                    <div className="progress-detail">
                                      <p>2 Star</p>
                                      <ProgressBar now={10} />
                                      <h6>
                                        1% <span>17</span>
                                      </h6>
                                    </div>
                                    <div className="progress-detail mb-0">
                                      <p>1 Star</p>
                                      <ProgressBar now={20} />
                                      <h6>
                                        3% <span>46</span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div className="earning-tab-content">
                    <div className="tab-content-heading">
                      <h2>Estimated Earning</h2>
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <div className="data-info-list">
                        <ul>
                          <li>
                            <h4>Today’s Earning</h4>
                            <p>$24.10</p>
                          </li>
                          <li>
                            <h4>Yesterday</h4>
                            <p>$15.00</p>
                          </li>
                          <li>
                            <h4>Last 7 days</h4>
                            <p>$82.45</p>
                          </li>
                          <li>
                            <h4>This month</h4>
                            <p>$250.82</p>
                          </li>
                        </ul>
                      </div>
                      <div className="current-balance">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <p>Your current balance</p>
                          <button className="btn">
                            Payout <BsChevronRight />
                          </button>
                        </div>
                        <h2>$90.16</h2>
                      </div>
                    </div>
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2 className="fs-18">Books Selling Stats</h2>
                      <div className="right-side d-flex">
                        <div className="header-search">
                          <input
                            className="input-box"
                            placeholder="Search..."
                          ></input>
                          <BsSearch />
                        </div>
                        <Dropdown className="input-box without-background me-0">
                          <Dropdown.Toggle id="dropdown-basic">
                            All (06) <FaChevronDown />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Today
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Yesterday
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Last 30 Days
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Last 1 Week
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Last 1 Year
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Life Time
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Custome Date Range
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table>
                        <tr>
                          <th>Book</th>
                          <th>Book Type</th>
                          <th>Visibility</th>
                          <th>Date</th>
                          <th>Restrictions</th>
                          <th>Reviews</th>
                          <th>Impression</th>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <AiOutlineBook className="fs-20 me-1 mb-1 body-color" />
                            E-Book
                          </td>
                          <td className="danger-color">Draft</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <BsFileEarmarkMusic className="fs-20 me-1 mb-1 body-color" />
                              <AiOutlineBook className="fs-20 me-1 mb-1 body-color" />
                              <FaRegFileVideo className="fs-20 me-1 mb-1 body-color" />
                            </div>
                          </td>
                          <td className="green-color">Published</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="book-details d-flex">
                              <img src={bookcover} alt="Book Cover"></img>
                              <div className="book-data ms-3 pe-4">
                                <p className="fs-18 mb-3 body-color">
                                  Oscar Wilde the Canterville Ghost
                                </p>
                                <span className="light-grey">
                                  4 Chapter - 160 Page
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <FaRegFileVideo className="fs-20 me-1 mb-1 body-color" />
                            E-Book
                          </td>
                          <td className="green-color">Published</td>
                          <td>10m Ago</td>
                          <td>None</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <div className="wallet-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>My Wallet</h2>
                      <div className="right-side d-flex">
                        <div className="action">
                          <button className="btn btn-green">
                            <AiOutlinePlus className="fs-20 me-2" /> Add Balance
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="wallet-items">
                      <div className="column">
                        <ul className="data-info-list">
                          <li>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <p className="light-grey fs-16 fw-500">
                                Previous payout
                              </p>
                              <p className="fs-14 light-grey fw-500">
                                Sept 22, 2022
                              </p>
                            </div>
                            <h2>
                              $500.00 <span className="label">Paid</span>
                            </h2>
                            <a href="#">
                              View transactions{" "}
                              <MdOutlineArrowForwardIos className="ms-1" />
                            </a>
                          </li>
                          <li>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <p className="light-grey fs-16 fw-500">
                                Previous payout
                              </p>
                              <p className="fs-14 light-grey fw-500">
                                Sept 22, 2022
                              </p>
                            </div>
                            <h2>
                              $500.00 <span className="label">Paid</span>
                            </h2>
                            <a href="#">
                              View transactions{" "}
                              <MdOutlineArrowForwardIos className="ms-1" />
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content-heading d-flex justify-content-between align-items-center">
                          <h2 className="fs-20">Credit & Debit Summary</h2>
                          <div className="right-side d-flex">
                            <Dropdown className="input-box without-background m-0">
                              <Dropdown.Toggle id="dropdown-basic">
                                Last 30 Days <FaChevronDown />
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  Today
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  Yesterday
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  Last 30 Days
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                  Last 1 Week
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                  Last 1 Year
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                  Life Time
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                  Custome Date Range
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <ul className="data-info-list">
                          <li>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <p className="light-grey fs-16 fw-500">
                                Previous payout
                              </p>
                              <p className="label">
                                <HiArrowTrendingUp />
                                10%
                              </p>
                            </div>
                            <h2 className="green-color">+$300.00</h2>
                            <a href="#">
                              View transactions{" "}
                              <MdOutlineArrowForwardIos className="ms-1" />
                            </a>
                          </li>
                          <li>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <p className="light-grey fs-16 fw-500">
                                Previous payout
                              </p>
                              <p className="label red">
                                <HiArrowTrendingDown />
                                10%
                              </p>
                            </div>
                            <h2 className="danger-color">-$1050.00</h2>
                            <a href="#">
                              View transactions{" "}
                              <MdOutlineArrowForwardIos className="ms-1" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="column balance-summary">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <p className="fs-16">Balance</p>
                          <p className="fs-14 light-grey">Updated 20 min ago</p>
                        </div>
                        <h4>$2,467.70</h4>
                        <div className="summary">
                          <p className="title">Quick Summary</p>
                          <ul>
                            <li>
                              <span>Aug 28,2022</span>
                              <p className="green">+$250</p>
                            </li>
                            <li>
                              <span>Aug 28,2022</span>
                              <p className="danger-color">-$250</p>
                            </li>
                            <li>
                              <span>Aug 28,2022</span>
                              <p className="green">+$250</p>
                            </li>
                            <li>
                              <span>Aug 28,2022</span>
                              <p className="danger-color">-$250</p>
                            </li>
                            <li>
                              <span>Aug 28,2022</span>
                              <p className="green">+$250</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="column chart-data">
                        <div className="heading">
                          <h4>Overall Transactions</h4>
                        </div>
                        Chart comes here
                      </div>
                    </div>
                    <div className="transcation-summary">
                      <div className="tab-content-heading d-flex justify-content-between align-items-center">
                        <h2 className="fs-20">Transaction Summary</h2>
                        <div className="right-side d-flex">
                          <div className="header-search">
                            <input
                              className="input-box"
                              placeholder="Search..."
                            ></input>
                            <BsSearch />
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="transcation-summary-table">
                          <tr>
                            <th>Type</th>
                            <th>Date & Time</th>
                            <th>Payment Detils</th>
                            <th>Payment Mehod</th>
                            <th>Amount</th>
                            <th>Balance</th>
                          </tr>
                          <tr>
                            <td>
                              <p className="label red-view">Debit</p>
                            </td>
                            <td>Aug 28,2022 , 2:30PM</td>
                            <td>Book Purchased</td>
                            <td>Wallet</td>
                            <td>
                              <p className="danger-color">-$10</p>
                            </td>
                            <td>$300</td>
                          </tr>
                          <tr>
                            <td>
                              <p className="label green-view">Cebit</p>
                            </td>
                            <td>Aug 28,2022 , 2:30PM</td>
                            <td>Book Purchased</td>
                            <td>Wallet</td>
                            <td>
                              <p className="green-color">+$10</p>
                            </td>
                            <td>$300</td>
                          </tr>
                        </table>
                      </div>
                      <p className="text-end">Pagination comes here</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <div className="assets-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>My Assets</h2>
                      <div className="right-side d-flex">
                        <Dropdown className="input-box without-background">
                          <Dropdown.Toggle id="dropdown-basic">
                            All (06) <FaChevronDown />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Today
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Yesterday
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Last 30 Days
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Last 1 Week
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Last 1 Year
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Life Time
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                              Custome Date Range
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <div className="action">
                          <button
                            className="btn btn-green"
                            onClick={setprofileuploadshow}
                          >
                            <BsUpload className="fs-20 me-2" /> Upload Assets
                          </button>
                          <Modal
                            show={profileupload}
                            onHide={setprofileuploadclose}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Upload Assets</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="upload-file-content">
                                <div className="upload-file">
                                  <BsUpload />
                                  <p>
                                    Drag and drop files here or click to{" "}
                                    <a href="#">upload.</a>
                                  </p>
                                  <h6 className="mt-3 light-grey fw-normal">
                                    <span className="danger-color">Note:</span>{" "}
                                    only PNG, JPG & JPEG File formate supported
                                  </h6>
                                  <h5>
                                    By uploading your assets to Dreamcapcha, you
                                    acknowledge that you agree to Dreamcapcha’s{" "}
                                    <a href="#">Terms of Service</a> or privacy
                                    rights. <a href="#">Learn more.</a>
                                  </h5>
                                </div>
                                <div className="btn-wrap">
                                  <button className="btn btn-primary">
                                    Update
                                  </button>
                                </div>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </div>
                    </div>
                    <div className="asset-list">
                      <ul>
                        <li>
                          <img src={assetimg} alt="Asset image"></img>
                          <div className="asset-details">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="label">PNG</div>
                                <p>File Name</p>
                              </div>
                              <Dropdown
                                className="without-background"
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
                            <h6>
                              Uploaded <span>1 hours</span> ago
                            </h6>
                          </div>
                        </li>
                        <li>
                          <img src={assetimg} alt="Asset image"></img>
                          <div className="asset-details">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="label green">JPG</div>
                                <p>File Name</p>
                              </div>
                              <Dropdown
                                className="without-background"
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
                            <h6>
                              Uploaded <span>1 hours</span> ago
                            </h6>
                          </div>
                        </li>
                        <li>
                          <img src={assetimg} alt="Asset image"></img>
                          <div className="asset-details">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="label blue">JPEG</div>
                                <p>File Name</p>
                              </div>
                              <Dropdown
                                className="without-background"
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
                            <h6>
                              Uploaded <span>1 hours</span> ago
                            </h6>
                          </div>
                        </li>
                        <li>
                          <img src={assetimg} alt="Asset image"></img>
                          <div className="asset-details">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="label">PNG</div>
                                <p>File Name</p>
                              </div>
                              <Dropdown
                                className="without-background"
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
                            <h6>
                              Uploaded <span>1 hours</span> ago
                            </h6>
                          </div>
                        </li>
                        <li>
                          <img src={assetimg} alt="Asset image"></img>
                          <div className="asset-details">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="label">PNG</div>
                                <p>File Name</p>
                              </div>
                              <Dropdown
                                className="without-background"
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
                            <h6>
                              Uploaded <span>1 hours</span> ago
                            </h6>
                          </div>
                        </li>
                        <li>
                          <img src={assetimg} alt="Asset image"></img>
                          <div className="asset-details">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="label">PNG</div>
                                <p>File Name</p>
                              </div>
                              <Dropdown
                                className="without-background"
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
                            <h6>
                              Uploaded <span>1 hours</span> ago
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="eighth">
                  <div className="community-wall-tab-content">
                    <div className="tab-content-heading">
                      <h2>Community Wall</h2>
                    </div>
                    <div className="image-poll-banner">
                      <div className="heading d-flex flex-wrap justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
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
                          <p className="fs-20 fw-500">Romain Rolland</p>
                        </div>
                        <p className="fs-16 light-grey">Visibility : Public</p>
                      </div>
                      {/* <p className="fs-18 light-grey">Post an update with your followers...</p> */}
                      <div className="image-poll-tabbibg">
                        <Tabs
                          defaultActiveKey="IMAGE"
                          transition={false}
                          id="fill-tab-example"
                        >
                          <Tab eventKey="IMAGE" title="IMAGE">
                            <div className="image-tab-content">
                              <p>
                                Mahatma Gandhi’ written by Romain Rolland, a
                                French novelist and Nobel Prize winner Rolland,
                                a French novelist and Nobel Prize winner{" "}
                                <span>random</span> <span>#newpost</span>
                              </p>
                              <img
                                src={dummyImage}
                                alt="Image"
                                className="uploaded-image"
                              ></img>
                            </div>
                          </Tab>
                          <Tab eventKey="POLL" title="POLL">
                            <div className="poll-tab-content">
                              <p>What is your favorite book type?</p>
                              <ul>
                                <li>
                                  <div className="d-flex align-items-center">
                                    <MdClose />
                                    <input
                                      className="input-box"
                                      placeholder="Horror Story"
                                    ></input>
                                  </div>
                                  <span>06/62</span>
                                </li>
                                <li>
                                  <div className="d-flex align-items-center">
                                    <MdClose />
                                    <input
                                      className="input-box"
                                      placeholder="Horror Story"
                                    ></input>
                                  </div>
                                  <span>06/62</span>
                                </li>
                                <li>
                                  <div className="d-flex align-items-center">
                                    <MdClose />
                                    <input
                                      className="input-box"
                                      placeholder="Horror Story"
                                    ></input>
                                  </div>
                                  <span>06/62</span>
                                </li>
                              </ul>
                              <a
                                href="#"
                                className="info-state fs-18 ms-3 ps-2"
                              >
                                ADD ANOTHER OPTION
                              </a>
                            </div>
                          </Tab>
                        </Tabs>
                      </div>
                      <div className="btn-wrap">
                        <button className="btn btn-secondary">CANCEL</button>
                        <Dropdown
                          as={ButtonGroup}
                          className="primary ms-4"
                          autoClose="outside"
                          align="end"
                        >
                          <Button>POST</Button>
                          <Dropdown.Toggle split id="dropdown-split-basic">
                            <BsChevronDown />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Public
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Private
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Schudeled
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="post-status-tabbing">
                      <Tabs
                        defaultActiveKey="Published"
                        transition={false}
                        id="fill-tab-example"
                      >
                        <Tab eventKey="Published" title="Published">
                          <div className="published-tab-content tab-content-data">
                            <ul>
                              <li className="banner-list">
                                <div className="heading d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
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
                                <div className="progress-bar-wrapper">
                                  <p className="light-grey mb-4">
                                    What is your favorite book type?
                                  </p>
                                  <div className="progress-detail">
                                    <ProgressBar
                                      now={14}
                                      label={
                                        <p>
                                          First Name <span>40%</span>
                                        </p>
                                      }
                                    />
                                    <ProgressBar
                                      now={38}
                                      label={
                                        <p>
                                          Novel <span>38%</span>
                                        </p>
                                      }
                                    />
                                    <ProgressBar
                                      now={8}
                                      label={
                                        <p>
                                          Science & Fiction<span>8%</span>
                                        </p>
                                      }
                                    />
                                    <ProgressBar
                                      now={57}
                                      label={
                                        <p>
                                          Detective<span>57%</span>
                                        </p>
                                      }
                                    />
                                  </div>
                                  <span className="info-state fs-18 mb-4">
                                    500 Votes
                                  </span>
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
                              </li>
                              <li className="banner-list">
                                <div className="heading d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
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
                                    French novelist and Nobel Prize winner
                                    Rolland, a French novelist and Nobel Prize
                                    winner
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
                              </li>
                            </ul>
                          </div>
                        </Tab>
                        <Tab eventKey="Scheduled" title="Scheduled">
                          <div className="scheduled-tab-content tab-content-data"></div>
                        </Tab>
                        <Tab eventKey="Private" title="Private">
                          <div className="Private-tab-content tab-content-data"></div>
                        </Tab>
                      </Tabs>
                      <Dropdown className="input-box without-background">
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="d-flex justify-content-between"
                        >
                          Newest first <FaChevronDown />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Newest first
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Oldest First
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Most Liked
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="nineth">
                  <div className="coupons-tab-content">
                    <div className="create-coupons">
                      <div className="coupons-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="93"
                          height="70"
                          viewBox="0 0 93 70"
                          fill="none"
                        >
                          <path
                            d="M83.7369 69.0842H9.25787C4.51902 69.0842 0.664062 65.2293 0.664062 60.4904V46.1674C0.664062 44.584 1.94525 43.3028 3.52866 43.3028C8.26751 43.3028 12.1225 39.4479 12.1225 34.709C12.1225 29.9702 8.26751 26.1152 3.52866 26.1152C1.94525 26.1154 0.664063 24.8342 0.664063 23.2508V8.92779C0.664063 4.18894 4.51902 0.333984 9.25787 0.333984H83.7371C88.476 0.333984 92.3309 4.18894 92.3309 8.92779V23.2508C92.3309 24.8342 91.0497 26.1154 89.4663 26.1154C84.7275 26.1154 80.8725 29.9704 80.8725 34.7092C80.8725 39.448 84.7275 43.303 89.4663 43.303C91.0497 43.303 92.3309 44.5842 92.3309 46.1676V60.4906C92.3307 65.2293 88.476 69.0842 83.7369 69.0842ZM6.39327 48.7439V60.4904C6.39327 62.0709 7.67735 63.355 9.25787 63.355H83.7371C85.3176 63.355 86.6017 62.0709 86.6017 60.4904V48.7439C80.0725 47.4123 75.1433 41.6272 75.1433 34.709C75.1433 27.7908 80.0723 22.0059 86.6017 20.6741V8.92779C86.6017 7.34727 85.3176 6.06319 83.7371 6.06319H9.25787C7.67735 6.06319 6.39327 7.34727 6.39327 8.92779V20.6743C12.9225 22.0059 17.8517 27.791 17.8517 34.7092C17.8517 41.6274 12.9225 47.4123 6.39327 48.7439Z"
                            fill="#8131D9"
                          />
                          <path
                            d="M35.2188 56.5874L52.4002 10.7703L57.7645 12.7819L40.5831 58.599L35.2188 56.5874Z"
                            fill="#8131D9"
                          />
                          <path
                            d="M32.961 35.6759C28.2221 35.6759 24.3672 31.8209 24.3672 27.0821C24.3672 22.3432 28.2221 18.4883 32.961 18.4883C37.6998 18.4883 41.5548 22.3432 41.5548 27.0821C41.5548 31.8209 37.6998 35.6759 32.961 35.6759ZM32.961 24.2175C31.3805 24.2175 30.0964 25.5016 30.0964 27.0821C30.0964 28.6626 31.3805 29.9467 32.961 29.9467C34.5415 29.9467 35.8256 28.6626 35.8256 27.0821C35.8256 25.5016 34.5415 24.2175 32.961 24.2175Z"
                            fill="#8131D9"
                          />
                          <path
                            d="M62.5391 53.4361C57.8003 53.4361 53.9453 49.5812 53.9453 44.8423C53.9453 40.1035 57.8003 36.2485 62.5391 36.2485C67.278 36.2485 71.1329 40.1035 71.1329 44.8423C71.1329 49.5812 67.278 53.4361 62.5391 53.4361ZM62.5391 41.9777C60.9586 41.9777 59.6745 43.2618 59.6745 44.8423C59.6745 46.4229 60.9586 47.7069 62.5391 47.7069C64.1196 47.7069 65.4037 46.4229 65.4037 44.8423C65.4037 43.2618 64.1196 41.9777 62.5391 41.9777Z"
                            fill="#8131D9"
                          />
                        </svg>
                      </div>
                      <p className="fs-20 light-grey">
                        Coupons are a great way to offer discounts and rewards
                        to your customers. They will appear here once created.
                      </p>
                      <div className="btn-wrap">
                        <button
                          className="btn btn-green"
                          onClick={setcreatecouponshow}
                        >
                          <AiOutlinePlus className="fs-20 me-2" /> Create your
                          first coupon
                        </button>
                        <Modal
                          show={createcoupon}
                          onHide={setcreatecouponclose}
                          className="large-modal"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Create a Coupon</Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="has-footer">
                            <div className="create-coupon-modal">
                              <div className="left-part">
                                <div className="input-fields-wrapper">
                                  <div className="input-fields">
                                    <label>Coupon Code</label>
                                    <input
                                      className="input-box"
                                      placeholder="Eg: YOURUNIQUECODE"
                                    ></input>
                                    <p className="d-flex justify-content-between">
                                      Code must be unique <span>0/15</span>
                                    </p>
                                  </div>
                                  <div className="input-fields">
                                    <label>Coupon Description</label>
                                    <input
                                      className="input-box"
                                      placeholder="Eg: Enjoy the Monsoon offer"
                                    ></input>
                                    <p className="d-flex justify-content-end">
                                      {" "}
                                      <span>0/24</span>
                                    </p>
                                  </div>
                                </div>
                                <ul>
                                  <li>
                                    <h5>Disscount Over</h5>
                                    <p className="fs-14 light-grey mt-2">
                                      Select a single book or all book to create
                                      a disscount coupon
                                    </p>
                                    <div className="radio-button-group checkbox-group">
                                      <div class="form-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault1"
                                        ></input>
                                        <label
                                          class="form-check-label"
                                          for="flexRadioDefault1"
                                        >
                                          Single Book
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault2"
                                        ></input>
                                        <label
                                          class="form-check-label"
                                          for="flexRadioDefault2"
                                        >
                                          All Books
                                        </label>
                                      </div>
                                    </div>
                                    <Dropdown className="input-box without-background">
                                      <Dropdown.Toggle id="dropdown-basic">
                                        Select Book <FaChevronDown />
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                          <div className="d-flex align-items-center">
                                            <img
                                              src={dropdownbookcover}
                                              alt="Book Cover"
                                            ></img>
                                            <p className="ms-2">You Can</p>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                          <div className="d-flex align-items-center">
                                            <img
                                              src={dropdownbookcover}
                                              alt="Book Cover"
                                            ></img>
                                            <p className="ms-2">
                                              Oscar Wilde The Canterville Ghost
                                            </p>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                          <div className="d-flex align-items-center">
                                            <img
                                              src={dropdownbookcover}
                                              alt="Book Cover"
                                            ></img>
                                            <p className="ms-2">You Can</p>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                          <div className="d-flex align-items-center">
                                            <img
                                              src={dropdownbookcover}
                                              alt="Book Cover"
                                            ></img>
                                            <p className="ms-2">
                                              Oscar Wilde The Canterville Ghost
                                            </p>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                          <div className="d-flex align-items-center">
                                            <img
                                              src={dropdownbookcover}
                                              alt="Book Cover"
                                            ></img>
                                            <p className="ms-2">You Can</p>
                                          </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                          <div className="d-flex align-items-center">
                                            <img
                                              src={dropdownbookcover}
                                              alt="Book Cover"
                                            ></img>
                                            <p className="ms-2">
                                              Oscar Wilde The Canterville Ghost
                                            </p>
                                          </div>
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </li>
                                  <li>
                                    <h5>Disscount type</h5>
                                    <p className="fs-14 light-grey mt-2">
                                      Select a disscount type like flat amount
                                      or percentage disscount
                                    </p>
                                    <div className="radio-button-group checkbox-group">
                                      <div class="form-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="fixedamount"
                                        ></input>
                                        <label
                                          class="form-check-label"
                                          for="fixedamount"
                                        >
                                          Fixed Amount
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="discount"
                                        ></input>
                                        <label
                                          class="form-check-label"
                                          for="discount"
                                        >
                                          Percentage Disscount
                                        </label>
                                      </div>
                                    </div>
                                    <div className="input-fields-wrapper">
                                      <div className="input-field">
                                        <input
                                          className="input-box"
                                          placeholder="$ 00"
                                        ></input>
                                        <p className="fs-14 mt-1 light-grey">
                                          Cart value is above
                                        </p>
                                      </div>
                                      <div className="input-field">
                                        <input
                                          className="input-box"
                                          placeholder="00% OFF"
                                        ></input>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <h5>Usage Limit & Validity</h5>
                                    <p className="fs-14 light-grey mt-2">
                                      Add details about your coupon to limit its
                                      use
                                    </p>
                                    <div className="input-fields-wrapper mt-4">
                                      <div className="input-field">
                                        <Dropdown className="input-box without-background">
                                          <Dropdown.Toggle id="dropdown-basic">
                                            No Limit <FaChevronDown />
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                              Limit
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">
                                              Limit
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">
                                              Limit
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                      <div className="input-field">
                                        <input
                                          className="input-box"
                                          type="date"
                                          placeholder="00% OFF"
                                        ></input>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="right-part">
                                <div className="heading">
                                  <h6 className="fs-18 mb-1 fw-500">
                                    Coupon Designs & Preview
                                  </h6>
                                  <p className="fs-14 light-grey">
                                    You can see your coupon design preview live
                                    here.
                                  </p>
                                </div>
                                <div className="radio-button-group checkbox-group">
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="coupon1"
                                    ></input>
                                    <label
                                      class="form-check-label"
                                      for="coupon1"
                                    >
                                      <div className="coupon-design">
                                        <div className="heading">
                                          <h2>$ 10 OFF</h2>
                                          <span>Enjoy the monsoon offer</span>
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                                          <p className="fs-14 fw-500 white-color">
                                            Code: SAVEMORE
                                          </p>
                                          <a href="#" className="fs-14 fw-500">
                                            <MdContentCopy className="fs-20 me-2" />
                                            Copy Code
                                          </a>
                                        </div>
                                        <ul>
                                          <li>
                                            <p>09-10-2022 to 10-11-2022</p>
                                          </li>
                                          <li>
                                            <p>Min Order Value of $25</p>
                                          </li>
                                          <li>
                                            <p>
                                              Cannot be combined with other
                                              discounts
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="coupon2"
                                    ></input>
                                    <label
                                      class="form-check-label"
                                      for="coupon2"
                                    >
                                      <div className="coupon-design green">
                                        <div className="heading">
                                          <h2>$ 10 OFF</h2>
                                          <span>Enjoy the monsoon offer</span>
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                                          <p className="fs-14 fw-500 white-color">
                                            Code: SAVEMORE
                                          </p>
                                          <a href="#" className="fs-14 fw-500">
                                            <MdContentCopy className="fs-20 me-2" />
                                            Copy Code
                                          </a>
                                        </div>
                                        <ul>
                                          <li>
                                            <p>09-10-2022 to 10-11-2022</p>
                                          </li>
                                          <li>
                                            <p>Min Order Value of $25</p>
                                          </li>
                                          <li>
                                            <p>
                                              Cannot be combined with other
                                              discounts
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <div className="btn-wrap d-flex">
                              <button className="btn btn-grey me-3">
                                Cancle
                              </button>
                              <button className="btn btn-green">
                                Crete coupon
                              </button>
                            </div>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="dummy">
                  <div className="coupon-table">
                    <div className="transcation-summary">
                      <div className="tab-content-heading d-flex justify-content-between align-items-center">
                        <h2 className="fs-20">Transaction Summary</h2>
                        <div className="right-side d-flex">
                          <div className="header-search">
                            <input
                              className="input-box"
                              placeholder="Search..."
                            ></input>
                            <BsSearch />
                          </div>
                          <Dropdown className="input-box without-background me-0">
                            <Dropdown.Toggle id="dropdown-basic">
                              This Month <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Today
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Yesterday
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Last 30 Days
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Last 1 Week
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Last 1 Year
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Life Time
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Custome Date Range
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="transcation-summary-table">
                          <tr>
                            <th>Type</th>
                            <th>Date & Time</th>
                            <th>Payment Detils</th>
                            <th>Payment Mehod</th>
                            <th>Amount</th>
                            <th>Balance</th>
                            <th>Action</th>
                          </tr>
                          <tr>
                            <td>
                              <p className="label red-view">Debit</p>
                            </td>
                            <td>Aug 28,2022 , 2:30PM</td>
                            <td>Book Purchased</td>
                            <td>Wallet</td>
                            <td>
                              <p className="danger-color">-$10</p>
                            </td>
                            <td>$300</td>
                            <td>
                              <div className="action">
                                <a href="#" title="Edit" className="edit">
                                  <MdOutlineModeEditOutline />
                                </a>
                                <a href="#" title="Delete" className="delete">
                                  <MdOutlineDeleteOutline />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="label green-view">Cebit</p>
                            </td>
                            <td>Aug 28,2022 , 2:30PM</td>
                            <td>Book Purchased</td>
                            <td>Wallet</td>
                            <td>
                              <p className="green-color">+$10</p>
                            </td>
                            <td>$300</td>
                            <td>
                              <div className="action">
                                <a href="#" title="Edit" className="edit">
                                  <MdOutlineModeEditOutline />
                                </a>
                                <a href="#" title="Delete" className="delete">
                                  <MdOutlineDeleteOutline />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <p className="text-end">Pagination comes here</p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tenth">
                  <div className="advertisment-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>Advertisment</h2>
                      <div className="right-side d-flex">
                        <div className="action">
                          <button
                            className="btn btn-green"
                            onClick={setcreateaddshow}
                          >
                            <AiOutlinePlus className="fs-20 me-2" /> Crete
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="advertisment-data">
                      <div className="column">
                        <div className="data-info-list">
                          <ul>
                            <li>
                              <h4>Total Advertisments</h4>
                              <p>50</p>
                              <a href="#" className="d-flex align-items-center">
                                vs Last month{" "}
                                <p className="green-color">
                                  <HiArrowTrendingUp className="me-1" />
                                  +10%
                                </p>
                              </a>
                            </li>
                            <li>
                              <h4>Requested Advertisment</h4>
                              <p>02</p>
                              <a href="#">
                                View All Requested{" "}
                                <MdOutlineArrowForwardIos className="ms-1" />
                              </a>
                            </li>
                            <li>
                              <h4>Rejected Advertisment</h4>
                              <p>01</p>
                              <a href="#">
                                View All Rejected{" "}
                                <MdOutlineArrowForwardIos className="ms-1" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="column">
                        <div className="data-info-list">
                          <ul>
                            <li>
                              <h4>Total Impression</h4>
                              <p>5.20k</p>
                              <a href="#" className="d-flex align-items-center">
                                vs Last month{" "}
                                <p className="green-color">
                                  <HiArrowTrendingUp className="me-1" />
                                  +10%
                                </p>
                              </a>
                            </li>
                            <li>
                              <h4>Money Spent</h4>
                              <p>$450.57</p>
                              <a href="#" className="d-flex align-items-center">
                                vs Last month{" "}
                                <p className="danger-color">
                                  <HiArrowTrendingDown className="me-1" />
                                  -10%
                                </p>
                              </a>
                            </li>
                            <li>
                              <h4>Money Earned</h4>
                              <p>$600.50</p>
                              <a href="#" className="d-flex align-items-center">
                                vs Last month{" "}
                                <p className="green-color">
                                  <HiArrowTrendingUp className="me-1" />
                                  +20%
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="transcation-summary">
                      <div className="tab-content-heading d-flex justify-content-between align-items-center">
                        <h2 className="fs-20">
                          All Advertisment{" "}
                          <span className="light-grey">(50)</span>
                        </h2>
                        <div className="right-side d-flex">
                          <div className="header-search">
                            <input
                              className="input-box"
                              placeholder="Search..."
                            ></input>
                            <BsSearch />
                          </div>
                          <Dropdown className="input-box without-background me-0">
                            <Dropdown.Toggle id="dropdown-basic">
                              This Month <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Today
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Yesterday
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Last 30 Days
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Last 1 Week
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Last 1 Year
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Life Time
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-1">
                                Custome Date Range
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="transcation-summary-table">
                          <tr>
                            <th>Ad Id</th>
                            <th>Featured Book</th>
                            <th>Ad Placement</th>
                            <th>Request date</th>
                            <th>Ad Duration</th>
                            <th>Started</th>
                            <th>Ends</th>
                            <th>Amount Spent</th>
                            <th>Impressions</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#"
                                className="info-state text-decoration-underline"
                              >
                                1441514
                              </a>
                            </td>
                            <td>Man & Superman</td>
                            <td>Featured Book</td>
                            <td>Oct 12, 2022</td>
                            <td>24:00 Hours</td>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                            <td>0</td>
                            <td>
                              <p className="label red-view">Requested</p>
                            </td>
                            <td>
                              <div className="action">
                                <a href="#" title="Edit" className="edit">
                                  <MdOutlineModeEditOutline />
                                </a>
                                <a href="#" title="Delete" className="delete">
                                  <MdOutlineDeleteOutline />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#"
                                className="info-state text-decoration-underline"
                              >
                                1441514
                              </a>
                            </td>
                            <td>Man & Superman</td>
                            <td>Featured Book</td>
                            <td>Oct 12, 2022</td>
                            <td>24:00 Hours</td>
                            <td>Oct 11, 2022</td>
                            <td>
                              <span className="info-state fw-500">
                                24:23:45
                              </span>
                              Left
                            </td>
                            <td className="fw-500">$ 73.50</td>
                            <td>1.5k</td>
                            <td>
                              <p className="label green-view">Requested</p>
                            </td>
                            <td>
                              <div className="action">
                                <a href="#" title="Edit" className="edit">
                                  <MdOutlineModeEditOutline />
                                </a>
                                <a href="#" title="Delete" className="delete">
                                  <MdOutlineDeleteOutline />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                href="#"
                                className="info-state text-decoration-underline"
                              >
                                1441514
                              </a>
                            </td>
                            <td>Man & Superman</td>
                            <td>Featured Book</td>
                            <td>Oct 12, 2022</td>
                            <td>24:00 Hours</td>
                            <td>Oct 11, 2022</td>
                            <td>
                              <span className="info-state fw-500">
                                24:23:45
                              </span>
                              Left
                            </td>
                            <td className="fw-500">$ 73.50</td>
                            <td>1.5k</td>
                            <td>
                              <p className="label yellow-view">Requested</p>
                            </td>
                            <td>
                              <div className="action">
                                <a
                                  href="#"
                                  title="Edit"
                                  className="edit"
                                  onClick={toggleClass}
                                >
                                  <AiOutlineEye />
                                </a>
                                <a
                                  href="#"
                                  title="Delete"
                                  className="edit ms-2"
                                >
                                  <MdOutlineContentCopy />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <p className="text-end">Pagination comes here</p>
                    </div>
                    <Modal
                      show={createad}
                      onHide={setcreateadclose}
                      className="extra-large-modal"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Create Advertisement</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="has-footer">
                        <div className="create-add-modal">
                          <div className="heading">
                            <h5 className="fs-18 fw-500 mb-1">Ad Placement</h5>
                            <p className="fs-14 light-grey">
                              Choose a website place where you’d like to show
                              your ad.
                            </p>
                          </div>
                          <div className="radio-button-group checkbox-group">
                            <div class="form-check selected">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="addplace1"
                                checked
                              ></input>
                              <label class="form-check-label" for="addplace1">
                                <div className="add-place-design">
                                  <img
                                    src={addplace1}
                                    alt="Image"
                                    className="banner"
                                  ></img>
                                  <div className="data text-center mt-3">
                                    <h5 className="fw-normal fs-16 body-color">
                                      Featured Books Section
                                    </h5>
                                    <p className="fs-14 light-grey">
                                      Starts from{" "}
                                      <span className="fw-500 primary-color">
                                        $4.9/hours
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="addplace2"
                              ></input>
                              <label class="form-check-label" for="addplace2">
                                <div className="add-place-design">
                                  <img
                                    src={addplace1}
                                    alt="Image"
                                    className="banner"
                                  ></img>
                                  <div className="data text-center mt-3">
                                    <h5 className="fw-normal fs-16 body-color">
                                      Banner Ad
                                    </h5>
                                    <p className="fs-14 light-grey">
                                      Starts from{" "}
                                      <span className="fw-500 primary-color">
                                        $1.9/hours
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="addplace3"
                              ></input>
                              <label class="form-check-label" for="addplace3">
                                <div className="add-place-design">
                                  <img
                                    src={addplace1}
                                    alt="Image"
                                    className="banner"
                                  ></img>
                                  <div className="data text-center mt-3">
                                    <h5 className="fw-normal fs-16 body-color">
                                      Top Selling Books
                                    </h5>
                                    <p className="fs-14 light-grey">
                                      Starts from{" "}
                                      <span className="fw-500 primary-color">
                                        $4.9/hours
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="addplace4"
                              ></input>
                              <label class="form-check-label" for="addplace4">
                                <div className="add-place-design">
                                  <img
                                    src={addplace1}
                                    alt="Image"
                                    className="banner"
                                  ></img>
                                  <div className="data text-center mt-3">
                                    <h5 className="fw-normal fs-16 body-color">
                                      Exclusive/Limited Offers
                                    </h5>
                                    <p className="fs-14 light-grey">
                                      Starts from{" "}
                                      <span className="fw-500 primary-color">
                                        $4.9/hours
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          {/* First radio button content START */}
                          <div className="add-modal-content">
                            <Tabs
                              defaultActiveKey="Basic"
                              transition={false}
                              id="fill-tab-example"
                            >
                              <Tab eventKey="Basic" title="Basic">
                                <div className="basic-tab-content">
                                  <div className="heading">
                                    <p className="fs-18 fw-500">
                                      No of slots (4)
                                    </p>
                                    <span className="fs-14 light-grey">
                                      Select your campaign spot below
                                    </span>
                                  </div>
                                  <div className="dropdown-input-fields">
                                    <div className="dropdown-input">
                                    <Form.Select aria-label="Default select example" className="input-box with-label">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </Form.Select>
                                      <p className="label">Slot 1</p>
                                    </div>
                                    <div className="dropdown-input">
                                      <Dropdown className="input-box without-background me-0">
                                        <Dropdown.Toggle id="dropdown-basic">
                                          Select your book <FaChevronDown />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">
                                            Today
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Yesterday
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-3">
                                            Last 30 Days
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Last 1 Week
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Last 1 Year
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Life Time
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Custome Date Range
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                      <p className="label">Slot 2</p>
                                    </div>
                                    <div className="dropdown-input">
                                      <Dropdown className="input-box without-background me-0">
                                        <Dropdown.Toggle id="dropdown-basic">
                                          Select your book <FaChevronDown />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">
                                            Today
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Yesterday
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-3">
                                            Last 30 Days
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Last 1 Week
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Last 1 Year
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Life Time
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Custome Date Range
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                      <p className="label">Slot 3</p>
                                    </div>
                                    <div className="dropdown-input">
                                      <Dropdown className="input-box without-background me-0">
                                        <Dropdown.Toggle id="dropdown-basic">
                                          Select your book <FaChevronDown />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">
                                            Today
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Yesterday
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-3">
                                            Last 30 Days
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Last 1 Week
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Last 1 Year
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Life Time
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-1">
                                            Custome Date Range
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                      <p className="label">Slot 4</p>
                                    </div>
                                  </div>
                                  <div className="data-info-list">
                                    <ul>
                                      <li>
                                        <div className="heading">
                                          <p className="fs-18 fw-500">
                                            Ad duration & Charges
                                          </p>
                                          <span className="fs-14 light-grey">
                                            Select your campaign duration and
                                            budget
                                          </span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <p className="fs-20 fw-500 text-nowrap">
                                            $4.9 / Hours
                                          </p>
                                          <div className="position-relative ms-4">
                                            <input
                                              className="input-box"
                                              placeholder="00"
                                            ></input>
                                            <label className="hours-label">
                                              Hours
                                            </label>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="heading">
                                          <p className="fs-18 fw-500">
                                            Disscount Price{" "}
                                            <span className="fw-normal light-grey">
                                              (optional)
                                            </span>
                                          </p>
                                          <span className="fs-14 light-grey">
                                            Enter the disscount price if you are
                                            wanna sell this book at disscount
                                            price.
                                          </span>
                                        </div>
                                        <div className="input-field-wrapper d-flex">
                                          <div className="input-item me-4 d-flex flex-column">
                                            <label>Current Price</label>
                                            <input
                                              className="input-box"
                                              placeholder="$35.00"
                                            ></input>
                                          </div>
                                          <div className="input-item d-flex flex-column">
                                            <label>Disscount Price</label>
                                            <input
                                              className="input-box"
                                              placeholder="$0.00"
                                            ></input>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </Tab>
                              <Tab eventKey="Premium" title="Premium">
                                Same as basic
                              </Tab>
                            </Tabs>
                          </div>
                          {/* First radio button content END */}
                          <hr></hr>
                          {/* Second Radion button contemt START */}
                          <div className="add-modal-content banner-add-content">
                            <div className="dropdown-input-fields">
                              <div className="dropdown-input">
                                <Dropdown className="input-box without-background me-0">
                                  <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className="d-flex justify-content-between"
                                  >
                                    Select your book <FaChevronDown />
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Today
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Yesterday
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Last 30 Days
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Last 1 Week
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Last 1 Year
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Life Time
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Custome Date Range
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                                <p className="label">Slot 1</p>
                              </div>
                            </div>
                            <div className="data-info-list">
                              <ul>
                                <li>
                                  <div className="heading">
                                    <p className="fs-18 fw-500">
                                      Ad duration & Charges
                                    </p>
                                    <span className="fs-14 light-grey">
                                      Select your campaign duration and budget
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="fs-20 fw-500 text-nowrap">
                                      $4.9 / Hours
                                    </p>
                                    <div className="position-relative ms-4">
                                      <input
                                        className="input-box"
                                        placeholder="00"
                                      ></input>
                                      <label className="hours-label">
                                        Hours
                                      </label>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="heading">
                                    <p className="fs-18 fw-500">
                                      Disscount Price{" "}
                                      <span className="fw-normal light-grey">
                                        (optional)
                                      </span>
                                    </p>
                                    <span className="fs-14 light-grey">
                                      Enter the disscount price if you are wanna
                                      sell this book at disscount price.
                                    </span>
                                  </div>
                                  <div className="input-field-wrapper d-flex">
                                    <div className="input-item me-4 d-flex flex-column">
                                      <label>Current Price</label>
                                      <input
                                        className="input-box"
                                        placeholder="$35.00"
                                      ></input>
                                    </div>
                                    <div className="input-item d-flex flex-column">
                                      <label>Disscount Price</label>
                                      <input
                                        className="input-box"
                                        placeholder="$0.00"
                                      ></input>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="add-description mt-4 pt-2">
                            <label>Ad Description</label>
                            <input
                              className="input-box"
                              placeholder="Eg: Enjoy the Monsoon offer"
                            ></input>
                            <p className="d-flex justify-content-end light-grey mt-1">
                              <span>0/24</span>
                            </p>
                          </div>
                          {/* Second Radion button contemt END */}
                          <hr></hr>
                          {/* Fourth radio button content START */}
                          <div className="add-modal-content offer-baner">
                            <div className="heading">
                              <p className="fs-18 fw-500">No of slots (4)</p>
                              <span className="fs-14 light-grey">
                                Select your campaign spot below
                              </span>
                            </div>
                            <div className="dropdown-input-fields">
                              <div className="dropdown-input">
                                <Dropdown className="input-box without-background me-0">
                                  <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className="d-flex justify-content-between"
                                  >
                                    Select your book <FaChevronDown />
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Today
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Yesterday
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Last 30 Days
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Last 1 Week
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Last 1 Year
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Life Time
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Custome Date Range
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                                <p className="label">Slot 1</p>
                              </div>
                              <div className="dropdown-input">
                                <Dropdown className="input-box without-background me-0">
                                  <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className="d-flex justify-content-between"
                                  >
                                    Select your book <FaChevronDown />
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                      Today
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                      Yesterday
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                      Last 30 Days
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Last 1 Week
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Last 1 Year
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Life Time
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                      Custome Date Range
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                                <p className="label">Slot 2</p>
                              </div>
                            </div>
                            <div className="data-info-list">
                              <ul>
                                <li>
                                  <div className="heading">
                                    <p className="fs-18 fw-500">
                                      Ad duration & Charges
                                    </p>
                                    <span className="fs-14 light-grey">
                                      Select your campaign duration and budget
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <p className="fs-20 fw-500 text-nowrap">
                                      $4.9 / Hours
                                    </p>
                                    <div className="position-relative ms-4">
                                      <input
                                        className="input-box"
                                        placeholder="00"
                                      ></input>
                                      <label className="hours-label">
                                        Hours
                                      </label>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="heading">
                                    <p className="fs-18 fw-500">
                                      Disscount Price{" "}
                                      <span className="fw-normal light-grey">
                                        (optional)
                                      </span>
                                    </p>
                                    <span className="fs-14 light-grey">
                                      Enter the disscount price if you are wanna
                                      sell this book at disscount price.
                                    </span>
                                  </div>
                                  <div className="input-field-wrapper d-flex">
                                    <div className="input-item me-4 d-flex flex-column">
                                      <label>Current Price</label>
                                      <input
                                        className="input-box"
                                        placeholder="$35.00"
                                      ></input>
                                    </div>
                                    <div className="input-item d-flex flex-column">
                                      <label>Disscount Price</label>
                                      <input
                                        className="input-box"
                                        placeholder="$0.00"
                                      ></input>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="add-description mt-4 pt-2">
                            <label>Ad Description</label>
                            <input
                              className="input-box"
                              placeholder="Eg: Enjoy the Monsoon offer"
                            ></input>
                            <p className="d-flex justify-content-end light-grey mt-1">
                              <span>0/24</span>
                            </p>
                          </div>
                          {/* Fourth radio button content END */}
                        </div>
                      </Modal.Body>
                      <Modal.Footer className="d-flex justify-content-between">
                        <p className="fw-500 fs-18 d-flex">
                          Chargable Amount :{" "}
                          <span className="primary-color fs-4 ms-1">$59</span>
                        </p>
                        <div className="btn-wrap d-flex">
                          <button
                            className="btn btn-grey me-3"
                            onClick={setcreateadclose}
                          >
                            Cancle
                          </button>
                          <button
                            className="btn btn-green"
                            onClick={setsuccessreqaddshow}
                          >
                            Request for Ad
                          </button>
                        </div>
                      </Modal.Footer>
                    </Modal>
                    <Modal show={successreqadd} onHide={setsuccessreqaddclose}>
                      <Modal.Header
                        closeButton
                        className="border-0"
                      ></Modal.Header>
                      <Modal.Body>
                        <div className="success-request-add-modal">
                          <BsCheck2Circle />
                          <h2>Successfully Requested for Ad</h2>
                          <p>
                            Your advertisment request is successfully sended to
                            the admin. admin will publish your ad over website
                            if there is spot is available otherwise you’ll get
                            back your money within 7 working days
                          </p>
                          <div className="btn-wrap">
                            <button className="btn btn-secondary me-2">
                              Edit Details
                            </button>
                            <button className="btn btn-dark-blue">
                              Okay, got it
                            </button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="eleventh">
                  <div className="profile-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>Profile & Setting</h2>
                      <div className="right-side d-flex">
                        <div className="header-search">
                          <input
                            className="input-box"
                            placeholder="Search..."
                          ></input>
                          <BsSearch />
                        </div>
                      </div>
                    </div>
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <div className="d-flex flex-wrap justify-content-between">
                        <div className="profile-inner-item-link">
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first">
                                <p>Personal Information</p>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">
                                <p>My Following</p>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">
                                <p>Bank Details</p>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="fourth">
                                <p>Password</p>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="fifth">
                                <p>Email & Notification</p>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item></Nav.Item>
                          </Nav>
                        </div>
                        <div className="profile-inner-item-content">
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div className="personal-information-tab">
                                <div className="banner">
                                  <AiOutlineCamera />
                                  <p>
                                    For the best results on all devices, use an
                                    image that's at least 1250 x 172 pixels and
                                    6 MB or less.{" "}
                                  </p>
                                </div>
                                <div className="profille-details-input-fields">
                                  <div className="user-image">
                                    <img
                                      src={userdashboardprofile}
                                      alt="Profile"
                                    ></img>
                                    <div className="edit-icon">
                                      <MdOutlineModeEditOutline />
                                    </div>
                                  </div>
                                  <div className="input-field-group">
                                    <div className="input-field-item">
                                      <label>First Name</label>
                                      <input
                                        type="text"
                                        className="input-box"
                                        placeholder="Albert"
                                      ></input>
                                    </div>
                                    <div className="input-field-item">
                                      <label>Last Name</label>
                                      <input
                                        type="text"
                                        className="input-box"
                                        placeholder="Flores"
                                      ></input>
                                    </div>

                                    <div className="input-field-item">
                                      <label>Author Type</label>
                                      <Dropdown className="input-box without-background">
                                        <Dropdown.Toggle id="dropdown-basic">
                                          Comic & Horror Writer{" "}
                                          <FaChevronDown />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">
                                            Male
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Female
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-3">
                                            Other
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                    <div className="input-field-item">
                                      <label>Book Language</label>
                                      <Form.Select aria-label="Default select example" className="input-box">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </Form.Select>
                                    </div>
                                    <div className="input-field-item">
                                      <label>Email</label>
                                      <input
                                        type="date"
                                        className="input-box"
                                        placeholder="albertf10@gmail.com"
                                      ></input>
                                    </div>
                                    <div className="input-field-item">
                                      <label>Mobile Number</label>
                                      <input
                                        type="number"
                                        className="input-box"
                                        placeholder="6487145612"
                                      ></input>
                                    </div>
                                    <div className="input-field-item">
                                      <label>Gender</label>
                                      <Dropdown className="input-box without-background">
                                        <Dropdown.Toggle id="dropdown-basic">
                                          Male
                                          <FaChevronDown />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">
                                            Male
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Female
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-3">
                                            Other
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                    <div className="input-field-item">
                                      <label>Date of Birth</label>
                                      <input
                                        type="date"
                                        className="input-box"
                                        placeholder="Oct 10, 1992"
                                      ></input>
                                    </div>
                                    <div className="input-field-item">
                                      <label>Country</label>
                                      <Dropdown className="input-box without-background">
                                        <Dropdown.Toggle id="dropdown-basic">
                                          Canada <FaChevronDown />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">
                                            Male
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Female
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-3">
                                            Other
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                    <div className="input-field-item w-100">
                                      <label>Your Bio</label>
                                      <textarea
                                        className="input-box"
                                        placeholder="Add short bio about you..."
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <div className="follwers-tab-content">
                                <div className="follwers-banner">
                                  <ul>
                                    <li>
                                      <span>Followers</span>
                                      <h2>500</h2>
                                      <p>
                                        vs Last month <HiArrowTrendingUp />{" "}
                                        <span className="fw-500 white-color">
                                          +10%
                                        </span>
                                      </p>
                                    </li>
                                    <li>
                                      <span>Following</span>
                                      <h2>500</h2>
                                      <p>
                                        vs Last month <HiArrowTrendingDown />{" "}
                                        <span className="fw-500 white-color">
                                          -20%
                                        </span>
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                                <div className="followers-tabbing">
                                  <Tabs
                                    defaultActiveKey="Followers"
                                    transition={false}
                                    id="fill-tab-example"
                                  >
                                    <Tab eventKey="Followers" title="Followers">
                                      <div className="followers-tab-content">
                                        <ul>
                                          <li>
                                            <div className="user-image">
                                              <img
                                                src={userprofilefollwers}
                                                alt="Profile"
                                              ></img>
                                            </div>
                                            <div className="user-data">
                                              <h5>Savannah Nguyen</h5>
                                              <p>
                                                <IoLocationOutline />
                                                Minsk, Belarus
                                              </p>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="user-image">
                                              <img
                                                src={userprofilefollwers}
                                                alt="Profile"
                                              ></img>
                                            </div>
                                            <div className="user-data">
                                              <h5>Savannah Nguyen</h5>
                                              <p>
                                                <IoLocationOutline />
                                                Minsk, Belarus
                                              </p>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="user-image">
                                              <img
                                                src={userprofilefollwers}
                                                alt="Profile"
                                              ></img>
                                            </div>
                                            <div className="user-data">
                                              <h5>Savannah Nguyen</h5>
                                              <p>
                                                <IoLocationOutline />
                                                Minsk, Belarus
                                              </p>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </Tab>
                                    <Tab eventKey="Following" title="Following">
                                      <div className="followers-tab-content">
                                        <div className="my-followings-content">
                                          <ul>
                                            <li>
                                              <div className="user-image">
                                                <img
                                                  src={userprofile}
                                                  alt="Profile"
                                                ></img>
                                              </div>
                                              <div className="user-data">
                                                <h5>Savannah Nguyen</h5>
                                                <p>
                                                  Comic & Horror Book Writer
                                                </p>
                                                <div className="action">
                                                  <a href="#">View Profile</a>
                                                  <a href="#">View all Books</a>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="user-image">
                                                <img
                                                  src={userprofile}
                                                  alt="Profile"
                                                ></img>
                                              </div>
                                              <div className="user-data">
                                                <h5>Savannah Nguyen</h5>
                                                <p>
                                                  Comic & Horror Book Writer
                                                </p>
                                                <div className="action">
                                                  <a href="#">View Profile</a>
                                                  <a href="#">View all Books</a>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="user-image">
                                                <img
                                                  src={userprofile}
                                                  alt="Profile"
                                                ></img>
                                              </div>
                                              <div className="user-data">
                                                <h5>Savannah Nguyen</h5>
                                                <p>
                                                  Comic & Horror Book Writer
                                                </p>
                                                <div className="action">
                                                  <a href="#">View Profile</a>
                                                  <a href="#">View all Books</a>
                                                </div>
                                              </div>
                                            </li>
                                            <li>
                                              <div className="user-image">
                                                <img
                                                  src={userprofile}
                                                  alt="Profile"
                                                ></img>
                                              </div>
                                              <div className="user-data">
                                                <h5>Savannah Nguyen</h5>
                                                <p>
                                                  Comic & Horror Book Writer
                                                </p>
                                                <div className="action">
                                                  <a href="#">View Profile</a>
                                                  <a href="#">View all Books</a>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </Tab>
                                  </Tabs>
                                  <Dropdown className="input-box without-background">
                                    <Dropdown.Toggle
                                      id="dropdown-basic"
                                      className="d-flex justify-content-between"
                                    >
                                      Newest first <FaChevronDown />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#/action-1">
                                        Newest first
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#/action-2">
                                        Oldest First
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#/action-3">
                                        Most Liked
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <div className="bank-details-tab">
                                <div className="heading d-flex flex-wrap justify-content-between align-items-center">
                                  <h6 className="fs-20 fw-500">
                                    Your Bank Accounts
                                  </h6>
                                  <div className="btn-wrap">
                                    <button className="btn btn-green">
                                      <AiOutlinePlus className="me-2" />
                                      Add New Card
                                    </button>
                                  </div>
                                </div>
                                <div className="transcation-summary">
                                  <div className="table-responsive">
                                    <table className="transcation-summary-table">
                                      <tr>
                                        <th>Bank</th>
                                        <th>Account Number</th>
                                        <th>Bank Holder Name</th>
                                        <th>CPF/CNJ</th>
                                        <th>Bank Type</th>
                                        <th>Action</th>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src={visalogo}
                                            alt="Visa Logo"
                                          ></img>
                                        </td>
                                        <td>344******234</td>
                                        <td>Luke Paul</td>
                                        <td>RBC0000007</td>
                                        <td>
                                          <p className="label">Primary</p>
                                        </td>
                                        <td>
                                          <div className="action">
                                            <a
                                              href="#"
                                              title="Edit"
                                              className="edit"
                                            >
                                              <MdOutlineModeEditOutline />
                                            </a>
                                            <a
                                              href="#"
                                              title="Edit"
                                              className="edit repeat-arrow ms-2 disabled"
                                            >
                                              <BsArrowRepeat />
                                            </a>
                                            <a
                                              href="#"
                                              title="Delete"
                                              className="delete ms-2"
                                            >
                                              <MdOutlineDeleteOutline />
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src={mastercardlogo}
                                            alt="Visa Logo"
                                          ></img>
                                        </td>
                                        <td>344******234</td>
                                        <td>Luke Paul</td>
                                        <td>RBC0000007</td>
                                        <td>
                                          <p className="label secondary">
                                            Secondary
                                          </p>
                                        </td>
                                        <td>
                                          <div className="action">
                                            <a
                                              href="#"
                                              title="Edit"
                                              className="edit"
                                            >
                                              <MdOutlineModeEditOutline />
                                            </a>
                                            <a
                                              title="Edit"
                                              className="edit ms-2 repeat-arrow"
                                              onClick={setsuccessreqaddshow}
                                            >
                                              <BsArrowRepeat />
                                            </a>
                                            <a
                                              href="#"
                                              title="Delete"
                                              className="delete ms-2"
                                            >
                                              <MdOutlineDeleteOutline />
                                            </a>
                                            <Modal
                                              show={successreqadd}
                                              onHide={setsuccessreqaddclose}
                                            >
                                              <Modal.Header
                                                closeButton
                                                className="border-0"
                                              ></Modal.Header>
                                              <Modal.Body>
                                                <div className="success-request-add-modal">
                                                  <RiBankLine />

                                                  <h2>
                                                    Want to Make this bank
                                                    Primary?
                                                  </h2>
                                                  <p>
                                                    By compleating this process
                                                    your Bank Ac No.
                                                    344******234 will be your
                                                    primary Bank Account and
                                                    you’ll be start reciving
                                                    payment on this bank confirm
                                                    it if you want to make it
                                                    Primary
                                                  </p>
                                                  <div className="btn-wrap">
                                                    <button className="btn btn-secondary me-2">
                                                      Cancel
                                                    </button>
                                                    <button className="btn btn-dark-blue">
                                                      Yes, Confirm
                                                    </button>
                                                  </div>
                                                </div>
                                              </Modal.Body>
                                            </Modal>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src={visalogo}
                                            alt="Visa Logo"
                                          ></img>
                                        </td>
                                        <td>344******234</td>
                                        <td>Luke Paul</td>
                                        <td>RBC0000007</td>
                                        <td>
                                          <p className="label">Primary</p>
                                        </td>
                                        <td>
                                          <div className="action">
                                            <a
                                              href="#"
                                              title="Edit"
                                              className="edit"
                                            >
                                              <MdOutlineModeEditOutline />
                                            </a>
                                            <a
                                              href="#"
                                              title="Edit"
                                              className="edit ms-2 repeat-arrow"
                                            >
                                              <BsArrowRepeat />
                                            </a>
                                            <a
                                              href="#"
                                              title="Delete"
                                              className="delete ms-2"
                                            >
                                              <MdOutlineDeleteOutline />
                                            </a>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                              <div className="update-password-tab">
                                <h6>
                                  <AiOutlineLock />
                                  Update Password
                                </h6>
                                <div className="input-field-group">
                                  <div className="input-item w-100">
                                    <label>Old Password</label>
                                    <input
                                      type="password"
                                      className="input-box"
                                    ></input>
                                  </div>
                                  <div className="input-item">
                                    <label>New Password</label>
                                    <input
                                      type="password"
                                      className="input-box"
                                    ></input>
                                  </div>
                                  <div className="input-item">
                                    <label>Re-enter New Password</label>
                                    <input
                                      type="password"
                                      className="input-box"
                                    ></input>
                                  </div>
                                </div>
                                <div className="btn-wrap d-flex align-items-center">
                                  <button className="btn btn-primary">
                                    Update Password Now
                                  </button>
                                  <a href="#" className="info-state ms-4">
                                    Did you forgot your password?
                                  </a>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                              <div className="profile-setting-tab">
                                <div className="email-setting">
                                  <h2 className="title">
                                    <HiOutlineMail />
                                    Emails Setting
                                  </h2>
                                  <ul>
                                    <li>
                                      <Form>
                                        <Form.Check
                                          type="switch"
                                          id="custom-switch"
                                          label="Reminder Emails"
                                        />
                                      </Form>
                                      <p>
                                        Get notification you may have missed.
                                      </p>
                                    </li>
                                    <li>
                                      <Form>
                                        <Form.Check
                                          type="switch"
                                          id="custom-switch"
                                          label="News Emails"
                                        />
                                      </Form>
                                      <p>
                                        Learn about the new features and
                                        Dreamcapcha’s related News
                                      </p>
                                    </li>
                                    <li>
                                      <Form>
                                        <Form.Check
                                          type="switch"
                                          id="custom-switch"
                                          label="Opinion Emails"
                                        />
                                      </Form>
                                      <p>
                                        Give Feedback on Dreamcapcha’s New
                                        Features.
                                      </p>
                                    </li>
                                    <li>
                                      <Form>
                                        <Form.Check
                                          type="switch"
                                          id="custom-switch"
                                          label="Product Emails"
                                        />
                                      </Form>
                                      <p>Get tips on Dreamcapcha tools</p>
                                    </li>
                                  </ul>
                                </div>
                                <div className="general-setting">
                                  <h2 className="title">
                                    <MdOutlineNotificationsActive />
                                    General Notification Setting
                                  </h2>
                                  <ul>
                                    <li>
                                      <Form>
                                        <Form.Check
                                          type="switch"
                                          id="custom-switch"
                                          label="Like"
                                        />
                                      </Form>
                                      <p>
                                        Get notification when someone like your
                                        book & comments
                                      </p>
                                    </li>
                                    <li>
                                      <Form>
                                        <Form.Check
                                          type="switch"
                                          id="custom-switch"
                                          label="Reviews"
                                        />
                                      </Form>
                                      <p>
                                        Get notification when someone Give
                                        Feedback on your books
                                      </p>
                                    </li>
                                    <li className="mb-0">
                                      <Form>
                                        <Form.Check
                                          type="switch"
                                          id="custom-switch"
                                          label="Reminders"
                                        />
                                      </Form>
                                      <p>
                                        You have notifiactions you haven’t seen
                                        and othersimilar notifications.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </div>
                    </Tab.Container>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
        <div className="add-details-side-popup">
          <div className="add-details-side-popup-wrapper">
            <div className="heading d-flex justify-content-between align-items-center">
              <p className="fs-20">
                AD ID<span className="info-state"> #1441524</span>
              </p>
              <a href="#" className="light-grey fs-20">
                <MdClose />
              </a>
            </div>
            <div className="add-details-popup-content">
              <ul className="data-info-list">
                <li>
                  <p>Total Impression</p>
                  <span>800</span>
                </li>
                <li>
                  <p>Money Spent</p>
                  <span>$60.77</span>
                </li>
                <li>
                  <p>Money Earned</p>
                  <span className="primary-color">$80.52</span>
                </li>
              </ul>
              <div className="book-item d-flex align-items-center">
                <div className="book-image">
                  <img src={audiobookcover} alt="Book Cover" />
                </div>
                <div className="book-data">
                  <div className="title">
                    <h3>Man & Superman</h3>
                    <p className="label p-2">
                      Status:{" "}
                      <span className="fw-500 green-color">Completed</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="add-place-postion">
                <div className="heading p-0 border-0">
                  <h2 className="fs-16 fw-500">Ad Placement</h2>
                  <p className="fs-14 light-grey">
                    Your ad appear’s on this place of website
                  </p>
                  <div className="add-here">
                    <div className="left-part">
                      <a href="#">
                        <img src={addhereactive} alt="add here image" />
                        <p className="add-here-text">Your Ad here</p>
                      </a>
                    </div>
                    <div className="right-part">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={addhere} alt="add here image" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={addhere} alt="add here image" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={addhere} alt="add here image" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={addhere} alt="add here image" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-labels-list">
                <ul>
                  <li>
                    <p className="mb-3">Ad Type</p>
                    <div className="d-flex">
                      <p className="label me-2">Featured Books Section</p>
                      <p className="label">Premium</p>
                    </div>
                  </li>
                  <li>
                    <p className="mb-3">Ad Duration & Charges</p>
                    <div className="d-flex">
                      <p className="label me-2">10:30 Hours</p>
                      <p className="label">Charges: $ 60.77 </p>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="me-2 mb-2">
                        <p className="mb-3">Request date</p>
                        <p className="label">Oct 09, 2022</p>
                      </div>
                      <div className="me-2 mb-2">
                        <p className="mb-3">Start Date</p>
                        <p className="label">Charges: $ 60.77 </p>
                      </div>
                      <div className="mb-2">
                        <p className="mb-3">End Date</p>
                        <p className="label">Charges: $ 60.77 </p>
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
export default AuthorsDashboard;
