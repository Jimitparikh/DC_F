import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdDateRange,
  MdOutlineAccountBalanceWallet,
  MdOutlineCardGiftcard,
  MdOutlineDeleteOutline,
  MdOutlineMail,
  MdOutlineManageAccounts,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import userdashboardprofile from "../../images/user-dashboard-profile.png";
import { IoIosCall } from "react-icons/io";
import {
  AiOutlineBook,
  AiOutlineLock,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaChevronDown, FaRegFileAudio, FaUniversity } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import {
  BsCameraVideo,
  BsChevronRight,
  BsFileText,
  BsInfoCircle,
  BsPlayCircle,
  BsUpload,
} from "react-icons/bs";
import ebookcover from "../../images/ebook-cover.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import audiobookcover from "../../images/audio-book-cover.png";
import userprofile from "../../images/user-menu-profile.png";
import visalogo from "../../images/visa-logo.png";
import mastercardlogo from "../../images/mastercard-logo.png";
import citibanklogo from "../../images/citibank-logo.png";
import sbilogo from "../../images/sbi-logo.png";
import axislogo from "../../images/axis-logo.png";
import ruppies from "../../images/ruppies.png";
import Loader from "../../components/Loader";

const UserDashboard = () => {

  const { user } = useSelector((state) => state.auth);


  const [addbalance, setaddbalance] = useState(false);
  const setaddbalanceclose = () => setaddbalance(false);
  const setaddbalanceshow = () => setaddbalance(true);

  const [profileupload, setprofileupload] = useState(false);
  const setprofileuploadclose = () => setprofileupload(false);
  const setprofileuploadshow = () => setprofileupload(true);

  const [addnewaccount, setaddnewaccount] = useState(false);
  const setaddnewaccountclose = () => setaddnewaccount(false);
  const setaddnewaccountshow = () => setaddnewaccount(true);

  const [convertpoint, setconvertpoint] = useState(false);
  const setconvertpointclose = () => setconvertpoint(false);
  const setconvertpointshow = () => setconvertpoint(true);

  const [addnewcard, setaddnewcard] = useState(false);
  const setaddnewcardclose = () => setaddnewcard(false);
  const setaddnewcardshow = () => setaddnewcard(true);
  return (
    <>
      <div className="user-dashboard-section">
        <div className="container">
          <div className="user-dashoard-content">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div className="tab-items-wrapper d-flex flex-wrap">
                <div className="left-side">
                  <div className="profile-detail d-flex align-items-center">
                    <div className="user-image">
                      <img src={userdashboardprofile} alt="Profile"></img>
                      <div className="edit-icon" onClick={setprofileuploadshow}>
                        <MdOutlineModeEditOutline />
                      </div>
                      <Modal
                        show={profileupload}
                        onHide={setprofileuploadclose}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Update Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="upload-file-content">
                            <div className="upload-file">
                              <BsUpload />
                              <p>
                                Drag and drop files here or click to{" "}
                                <a href="#">upload.</a>
                              </p>
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
                    <div className="user-name">
                      <h5>{ user.firstName && user.firstName + " " + user.lastName }</h5>
                      <p>
                        <IoLocationOutline />
                        Minsk, Belarus
                      </p>
                    </div>
                  </div>
                  <div className="personal-info">
                    <h5>Personal Info</h5>
                    <ul>
                      <li className="d-flex">
                        <div className="icon">
                          <IoIosCall />
                        </div>
                        <div className="data">
                          <p>Mobile Number</p>
                          <span>{user.phone && user.phone }</span>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="icon">
                          <MdOutlineMail />
                        </div>
                        <div className="data">
                          <p>Email</p>
                          <span>{user.email && user.email}</span>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="icon">
                          <MdDateRange />
                        </div>
                        <div className="data">
                          <p>Date of Birth</p>
                          <span>12-August,2022</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-item-link">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <p>
                            <AiOutlineBook />
                            My Books
                          </p>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <p>
                            <ImUsers />
                            My Following
                          </p>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <p>
                            <MdOutlineManageAccounts />
                            Manage Profile
                          </p>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">
                          <p>
                            <MdOutlineAccountBalanceWallet />
                            My Wallet
                          </p>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">
                          <p>
                            <FaUniversity />
                            Manage Payment Options
                          </p>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="sixth">
                          <p>
                            <MdOutlineCardGiftcard />
                            Refer & Earn
                          </p>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <div className="tab-item-content">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="my-book-tab-content">
                        <h5 className="tab-title">My Books</h5>
                        <div className="my-books-content">
                          <div className="book-feature">
                            <div className="heading d-flex justify-content-between align-items-center">
                              <h6>
                                {" "}
                                <BsFileText />
                                E-books
                              </h6>
                              <a href="#">View all</a>
                            </div>
                            <ul className="e-book-list">
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img src={ebookcover} alt="Book Cover" />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>

                                    <div className="btn-wrap">
                                      <Dropdown
                                        as={ButtonGroup}
                                        className="primary"
                                        align="end"
                                      >
                                        <Button>Continue Reading</Button>
                                        <Dropdown.Toggle
                                          split
                                          id="dropdown-split-basic"
                                        >
                                          <FaChevronDown />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">
                                            Register as Author
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Register as Affliate
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            className="active"
                                            href="#/action-3"
                                          >
                                            Have Account? Login
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img src={ebookcover} alt="Book Cover" />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>

                                    <div className="btn-wrap">
                                      <Dropdown
                                        as={ButtonGroup}
                                        className="primary"
                                        align="end"
                                      >
                                        <Button>Continue Reading</Button>
                                        <Dropdown.Toggle
                                          split
                                          id="dropdown-split-basic"
                                        >
                                          <FaChevronDown />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#/action-1">
                                            Register as Author
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Register as Affliate
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            className="active"
                                            href="#/action-3"
                                          >
                                            Have Account? Login
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="book-feature audio-books">
                            <div className="heading d-flex justify-content-between align-items-center">
                              <h6>
                                {" "}
                                <FaRegFileAudio />
                                Audio Books
                              </h6>
                              <a href="#">View all</a>
                            </div>
                            <ul className="e-book-list">
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img
                                      src={audiobookcover}
                                      alt="Book Cover"
                                    />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>
                                  </div>
                                </div>
                                <div className="continue-watching">
                                  <BsPlayCircle />
                                  <p>Continue Listening</p>
                                </div>
                              </li>
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img
                                      src={audiobookcover}
                                      alt="Book Cover"
                                    />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img
                                      src={audiobookcover}
                                      alt="Book Cover"
                                    />
                                  </div>
                                  <div className="e-book-data completed">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img
                                      src={audiobookcover}
                                      alt="Book Cover"
                                    />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="book-feature audio-books">
                            <div className="heading d-flex justify-content-between align-items-center">
                              <h6>
                                {" "}
                                <BsCameraVideo />
                                Video Books
                              </h6>
                              <a href="#">View all</a>
                            </div>
                            <ul className="e-book-list">
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img
                                      src={audiobookcover}
                                      alt="Book Cover"
                                    />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img
                                      src={audiobookcover}
                                      alt="Book Cover"
                                    />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img
                                      src={audiobookcover}
                                      alt="Book Cover"
                                    />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="e-book-item d-flex justify-content-between">
                                  <div className="e-book-image">
                                    <img
                                      src={audiobookcover}
                                      alt="Book Cover"
                                    />
                                  </div>
                                  <div className="e-book-data">
                                    <div className="title">
                                      <h3>Dream psychology</h3>
                                      <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                      <p>40-41/159</p>
                                      <ProgressBar now={40} />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="my-followings-tab-content">
                        <h5 className="tab-title">
                          {" "}
                          My Followings <span>(06)</span>
                        </h5>
                        <div className="my-followings-content">
                          <ul>
                            <li>
                              <div className="user-image">
                                <img src={userprofile} alt="Profile"></img>
                              </div>
                              <div className="user-name">
                                <h5>Savannah Nguyen</h5>
                                <p>Comic & Horror Book Writer</p>
                                <div className="action">
                                  <a href="#">View Profile</a>
                                  <a href="#">View all Books</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="user-image">
                                <img src={userprofile} alt="Profile"></img>
                              </div>
                              <div className="user-name">
                                <h5>Savannah Nguyen</h5>
                                <p>Comic & Horror Book Writer</p>
                                <div className="action">
                                  <a href="#">View Profile</a>
                                  <a href="#">View all Books</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="user-image">
                                <img src={userprofile} alt="Profile"></img>
                              </div>
                              <div className="user-name">
                                <h5>Savannah Nguyen</h5>
                                <p>Comic & Horror Book Writer</p>
                                <div className="action">
                                  <a href="#">View Profile</a>
                                  <a href="#">View all Books</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="user-image">
                                <img src={userprofile} alt="Profile"></img>
                              </div>
                              <div className="user-name">
                                <h5>Savannah Nguyen</h5>
                                <p>Comic & Horror Book Writer</p>
                                <div className="action">
                                  <a href="#">View Profile</a>
                                  <a href="#">View all Books</a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="manage-profile-tab-content">
                        <h5 className="tab-title">Manage Profile</h5>
                        <div className="manage-profile-content">
                          <div className="update-info">
                            <h6>Update Personal Info</h6>
                            <div className="input-field-group">
                              <input
                                type="text"
                                className="input-box"
                                placeholder="First Name"
                              ></input>
                              <input
                                type="text"
                                className="input-box"
                                placeholder="Last Name"
                              ></input>
                              <input
                                type="email"
                                className="input-box"
                                placeholder="Email"
                              ></input>
                              <input
                                type="text"
                                className="input-box"
                                placeholder="Mobile number"
                              ></input>
                              <Dropdown className="input-box without-background">
                                <Dropdown.Toggle id="dropdown-basic">
                                  Select gender <FaChevronDown />
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
                              <input
                                type="date"
                                className="input-box"
                                placeholder="Select Date"
                              ></input>
                              <Dropdown className="input-box without-background">
                                <Dropdown.Toggle id="dropdown-basic">
                                  Country <FaChevronDown />
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
                              <Dropdown className="input-box without-background">
                                <Dropdown.Toggle id="dropdown-basic">
                                  City <FaChevronDown />
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
                            <div className="btn-wrap">
                              <button className="btn btn-primary">
                                Update Now
                              </button>
                            </div>
                          </div>
                          <div className="update-info">
                            <h6>
                              <AiOutlineLock />
                              Update Password
                            </h6>
                            <div className="input-field-group">
                              <input
                                type="password"
                                className="input-box w-100"
                                placeholder="Enter old password"
                              ></input>
                              <input
                                type="password"
                                className="input-box"
                                placeholder="Enter new password"
                              ></input>
                              <input
                                type="password"
                                className="input-box"
                                placeholder="Re-enter new password"
                              ></input>
                            </div>
                            <div className="btn-wrap">
                              <button className="btn btn-primary">
                                Update Password Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div className="my-wallet-tab-content">
                        <h5 className="tab-title">My Wallet</h5>
                        <div className="my-wallet-content">
                          <div className="heading d-flex flex-wrap justify-content-between align-items-center">
                            <h6>Wallet Balance</h6>
                            <div className="btn-wrap">
                              <button
                                className="btn btn-green"
                                onClick={setaddbalanceshow}
                              >
                                <AiOutlinePlus />
                                Add Balance
                              </button>
                              <Modal
                                show={addbalance}
                                onHide={setaddbalanceclose}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>
                                    Add Money To <span>Dreamcapcha Wallet</span>
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="add-balance-modal">
                                    <input
                                      className="input-box"
                                      placeholder="$ 100.00"
                                    ></input>
                                    <ul>
                                      <li>
                                        <p>+$100</p>
                                      </li>
                                      <li>
                                        <p>+$200</p>
                                      </li>
                                      <li>
                                        <p>+$300</p>
                                      </li>
                                      <li>
                                        <p>+$400</p>
                                      </li>
                                    </ul>
                                    <div className="btn-wrap">
                                      <button className="btn btn-primary">
                                        Proceed to Add $100.00
                                      </button>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                          </div>
                          <div className="data-info-list">
                            <ul>
                              <li>
                                <h4 className="green-color">
                                  Available Balance
                                </h4>
                                <p>
                                  $ 250.<span>00</span>
                                </p>
                              </li>
                              <li>
                                <h4>Refral Points</h4>
                                <p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="28"
                                    viewBox="0 0 19 28"
                                    fill="none"
                                  >
                                    <path
                                      d="M13.3343 4.56888L13.3365 4.56981C14.9094 5.22146 16.1475 6.34562 16.9822 7.69906L17.7127 7.40078C17.1176 4.77226 15.3066 2.46384 12.6267 1.34696C8.21262 -0.512459 3.15226 1.54565 1.2913 5.93613C0.149346 8.59332 0.47311 11.5221 1.88702 13.8042L2.61671 13.5032C2.25678 11.951 2.36895 10.3108 3.04427 8.73507L3.04491 8.73356C4.73328 4.74902 9.32564 2.87985 13.3343 4.56888Z"
                                      fill="#4D4D4D"
                                      stroke="#4D4D4D"
                                      stroke-width="0.8"
                                    />
                                    <path
                                      d="M9.41762 15.0624L9.36985 15.0744C8.92783 15.1849 8.49846 15.4033 8.05885 15.7642C7.64226 16.0832 7.21888 16.4565 6.81848 16.932C6.42604 17.398 6.06138 17.9092 5.70101 18.4618L5.69557 18.4701L5.69055 18.4787C5.35546 19.0532 5.04095 19.6333 4.77333 20.2172L4.77328 20.2172L4.77083 20.2228C4.50099 20.836 4.30578 21.4226 4.13658 22.0269C3.96169 22.6515 3.88516 23.232 3.88516 23.7673C3.88516 24.7691 4.17036 25.6142 4.80678 26.2506L4.80671 26.2507L4.81314 26.2568C5.43528 26.8519 6.28146 27.2095 7.36218 27.3352L7.41365 27.3412L7.46495 27.3339C8.0357 27.2523 8.59 27.0103 9.12623 26.6283C9.66105 26.2708 10.159 25.7945 10.6442 25.2365L10.6443 25.2366L10.6507 25.2288C11.1155 24.6662 11.5534 24.0331 11.9651 23.3308L11.9651 23.3308L11.968 23.3257C12.3807 22.5975 12.7197 21.8704 13.0332 21.0747C13.3486 20.274 13.5921 19.4711 13.7627 18.6426L13.7631 18.6404C13.9324 17.7941 14.0311 16.9862 14.0311 16.1959C14.0311 15.4158 13.9582 14.5872 13.788 13.7341C13.6421 12.8605 13.4232 12.0343 13.1316 11.2324C12.841 10.4334 12.5026 9.68412 12.1409 8.98489C11.7708 8.26942 11.3495 7.67358 10.9243 7.19837L10.7846 7.04218L10.5766 7.06818C10.329 7.09913 10.0673 7.1892 9.8168 7.32837L9.80345 7.33579C9.59865 7.44953 9.354 7.58541 9.13248 7.77924C8.93313 7.95367 8.75956 8.12724 8.59603 8.29077L8.5925 8.2943L8.58309 8.30372L8.57432 8.31374C8.39783 8.51544 8.26103 8.70562 8.18829 8.92387L8.12794 9.1049L8.23068 9.26571C8.76778 10.1064 9.18846 10.8542 9.54016 11.5107C9.89077 12.1651 10.1657 12.7394 10.37 13.2841L10.37 13.2841L10.372 13.2894C10.5744 13.8064 10.7111 14.3284 10.8277 14.8412C10.8777 15.0611 10.9233 15.2854 10.9647 15.5162C10.8618 15.4582 10.7552 15.4046 10.6446 15.3562C10.2415 15.1799 9.82865 15.0624 9.46687 15.0624H9.41762ZM10.6869 17.8364C10.8454 17.6878 11.0001 17.5605 11.149 17.4547C11.1464 18.2846 11.0329 19.1377 10.7855 20.015L10.7855 20.015L10.7848 20.0175C10.531 20.9403 10.2091 21.7904 9.81994 22.569C9.40355 23.3784 8.97169 24.0569 8.48041 24.6151C8.01156 25.1479 7.59992 25.4767 7.20931 25.6267C7.00861 25.5832 6.88869 25.501 6.81492 25.4072C6.72767 25.2961 6.66268 25.1147 6.67244 24.8217L6.67266 24.8217V24.8084C6.67266 24.4785 6.73482 24.0717 6.88875 23.6099C7.04823 23.1315 7.2531 22.6307 7.5264 22.1068C7.80613 21.5707 8.10723 21.0383 8.45324 20.5077L8.45341 20.5078L8.45988 20.4972C8.77706 19.9761 9.14188 19.4965 9.53503 19.034C9.92978 18.5696 10.2948 18.1826 10.6779 17.8445L10.6781 17.8446L10.6869 17.8364Z"
                                      fill="#4D4D4D"
                                      stroke="#4D4D4D"
                                      stroke-width="0.8"
                                    />
                                  </svg>{" "}
                                  10.22<span>pts</span>
                                </p>
                              </li>
                              <li>
                                <h4>Total Spend</h4>
                                <p>
                                  $ 300.<span>00</span>
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="transcation-summary">
                            <div className="heading d-flex flex-wrap justify-content-between align-items-center">
                              <h6>Transaction Summary</h6>
                              <Dropdown className="input-box without-background me-0">
                            <Dropdown.Toggle id="dropdown-basic">
                              This Month <FaChevronDown className="fs-16 m-0"/>
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
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <div className="my-wallet-tab-content manage-account-tab-content">
                        <h5 className="tab-title">Manage Account</h5>
                        <div className="my-wallet-content">
                          <div className="credit-debit-card-list">
                            <div className="heading d-flex flex-wrap justify-content-between align-items-center">
                              <h6>Your Credit & Debit Cards</h6>
                              <div className="btn-wrap">
                                <button
                                  className="btn btn-green"
                                  onClick={setaddnewcardshow}
                                >
                                  <AiOutlinePlus />
                                  Add New Card
                                </button>
                                <Modal show={addnewcard} onHide={setaddnewcard}>
                                  <Modal.Header closeButton>
                                    <Modal.Title>Add new card</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <div className="add-new-account-content add-new-card-content">
                                      <Tabs
                                        defaultActiveKey="Credit card"
                                        transition={false}
                                        id="fill-tab-example"
                                      >
                                        <Tab
                                          eventKey="Credit card"
                                          title="Credit card"
                                        >
                                          <div className="tab-content-data">
                                          <div className="input-field-group">
                                        <div className="input-field-item w-100">
                                          <label>Name On Card</label>
                                          <input
                                            type="text"
                                            className="input-box"
                                            placeholder="Enter full name as per your card"
                                          ></input>
                                        </div>
                                        <div className="input-field-item label-input w-100">
                                          <label>Card Number</label>
                                          <input
                                            type="number"
                                            className="input-box"
                                            placeholder="3787-3449-3626-0712"
                                          ></input>
                                          <img
                                            src={visalogo}
                                            className="label"
                                          ></img>
                                        </div>
                                        <div className="input-field-item">
                                          <label>Valid Till</label>
                                          <input
                                            type="date"
                                            className="input-box"
                                            placeholder="04/24"
                                          ></input>
                                        </div>
                                        <div className="input-field-item label-input">
                                          <label>CVV Code</label>
                                          <input
                                            type="password"
                                            className="input-box"
                                            placeholder="***"
                                          ></input>
                                          <BsInfoCircle className="label body-color" />
                                        </div>
                                      </div>
                                      <div className="checkbox-group">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck1"
                                          ></input>
                                          <label
                                            className="form-check-label light-grey"
                                            for="defaultCheck1"
                                          >
                                            Securely save this card for a faster
                                            checkout next time
                                          </label>
                                        </div>
                                      </div>
                                      <div className="btn-wrap">
                                        <button className="btn btn-primary">
                                          Add this Card
                                        </button>
                                      </div>
                                          </div>
                                        </Tab>
                                        <Tab
                                          eventKey="Debit card"
                                          title="Debit card"
                                        >
                                          <div className="tab-content-data position-relative">
                                            <Loader />
                                          </div>
                                        </Tab>
                                      </Tabs>
                                      
                                    </div>
                                  </Modal.Body>
                                </Modal>
                              </div>
                            </div>
                            <div className="transcation-summary">
                              <div className="table-responsive">
                                <table className="transcation-summary-table">
                                  <tr>
                                    <th>Type</th>
                                    <th>Card Number</th>
                                    <th>Name on card</th>
                                    <th>Expires on</th>
                                    <th>Action</th>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={visalogo} alt="Visa Logo"></img>
                                    </td>
                                    <td>344******234</td>
                                    <td>Luke Paul</td>
                                    <td>06/26</td>
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
                                          title="Delete"
                                          className="delete"
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
                                    <td>06/26</td>
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
                                          title="Delete"
                                          className="delete"
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
                                    <td>
                                      <p className="danger-color">Expired</p>
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
                                          title="Delete"
                                          className="delete"
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
                          <div className="bank-account-list">
                            <div className="heading d-flex flex-wrap justify-content-between align-items-center">
                              <h6>Your Credit & Debit Cards</h6>
                              <div className="btn-wrap">
                                <button
                                  className="btn btn-green"
                                  onClick={setaddnewaccountshow}
                                >
                                  <AiOutlinePlus />
                                  Add New Bank Account
                                </button>
                                <Modal
                                  show={addnewaccount}
                                  onHide={setaddnewaccount}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title>
                                      Add new bank account
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <div className="add-new-account-content">
                                      <div className="input-field-group">
                                        <div className="input-field-item">
                                          <label>
                                            Bank Code <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-box"
                                            placeholder="Enter bank code"
                                          ></input>
                                        </div>
                                        <div className="input-field-item">
                                          <label>
                                            Bank Name <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-box"
                                            placeholder="Enter your bank name"
                                          ></input>
                                        </div>
                                        <div className="input-field-item">
                                          <label>
                                            Your Full Name <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-box"
                                            placeholder="Enter name as per account"
                                          ></input>
                                        </div>
                                        <div className="input-field-item">
                                          <label>
                                            Person Type <span>*</span>
                                          </label>
                                          <Dropdown className="input-box without-background">
                                            <Dropdown.Toggle id="dropdown-basic">
                                              Business <FaChevronDown />
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
                                          <label>
                                            Branch Code <span>*</span>
                                          </label>
                                          <Dropdown className="input-box without-background">
                                            <Dropdown.Toggle id="dropdown-basic">
                                              Enter branch code{" "}
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
                                          <label>
                                            Account Type <span>*</span>
                                          </label>
                                          <Dropdown className="input-box without-background">
                                            <Dropdown.Toggle id="dropdown-basic">
                                              Saving
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
                                          <label>
                                            Account Number <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-box"
                                            placeholder="Enter account number"
                                          ></input>
                                        </div>
                                        <div className="input-field-item">
                                          <label>
                                            Confirm Account Number{" "}
                                            <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-box"
                                            placeholder="Enter confirm account number"
                                          ></input>
                                        </div>
                                        <div className="input-field-item label-input w-100">
                                          <label>
                                            CPF/CNJ <span>*</span>
                                          </label>
                                          <input
                                            type="text"
                                            className="input-box"
                                            placeholder="Enter account number"
                                          ></input>
                                          <a href="#" className="label">
                                            Find
                                          </a>
                                        </div>
                                      </div>
                                      <div className="checkbox-group">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck1"
                                          ></input>
                                          <label
                                            className="form-check-label light-grey"
                                            for="defaultCheck1"
                                          >
                                            Save this account for future
                                            transactions
                                          </label>
                                        </div>
                                      </div>
                                      <div className="btn-wrap">
                                        <button className="btn btn-primary">
                                          Add this Bank Account
                                        </button>
                                      </div>
                                    </div>
                                  </Modal.Body>
                                </Modal>
                              </div>
                            </div>
                            <div className="transcation-summary">
                              <div className="table-responsive">
                                <table className="transcation-summary-table">
                                  <tr>
                                    <th>Type</th>
                                    <th>Card Number</th>
                                    <th>Name on card</th>
                                    <th>Expires on</th>
                                    <th>Action</th>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img
                                        src={citibanklogo}
                                        alt="Citibank logo"
                                      ></img>
                                    </td>
                                    <td>344******234</td>
                                    <td>Luke Paul</td>
                                    <td>06/26</td>
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
                                          title="Delete"
                                          className="delete"
                                        >
                                          <MdOutlineDeleteOutline />
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={sbilogo} alt="SBI Logo"></img>
                                    </td>
                                    <td>344******234</td>
                                    <td>Luke Paul</td>
                                    <td>06/26</td>
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
                                          title="Delete"
                                          className="delete"
                                        >
                                          <MdOutlineDeleteOutline />
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <img src={axislogo} alt="Axis Logo"></img>
                                    </td>
                                    <td>344******234</td>
                                    <td>Luke Paul</td>
                                    <td>
                                      <p className="danger-color">Expired</p>
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
                                          title="Delete"
                                          className="delete"
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
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                      <div className="refer-earn-tab-content">
                        <h5 className="tab-title">Manage Account</h5>
                        <div className="refer-earn-content">
                          <div className="banner d-flex justify-content-between align-items-center">
                            <div className="title">
                              <p>Refer Your Friends</p>
                              <h6>
                                Earn 10<span>DC</span> Point Each
                              </h6>
                            </div>
                            <div className="image">
                              <img src={ruppies} alt="Ruppie"></img>
                            </div>
                          </div>
                          <div className="total-reward d-flex justify-content-between align-items-center">
                            <div className="title">
                              <p>TOTAL REWARDS</p>
                              <h4>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="28"
                                  viewBox="0 0 19 28"
                                  fill="none"
                                >
                                  <path
                                    d="M13.3343 4.56888L13.3365 4.56981C14.9094 5.22146 16.1475 6.34562 16.9822 7.69906L17.7127 7.40078C17.1176 4.77226 15.3066 2.46384 12.6267 1.34696C8.21262 -0.512459 3.15226 1.54565 1.2913 5.93613C0.149346 8.59332 0.47311 11.5221 1.88702 13.8042L2.61671 13.5032C2.25678 11.951 2.36895 10.3108 3.04427 8.73507L3.04491 8.73356C4.73328 4.74902 9.32564 2.87985 13.3343 4.56888Z"
                                    fill="#4D4D4D"
                                    stroke="#4D4D4D"
                                    stroke-width="0.8"
                                  />
                                  <path
                                    d="M9.41762 15.0624L9.36985 15.0744C8.92783 15.1849 8.49846 15.4033 8.05885 15.7642C7.64226 16.0832 7.21888 16.4565 6.81848 16.932C6.42604 17.398 6.06138 17.9092 5.70101 18.4618L5.69557 18.4701L5.69055 18.4787C5.35546 19.0532 5.04095 19.6333 4.77333 20.2172L4.77328 20.2172L4.77083 20.2228C4.50099 20.836 4.30578 21.4226 4.13658 22.0269C3.96169 22.6515 3.88516 23.232 3.88516 23.7673C3.88516 24.7691 4.17036 25.6142 4.80678 26.2506L4.80671 26.2507L4.81314 26.2568C5.43528 26.8519 6.28146 27.2095 7.36218 27.3352L7.41365 27.3412L7.46495 27.3339C8.0357 27.2523 8.59 27.0103 9.12623 26.6283C9.66105 26.2708 10.159 25.7945 10.6442 25.2365L10.6443 25.2366L10.6507 25.2288C11.1155 24.6662 11.5534 24.0331 11.9651 23.3308L11.9651 23.3308L11.968 23.3257C12.3807 22.5975 12.7197 21.8704 13.0332 21.0747C13.3486 20.274 13.5921 19.4711 13.7627 18.6426L13.7631 18.6404C13.9324 17.7941 14.0311 16.9862 14.0311 16.1959C14.0311 15.4158 13.9582 14.5872 13.788 13.7341C13.6421 12.8605 13.4232 12.0343 13.1316 11.2324C12.841 10.4334 12.5026 9.68412 12.1409 8.98489C11.7708 8.26942 11.3495 7.67358 10.9243 7.19837L10.7846 7.04218L10.5766 7.06818C10.329 7.09913 10.0673 7.1892 9.8168 7.32837L9.80345 7.33579C9.59865 7.44953 9.354 7.58541 9.13248 7.77924C8.93313 7.95367 8.75956 8.12724 8.59603 8.29077L8.5925 8.2943L8.58309 8.30372L8.57432 8.31374C8.39783 8.51544 8.26103 8.70562 8.18829 8.92387L8.12794 9.1049L8.23068 9.26571C8.76778 10.1064 9.18846 10.8542 9.54016 11.5107C9.89077 12.1651 10.1657 12.7394 10.37 13.2841L10.37 13.2841L10.372 13.2894C10.5744 13.8064 10.7111 14.3284 10.8277 14.8412C10.8777 15.0611 10.9233 15.2854 10.9647 15.5162C10.8618 15.4582 10.7552 15.4046 10.6446 15.3562C10.2415 15.1799 9.82865 15.0624 9.46687 15.0624H9.41762ZM10.6869 17.8364C10.8454 17.6878 11.0001 17.5605 11.149 17.4547C11.1464 18.2846 11.0329 19.1377 10.7855 20.015L10.7855 20.015L10.7848 20.0175C10.531 20.9403 10.2091 21.7904 9.81994 22.569C9.40355 23.3784 8.97169 24.0569 8.48041 24.6151C8.01156 25.1479 7.59992 25.4767 7.20931 25.6267C7.00861 25.5832 6.88869 25.501 6.81492 25.4072C6.72767 25.2961 6.66268 25.1147 6.67244 24.8217L6.67266 24.8217V24.8084C6.67266 24.4785 6.73482 24.0717 6.88875 23.6099C7.04823 23.1315 7.2531 22.6307 7.5264 22.1068C7.80613 21.5707 8.10723 21.0383 8.45324 20.5077L8.45341 20.5078L8.45988 20.4972C8.77706 19.9761 9.14188 19.4965 9.53503 19.034C9.92978 18.5696 10.2948 18.1826 10.6779 17.8445L10.6781 17.8446L10.6869 17.8364Z"
                                    fill="#4D4D4D"
                                    stroke="#4D4D4D"
                                    stroke-width="0.8"
                                  />
                                </svg>
                                100<span>pts</span>
                              </h4>
                            </div>
                            <div className="btn-wrap">
                              <button
                                className="btn btn-primary"
                                onClick={setconvertpointshow}
                              >
                                Convert to USD <BsChevronRight />
                              </button>
                              <Modal
                                show={convertpoint}
                                onHide={setconvertpointclose}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>
                                    Convert your Dreamcapcha{" "}
                                    <p>
                                      Points into USD,{" "}
                                      <span>100DC is equal to $1</span>
                                    </p>
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="convert-point-modal-content">
                                    <div className="data-info-list">
                                      <ul>
                                        <li>
                                          <h4>Available Points</h4>
                                          <p className="green-color">
                                            100<span>pts</span>
                                          </p>
                                        </li>
                                        <li>
                                          <h4>Total COnverted</h4>
                                          <p>
                                            200<span>pts</span>
                                          </p>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="convert-point-calculator">
                                      <div className="row">
                                        <div className="column">
                                          <label>Enter Points to Convert</label>
                                          <input
                                            className="input-box"
                                            placeholder="100"
                                          ></input>
                                        </div>
                                        <div className="column">
                                          <p>=</p>
                                        </div>
                                        <div className="column">
                                          <label>You’ll Get</label>
                                          <input
                                            className="input-box"
                                            placeholder="$1.00"
                                          ></input>
                                        </div>
                                      </div>
                                      <p className="note">Note: Min 100pts</p>
                                    </div>
                                    <div className="btn-wrap">
                                      <button className="btn btn-primary">
                                        Proceed to Covert 100pts
                                      </button>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                          </div>
                          <div className="link-refer">
                            <div className="link-refer-title">
                              <h5>
                                Copy link & refer <AiOutlineQuestionCircle />
                              </h5>
                              <div className="how-referal-work">
                                <h3>How referal works</h3>
                                <div className="how-referal-work-content d-flex flex-wrap">
                                  <div className="column">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="52"
                                      height="52"
                                      viewBox="0 0 52 52"
                                      fill="none"
                                    >
                                      <path
                                        d="M25.1084 18.6086C27.4673 19.2941 29.4887 20.6656 30.9455 22.3771C30.9466 22.3771 30.9478 22.3779 30.9478 22.3791C31.216 22.6921 31.4779 23.0297 31.7 23.3499V23.3506C31.9115 23.6506 32.1789 24.0798 32.3146 24.3286C32.3154 24.3298 32.3166 24.331 32.3166 24.3318C32.7637 25.124 33.1378 26.0063 33.4064 26.9387C33.4072 26.9387 33.4064 26.9395 33.4064 26.9395C34.5997 31.1055 33.5246 35.7099 30.3099 38.9246L21.8223 47.4114C17.0635 52.171 9.34756 52.171 4.5892 47.4114C-0.170754 42.6515 -0.16996 34.9371 4.5892 30.1779L13.0756 21.6903C14.6455 20.1217 16.5355 19.0695 18.5362 18.5352C18.2609 19.567 18.1228 20.6291 18.1228 21.6903C18.1228 22.8258 18.2803 23.96 18.5961 25.0598C18.1633 25.3148 17.755 25.6275 17.3845 25.9992L8.89687 34.486C6.52166 36.862 6.52166 40.7274 8.89687 43.1034C11.2733 45.4786 15.1382 45.4786 17.5146 43.1034L26.001 34.6158C28.3774 32.2397 28.377 28.3752 26.001 25.9992C23.9964 23.9945 23.6826 20.9298 25.0616 18.5943C25.0771 18.5982 25.0933 18.6034 25.1084 18.6086Z"
                                        fill="#BC80FF"
                                      />
                                      <path
                                        d="M47.412 4.58763C42.6532 -0.172318 34.9373 -0.172318 30.1785 4.58763L21.6909 13.0741C16.9417 17.8233 16.9206 25.5381 21.6909 30.3083C23.2052 31.8215 25.0179 32.8541 26.9392 33.4048C28.3183 31.0689 28.0044 28.0041 25.9998 25.9995C23.6234 23.6231 23.6238 19.7585 25.9998 17.3829L34.6389 8.74416L34.6417 8.74614C37.0161 6.52605 40.7751 6.56612 43.1039 8.89531C45.4795 11.2717 45.4795 15.1366 43.1039 17.513L34.6163 25.9995C34.2482 26.3676 33.8494 26.6755 33.4051 26.9397C33.7197 28.0387 33.878 29.1741 33.878 30.3083C33.878 31.3696 33.74 32.4316 33.465 33.4635C35.4653 32.9295 37.3553 31.8774 38.9252 30.3083L47.412 21.8207C52.1716 17.0608 52.1708 9.34639 47.412 4.58763Z"
                                        fill="#8E90FF"
                                      />
                                      <path
                                        d="M29.4605 3.86958L20.9733 12.3564C19.4213 13.9088 18.3378 15.7547 17.7217 17.717C15.7067 18.3517 13.8608 19.4689 12.3564 20.9733L3.86958 29.4605C-1.28946 34.6195 -1.29026 42.9703 3.86958 48.1301C9.02863 53.2895 17.3797 53.2899 22.5396 48.1301L31.0264 39.6433C32.5788 38.0913 33.6618 36.2453 34.278 34.2827C36.2933 33.6483 38.1389 32.5308 39.6433 31.0264L48.1301 22.5396C53.2895 17.3801 53.2903 9.02942 48.1301 3.86958C42.971 -1.28946 34.6203 -1.29026 29.4605 3.86958ZM18.1018 26.7175C18.7449 28.2862 19.7018 29.7549 20.9733 31.0264C22.2087 32.2614 23.6786 33.2377 25.2814 33.8991L16.795 42.3859C14.8153 44.3652 11.5939 44.3655 9.6142 42.3859C7.63453 40.4058 7.63453 37.1848 9.6142 35.2051L18.101 26.7179C18.1014 26.7179 18.1014 26.7179 18.1018 26.7175ZM29.5902 38.2071L21.103 46.6939C16.7378 51.0595 9.67172 51.0599 5.30573 46.6939C0.940145 42.3287 0.939748 35.2622 5.30573 30.8966L13.7925 22.4095C14.7812 21.4208 15.944 20.6301 17.2115 20.0743C17.0223 21.622 17.1088 23.1513 17.4385 24.6129C17.1655 24.8168 16.9068 25.0398 16.6648 25.2818L8.17804 33.7686C5.4065 36.5405 5.4065 41.0501 8.17804 43.8216C10.9496 46.5932 15.4592 46.5932 18.2311 43.8216L26.7179 35.3348C29.4922 32.5601 29.4926 28.0565 26.7179 25.2818C25.2357 23.7996 24.8747 21.6446 25.5821 19.8359C27.0785 20.3925 28.452 21.2712 29.5902 22.4095C33.9455 26.7647 33.9459 33.8515 29.5902 38.2071ZM46.6939 21.103L38.2071 29.5902C37.2185 30.5789 36.0557 31.3695 34.7881 31.9254C34.9774 30.3777 34.8909 28.8483 34.5616 27.3868C34.8342 27.1829 35.0932 26.9599 35.3348 26.7179L43.822 18.2311C46.5936 15.4596 46.5936 10.9496 43.822 8.17804C41.3334 5.68977 37.4411 5.43308 34.6628 7.4199C34.2065 7.74601 34.1014 8.38037 34.4275 8.83661C34.7536 9.29285 35.388 9.39838 35.8442 9.07187C37.8711 7.62262 40.622 7.85035 42.3859 9.6142C44.3655 11.5939 44.3655 14.8149 42.3859 16.795L33.8987 25.2818C33.8987 25.2818 33.8987 25.2818 33.8983 25.2822C33.2548 23.7135 32.2979 22.2448 31.0264 20.9733C29.7914 19.7383 28.3211 18.7619 26.7183 18.1006L30.1786 14.6403C30.5749 14.244 30.5749 13.6009 30.1786 13.2042C29.7818 12.8079 29.1391 12.8079 28.7424 13.2042L25.2818 16.6648C22.5074 19.4392 22.507 23.9428 25.2818 26.7179C26.7639 28.1997 27.125 30.3551 26.4176 32.1638C24.9211 31.6072 23.5477 30.7284 22.4095 29.5898C18.0546 25.2349 18.0542 18.1478 22.4095 13.7925L30.8966 5.30574C35.2618 0.940145 42.3283 0.939352 46.6939 5.30574C51.0595 9.67093 51.0599 16.7374 46.6939 21.103Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M33.3473 11.0508C33.3473 11.6118 32.8926 12.0664 32.332 12.0664C31.7711 12.0664 31.3164 11.6118 31.3164 11.0508C31.3164 10.4898 31.7711 10.0352 32.332 10.0352C32.8926 10.0352 33.3473 10.4898 33.3473 11.0508Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M13.7919 13.7919C14.1886 13.3955 14.1886 12.7524 13.7919 12.3557L9.48341 8.04725C9.08668 7.65092 8.44398 7.65092 8.04725 8.04725C7.65092 8.44398 7.65092 9.08707 8.04725 9.4838L12.3557 13.7923C12.7528 14.1886 13.3955 14.1886 13.7919 13.7919Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M3.86288 17.0625C3.30231 17.0625 2.84766 17.5172 2.84766 18.0777C2.84766 18.6387 3.30231 19.0934 3.86288 19.0934H9.95624C10.5168 19.0934 10.9715 18.6387 10.9715 18.0777C10.9715 17.5172 10.5168 17.0625 9.95624 17.0625H3.86288Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M17.0625 3.55664V9.6496C17.0625 10.2102 17.5172 10.6652 18.0777 10.6652C18.6387 10.6652 19.0934 10.2102 19.0934 9.6496V3.55664C19.0934 2.99567 18.6387 2.54102 18.0777 2.54102C17.5172 2.54102 17.0625 2.99567 17.0625 3.55664Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M38.2077 38.2074C37.811 38.6037 37.811 39.2468 38.2077 39.6436L42.5162 43.952C42.7145 44.1504 42.9744 44.2496 43.2343 44.2496C44.1305 44.2496 44.5942 43.1582 43.9523 42.5159L39.6439 38.2074C39.2471 37.8111 38.6044 37.8111 38.2077 38.2074Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M34.8359 48.4426V42.3492C34.8359 41.7886 34.3809 41.334 33.8203 41.334C33.2593 41.334 32.8047 41.7886 32.8047 42.3492V48.4426C32.8047 49.0031 33.2593 49.4578 33.8203 49.4578C34.3809 49.4578 34.8359 49.0031 34.8359 48.4426Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M48.4406 34.834C49.0012 34.834 49.4558 34.3789 49.4558 33.8184C49.4558 33.2574 49.0012 32.8027 48.4406 32.8027H42.3473C41.7867 32.8027 41.332 33.2574 41.332 33.8184C41.332 34.3789 41.7867 34.834 42.3473 34.834H48.4406Z"
                                        fill="black"
                                      />
                                    </svg>
                                    <h6>Share to your friends</h6>
                                    <p>
                                      Share link with your friends after
                                      successful signup{" "}
                                      <span>
                                        both get 10<small>DC</small> Points
                                      </span>
                                    </p>
                                  </div>
                                  <div className="column">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="50"
                                      height="50"
                                      viewBox="0 0 50 50"
                                      fill="none"
                                    >
                                      <path
                                        d="M33.9375 7.20019L31.5 3.95019C31.5 3.52221 31.6094 3.10134 31.8178 2.72754C32.0262 2.35374 32.3267 2.03941 32.6908 1.81442C33.0548 1.58942 33.4704 1.46122 33.8979 1.44199C34.3255 1.42276 34.7508 1.51314 35.1336 1.70454L38 3.13769L40.8664 1.70454C41.2492 1.51314 41.6746 1.42276 42.1021 1.44199C42.5296 1.46122 42.9452 1.58942 43.3092 1.81442C43.6733 2.03941 43.9738 2.35374 44.1822 2.72754C44.3906 3.10134 44.5 3.52221 44.5 3.95019L42.0625 7.20019V10.4502L47.6231 19.4862C48.2373 20.4842 48.5625 21.6331 48.5625 22.805C48.5625 24.4845 47.8953 26.0952 46.7077 27.2827C45.5201 28.4703 43.9094 29.1375 42.2299 29.1375H33.7697C32.0903 29.1374 30.4797 28.4702 29.2922 27.2826C28.1047 26.095 27.4375 24.4844 27.4375 22.805C27.4375 21.6331 27.7627 20.4842 28.3769 19.4861L33.9375 10.4502V7.20019Z"
                                        fill="#BC80FF"
                                      />
                                      <path
                                        d="M33.9375 7.20117H42.0625V10.4512H33.9375V7.20117Z"
                                        fill="#B0792C"
                                      />
                                      <path
                                        d="M12 44.5V19.3125H31.5V42.875L12 44.5Z"
                                        fill="#8E90FF"
                                      />
                                      <path
                                        d="M5.5 35.5625H8.37198C11.1927 35.5625 13.9747 36.2192 16.4976 37.4807C17.1806 37.8222 17.9338 38 18.6974 38H25C25.5387 38 26.0554 38.214 26.4363 38.5949C26.8172 38.9759 27.0313 39.4925 27.0313 40.0313C27.0313 40.57 26.8172 41.0866 26.4363 41.4676C26.0554 41.8485 25.5387 42.0625 25 42.0625H24.9499C25.5192 42.0625 26.0826 41.9479 26.6065 41.7254L33.3993 38.841C33.6632 38.7304 33.9466 38.6739 34.2328 38.6748C34.5189 38.6758 34.802 38.7342 35.0651 38.8466C35.3282 38.9591 35.5661 39.1232 35.7646 39.3293C35.9632 39.5354 36.1182 39.7792 36.2207 40.0464C36.3277 40.3153 36.3805 40.6028 36.376 40.8922C36.3715 41.1817 36.3098 41.4674 36.1946 41.7329C36.0793 41.9984 35.9126 42.2385 35.7042 42.4394C35.4958 42.6403 35.2497 42.798 34.9801 42.9034L22.4288 47.6891C19.2845 48.8894 15.8017 48.8509 12.6846 47.5814L5.5 44.598L2.25 44.5V35.5625H5.5Z"
                                        fill="#F8CAA8"
                                      />
                                      <path
                                        d="M0.625 34.75H5.5V46.125H0.625V34.75Z"
                                        fill="#0093B9"
                                      />
                                      <path
                                        d="M24.1374 41.25H16.0625C15.6138 41.25 15.25 41.6138 15.25 42.0625C15.25 42.5112 15.6138 42.875 16.0625 42.875H24.1374C24.5862 42.875 24.9499 42.5112 24.9499 42.0625C24.9499 41.6138 24.5862 41.25 24.1374 41.25Z"
                                        fill="#E99180"
                                      />
                                      <path
                                        d="M12.8125 20.125H30.6875V37.1875H32.3125V19.3125C32.3125 19.097 32.2269 18.8903 32.0745 18.738C31.9222 18.5856 31.7155 18.5 31.5 18.5H12C11.7845 18.5 11.5778 18.5856 11.4255 18.738C11.2731 18.8903 11.1875 19.097 11.1875 19.3125V33.125H12.8125V20.125Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M27.4375 29.0625H25.8125V26.625C25.8125 26.4095 25.7269 26.2028 25.5745 26.0505C25.4222 25.8981 25.2155 25.8125 25 25.8125H22.5625V23.375C22.5625 23.1595 22.4769 22.9528 22.3245 22.8005C22.1722 22.6481 21.9655 22.5625 21.75 22.5625H18.5C18.2845 22.5625 18.0778 22.6481 17.9255 22.8005C17.7731 22.9528 17.6875 23.1595 17.6875 23.375V29.0625H16.0625V30.6875H27.4375V29.0625ZM24.1875 27.4375V29.0625H22.5625V27.4375H24.1875ZM19.3125 24.1875H20.9375V29.0625H19.3125V24.1875Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M35.3607 38.0894C35.0001 37.9366 34.6124 37.8582 34.2208 37.8588C33.8292 37.8595 33.4418 37.9392 33.0817 38.0932L27.8288 40.3236C27.8695 39.9277 27.8267 39.5276 27.7031 39.1492C27.5795 38.7708 27.3779 38.4226 27.1113 38.127C26.8447 37.8314 26.519 37.5951 26.1553 37.4332C25.7917 37.2714 25.3981 37.1877 25 37.1875H18.6974C18.06 37.1867 17.4315 37.0383 16.861 36.7539C14.224 35.4394 11.3184 34.7535 8.37198 34.75H6.3125C6.3125 34.5345 6.2269 34.3278 6.07452 34.1755C5.92215 34.0231 5.71549 33.9375 5.5 33.9375H0.625V35.5625H4.6875V45.3125H0.625V46.9375H5.5C5.71549 46.9375 5.92215 46.8519 6.07452 46.6995C6.2269 46.5472 6.3125 46.3405 6.3125 46.125V45.8152L12.3786 48.334C15.6855 49.6841 19.3824 49.7249 22.7183 48.4482L35.2696 43.6623C35.6376 43.5225 35.9739 43.3106 36.2589 43.039C36.5438 42.7675 36.7717 42.4417 36.929 42.0809C37.0919 41.7149 37.18 41.3201 37.1882 40.9196C37.1964 40.5191 37.1245 40.121 36.9768 39.7487C36.8329 39.3776 36.6157 39.0393 36.338 38.7542C36.0603 38.4691 35.7279 38.243 35.3607 38.0894ZM35.4425 41.4247C35.3714 41.5886 35.2683 41.7367 35.1393 41.8603C35.0102 41.9839 34.8578 42.0805 34.6909 42.1444L22.1393 46.9303C19.1897 48.0596 15.9208 48.0242 12.9963 46.8313L6.3125 44.0556V36.375H8.37198C11.0662 36.3782 13.723 37.0054 16.1342 38.2074C16.9304 38.6043 17.8078 38.8114 18.6974 38.8125H25C25.3186 38.8129 25.6243 38.9382 25.8517 39.1614C26.079 39.3846 26.2099 39.688 26.2161 40.0065C26.2224 40.325 26.1037 40.6334 25.8853 40.8654C25.6669 41.0974 25.3664 41.2346 25.048 41.2476C25.0153 41.2485 24.9827 41.25 24.9499 41.25H15.25V42.875H24.9499C24.9667 42.875 24.9832 42.8739 25 42.8738V42.875C25.0567 42.875 25.1128 42.8729 25.1687 42.8696C25.7729 42.8444 26.3675 42.7102 26.924 42.4735L33.7162 39.5891C33.8766 39.5206 34.0492 39.4851 34.2236 39.4848C34.398 39.4846 34.5707 39.5195 34.7313 39.5876C34.8982 39.6578 35.0491 39.761 35.1751 39.8909C35.3011 40.0209 35.3996 40.1749 35.4646 40.3439C35.5331 40.5164 35.5664 40.7009 35.5626 40.8865C35.5588 41.0721 35.5179 41.2551 35.4425 41.4247Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M48.3156 18.9842L42.8755 10.1441V7.3949L45.1505 4.36153C45.256 4.22089 45.313 4.04983 45.313 3.87403C45.313 3.30756 45.1682 2.75049 44.8924 2.25573C44.6165 1.76097 44.2188 1.34493 43.7369 1.04712C43.255 0.749308 42.705 0.579611 42.1391 0.554142C41.5732 0.528674 41.0102 0.648278 40.5035 0.901598L38.0005 2.15315L35.4975 0.901598C34.9909 0.648278 34.4278 0.528674 33.8619 0.554142C33.2961 0.579611 32.7461 0.749308 32.2642 1.04712C31.7823 1.34493 31.3846 1.76097 31.1087 2.25573C30.8329 2.75049 30.6881 3.30756 30.688 3.87403C30.688 4.04983 30.7451 4.22089 30.8505 4.36153L33.1255 7.3949V10.1441L29.1836 16.5498L30.5675 17.4013L34.392 11.1865H41.6091L46.9317 19.8358C47.4464 20.6722 47.7287 21.6308 47.7493 22.6127C47.77 23.5946 47.5283 24.5643 47.0492 25.4216C46.5701 26.2789 45.871 26.9929 45.0239 27.49C44.1769 27.987 43.2125 28.249 42.2304 28.249H33.938V29.874H42.2304C43.5016 29.874 44.7498 29.5349 45.8463 28.8916C46.9427 28.2482 47.8477 27.324 48.4678 26.2143C49.0879 25.1046 49.4007 23.8495 49.374 22.5786C49.3472 21.3076 48.9819 20.0668 48.3156 18.9842ZM33.1185 2.4295C33.3644 2.27635 33.6455 2.18906 33.9349 2.17604C34.2243 2.16302 34.5121 2.2247 34.7707 2.35516L37.6371 3.78831C37.75 3.84473 37.8744 3.8741 38.0005 3.8741C38.1267 3.8741 38.2511 3.84473 38.3639 3.78831L41.2302 2.35506C41.4704 2.23504 41.7356 2.17366 42.0041 2.17594C42.2726 2.17822 42.5367 2.24411 42.7748 2.3682C43.0129 2.49229 43.2182 2.67104 43.3738 2.8898C43.5295 3.10857 43.6311 3.36111 43.6703 3.62672L41.6568 6.31153H34.3443L32.3307 3.62672C32.366 3.38153 32.4549 3.14712 32.5911 2.94018C32.7272 2.73323 32.9073 2.55884 33.1185 2.4294V2.4295ZM41.2505 9.56153H34.7505V7.93653H41.2505V9.56153Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M35.5625 21.75V21.8685C35.5632 22.3622 35.721 22.8428 36.0132 23.2406C36.3054 23.6385 36.7167 23.933 37.1875 24.0814V25H38.8125V24.0814C39.2535 23.943 39.6431 23.6761 39.9313 23.3148C40.2195 22.9535 40.3932 22.5143 40.4301 22.0536C40.467 21.5929 40.3654 21.1317 40.1383 20.7292C39.9112 20.3266 39.569 20.0011 39.1557 19.7944L37.5713 19.0022C37.4315 18.9323 37.3193 18.8173 37.2531 18.6757C37.1868 18.5341 37.1703 18.3743 37.2061 18.2221C37.242 18.07 37.3283 17.9344 37.4508 17.8374C37.5734 17.7403 37.7251 17.6875 37.8815 17.6875H38.1185C38.3025 17.6877 38.4789 17.7609 38.609 17.891C38.7391 18.0211 38.8123 18.1975 38.8125 18.3815V18.5H40.4375V18.3815C40.4368 17.8878 40.279 17.4072 39.9868 17.0094C39.6946 16.6115 39.2833 16.317 38.8125 16.1686V15.25H37.1875V16.1686C36.7465 16.307 36.3569 16.5739 36.0687 16.9352C35.7805 17.2965 35.6068 17.7357 35.5699 18.1964C35.533 18.6571 35.6346 19.1183 35.8617 19.5208C36.0888 19.9234 36.431 20.2489 36.8443 20.4556L38.4287 21.2478C38.5685 21.3177 38.6807 21.4327 38.7469 21.5743C38.8132 21.7159 38.8297 21.8757 38.7939 22.0279C38.758 22.18 38.6717 22.3156 38.5492 22.4126C38.4266 22.5097 38.2749 22.5625 38.1185 22.5625H37.8815C37.6975 22.5623 37.5211 22.4891 37.391 22.359C37.2609 22.2289 37.1877 22.0525 37.1875 21.8685V21.75H35.5625Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M42.0625 19.3125H43.6875V20.9375H42.0625V19.3125Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M15.25 33.125H16.875V34.75H15.25V33.125Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M18.5 33.125H28.25V34.75H18.5V33.125Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M26.9341 5.16818L25.9372 8.15899L27.4789 8.6727L29.0205 4.04784C29.0543 3.94661 29.0677 3.83973 29.0602 3.7333C29.0526 3.62686 29.0241 3.52296 28.9764 3.42753C28.9287 3.3321 28.8626 3.247 28.782 3.1771C28.7014 3.1072 28.6078 3.05386 28.5065 3.02013L23.8817 1.47852L23.368 3.02023L25.8877 3.86005C21.8515 5.7654 18.7137 9.1646 17.1367 13.34L18.6589 13.9088C19.389 11.9755 20.4968 10.2069 21.9175 8.70626C23.3383 7.20559 25.0437 6.00285 26.9341 5.16818Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M18.1746 15.4521L16.6009 15.0469C16.4562 15.6095 16.3404 16.1792 16.2539 16.7537L17.8608 16.9953C17.9391 16.4759 18.0438 15.9608 18.1746 15.4521Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M33.7773 34.4412L34.1007 36.0338C37.0238 35.4373 39.7391 34.0841 41.9754 32.1094L40.9 30.8906C38.8774 32.6771 36.4214 33.9014 33.7773 34.4412Z"
                                        fill="black"
                                      />
                                    </svg>
                                    <h6>First purchase</h6>
                                    <p>
                                      Once your friend complete first purchase{" "}
                                      <span>
                                        you will get 10<small>DC</small> Points
                                      </span>
                                    </p>
                                  </div>
                                  <div className="column">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="47"
                                      height="50"
                                      viewBox="0 0 47 50"
                                      fill="none"
                                    >
                                      <path
                                        d="M38.8125 39.625C38.8125 40.2715 38.5557 40.8915 38.0986 41.3486C37.6415 41.8057 37.0215 42.0625 36.375 42.0625H13.625C13.1723 42.0625 12.7286 41.9364 12.3435 41.6985C11.9585 41.4605 11.6473 41.12 11.4448 40.7151C11.2424 40.3102 11.1567 39.8569 11.1974 39.4061C11.238 38.9553 11.4034 38.5246 11.675 38.1625L13.625 35.5625V25.1605C13.625 25.0812 13.626 25.003 13.627 24.9238C13.6811 22.6285 14.5149 20.42 15.9913 18.6618C17.4677 16.9035 19.4987 15.7002 21.75 15.25H28.25C30.5416 15.7066 32.6037 16.9447 34.0838 18.7529C34.2391 18.9428 34.3884 19.1388 34.5296 19.3399C35.732 21.0425 36.3767 23.0761 36.375 25.1605V35.5625L38.325 38.1625C38.6416 38.5843 38.8127 39.0976 38.8125 39.625Z"
                                        fill="#BC80FF"
                                      />
                                      <path
                                        d="M23.2296 16.7927L24.2899 20.125L20.8744 20.8725L20.1269 24.288L16.7946 23.2277L14.4394 25.8125L13.6289 24.9238C13.6829 22.6285 14.5168 20.42 15.9932 18.6618C17.4696 16.9035 19.5005 15.7002 21.7519 15.25H24.9227L23.2296 16.7927Z"
                                        fill="#BC80FF"
                                      />
                                      <path
                                        d="M38.8125 39.625C38.8125 40.2714 38.5557 40.8914 38.0986 41.3486C37.6415 41.8057 37.0215 42.0625 36.375 42.0625H13.625C13.1723 42.0625 12.7286 41.9364 12.3435 41.6984C11.9585 41.4605 11.6473 41.1199 11.4448 40.7151C11.2424 40.3102 11.1567 39.8569 11.1974 39.4061C11.238 38.9552 11.4034 38.5246 11.675 38.1625L13.625 35.5625V35.4213C21.3438 32.282 28.7954 27.1714 34.5296 19.3399C35.732 21.0425 36.3767 23.0761 36.375 25.1604V35.5625L38.325 38.1625C38.6416 38.5843 38.8127 39.0975 38.8125 39.625Z"
                                        fill="#BC80FF"
                                      />
                                      <path
                                        d="M21.75 15.25L20.125 9.5625H29.875L28.25 15.25H21.75Z"
                                        fill="#BC80FF"
                                      />
                                      <path
                                        d="M36.375 37.1875H45.3125V48.5625H36.375V37.1875Z"
                                        fill="#8E90FF"
                                      />
                                      <path
                                        d="M12.8125 1.4375L15.1677 4.02257L18.5 2.96145L19.2472 6.3778L22.6636 7.125L21.6024 10.4573L24.1875 12.8125L21.6024 15.1677L22.6636 18.5L19.2472 19.2472L18.5 22.6636L15.1677 21.6024L12.8125 24.1875L10.4573 21.6024L7.125 22.6636L6.3778 19.2472L2.96145 18.5L4.02257 15.1677L1.4375 12.8125L4.02257 10.4573L2.96145 7.125L6.3778 6.3778L7.125 2.96145L10.4573 4.02257L12.8125 1.4375Z"
                                        fill="#8E90FF"
                                      />
                                      <path
                                        d="M36.375 37.1875V48.5625H19.1764C17.6628 48.5626 16.1699 48.21 14.8163 47.5327L5.34258 42.7968C4.90166 42.576 4.53087 42.2368 4.27169 41.8173C4.01251 41.3977 3.87516 40.9144 3.875 40.4212V40.2445C3.87502 39.7996 3.98684 39.3618 4.20018 38.9714C4.41351 38.581 4.72153 38.2504 5.09594 38.0101C5.47036 37.7697 5.89916 37.6273 6.34296 37.5959C6.78676 37.5645 7.23134 37.6452 7.63586 37.8304L16.875 42.0625H18.5C17.8535 42.0625 17.2335 41.8057 16.7764 41.3486C16.3193 40.8914 16.0625 40.2715 16.0625 39.625C16.0625 38.9785 16.3193 38.3585 16.7764 37.9014C17.2335 37.4443 17.8535 37.1875 18.5 37.1875H24.7288L24.805 37.1418C26.4042 36.1826 28.2196 35.6422 30.083 35.5707C31.9465 35.4991 33.7979 35.8987 35.466 36.7325L35.6691 36.8341L36.375 37.1875Z"
                                        fill="#FEC9A3"
                                      />
                                      <path
                                        d="M36.3748 37.1875V48.5625H19.1762C18.2356 48.5624 17.3 48.4263 16.3984 48.1583C25.8123 45.3125 30.6873 42.0625 35.6689 36.834L36.3748 37.1875Z"
                                        fill="#FEC093"
                                      />
                                      <path
                                        d="M25 41.25H18.5C18.0513 41.25 17.6875 41.6138 17.6875 42.0625C17.6875 42.5112 18.0513 42.875 18.5 42.875H25C25.4487 42.875 25.8125 42.5112 25.8125 42.0625C25.8125 41.6138 25.4487 41.25 25 41.25Z"
                                        fill="#FEB784"
                                      />
                                      <path
                                        d="M36.375 44.5H45.3125V48.5625H36.375V44.5Z"
                                        fill="#8E90FF"
                                      />
                                      <path
                                        d="M24.1875 20.125V21.75H23.375C22.6208 21.75 21.8975 22.0496 21.3642 22.5829C20.8309 23.1162 20.5312 23.8395 20.5313 24.5938C20.5312 25.348 20.8309 26.0713 21.3642 26.6046C21.8975 27.1379 22.6208 27.4375 23.375 27.4375H26.625C26.9482 27.4375 27.2582 27.5659 27.4868 27.7945C27.7153 28.023 27.8438 28.333 27.8438 28.6562C27.8438 28.9795 27.7153 29.2895 27.4868 29.518C27.2582 29.7466 26.9482 29.875 26.625 29.875H21.3438V31.5H24.1875V33.125H25.8125V31.5H26.625C27.3792 31.5 28.1025 31.2004 28.6358 30.6671C29.1691 30.1338 29.4688 29.4105 29.4688 28.6562C29.4688 27.902 29.1691 27.1787 28.6358 26.6454C28.1025 26.1121 27.3792 25.8125 26.625 25.8125H23.375C23.0518 25.8125 22.7418 25.6841 22.5132 25.4555C22.2847 25.227 22.1562 24.917 22.1562 24.5938C22.1562 24.2705 22.2847 23.9605 22.5132 23.732C22.7418 23.5034 23.0518 23.375 23.375 23.375H28.6562V21.75H25.8125V20.125H24.1875Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M45.3138 36.375H38.0013L37.1888 35.2916V25.1605C37.1889 22.7869 36.4154 20.478 34.9855 18.5835C33.5556 16.689 31.5472 15.3121 29.2645 14.6615L30.6575 9.78594C30.6921 9.665 30.6982 9.53769 30.6752 9.41403C30.6522 9.29036 30.6008 9.17372 30.5251 9.07329C30.4493 8.97286 30.3513 8.89139 30.2387 8.83529C30.1262 8.77919 30.0021 8.74999 29.8763 8.75H25.0013V10.375H28.7997L27.639 14.4375H25.0013V16.0625H28.1691C30.2591 16.499 32.1351 17.6418 33.4818 19.2986C34.8284 20.9554 35.5636 23.0254 35.5638 25.1605V35.5625C35.5642 35.6858 35.5927 35.8074 35.6472 35.918C33.8942 35.0783 31.9621 34.6809 30.02 34.7606C28.0779 34.8403 26.1849 35.3946 24.5066 36.375H18.5013C18.0021 36.3756 17.5097 36.491 17.0622 36.7124C16.6147 36.9337 16.2242 37.2551 15.9208 37.6515C15.6174 38.048 15.4093 38.509 15.3126 38.9987C15.2158 39.4885 15.2331 39.994 15.363 40.476L12.1284 38.9942C12.18 38.8718 12.2465 38.7562 12.3263 38.65L14.2763 36.05C14.3818 35.9094 14.4388 35.7383 14.4388 35.5625V26.625H12.8138V35.2916L11.0263 37.675C10.8774 37.8742 10.7519 38.0898 10.6522 38.3177L7.97578 37.0918C7.17526 36.725 6.26512 36.6765 5.43018 36.9563C4.59523 37.2361 3.89806 37.8232 3.48022 38.5983C3.19032 39.1613 3.0471 39.7883 3.06381 40.4212C3.06168 41.0657 3.24009 41.698 3.57885 42.2463C3.91761 42.7945 4.40317 43.237 4.9805 43.5235L14.4546 48.2605C15.9218 48.9915 17.5384 49.373 19.1777 49.375H45.3138C45.5293 49.375 45.736 49.2894 45.8883 49.137C46.0407 48.9847 46.1263 48.778 46.1263 48.5625V37.1875C46.1263 36.972 46.0407 36.7653 45.8883 36.613C45.736 36.4606 45.5293 36.375 45.3138 36.375ZM35.5638 47.75H19.1777C17.7906 47.7483 16.4227 47.4255 15.1811 46.807L5.70758 42.0702C5.40072 41.9179 5.14264 41.6827 4.96258 41.3913C4.78252 41.0999 4.68768 40.7638 4.68881 40.4212C4.67632 40.0576 4.75255 39.6964 4.91093 39.3688C5.13212 38.9563 5.50244 38.6438 5.94626 38.4951C6.39008 38.3464 6.87392 38.3727 7.29897 38.5688L16.5382 42.8009C16.6443 42.8496 16.7596 42.8749 16.8763 42.875H25.8138V41.25H18.5013C18.0703 41.25 17.657 41.0788 17.3523 40.774C17.0475 40.4693 16.8763 40.056 16.8763 39.625C16.8763 39.194 17.0475 38.7807 17.3523 38.476C17.657 38.1712 18.0703 38 18.5013 38H24.7301C24.8774 38 25.022 37.9599 25.1483 37.8841L25.2244 37.8384C26.7064 36.9496 28.3886 36.4489 30.1154 36.3826C31.8422 36.3163 33.5579 36.6865 35.1036 37.4591L35.5638 37.6894V47.75ZM44.5013 47.75H37.1888V38H44.5013V47.75Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M40.4375 46.125C41.335 46.125 42.0625 45.3975 42.0625 44.5C42.0625 43.6025 41.335 42.875 40.4375 42.875C39.54 42.875 38.8125 43.6025 38.8125 44.5C38.8125 45.3975 39.54 46.125 40.4375 46.125Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M6.33134 22.8367C6.35549 22.9472 6.40243 23.0514 6.46916 23.1426C6.53588 23.2339 6.62092 23.3103 6.71883 23.3668C6.81675 23.4233 6.92539 23.4588 7.0378 23.471C7.15021 23.4831 7.26392 23.4717 7.37165 23.4374L10.2075 22.5343L12.2119 24.7343C12.2881 24.8179 12.3808 24.8847 12.4842 24.9304C12.5877 24.976 12.6995 24.9996 12.8126 24.9996C12.9256 24.9996 13.0374 24.976 13.1409 24.9304C13.2443 24.8847 13.3371 24.8179 13.4132 24.7343L15.4176 22.5343L18.2535 23.4374C18.3612 23.4717 18.4749 23.4831 18.5873 23.471C18.6997 23.4588 18.8084 23.4233 18.9063 23.3668C19.0042 23.3103 19.0892 23.2339 19.156 23.1426C19.2227 23.0514 19.2696 22.9472 19.2938 22.8367L19.9296 19.9293L22.8372 19.2933C22.9476 19.2691 23.0518 19.2222 23.1431 19.1555C23.2344 19.0888 23.3107 19.0037 23.3673 18.9058C23.4238 18.8079 23.4593 18.6993 23.4714 18.5868C23.4836 18.4744 23.4721 18.3607 23.4378 18.253L22.5347 15.4172L24.7348 13.4127C24.8184 13.3366 24.8851 13.2438 24.9308 13.1404C24.9765 13.037 25.0001 12.9252 25.0001 12.8121C25.0001 12.699 24.9765 12.5872 24.9308 12.4838C24.8851 12.3803 24.8184 12.2876 24.7348 12.2114L22.5347 10.2074L23.4378 7.37159C23.4721 7.26383 23.4836 7.15009 23.4714 7.03766C23.4592 6.92522 23.4237 6.81657 23.3671 6.71865C23.3106 6.62073 23.2342 6.5357 23.1428 6.46899C23.0515 6.40229 22.9473 6.35539 22.8368 6.33128L19.9292 5.6953L19.2938 2.78828C19.2696 2.67782 19.2227 2.57362 19.156 2.48234C19.0892 2.39107 19.0042 2.31472 18.9063 2.25818C18.8084 2.20165 18.6997 2.16617 18.5873 2.15403C18.4749 2.14188 18.3612 2.15333 18.2535 2.18764L15.4176 3.09032L13.4132 0.890276C13.3371 0.80669 13.2443 0.739917 13.1409 0.694228C13.0374 0.648538 12.9256 0.624939 12.8126 0.624939C12.6995 0.624939 12.5877 0.648538 12.4842 0.694228C12.3808 0.739917 12.2881 0.80669 12.2119 0.890276L10.2075 3.09032L7.37165 2.18723C7.26389 2.15292 7.15015 2.14149 7.03772 2.15366C6.92529 2.16584 6.81663 2.20135 6.71871 2.25792C6.62079 2.3145 6.53576 2.39089 6.46905 2.48222C6.40235 2.57354 6.35545 2.67778 6.33134 2.78828L5.69546 5.6953L2.78834 6.33128C2.67788 6.35543 2.57368 6.40237 2.4824 6.46909C2.39113 6.53582 2.31478 6.62086 2.25824 6.71877C2.20171 6.81669 2.16624 6.92533 2.15409 7.03774C2.14194 7.15015 2.15339 7.26386 2.1877 7.37159L3.09079 10.2074L0.890337 12.2119C0.806751 12.288 0.739978 12.3807 0.694289 12.4842C0.648599 12.5876 0.625 12.6994 0.625 12.8125C0.625 12.9256 0.648599 13.0374 0.694289 13.1408C0.739978 13.2442 0.806751 13.337 0.890337 13.4131L3.09038 15.4176L2.18729 18.2534C2.15298 18.3612 2.14155 18.4749 2.15373 18.5873C2.1659 18.6998 2.20141 18.8084 2.25798 18.9063C2.31456 19.0043 2.39095 19.0893 2.48228 19.156C2.5736 19.2227 2.67785 19.2696 2.78834 19.2937L5.69587 19.9297L6.33134 22.8367ZM4.56984 14.5672L2.64402 12.8125L4.56984 11.0578C4.68476 10.9531 4.76722 10.8176 4.80746 10.6675C4.84769 10.5173 4.844 10.3588 4.79684 10.2107L4.00627 7.72817L6.55153 7.17151C6.70339 7.1383 6.84254 7.06222 6.95246 6.9523C7.06238 6.84238 7.13846 6.70323 7.17167 6.55137L7.72824 4.00621L10.2107 4.79678C10.3589 4.8439 10.5174 4.84756 10.6676 4.80733C10.8177 4.7671 10.9532 4.68466 11.058 4.56978L12.8126 2.64385L14.5671 4.56978C14.6719 4.68471 14.8073 4.76719 14.9575 4.80743C15.1077 4.84766 15.2662 4.84397 15.4144 4.79678L17.8969 4.00621L18.4534 6.55137C18.4867 6.70323 18.5627 6.84238 18.6727 6.9523C18.7826 7.06222 18.9217 7.1383 19.0736 7.17151L21.6188 7.72817L20.8283 10.2107C20.7811 10.3588 20.7774 10.5173 20.8177 10.6675C20.8579 10.8176 20.9404 10.9531 21.0553 11.0578L22.9811 12.8125L21.0553 14.5672C20.9404 14.6719 20.8579 14.8073 20.8177 14.9575C20.7774 15.1077 20.7811 15.2662 20.8283 15.4143L21.6188 17.8968L19.0736 18.4535C18.9217 18.4867 18.7826 18.5628 18.6727 18.6727C18.5627 18.7826 18.4867 18.9218 18.4534 19.0736L17.8969 21.6188L15.4144 20.8282C15.2662 20.781 15.1077 20.7773 14.9575 20.8176C14.8073 20.8578 14.6719 20.9403 14.5671 21.0552L12.8126 22.9811L11.058 21.0552C10.9533 20.9403 10.8178 20.8578 10.6676 20.8176C10.5174 20.7773 10.3589 20.781 10.2107 20.8282L7.72824 21.6188L7.17167 19.0736C7.13846 18.9218 7.06238 18.7826 6.95246 18.6727C6.84254 18.5628 6.70339 18.4867 6.55153 18.4535L4.00627 17.8968L4.79684 15.4143C4.844 15.2662 4.84769 15.1077 4.80746 14.9575C4.76722 14.8073 4.68476 14.6719 4.56984 14.5672Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M8.17188 16.3L16.2956 8.17622L17.4445 9.3251L9.32075 17.4489L8.17188 16.3Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M9.5625 12C10.0446 12 10.5159 11.857 10.9167 11.5892C11.3175 11.3214 11.63 10.9407 11.8145 10.4953C11.9989 10.0499 12.0472 9.5598 11.9532 9.08697C11.8591 8.61414 11.627 8.17982 11.2861 7.83893C10.9452 7.49804 10.5109 7.26589 10.038 7.17184C9.5652 7.07779 9.0751 7.12606 8.62971 7.31054C8.18431 7.49503 7.80363 7.80745 7.53579 8.2083C7.26796 8.60914 7.125 9.08041 7.125 9.5625C7.12573 10.2087 7.38277 10.8283 7.83973 11.2853C8.29669 11.7422 8.91626 11.9993 9.5625 12ZM9.5625 8.75C9.7232 8.75 9.88029 8.79765 10.0139 8.88693C10.1475 8.97621 10.2517 9.10311 10.3132 9.25157C10.3746 9.40004 10.3907 9.5634 10.3594 9.72101C10.328 9.87862 10.2507 10.0234 10.137 10.137C10.0234 10.2507 9.87862 10.328 9.72101 10.3594C9.5634 10.3907 9.40003 10.3746 9.25157 10.3132C9.1031 10.2517 8.97621 10.1475 8.88693 10.0139C8.79765 9.88029 8.75 9.7232 8.75 9.5625C8.75024 9.34709 8.83592 9.14057 8.98824 8.98824C9.14056 8.83592 9.34709 8.75024 9.5625 8.75Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M14.4375 15.25C14.4375 15.7321 14.5805 16.2034 14.8483 16.6042C15.1161 17.005 15.4968 17.3175 15.9422 17.502C16.3876 17.6864 16.8777 17.7347 17.3505 17.6407C17.8234 17.5466 18.2577 17.3145 18.5986 16.9736C18.9395 16.6327 19.1716 16.1984 19.2657 15.7255C19.3597 15.2527 19.3114 14.7626 19.127 14.3172C18.9425 13.8718 18.63 13.4911 18.2292 13.2233C17.8284 12.9555 17.3571 12.8125 16.875 12.8125C16.2288 12.8132 15.6092 13.0703 15.1522 13.5272C14.6953 13.9842 14.4382 14.6038 14.4375 15.25ZM17.6875 15.25C17.6875 15.4107 17.6398 15.5678 17.5506 15.7014C17.4613 15.835 17.3344 15.9392 17.1859 16.0007C17.0375 16.0621 16.8741 16.0782 16.7165 16.0469C16.5589 16.0155 16.4141 15.9382 16.3005 15.8245C16.1868 15.7109 16.1095 15.5661 16.0781 15.4085C16.0468 15.2509 16.0629 15.0875 16.1243 14.9391C16.1858 14.7906 16.29 14.6637 16.4236 14.5744C16.5572 14.4852 16.7143 14.4375 16.875 14.4375C17.0904 14.4377 17.2969 14.5234 17.4493 14.6757C17.6016 14.8281 17.6873 15.0346 17.6875 15.25Z"
                                        fill="black"
                                      />
                                    </svg>
                                    <h6>Comission on every refer</h6>
                                    <p>
                                      Every time your freind refer someone{" "}
                                      <span>you’ll get 20% comission</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="input-field-item d-flex">
                              <input
                                type="text"
                                class="input-box"
                                placeholder="Dreamcapcha-refer/link.share.com"
                              ></input>
                              <button class="btn btn-primary">
                                Tap to copy
                              </button>
                            </div>
                          </div>
                          <div className="transcation-summary">
                            <div className="heading">
                              <h6>Transaction Summary</h6>
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
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDashboard;
