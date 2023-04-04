import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import MyBooks from "./Components/MyBooks";
import ReferandEarn from "./Components/ReferandEarn";
import { Outlet } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const UserDashboard = () => {

  const navigate = useNavigate();
  const stripePromise = loadStripe('pk_test_51MsNLWCKervKMBlRPGOpPQ5zTNP3ZGpjPKPqELnx5U3WDlGT9r0ac1zFLdcJW0SD7AEushae9m7uStOUHC615env00RIy9L0pW');
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [profileupload, setprofileupload] = useState(false);
  const setprofileuploadclose = () => setprofileupload(false);
  const setprofileuploadshow = () => setprofileupload(true);

  const handleNavigate = (path) => navigate(path);
  useEffect(() => {

  }, [user])

  return (
    <>
      {isLoggedIn && user &&
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
                        <h5>{user.firstName && user.firstName + " " + user.lastName}</h5>
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
                            <span>{user.phone && user.phone}</span>
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
                          <NavLink to="/user-dashboard"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"} end>
                            <p><AiOutlineBook />My Books</p>
                          </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                          <NavLink to="/user-dashboard/MyFollowing"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"} >
                            <p><ImUsers /> My Following</p>
                          </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                          <NavLink to="/user-dashboard/ManageProfile"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"} >
                            <p ><MdOutlineManageAccounts />Manage Profile</p>
                          </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                          <NavLink to="/user-dashboard/MyWallet"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"} >
                            <p><MdOutlineAccountBalanceWallet />My Wallet</p>
                          </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                          <NavLink to="/user-dashboard/ManagePaymentOption"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"} >
                            <p><FaUniversity />Manage Payment Options</p>
                          </NavLink>
                        </Nav.Item>
                        <Nav.Item >
                          <NavLink to="/user-dashboard/ReferandEarn"
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"} >
                            <p><MdOutlineCardGiftcard />Refer & Earn</p>
                          </NavLink>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                  <div className="tab-item-content">
                    <Tab.Content>
                      <Elements stripe={stripePromise}>
                        <Outlet />
                      </Elements>
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>}
    </>
  );
};
export default UserDashboard;
