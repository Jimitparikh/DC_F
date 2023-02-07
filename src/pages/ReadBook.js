import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import {
  AiFillCheckCircle,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineFileText,
  AiOutlineLock,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BiExpand, BiFileFind, BiTask } from "react-icons/bi";
import { MdClose, MdHdrAuto, MdMenuBook, MdTextFields } from "react-icons/md";
import readbook from "../images/read-book.png";
import { CiSquarePlus, CiSquareMinus } from "react-icons/gi";
import { BsJustify, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { RiCheckboxBlankFill } from "react-icons/ri";

const ReadBook = () => {
  return (
    <>
      <section className="read-book-section">
        <div className="read-book-header">
          <div className="header-left">
            <div className="d-flex align-items-center">
              <img src={readbook} alt="Book"></img>
              <p className="book-title">Man and superman: Sigmund Freud</p>
            </div>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <Form>
                  <p>Light</p>
                  <Form.Check type="switch" id="custom-switch" label="Dark" />
                </Form>
              </li>
              <li>
                <a href="#">
                  <BiExpand />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiFileFind />
                </a>
              </li>
              <li>
                <a href="#">
                  <MdTextFields />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiTask />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="read-book-body">
          <div className="book-chapter-box">
            <ul>
              <li>
                <p>The cask of amontilado</p>
                <span>Chap 1 - page 10</span>
              </li>
              <li className="locked">
                <p>The cask of amontilado</p>
                <span>Chap 1 - page 10</span>
                <div className="lock-icon">
                  <AiOutlineLock />
                </div>
              </li>
              <li className="locked">
                <p>The cask of amontilado</p>
                <span>Chap 1 - page 10</span>
                <div className="lock-icon">
                  <AiOutlineLock />
                </div>
              </li>
              <li className="locked">
                <p>The cask of amontilado</p>
                <span>Chap 1 - page 10</span>
                <div className="lock-icon">
                  <AiOutlineLock />
                </div>
              </li>
            </ul>
          </div>
          <div className="book-chapter-text">
            <ul>
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="read-book-footer">
          <div className="progress-detail">
            <p>page 01-02/159</p>
            <ProgressBar now={40} />
            <p>Percentage 18%</p>
          </div>
        </div>
        <div className="display-text-setting-sidebar">
          <div className="sidebar-content">
            <div className="heading d-flex justify-content-between align-items-center">
              <p className="fs-20 fw-500">Display & text Setting</p>
              <a href="#" className="light-grey fs-20">
                <MdClose />
              </a>
            </div>
            <div className="sidebar-details">
              <ul className="list">
                <li>
                  <div className="d-flex justify-content-between flex-wrap align-items-center">
                    <p className="fs-20 light-grey">Font Size</p>
                    <div className="font-size-increment d-flex align-items-center">
                      <a href="#" className="info-state">
                        <AiOutlineMinusCircle />
                      </a>
                      <p className="fs-20 light-grey fw-500">16px</p>

                      <a href="#" className="info-state">
                        <AiOutlinePlusCircle />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="title">Line Height</p>
                  <div className="progress-detail">
                    <ProgressBar now={40} />
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <p className="fw-14 light-grey">Default</p>
                      <p className="fw-14 light-grey">100%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="title">Text Justify</p>
                  <div className="d-flex d-flex justify-content-between align-items-center">
                    <a href="#" className="text-align-label active">
                      <AiOutlineAlignLeft />
                      left
                    </a>
                    <a href="#" className="text-align-label">
                      <AiOutlineAlignRight />
                      Right
                    </a>
                    <a href="#" className="text-align-label">
                      <BsJustify />
                      Justify
                    </a>
                  </div>
                </li>
                <li>
                  <p className="title">Page Layout</p>
                  <div className="d-flex d-flex justify-content-between align-items-center">
                    <a href="#" className="text-align-label">
                      <MdHdrAuto />
                      Auto
                    </a>
                    <a href="#" className="text-align-label active">
                      <MdMenuBook />
                      Double
                    </a>
                    <a href="#" className="text-align-label">
                      <FiFileText />
                      Single
                    </a>
                  </div>
                </li>
                <li>
                  <p className="title">Color Formate</p>
                  <div className="color-formate">
                    <a href="#" className="color-formate-label active">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                    <a href="#" className="color-formate-label">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                    <a href="#" className="color-formate-label">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                    <a href="#" className="color-formate-label">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                    <a href="#" className="color-formate-label">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="search-option-sidebar">
          <div className="search-option-content">
            <div className="heading d-flex justify-content-between align-items-center">
              <p className="fs-20 fw-500">Search</p>
              <a href="#" className="light-grey fs-20">
                <MdClose />
              </a>
            </div>
            <div className="search-option-body">
              <div className="header-search">
                <input
                  className="input-box"
                  placeholder="Search words, sentenace"
                ></input>
                <BsSearch />
              </div>
              <div className="search-result">
                <span className="fs-14 light-grey">2 Results Found</span>
                <ul>
                  <li>
                    <h5>
                      <BsSearch /> Chap 1 - Page 10
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <span className="yellow">tempor</span>{" "}
                      incididunt ut labore et dolore magna aliqua...
                    </p>
                  </li>
                  <li>
                    <h5>
                      <BsSearch /> Chap 1 - Page 10
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <span className="red">tempor</span>{" "}
                      incididunt ut labore et dolore magna aliqua...
                    </p>
                  </li>
                  <li>
                    <h5>
                      <BsSearch /> Chap 1 - Page 10
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <span className="green">tempor</span>{" "}
                      incididunt ut labore et dolore magna aliqua...
                    </p>
                  </li>
                  <li>
                    <h5>
                      <BsSearch /> Chap 1 - Page 10
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <span className="blue">tempor</span>{" "}
                      incididunt ut labore et dolore magna aliqua...
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="annotation-sidebar show">
          <div className="annotation-content">
            <div className="heading d-flex justify-content-between align-items-center">
              <p className="fs-20 fw-500">Annotation</p>
              <Dropdown className="input-box without-background">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="d-flex justify-content-between"
                >
                  <p className="item-selector">
                    <span className="box yellow"></span>Yellow Highlights
                  </p>
                  <FaChevronDown />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <p className="item-selector">
                      <span className="box yellow"></span>Yellow Highlights
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <p className="item-selector">
                      <span className="box red"></span>red Highlights
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <p className="item-selector">
                      <span className="box green"></span>green Highlights
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <p className="item-selector">
                      <span className="box blue"></span>blue Highlights
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="annotation-body">
              <div className="annotation-result d-flex justify-content-between flex-wrap">
                <p>Man and superman: Sigmund Freud</p>
                <p>4 Highlights</p>
              </div>
              <ul>
                <li>
                  <div className="title">
                    <h2>
                      <AiOutlineFileText />
                      Man and superman: Sigmund Freaud
                    </h2>
                    <Dropdown className="without-background" align="end">
                      <Dropdown.Toggle id="dropdown-basic">
                        <BsThreeDotsVertical />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Images</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Videos</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Audio</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>
                    Page 1 <span>6m ago</span>
                  </p>
                  <h4 className="yellow">
                    This is test annotation for testing
                  </h4>
                </li>
                <li>
                  <div className="title">
                    <h2>
                      <AiOutlineFileText />
                      Man and superman: Sigmund Freaud
                    </h2>
                    <Dropdown className="without-background" align="end">
                      <Dropdown.Toggle id="dropdown-basic">
                        <BsThreeDotsVertical />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Images</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Videos</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Audio</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>
                    Page 1 <span>6m ago</span>
                  </p>
                  <h4 className="yellow">
                    This is test annotation for testing
                  </h4>
                </li>
                <li>
                  <div className="title">
                    <h2>
                      <AiOutlineFileText />
                      Man and superman: Sigmund Freaud
                    </h2>
                    <Dropdown className="without-background" align="end">
                      <Dropdown.Toggle id="dropdown-basic">
                        <BsThreeDotsVertical />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Images</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Videos</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Audio</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>
                    Page 1 <span>6m ago</span>
                  </p>
                  <h4 className="yellow">
                    This is test annotation for testing
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReadBook;
