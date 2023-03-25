import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Dropdown from "react-bootstrap/Dropdown";
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
  BsLink,
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
  AiOutlineBank,
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
import { RiBankLine, RiDonutChartFill } from "react-icons/ri";
import userprofilefollwers from "../images/user-menu-profile.png";
import addhere from "../images/add-here.png";
import addhereactive from "../images/add-here-active.png";

const AuthorsDashboard = () => {
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
      <section className="authors-dashboard-section affiliate-dashboard">
        <div className="authors-dashboard-header d-flex align-items-center">
          <div className="column mobile-menu" onClick={toggleClass}>
            <HiMenu />
          </div>
          <div className="column">
            <a href="#" className="logo">
              <img src={logo} alt="Logo"></img>
            </a>
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
                <button className="btn btn-green">
                  <BsLink /> Create Book Link
                </button>
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
                        <MdOutlineAccountBalanceWallet />
                        Wallet
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <p>
                        <RiDonutChartFill />
                        Reports
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                      <p>
                        <AiOutlineBank />
                        Payment Options
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">
                      <p>
                        <MdOutlineNotificationsActive />
                        Notifications
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">
                      <p>
                        <MdOutlineManageAccounts />
                        Profile & Settings
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
                    <div className="chart-data">
                      <ul>
                        <li className="d-flex">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="52"
                              height="52"
                              viewBox="0 0 52 52"
                              fill="none"
                            >
                              <rect
                                width="52"
                                height="52"
                                rx="8"
                                fill="#303185"
                                fill-opacity="0.1"
                              />
                              <g clip-path="url(#clip0_157_44528)">
                                <path
                                  d="M37.2754 25.9154C37.2754 24.4344 36.0705 23.2295 34.5896 23.2295C34.1609 23.2295 33.7557 23.331 33.3958 23.5104C33.0309 22.4597 32.0316 21.7032 30.8583 21.7032C30.3304 21.7032 29.838 21.8569 29.4224 22.121C28.9506 21.3466 28.0981 20.8283 27.1269 20.8283C26.7562 20.8283 26.4029 20.9038 26.0814 21.0402V17.8284C26.0814 16.4002 24.9195 15.2383 23.4912 15.2383C22.063 15.2383 20.901 16.4002 20.901 17.8284V26.1864C20.3845 25.3712 19.5832 24.8034 18.6419 24.5862C17.6922 24.367 16.714 24.5313 15.8878 25.0485L15.1077 25.537C14.7389 25.7679 14.6146 26.2466 14.8245 26.6277C14.8592 26.6908 18.3123 32.9667 19.7133 35.9687C19.7372 36.0199 19.7611 36.0704 19.7852 36.1202C20.3494 37.2874 21.2332 38.2677 22.3413 38.9553C23.4425 39.6387 24.7116 39.9999 26.0111 39.9999H30.1703C32.0413 39.9999 33.8038 39.2747 35.133 37.9579C36.4623 36.6411 37.204 34.8855 37.2216 33.0146L37.2754 27.3011C37.2754 27.2998 37.2752 27.2985 37.2752 27.2971C37.2752 27.2959 37.2754 27.2946 37.2754 27.2934V25.9154H37.2754ZM33.9787 36.7925C32.9587 37.803 31.6062 38.3595 30.1704 38.3595H26.0111C23.9934 38.3595 22.1292 37.2003 21.2621 35.4063C21.2412 35.363 21.2203 35.319 21.1996 35.2747C20.0368 32.7832 17.5758 28.2407 16.6341 26.5166L16.7583 26.4388C17.2127 26.1543 17.7506 26.0639 18.2731 26.1846C18.7955 26.3051 19.2396 26.622 19.5234 27.0768L21.0254 29.4844C21.2191 29.7949 21.595 29.9394 21.947 29.8388C22.2989 29.738 22.5414 29.4163 22.5414 29.0503V17.8284C22.5414 17.3047 22.9675 16.8786 23.4913 16.8786C24.015 16.8786 24.4411 17.3047 24.4411 17.8284V27.2934C24.4411 27.7463 24.8083 28.1135 25.2613 28.1135C25.7142 28.1135 26.0815 27.7463 26.0815 27.2934V23.5142C26.0815 22.9377 26.5505 22.4687 27.127 22.4687C27.7034 22.4687 28.1725 22.9377 28.1725 23.5142V27.2934C28.1725 27.7463 28.5397 28.1135 28.9927 28.1135C29.4456 28.1135 29.8128 27.7463 29.8128 27.2934V24.389C29.8128 23.8126 30.2819 23.3436 30.8583 23.3436C31.4348 23.3436 31.9038 23.8126 31.9038 24.389V27.2934C31.9038 27.7463 32.271 28.1135 32.724 28.1135C33.1769 28.1135 33.5442 27.7463 33.5442 27.2934V25.9154C33.5442 25.339 34.0132 24.8699 34.5897 24.8699C35.1662 24.8699 35.6352 25.339 35.6352 25.9154V27.2885L35.5815 32.9992C35.5679 34.4348 34.9987 35.782 33.9787 36.7925Z"
                                  fill="#353794"
                                />
                                <path
                                  d="M18.2811 18.8223C18.7341 18.8223 19.1013 18.4551 19.1013 18.0021C19.1013 15.597 21.058 13.6403 23.4631 13.6403C25.8682 13.6403 27.825 15.597 27.825 18.0021C27.825 18.4551 28.1922 18.8223 28.6452 18.8223C29.0981 18.8223 29.4653 18.4551 29.4653 18.0021C29.4653 14.6926 26.7728 12 23.4631 12C20.1535 12 17.4609 14.6926 17.4609 18.0021C17.4609 18.4551 17.8282 18.8223 18.2811 18.8223Z"
                                  fill="#353794"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_157_44528">
                                  <rect
                                    width="28"
                                    height="28"
                                    fill="white"
                                    transform="translate(12 12)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <span className="light-grey">Total Books</span>
                            </div>
                            <h5>335</h5>
                            <a
                              href="#"
                              className="d-flex align-items-center light-grey fs-14"
                            >
                              vs Last month{" "}
                              <p className="danger-color ms-2">
                                <HiArrowTrendingDown className="me-1" />
                                +10%
                              </p>
                            </a>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="53"
                              height="52"
                              viewBox="0 0 53 52"
                              fill="none"
                            >
                              <rect
                                x="0.996094"
                                width="52"
                                height="52"
                                rx="8"
                                fill="#303185"
                                fill-opacity="0.1"
                              />
                              <g clip-path="url(#clip0_157_44545)">
                                <path
                                  d="M18.6172 39H37.6602V16.0469H36.1367V13H18.6172C17.3572 13 16.332 14.0251 16.332 15.2852V36.7148C16.332 37.9749 17.3572 39 18.6172 39ZM17.8555 36.7148V17.4394C18.0939 17.5239 18.3502 17.5703 18.6172 17.5703H19.3789V37.4766H18.6172C18.1973 37.4766 17.8555 37.1348 17.8555 36.7148ZM36.1367 37.4766H20.9023V17.5703H28.5195V25.849L31.5664 23.8178L34.6133 25.849V17.5703H36.1367V37.4766ZM30.043 17.5703H33.0898V23.0025L31.5664 21.9869L30.043 23.0025V17.5703ZM18.6172 14.5234H34.6133V16.0469C33.7 16.0469 19.2484 16.0469 18.6172 16.0469C18.1973 16.0469 17.8555 15.7051 17.8555 15.2852C17.8555 14.8652 18.1973 14.5234 18.6172 14.5234Z"
                                  fill="#353794"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_157_44545">
                                  <rect
                                    width="26"
                                    height="26"
                                    fill="white"
                                    transform="translate(13.9961 13)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <span className="light-grey">Total Books</span>
                            </div>
                            <h5>335</h5>
                            <a
                              href="#"
                              className="d-flex align-items-center light-grey fs-14"
                            >
                              vs Last month{" "}
                              <p className="green-color ms-2">
                                <HiArrowTrendingUp className="me-1" />
                                +10%
                              </p>
                            </a>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="53"
                              height="52"
                              viewBox="0 0 53 52"
                              fill="none"
                            >
                              <rect
                                x="0.00390625"
                                width="52"
                                height="52"
                                rx="8"
                                fill="#303185"
                                fill-opacity="0.1"
                              />
                              <g clip-path="url(#clip0_157_44560)">
                                <path
                                  d="M38.0999 25.9453L39.3321 22.1532C39.4479 21.7971 39.3212 21.4071 39.0183 21.1868L35.7923 18.8432L34.5602 15.0511C34.4446 14.695 34.1126 14.4538 33.7384 14.4538H29.7511L26.5252 12.1102C26.2225 11.8904 25.8121 11.8904 25.5094 12.1102L22.2835 14.4538H18.2964C17.9219 14.4538 17.5902 14.695 17.4744 15.0511L16.2422 18.8432L13.0165 21.1868C12.7136 21.4068 12.5869 21.7971 12.7025 22.1532L13.9346 25.9453L12.7025 29.7373C12.5869 30.0934 12.7136 30.4835 13.0165 30.7035L16.2422 33.0472L17.4744 36.8394C17.5902 37.1955 17.9219 37.4365 18.2964 37.4365H22.2835L25.5094 39.7802C25.6608 39.8902 25.839 39.9453 26.0174 39.9453C26.1955 39.9453 26.3737 39.8902 26.5252 39.7802L29.7511 37.4365H33.7384C34.1126 37.4365 34.4444 37.1955 34.5602 36.8394L35.7923 33.0472L39.0181 30.7035C39.321 30.4835 39.4479 30.0934 39.3321 29.7373L38.0999 25.9453ZM34.2352 32.2461L33.1105 35.7081H29.4704C29.2877 35.7081 29.11 35.766 28.9624 35.8732L26.0174 38.0129L23.0724 35.8732C22.9248 35.766 22.747 35.7081 22.5644 35.7081H18.9242L17.7993 32.2461C17.7429 32.0724 17.6331 31.9212 17.4855 31.8139L14.5405 29.6743L15.6652 26.2123C15.7216 26.0386 15.7216 25.8517 15.6652 25.678L14.5405 22.2161L17.4855 20.0764C17.6331 19.9692 17.7429 19.8179 17.7993 19.6442L18.9242 16.1823H22.5644C22.747 16.1823 22.9248 16.1244 23.0724 16.0171L26.0174 13.8777L28.9624 16.0173C29.11 16.1246 29.2877 16.1823 29.4704 16.1823H33.1105L34.2352 19.6445C34.2919 19.8179 34.4017 19.9692 34.5493 20.0766L37.4943 22.2163L36.3693 25.6782C36.3129 25.8517 36.3129 26.0388 36.3693 26.2123L37.4943 29.6743L34.5493 31.8139C34.4017 31.9212 34.2919 32.0726 34.2352 32.2461Z"
                                  fill="#353794"
                                />
                                <path
                                  d="M22.8012 25.8387C23.5389 25.8387 24.2765 25.5578 24.8381 24.9964C25.9612 23.8732 25.9612 22.0457 24.8381 20.9224C23.7149 19.7994 21.8874 19.7992 20.7641 20.9224C19.6411 22.0457 19.6411 23.8732 20.7641 24.9964C21.3258 25.5578 22.0634 25.8387 22.8012 25.8387ZM21.9863 22.1446C22.211 21.92 22.506 21.8077 22.8012 21.8077C23.0963 21.8077 23.3913 21.92 23.616 22.1446C24.0653 22.5938 24.0653 23.3248 23.616 23.7741C23.1668 24.2233 22.4355 24.2235 21.9865 23.7741C21.5372 23.3248 21.5372 22.5938 21.9863 22.1446Z"
                                  fill="#353794"
                                />
                                <path
                                  d="M27.1977 27.3541C26.0747 28.4771 26.0747 30.3047 27.1977 31.4279C27.7593 31.9895 28.497 32.2702 29.2346 32.2702C29.9723 32.2702 30.7099 31.9895 31.2715 31.4279C32.3948 30.3047 32.3948 28.4771 31.2715 27.3539C30.1483 26.2311 28.321 26.2309 27.1977 27.3541ZM30.0494 30.2057C29.6001 30.655 28.8691 30.655 28.4199 30.2057C27.9706 29.7565 27.9706 29.0255 28.4199 28.5762C28.6446 28.3515 28.9396 28.2391 29.2346 28.2391C29.5296 28.2391 29.8249 28.3515 30.0494 28.5762C30.4986 29.0255 30.4986 29.7565 30.0494 30.2057Z"
                                  fill="#353794"
                                />
                                <path
                                  d="M31.1694 21.0225C30.8319 20.6852 30.2848 20.6852 29.9473 21.0225L20.8625 30.1075C20.525 30.4448 20.525 30.9921 20.8625 31.3296C21.0313 31.4984 21.2524 31.5828 21.4735 31.5828C21.6946 31.5828 21.9159 31.4984 22.0847 31.3296L31.1694 22.2447C31.5069 21.9073 31.5069 21.36 31.1694 21.0225Z"
                                  fill="#353794"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_157_44560">
                                  <rect
                                    width="28"
                                    height="28"
                                    fill="white"
                                    transform="translate(12.0039 12)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <span className="light-grey">Total Books</span>
                            </div>
                            <h5>335</h5>
                            <a
                              href="#"
                              className="d-flex align-items-center light-grey fs-14"
                            >
                              vs Last month{" "}
                              <p className="green-color ms-2">
                                <HiArrowTrendingUp className="me-1" />
                                +10%
                              </p>
                            </a>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="52"
                              height="52"
                              viewBox="0 0 52 52"
                              fill="none"
                            >
                              <rect
                                width="52"
                                height="52"
                                rx="8"
                                fill="#303185"
                                fill-opacity="0.1"
                              />
                              <path
                                d="M41.3952 28.7261C41.0666 28.1751 39.7245 26.5323 36.2543 28.5354L31.2707 31.4119C31.1631 31.474 31.0548 31.5289 30.9455 31.5766C30.9623 31.5261 30.9776 31.4746 30.9918 31.4219C31.1613 30.7889 31.0626 30.1039 30.7209 29.5423C30.3919 29.0014 29.8784 28.6308 29.2751 28.4984C27.5863 28.1281 25.9125 27.5501 24.5676 27.0857C24.1488 26.9411 23.7533 26.8046 23.4141 26.6945C21.8474 26.1864 20.4541 26.8026 19.2978 27.4726L15.2146 29.8383L14.8597 29.2111C14.6498 28.8401 14.307 28.5728 13.8947 28.4586C13.4823 28.3444 13.0509 28.397 12.6799 28.6069L11.0613 29.523C10.2938 29.9573 10.0228 30.9352 10.4571 31.7027L15.2159 40.1112C15.5099 40.6305 16.0526 40.9224 16.6106 40.9224C16.8773 40.9224 17.1474 40.8558 17.3956 40.7153L19.0143 39.7993C19.3853 39.5893 19.6525 39.2466 19.7668 38.8343C19.8811 38.4219 19.8284 37.9905 19.6184 37.6196L19.3121 37.0783L20.0006 36.6808L27.2944 38.6351C27.7231 38.75 28.1499 38.8071 28.5696 38.8071C29.4193 38.8071 30.2401 38.5731 30.9906 38.1109L40.6746 32.1479C41.7315 31.4971 42.075 29.8661 41.3952 28.7261ZM18.3213 38.4336C18.3162 38.4522 18.3041 38.4777 18.2755 38.4939L16.6569 39.4099C16.6108 39.4359 16.5475 39.4185 16.5214 39.3724L11.7626 30.9639C11.7366 30.9179 11.7541 30.8545 11.8002 30.8284L13.4188 29.9124C13.4351 29.9032 13.4513 29.9001 13.4655 29.9001C13.4763 29.9001 13.4861 29.9019 13.4941 29.9041C13.5126 29.9092 13.5382 29.9213 13.5543 29.9499L18.3131 38.3584C18.3293 38.3869 18.3265 38.4151 18.3213 38.4336ZM39.8881 30.8706L30.2041 36.8336C29.4321 37.3089 28.5838 37.4276 27.6827 37.1862L20.0889 35.1514C19.8968 35.0999 19.692 35.1268 19.5198 35.2263L18.5733 35.7728L15.9536 31.1438L20.0498 28.7706C21.2996 28.0466 22.1403 27.8584 22.9514 28.1215C23.2771 28.2271 23.6662 28.3614 24.0781 28.5036C25.4599 28.9808 27.1796 29.5746 28.9539 29.9637C29.1531 30.0073 29.3255 30.1346 29.4396 30.322C29.5693 30.5352 29.6069 30.7946 29.5429 31.0338C29.4973 31.2039 29.3639 31.7034 28.5854 31.6609C27.6557 31.4791 25.154 30.7694 24.7354 30.6573C24.3353 30.5499 23.9241 30.7876 23.8168 31.1876C23.7096 31.5877 23.9471 31.9989 24.3472 32.1061C24.7552 32.2154 27.1808 32.9034 28.0778 33.0889C28.1689 33.111 28.7604 33.2189 28.9554 33.2501C30.0784 33.4298 31.081 33.2534 32.0206 32.711L37.0042 29.8345C38.5209 28.959 39.7099 28.8286 40.1069 29.4944C40.3934 29.9749 40.2232 30.6643 39.8881 30.8706ZM28.0943 26.4516C32.3327 26.4516 35.7809 23.0033 35.7809 18.7649C35.7809 14.5264 32.3327 11.0781 28.0943 11.0781C23.8558 11.0781 20.4075 14.5264 20.4075 18.7649C20.4076 23.0033 23.8558 26.4516 28.0943 26.4516ZM28.0943 12.5781C31.5056 12.5781 34.2809 15.3534 34.2809 18.7648C34.2809 22.1762 31.5056 24.9515 28.0943 24.9515C24.6829 24.9515 21.9075 22.1762 21.9075 18.7648C21.9075 15.3534 24.6829 12.5781 28.0943 12.5781ZM25.2238 17.049C25.2238 15.9122 26.124 14.9526 27.3443 14.6686V14.3054C27.3443 13.8912 27.6801 13.5554 28.0943 13.5554C28.5084 13.5554 28.8443 13.8912 28.8443 14.3054V14.6688C29.8103 14.8934 30.5943 15.5423 30.8642 16.3977C30.9888 16.7928 30.7696 17.2141 30.3746 17.3387C29.9797 17.4633 29.5583 17.244 29.4337 16.8491C29.3137 16.4685 28.8151 16.0833 28.0943 16.0833C27.3514 16.0833 26.7238 16.5255 26.7238 17.049C26.7238 17.5725 27.3514 18.0147 28.0943 18.0147C29.677 18.0147 30.9647 19.1209 30.9647 20.4806C30.9647 21.6174 30.0645 22.577 28.8443 22.8609V23.2242C28.8443 23.6384 28.5084 23.9742 28.0943 23.9742C27.6801 23.9742 27.3443 23.6384 27.3443 23.2242V22.8626C26.4794 22.6651 25.7636 22.1302 25.4242 21.3906C25.2514 21.0142 25.4166 20.5689 25.7931 20.3962C26.1696 20.2234 26.6147 20.3886 26.7876 20.765C26.9716 21.1661 27.5089 21.4462 28.0943 21.4462C28.8372 21.4462 29.4648 21.004 29.4648 20.4805C29.4648 19.957 28.8371 19.5147 28.0943 19.5147C26.5115 19.5148 25.2238 18.4086 25.2238 17.049Z"
                                fill="#353794"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <span className="light-grey">Total Books</span>
                            </div>
                            <h5>335</h5>
                            <a
                              href="#"
                              className="d-flex align-items-center light-grey fs-14"
                            >
                              vs Last month{" "}
                              <p className="green-color ms-2">
                                <HiArrowTrendingUp className="me-1" />
                                +10%
                              </p>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="data-chat">
                      <p>Charts Comes Here</p>
                    </div>
                    <div className="transcation-summary">
                      <div className="tab-content-heading d-flex justify-content-between align-items-center">
                        <h2 className="fs-20">
                          Affiliate Books Report{" "}
                          <span className="light-grey">(for Last 30 days)</span>
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
                                <Form>
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                    className="ms-2"
                                  />
                                </Form>
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
                                <Form>
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                    className="ms-2"
                                  />
                                </Form>
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
                                <Form>
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                    className="ms-2"
                                  />
                                </Form>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div className="pagination-wrapper">
                        <div className="pagination-content d-flex align-items-center justify-content-between flex-wrap">
                          <div className="pagination-number">
                            <p>Showing 1 to 5 of 20 entries</p>
                          </div>
                          <div className="pagination-list">
                            <button className="btn btn-prev">Prev</button>
                            <ul>
                              <li className="active">
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li>
                                <a href="#">4</a>
                              </li>
                            </ul>
                            <button className="btn btn-next">Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="wallet-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>My Wallet</h2>
                      <div className="right-side d-flex">
                        <div className="action">
                          <button className="btn btn-green">
                            <AiOutlineBank className="fs-20 me-2" /> Transfer to
                            Bank
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
                              $500.00{" "}
                              <span className="label pending">Pending</span>
                            </h2>
                            <a href="#">
                              View transactions{" "}
                              <MdOutlineArrowForwardIos className="ms-1" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="current-balance">
                        <div className="heading d-flex justify-content-between align-items-center">
                          <p>Your current balance</p>
                        </div>
                        <h2>$90.16</h2>
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
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="dashboard-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>Statistics</h2>
                      <div className="right-side d-flex">
                        <div className="btn-wrap">
                          <button className="btn btn-green">
                            <BsLink className="fs-20 me-1" /> Create Book Link
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="chart-data">
                      <ul>
                        <li className="d-flex">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="52"
                              height="52"
                              viewBox="0 0 52 52"
                              fill="none"
                            >
                              <rect
                                width="52"
                                height="52"
                                rx="8"
                                fill="#303185"
                                fill-opacity="0.1"
                              />
                              <g clip-path="url(#clip0_157_44528)">
                                <path
                                  d="M37.2754 25.9154C37.2754 24.4344 36.0705 23.2295 34.5896 23.2295C34.1609 23.2295 33.7557 23.331 33.3958 23.5104C33.0309 22.4597 32.0316 21.7032 30.8583 21.7032C30.3304 21.7032 29.838 21.8569 29.4224 22.121C28.9506 21.3466 28.0981 20.8283 27.1269 20.8283C26.7562 20.8283 26.4029 20.9038 26.0814 21.0402V17.8284C26.0814 16.4002 24.9195 15.2383 23.4912 15.2383C22.063 15.2383 20.901 16.4002 20.901 17.8284V26.1864C20.3845 25.3712 19.5832 24.8034 18.6419 24.5862C17.6922 24.367 16.714 24.5313 15.8878 25.0485L15.1077 25.537C14.7389 25.7679 14.6146 26.2466 14.8245 26.6277C14.8592 26.6908 18.3123 32.9667 19.7133 35.9687C19.7372 36.0199 19.7611 36.0704 19.7852 36.1202C20.3494 37.2874 21.2332 38.2677 22.3413 38.9553C23.4425 39.6387 24.7116 39.9999 26.0111 39.9999H30.1703C32.0413 39.9999 33.8038 39.2747 35.133 37.9579C36.4623 36.6411 37.204 34.8855 37.2216 33.0146L37.2754 27.3011C37.2754 27.2998 37.2752 27.2985 37.2752 27.2971C37.2752 27.2959 37.2754 27.2946 37.2754 27.2934V25.9154H37.2754ZM33.9787 36.7925C32.9587 37.803 31.6062 38.3595 30.1704 38.3595H26.0111C23.9934 38.3595 22.1292 37.2003 21.2621 35.4063C21.2412 35.363 21.2203 35.319 21.1996 35.2747C20.0368 32.7832 17.5758 28.2407 16.6341 26.5166L16.7583 26.4388C17.2127 26.1543 17.7506 26.0639 18.2731 26.1846C18.7955 26.3051 19.2396 26.622 19.5234 27.0768L21.0254 29.4844C21.2191 29.7949 21.595 29.9394 21.947 29.8388C22.2989 29.738 22.5414 29.4163 22.5414 29.0503V17.8284C22.5414 17.3047 22.9675 16.8786 23.4913 16.8786C24.015 16.8786 24.4411 17.3047 24.4411 17.8284V27.2934C24.4411 27.7463 24.8083 28.1135 25.2613 28.1135C25.7142 28.1135 26.0815 27.7463 26.0815 27.2934V23.5142C26.0815 22.9377 26.5505 22.4687 27.127 22.4687C27.7034 22.4687 28.1725 22.9377 28.1725 23.5142V27.2934C28.1725 27.7463 28.5397 28.1135 28.9927 28.1135C29.4456 28.1135 29.8128 27.7463 29.8128 27.2934V24.389C29.8128 23.8126 30.2819 23.3436 30.8583 23.3436C31.4348 23.3436 31.9038 23.8126 31.9038 24.389V27.2934C31.9038 27.7463 32.271 28.1135 32.724 28.1135C33.1769 28.1135 33.5442 27.7463 33.5442 27.2934V25.9154C33.5442 25.339 34.0132 24.8699 34.5897 24.8699C35.1662 24.8699 35.6352 25.339 35.6352 25.9154V27.2885L35.5815 32.9992C35.5679 34.4348 34.9987 35.782 33.9787 36.7925Z"
                                  fill="#353794"
                                />
                                <path
                                  d="M18.2811 18.8223C18.7341 18.8223 19.1013 18.4551 19.1013 18.0021C19.1013 15.597 21.058 13.6403 23.4631 13.6403C25.8682 13.6403 27.825 15.597 27.825 18.0021C27.825 18.4551 28.1922 18.8223 28.6452 18.8223C29.0981 18.8223 29.4653 18.4551 29.4653 18.0021C29.4653 14.6926 26.7728 12 23.4631 12C20.1535 12 17.4609 14.6926 17.4609 18.0021C17.4609 18.4551 17.8282 18.8223 18.2811 18.8223Z"
                                  fill="#353794"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_157_44528">
                                  <rect
                                    width="28"
                                    height="28"
                                    fill="white"
                                    transform="translate(12 12)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <span className="light-grey">Total Books</span>
                            </div>
                            <h5>335</h5>
                            <a
                              href="#"
                              className="d-flex align-items-center light-grey fs-14"
                            >
                              vs Last month{" "}
                              <p className="danger-color ms-2">
                                <HiArrowTrendingDown className="me-1" />
                                +10%
                              </p>
                            </a>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="53"
                              height="52"
                              viewBox="0 0 53 52"
                              fill="none"
                            >
                              <rect
                                x="0.996094"
                                width="52"
                                height="52"
                                rx="8"
                                fill="#303185"
                                fill-opacity="0.1"
                              />
                              <g clip-path="url(#clip0_157_44545)">
                                <path
                                  d="M18.6172 39H37.6602V16.0469H36.1367V13H18.6172C17.3572 13 16.332 14.0251 16.332 15.2852V36.7148C16.332 37.9749 17.3572 39 18.6172 39ZM17.8555 36.7148V17.4394C18.0939 17.5239 18.3502 17.5703 18.6172 17.5703H19.3789V37.4766H18.6172C18.1973 37.4766 17.8555 37.1348 17.8555 36.7148ZM36.1367 37.4766H20.9023V17.5703H28.5195V25.849L31.5664 23.8178L34.6133 25.849V17.5703H36.1367V37.4766ZM30.043 17.5703H33.0898V23.0025L31.5664 21.9869L30.043 23.0025V17.5703ZM18.6172 14.5234H34.6133V16.0469C33.7 16.0469 19.2484 16.0469 18.6172 16.0469C18.1973 16.0469 17.8555 15.7051 17.8555 15.2852C17.8555 14.8652 18.1973 14.5234 18.6172 14.5234Z"
                                  fill="#353794"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_157_44545">
                                  <rect
                                    width="26"
                                    height="26"
                                    fill="white"
                                    transform="translate(13.9961 13)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <span className="light-grey">Total Books</span>
                            </div>
                            <h5>335</h5>
                            <a
                              href="#"
                              className="d-flex align-items-center light-grey fs-14"
                            >
                              vs Last month{" "}
                              <p className="green-color ms-2">
                                <HiArrowTrendingUp className="me-1" />
                                +10%
                              </p>
                            </a>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="53"
                              height="52"
                              viewBox="0 0 53 52"
                              fill="none"
                            >
                              <rect
                                x="0.00390625"
                                width="52"
                                height="52"
                                rx="8"
                                fill="#303185"
                                fill-opacity="0.1"
                              />
                              <g clip-path="url(#clip0_157_44560)">
                                <path
                                  d="M38.0999 25.9453L39.3321 22.1532C39.4479 21.7971 39.3212 21.4071 39.0183 21.1868L35.7923 18.8432L34.5602 15.0511C34.4446 14.695 34.1126 14.4538 33.7384 14.4538H29.7511L26.5252 12.1102C26.2225 11.8904 25.8121 11.8904 25.5094 12.1102L22.2835 14.4538H18.2964C17.9219 14.4538 17.5902 14.695 17.4744 15.0511L16.2422 18.8432L13.0165 21.1868C12.7136 21.4068 12.5869 21.7971 12.7025 22.1532L13.9346 25.9453L12.7025 29.7373C12.5869 30.0934 12.7136 30.4835 13.0165 30.7035L16.2422 33.0472L17.4744 36.8394C17.5902 37.1955 17.9219 37.4365 18.2964 37.4365H22.2835L25.5094 39.7802C25.6608 39.8902 25.839 39.9453 26.0174 39.9453C26.1955 39.9453 26.3737 39.8902 26.5252 39.7802L29.7511 37.4365H33.7384C34.1126 37.4365 34.4444 37.1955 34.5602 36.8394L35.7923 33.0472L39.0181 30.7035C39.321 30.4835 39.4479 30.0934 39.3321 29.7373L38.0999 25.9453ZM34.2352 32.2461L33.1105 35.7081H29.4704C29.2877 35.7081 29.11 35.766 28.9624 35.8732L26.0174 38.0129L23.0724 35.8732C22.9248 35.766 22.747 35.7081 22.5644 35.7081H18.9242L17.7993 32.2461C17.7429 32.0724 17.6331 31.9212 17.4855 31.8139L14.5405 29.6743L15.6652 26.2123C15.7216 26.0386 15.7216 25.8517 15.6652 25.678L14.5405 22.2161L17.4855 20.0764C17.6331 19.9692 17.7429 19.8179 17.7993 19.6442L18.9242 16.1823H22.5644C22.747 16.1823 22.9248 16.1244 23.0724 16.0171L26.0174 13.8777L28.9624 16.0173C29.11 16.1246 29.2877 16.1823 29.4704 16.1823H33.1105L34.2352 19.6445C34.2919 19.8179 34.4017 19.9692 34.5493 20.0766L37.4943 22.2163L36.3693 25.6782C36.3129 25.8517 36.3129 26.0388 36.3693 26.2123L37.4943 29.6743L34.5493 31.8139C34.4017 31.9212 34.2919 32.0726 34.2352 32.2461Z"
                                  fill="#353794"
                                />
                                <path
                                  d="M22.8012 25.8387C23.5389 25.8387 24.2765 25.5578 24.8381 24.9964C25.9612 23.8732 25.9612 22.0457 24.8381 20.9224C23.7149 19.7994 21.8874 19.7992 20.7641 20.9224C19.6411 22.0457 19.6411 23.8732 20.7641 24.9964C21.3258 25.5578 22.0634 25.8387 22.8012 25.8387ZM21.9863 22.1446C22.211 21.92 22.506 21.8077 22.8012 21.8077C23.0963 21.8077 23.3913 21.92 23.616 22.1446C24.0653 22.5938 24.0653 23.3248 23.616 23.7741C23.1668 24.2233 22.4355 24.2235 21.9865 23.7741C21.5372 23.3248 21.5372 22.5938 21.9863 22.1446Z"
                                  fill="#353794"
                                />
                                <path
                                  d="M27.1977 27.3541C26.0747 28.4771 26.0747 30.3047 27.1977 31.4279C27.7593 31.9895 28.497 32.2702 29.2346 32.2702C29.9723 32.2702 30.7099 31.9895 31.2715 31.4279C32.3948 30.3047 32.3948 28.4771 31.2715 27.3539C30.1483 26.2311 28.321 26.2309 27.1977 27.3541ZM30.0494 30.2057C29.6001 30.655 28.8691 30.655 28.4199 30.2057C27.9706 29.7565 27.9706 29.0255 28.4199 28.5762C28.6446 28.3515 28.9396 28.2391 29.2346 28.2391C29.5296 28.2391 29.8249 28.3515 30.0494 28.5762C30.4986 29.0255 30.4986 29.7565 30.0494 30.2057Z"
                                  fill="#353794"
                                />
                                <path
                                  d="M31.1694 21.0225C30.8319 20.6852 30.2848 20.6852 29.9473 21.0225L20.8625 30.1075C20.525 30.4448 20.525 30.9921 20.8625 31.3296C21.0313 31.4984 21.2524 31.5828 21.4735 31.5828C21.6946 31.5828 21.9159 31.4984 22.0847 31.3296L31.1694 22.2447C31.5069 21.9073 31.5069 21.36 31.1694 21.0225Z"
                                  fill="#353794"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_157_44560">
                                  <rect
                                    width="28"
                                    height="28"
                                    fill="white"
                                    transform="translate(12.0039 12)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <span className="light-grey">Total Books</span>
                            </div>
                            <h5>335</h5>
                            <a
                              href="#"
                              className="d-flex align-items-center light-grey fs-14"
                            >
                              vs Last month{" "}
                              <p className="green-color ms-2">
                                <HiArrowTrendingUp className="me-1" />
                                +10%
                              </p>
                            </a>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="52"
                              height="52"
                              viewBox="0 0 52 52"
                              fill="none"
                            >
                              <rect
                                width="52"
                                height="52"
                                rx="8"
                                fill="#303185"
                                fill-opacity="0.1"
                              />
                              <path
                                d="M41.3952 28.7261C41.0666 28.1751 39.7245 26.5323 36.2543 28.5354L31.2707 31.4119C31.1631 31.474 31.0548 31.5289 30.9455 31.5766C30.9623 31.5261 30.9776 31.4746 30.9918 31.4219C31.1613 30.7889 31.0626 30.1039 30.7209 29.5423C30.3919 29.0014 29.8784 28.6308 29.2751 28.4984C27.5863 28.1281 25.9125 27.5501 24.5676 27.0857C24.1488 26.9411 23.7533 26.8046 23.4141 26.6945C21.8474 26.1864 20.4541 26.8026 19.2978 27.4726L15.2146 29.8383L14.8597 29.2111C14.6498 28.8401 14.307 28.5728 13.8947 28.4586C13.4823 28.3444 13.0509 28.397 12.6799 28.6069L11.0613 29.523C10.2938 29.9573 10.0228 30.9352 10.4571 31.7027L15.2159 40.1112C15.5099 40.6305 16.0526 40.9224 16.6106 40.9224C16.8773 40.9224 17.1474 40.8558 17.3956 40.7153L19.0143 39.7993C19.3853 39.5893 19.6525 39.2466 19.7668 38.8343C19.8811 38.4219 19.8284 37.9905 19.6184 37.6196L19.3121 37.0783L20.0006 36.6808L27.2944 38.6351C27.7231 38.75 28.1499 38.8071 28.5696 38.8071C29.4193 38.8071 30.2401 38.5731 30.9906 38.1109L40.6746 32.1479C41.7315 31.4971 42.075 29.8661 41.3952 28.7261ZM18.3213 38.4336C18.3162 38.4522 18.3041 38.4777 18.2755 38.4939L16.6569 39.4099C16.6108 39.4359 16.5475 39.4185 16.5214 39.3724L11.7626 30.9639C11.7366 30.9179 11.7541 30.8545 11.8002 30.8284L13.4188 29.9124C13.4351 29.9032 13.4513 29.9001 13.4655 29.9001C13.4763 29.9001 13.4861 29.9019 13.4941 29.9041C13.5126 29.9092 13.5382 29.9213 13.5543 29.9499L18.3131 38.3584C18.3293 38.3869 18.3265 38.4151 18.3213 38.4336ZM39.8881 30.8706L30.2041 36.8336C29.4321 37.3089 28.5838 37.4276 27.6827 37.1862L20.0889 35.1514C19.8968 35.0999 19.692 35.1268 19.5198 35.2263L18.5733 35.7728L15.9536 31.1438L20.0498 28.7706C21.2996 28.0466 22.1403 27.8584 22.9514 28.1215C23.2771 28.2271 23.6662 28.3614 24.0781 28.5036C25.4599 28.9808 27.1796 29.5746 28.9539 29.9637C29.1531 30.0073 29.3255 30.1346 29.4396 30.322C29.5693 30.5352 29.6069 30.7946 29.5429 31.0338C29.4973 31.2039 29.3639 31.7034 28.5854 31.6609C27.6557 31.4791 25.154 30.7694 24.7354 30.6573C24.3353 30.5499 23.9241 30.7876 23.8168 31.1876C23.7096 31.5877 23.9471 31.9989 24.3472 32.1061C24.7552 32.2154 27.1808 32.9034 28.0778 33.0889C28.1689 33.111 28.7604 33.2189 28.9554 33.2501C30.0784 33.4298 31.081 33.2534 32.0206 32.711L37.0042 29.8345C38.5209 28.959 39.7099 28.8286 40.1069 29.4944C40.3934 29.9749 40.2232 30.6643 39.8881 30.8706ZM28.0943 26.4516C32.3327 26.4516 35.7809 23.0033 35.7809 18.7649C35.7809 14.5264 32.3327 11.0781 28.0943 11.0781C23.8558 11.0781 20.4075 14.5264 20.4075 18.7649C20.4076 23.0033 23.8558 26.4516 28.0943 26.4516ZM28.0943 12.5781C31.5056 12.5781 34.2809 15.3534 34.2809 18.7648C34.2809 22.1762 31.5056 24.9515 28.0943 24.9515C24.6829 24.9515 21.9075 22.1762 21.9075 18.7648C21.9075 15.3534 24.6829 12.5781 28.0943 12.5781ZM25.2238 17.049C25.2238 15.9122 26.124 14.9526 27.3443 14.6686V14.3054C27.3443 13.8912 27.6801 13.5554 28.0943 13.5554C28.5084 13.5554 28.8443 13.8912 28.8443 14.3054V14.6688C29.8103 14.8934 30.5943 15.5423 30.8642 16.3977C30.9888 16.7928 30.7696 17.2141 30.3746 17.3387C29.9797 17.4633 29.5583 17.244 29.4337 16.8491C29.3137 16.4685 28.8151 16.0833 28.0943 16.0833C27.3514 16.0833 26.7238 16.5255 26.7238 17.049C26.7238 17.5725 27.3514 18.0147 28.0943 18.0147C29.677 18.0147 30.9647 19.1209 30.9647 20.4806C30.9647 21.6174 30.0645 22.577 28.8443 22.8609V23.2242C28.8443 23.6384 28.5084 23.9742 28.0943 23.9742C27.6801 23.9742 27.3443 23.6384 27.3443 23.2242V22.8626C26.4794 22.6651 25.7636 22.1302 25.4242 21.3906C25.2514 21.0142 25.4166 20.5689 25.7931 20.3962C26.1696 20.2234 26.6147 20.3886 26.7876 20.765C26.9716 21.1661 27.5089 21.4462 28.0943 21.4462C28.8372 21.4462 29.4648 21.004 29.4648 20.4805C29.4648 19.957 28.8371 19.5147 28.0943 19.5147C26.5115 19.5148 25.2238 18.4086 25.2238 17.049Z"
                                fill="#353794"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="heading d-flex justify-content-between align-items-center">
                              <span className="light-grey">Total Books</span>
                            </div>
                            <h5>335</h5>
                            <a
                              href="#"
                              className="d-flex align-items-center light-grey fs-14"
                            >
                              vs Last month{" "}
                              <p className="green-color ms-2">
                                <HiArrowTrendingUp className="me-1" />
                                +10%
                              </p>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="transcation-summary">
                      <div className="tab-content-heading d-flex justify-content-between align-items-center">
                        <h2 className="fs-20">
                          Affiliate Books Report{" "}
                          <span className="light-grey">(20)</span>
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
                                <Form>
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                    className="ms-2"
                                  />
                                </Form>
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
                                <Form>
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                    className="ms-2"
                                  />
                                </Form>
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
                                <Form>
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                    className="ms-2"
                                  />
                                </Form>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div className="pagination-wrapper">
                        <div className="pagination-content d-flex align-items-center justify-content-between flex-wrap">
                          <div className="pagination-number">
                            <p>Showing 1 to 5 of 20 entries</p>
                          </div>
                          <div className="pagination-list">
                            <button className="btn btn-prev">Prev</button>
                            <ul>
                              <li className="active">
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li>
                                <a href="#">4</a>
                              </li>
                            </ul>
                            <button className="btn btn-next">Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="bank-details-tab">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>Manage Payment Options</h2>
                      <div className="right-side d-flex">
                        <div className="action">
                          <button className="btn btn-green">
                            <AiOutlinePlus className="fs-20 me-2" /> Add New
                            Bank Account
                          </button>
                        </div>
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
                              <img src={visalogo} alt="Visa Logo"></img>
                            </td>
                            <td>344******234</td>
                            <td>Luke Paul</td>
                            <td>RBC0000007</td>
                            <td>
                              <p className="label">Primary</p>
                            </td>
                            <td>
                              <div className="action">
                                <a href="#" title="Edit" className="edit">
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
                              <img src={mastercardlogo} alt="Visa Logo"></img>
                            </td>
                            <td>344******234</td>
                            <td>Luke Paul</td>
                            <td>RBC0000007</td>
                            <td>
                              <p className="label secondary">Secondary</p>
                            </td>
                            <td>
                              <div className="action">
                                <a href="#" title="Edit" className="edit">
                                  <MdOutlineModeEditOutline />
                                </a>
                                <a
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
                          <tr>
                            <td>
                              <img src={visalogo} alt="Visa Logo"></img>
                            </td>
                            <td>344******234</td>
                            <td>Luke Paul</td>
                            <td>RBC0000007</td>
                            <td>
                              <p className="label">Primary</p>
                            </td>
                            <td>
                              <div className="action">
                                <a href="#" title="Edit" className="edit">
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
                <Tab.Pane eventKey="fifth">
                  <div className="notification-tab-content">
                    <div className="tab-content-heading d-flex justify-content-between align-items-center">
                      <h2>Manage Email & Notifications</h2>
                    </div>
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
                            <p>Get notification you may have missed.</p>
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
                              Learn about the new features and Dreamcapcha’s
                              related News
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
                            <p>Give Feedback on Dreamcapcha’s New Features.</p>
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
                              Get notification when someone like your book &
                              comments
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
                              Get notification when someone Give Feedback on
                              your books
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
                              You have notifiactions you haven’t seen and
                              othersimilar notifications.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </section>
    </>
  );
};
export default AuthorsDashboard;
